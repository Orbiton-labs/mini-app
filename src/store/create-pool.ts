import { simulateCreatePool } from "@/apis/server/pool";
import { getTokenList } from "@/apis/server/tokens";
import { FeeTier } from "@/types/FeeTier";
import { Token } from "@/types/Token";
import { TransactionCreatePoolEstimation } from "@/types/Transaction";
import { StateCreator } from "zustand";

export interface CreatePoolSlice {
  token1: Token | null;
  token2: Token | null;
  tokensList: Token[];
  filteredTokens: Token[];
  transactionEstimation?: TransactionCreatePoolEstimation;
  feeTier: FeeTier | null;
  existPoolFeeTier: FeeTier[];
  displayFilteredListToken: () => void;
  initToken: () => void;
  setToken1: (token: Token) => void;
  setToken2: (token: Token) => void;
  setAmount1: (amount: string | undefined) => Promise<void>;
  setAmount2: (amount: string | undefined) => Promise<void>;
  setFeeTier: (feeTier: FeeTier) => void;
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

export const createCreatePoolSlice: StateCreator<CreatePoolSlice, [], []> = (
  set,
  get
) => ({
  token1: null,
  token2: null,
  tokensList: [],
  filteredTokens: [],
  feeTier: null,
  existPoolFeeTier: [],
  displayFilteredListToken: () => {
    set((state) => ({
      filteredTokens: filterTokens(
        get().tokensList,
        get().token1,
        get().token2
      ),
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

    get().displayFilteredListToken();
  },
  setToken1: async (token) => {
    set((state) => ({
      token1: token,
    }));
  },
  setToken2: async (token) => {
    set((state) => ({
      token2: token,
    }));
  },
  setFeeTier: (feeTier) => {
    set((state) => ({
      feeTier,
    }));
  },
  setAmount1: async (amount) => {
    const token = get().token1;

    const token2 = get().token2;

    const feeTier = get().feeTier;

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

    if (token) {
      set((state) => ({
        token1: {
          ...token,
          amount,
        },
      }));

      if (!amount) {
        console.log("enter amount");
        return;
      }

      if (!feeTier) {
        console.log("choose fee tier");
        return;
      }

      const simulateRes = await simulateCreatePool(
        token.token,
        token2?.token,
        feeTier
      );

      if (!simulateRes) {
        console.log("No route found");
        return;
      }

      set((state) => ({
        transactionEstimation: simulateRes,
      }));
    }
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
});
