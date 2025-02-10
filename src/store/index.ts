import { create } from "zustand";
import { createTokenSlice, TokenSlice } from "./token";

export type BoundStore = TokenSlice;

export const useBoundStore = create<BoundStore>((...a) => ({
  ...createTokenSlice(...a),
}));
