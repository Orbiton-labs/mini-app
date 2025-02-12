import { getTokenList } from "@/apis/tokens";
import { logger } from "@/helper/zustand/middleware/logger";
import { Token } from "@/types/Token";
import { StateCreator } from "zustand";

export interface PairSlice {
  token1: Token | null;
  token2: Token | null;
  tokensList: Token[];
  filteredTokens: Token[];
  reverseOrder: () => void;
  setToken1: (token: Token) => void;
  setToken2: (token: Token) => void;
  initToken: () => void;
}

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
        filteredTokens: get().tokensList.filter(
          (t) =>
            ![token.token.name, get().token2?.token.name].includes(t.token.name)
        ),
      }));
    },
    setToken2: (token) => {
      set((state) => ({
        token2: token,
        filteredTokens: get().tokensList.filter(
          (t) =>
            ![get().token1?.token.name, token.token.name].includes(t.token.name)
        ),
      }));
    },
    initToken: async () => {
      const tokenInfos = await getTokenList();
      set((state) => ({
        filteredTokens: tokenInfos
          .map((token) => ({ token }))
          .filter(
            (token) =>
              ![get().token1?.token.name, get().token2?.token.name].includes(
                token.token.name
              )
          ),
        tokensList: tokenInfos.map((token) => ({ token })),
      }));
      if (tokenInfos.length >= 2) {
        set((state) => ({
          token1: { token: tokenInfos[0] },
          token2: { token: tokenInfos[1] },
        }));
      }
    },
  })
);
