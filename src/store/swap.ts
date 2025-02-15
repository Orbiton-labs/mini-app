import { getTokenList } from "@/apis/off-chain/tokens";
import { logger } from "@/helper/zustand/middleware/logger";
import { Token } from "@/types/Token";
import { StateCreator } from "zustand";
import { TonWalletSlice } from "./ton-wallet";

export interface PairSlice {
  token1: Token | null;
  token2: Token | null;
  tokensList: Token[];
  filteredTokens: Token[];
  displayFilteredListToken: () => void;
  reverseOrder: () => void;
  setToken1: (token: Token) => void;
  setToken2: (token: Token) => void;
  initToken: () => void;
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

export const createPairSlice: StateCreator<PairSlice, [], []> = logger(
  (set, get) => ({
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
    setToken1: (token) => {
      set((state) => ({
        token1: token,
      }));
    },
    setToken2: (token) => {
      set((state) => ({
        token2: token,
      }));
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
  })
);

// when token 1 and token 2 is set, fetch balance to token1 and token2
export interface WalletSwapShareSlice {
  fetchPairBalances: () => void;
}

export const createWalletSwapShareSlice: StateCreator<
  PairSlice & TonWalletSlice,
  [],
  [],
  WalletSwapShareSlice
> = (set, get) => ({
  fetchPairBalances: async () => {
    const token1 = get().token1;
    const token2 = get().token2;
    const sender = get().sender;

    console.log({ token1, token2, sender });
  },
});
