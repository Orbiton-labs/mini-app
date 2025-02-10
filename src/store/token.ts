import { Token } from "@/types/Token";
import { StateCreator } from "zustand";

export interface TokenSlice {
  tokens: Token[];
  setTokenList: (tokens: Token[]) => void;
}

export const createTokenSlice: StateCreator<TokenSlice> = (set) => ({
  tokens: [
    {
      name: "TON",
      image: "https://assets.dedust.io/images/ton.webp",
      balance: "10.00",
    },
    {
      name: "DUST",
      image: "https://assets.dedust.io/images/dust.gif",
      balance: "1230.75",
    },
    {
      name: "USDT",
      image: "https://assets.dedust.io/images/usdt.webp",
      balance: "65.99",
    },
  ],
  setTokenList: (tokens: Token[]) => set((_state) => ({ tokens })),
});
