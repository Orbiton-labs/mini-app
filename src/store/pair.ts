import { getTokenList } from "@/apis/tokens";
import { logger } from "@/helper/zustand/middleware/logger";
import { Token } from "@/types/Token";
import { StateCreator } from "zustand";

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
