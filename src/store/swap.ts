import { getUserJettonData } from "@/apis/blockchain/jetton";
import { simulateSwap } from "@/apis/server/swap";
import { getTokenList } from "@/apis/server/tokens";
import { Token } from "@/types/Token";
import { TransactionSwapEstimation } from "@/types/Transaction";
import { OpenedContract, Sender } from "@ton/core";
import {
  JettonMinterWrapper,
  JettonWalletWrapper,
} from "orbiton-contracts-sdk";
import { StateCreator } from "zustand";
import { TonWalletSlice } from "./ton-wallet";

export const filterTokens = (
  tokensList: Token[],
  token1: Token | null,
  token2: Token | null,
  cache: Map<string, Token[]> = new Map()
) => {
  const cacheKey = `${token1?.token.name || ''}-${token2?.token.name || ''}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey)!;

  const excludedNames = new Set([token1?.token.name, token2?.token.name].filter(Boolean));
  const filtered = tokensList.filter((t) => !excludedNames.has(t.token.name));
  cache.set(cacheKey, filtered);
  return filtered;
};

const tokenCache = { data: null as Token[] | null, lastFetched: 0 };
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export interface PairSlice {
  token1: Token | null;
  token2: Token | null;
  tokensList: Token[];
  filteredTokens: Token[];
  transactionEstimation?: TransactionSwapEstimation;
  displayFilteredListToken: () => void;
  updateTokenBalance1: (balance: string) => void;
  updateTokenBalance2: (balance: string) => void;
  updatePairBalance: (balance1: string, balance2: string) => void;
}

export const createPairSlice: StateCreator<PairSlice, [], []> = (set, get) => {
  const filterCache = new Map<string, Token[]>();
  return {
    token1: null,
    token2: null,
    tokensList: [],
    filteredTokens: [],

    displayFilteredListToken: () => {
      set((state) => ({
        filteredTokens: filterTokens(
          get().tokensList,
          get().token1,
          get().token2,
          filterCache
        ),
      }));
    },
    updateTokenBalance1: (balance) => {
      const token1 = get().token1;
      if (token1) {
        set((state) => ({
          token1: {
            ...token1,
            balance: balance,
          },
        }));
      }
    },
    updateTokenBalance2: (balance) => {
      const token2 = get().token2;
      if (token2) {
        set((state) => ({
          token2: {
            ...token2,
            balance: balance,
          },
        }));
      }
    },
    updatePairBalance: (balance1, balance2) => {
      const token1 = get().token1;
      const token2 = get().token2;
      if (token1 && token2) {
        set((state) => ({
          token2: {
            ...token2,
            balance: balance2,
          },
          token1: {
            ...token1,
            balance: balance1,
          },
        }));
      }
    },
  }
};

// when token 1 and token 2 is set, fetch balance to token1 and token2
export interface WalletSwapShareSlice {
  initToken: () => void;
  setToken1: (token: Token) => void;
  setToken2: (token: Token) => void;
  setAmount1: (amount: string | undefined) => Promise<void>;
  setAmount2: (amount: string | undefined) => Promise<void>;
  reverseOrder: () => void;
}

const fetchPairBalance = async (
  token1: Token | null,
  token2: Token | null,
  sender: Sender | null
): Promise<{
  jetton1: {
    minter: OpenedContract<JettonMinterWrapper.JettonMinter> | null;
    wallet: OpenedContract<JettonWalletWrapper.JettonWallet> | null;
    balance: string;
  };
  jetton2: {
    minter: OpenedContract<JettonMinterWrapper.JettonMinter> | null;
    wallet: OpenedContract<JettonWalletWrapper.JettonWallet> | null;
    balance: string;
  };
} | null> => {
  if (!token1 || !token2 || !sender) {
    return null;
  }

  const res1 = await getUserJettonData(token1?.token.address, sender);
  const res2 = await getUserJettonData(token2?.token.address, sender);

  return {
    jetton1: res1,
    jetton2: res2,
  };
};

const fetchTokenBalance = async (
  token: Token | null,
  sender: Sender | null
): Promise<{
  jetton: {
    minter: OpenedContract<JettonMinterWrapper.JettonMinter> | null;
    wallet: OpenedContract<JettonWalletWrapper.JettonWallet> | null;
    balance: string;
  };
} | null> => {
  if (!token || !sender) {
    return null;
  }

  const res1 = await getUserJettonData(token?.token.address, sender);

  return {
    jetton: res1,
  };
};

export const createWalletSwapShareSlice: StateCreator<
  PairSlice & TonWalletSlice,
  [],
  [],
  WalletSwapShareSlice
> = (set, get) => ({
  setToken1: async (token) => {
    set((state) => ({
      token1: token,
    }));

    const sender = get().sender;
    const res = await fetchTokenBalance(token, sender);
    if (res) {
      get().updateTokenBalance1(res?.jetton.balance);
    }
  },
  setToken2: async (token) => {
    set((state) => ({
      token2: token,
    }));

    const sender = get().sender;
    const res = await fetchTokenBalance(token, sender);
    if (res) {
      get().updateTokenBalance2(res?.jetton.balance);
    }
  },
  setAmount1: async (amount) => {
    const { token1, token2, sender } = get();
    if (!token2?.token) {
      console.log("No token 2");
      return;
    }
    if (!amount) {
      console.log("enter amount");
      set({ token1: token1 ? { ...token1, amount } : null, transactionEstimation: undefined });
      return;
    }
    if (!token1) return;

    const simulateRes = await simulateSwap(token1.token, token2.token, amount);
    set({
      token1: { ...token1, amount },
      token2: { ...token2, amount: simulateRes ? simulateRes.amountOut : "0" },
      transactionEstimation: simulateRes ? simulateRes.txEstimation : undefined,
    });
    if (!simulateRes) console.log("No route found");
  },
  setAmount2: async (amount) => {
    const token = get().token2;
    if (token) {
      set((state) => ({
        token2: {
          ...token,
          amount,
        },
      }));
    }
  },
  reverseOrder: async () => {
    set((state) => ({
      token1: state.token2,
      token2: state.token1,
    }));

    const token1 = get().token1;
    const token2 = get().token2;
    const amount = token1?.amount;

    // simulate with amount in 1
    if (!token2?.token) {
      console.log("No token 2");
      return;
    }

    set((state) => ({
      token2: {
        ...token2,
        amount: "0",
      },
      transactionEstimation: undefined,
    }));

    if (!amount) {
      console.log("enter amount");
      return;
    }

    const simulateRes = await simulateSwap(token1.token, token2?.token, amount);

    if (!simulateRes) {
      console.log("No route found");
      return;
    }

    console.log(simulateRes);

    set((state) => ({
      token2: {
        ...token2,
        amount: simulateRes.amountOut,
      },
      transactionEstimation: simulateRes.txEstimation,
    }));
  },
  initToken: async () => {
    const now = Date.now();
    let tokensList = tokenCache.data;
    if (!tokensList || now - tokenCache.lastFetched > CACHE_TTL) {
      const tokenInfos = await getTokenList();
      tokensList = tokenInfos.map((token) => ({ token }));
      tokenCache.data = tokensList;
      tokenCache.lastFetched = now;
    }
    const token1 = tokensList[0] || null;
    const token2 = tokensList[1] || null;

    set({ tokensList, token1, token2 });
    get().displayFilteredListToken();

    const sender = get().sender;
    const res = await fetchPairBalance(token1, token2, sender);
    if (res) get().updatePairBalance(res.jetton1.balance, res.jetton2.balance);
  },
});
