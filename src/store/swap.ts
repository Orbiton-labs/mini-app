import { getUserJettonData } from "@/apis/blockchain/jetton";
import { getTokenList } from "@/apis/server/tokens";
import { Token } from "@/types/Token";
import { OpenedContract, Sender } from "@ton/core";
import {
  JettonMinterWrapper,
  JettonWalletWrapper,
} from "orbiton-contracts-sdk";
import { StateCreator } from "zustand";
import { TonWalletSlice } from "./ton-wallet";

export interface PairSlice {
  token1: Token | null;
  token2: Token | null;
  tokensList: Token[];
  filteredTokens: Token[];
  displayFilteredListToken: () => void;
  reverseOrder: () => void;
  updateTokenBalance1: (balance: string) => void;
  updateTokenBalance2: (balance: string) => void;
  updatePairBalance: (balance1: string, balance2: string) => void;
}

const filterTokens = (
  tokensList: Token[],
  token1: Token | null,
  token2: Token | null
) => {
  const excludedNames = [token1?.token.name, token2?.token.name].filter(
    Boolean
  );
  return tokensList.filter((t) => !excludedNames.includes(t.token.name));
};

export const createPairSlice: StateCreator<PairSlice, [], []> = (set, get) => ({
  token1: null,
  token2: null,
  tokensList: [],
  filteredTokens: [],
  reverseOrder: () => {
    set((state) => ({
      token1: state.token2,
      token2: state.token1,
    }));
  },
  displayFilteredListToken: () => {
    set((state) => ({
      filteredTokens: filterTokens(
        get().tokensList,
        get().token1,
        get().token2
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
});

// when token 1 and token 2 is set, fetch balance to token1 and token2
export interface WalletSwapShareSlice {
  initToken: () => void;
  setToken1: (token: Token) => void;
  setToken2: (token: Token) => void;
  setAmount1: (amount: string | undefined) => void;
  setAmount2: (amount: string | undefined) => void;
  // simulateAmountOut: (isFromToken1: boolean) => void;
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

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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
  setAmount1: (amount) => {
    const token = get().token1;
    if (token) {
      set((state) => ({
        token1: {
          ...token,
          amount,
        },
      }));
    }
  },
  setAmount2: (amount) => {
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
  initToken: async () => {
    const tokenInfos = await getTokenList();
    const tokensList = tokenInfos.map((token) => ({ token }));
    const token1 = tokensList[0] || null;
    const token2 = tokensList[1] || null;

    set((state) => ({
      tokensList,
      token1,
      token2,
    }));

    // fetch token balance
    const sender = get().sender;
    const res = await fetchPairBalance(token1, token2, sender);

    if (res) {
      get().updatePairBalance(res?.jetton1.balance, res?.jetton2.balance);
    }
  },
});
