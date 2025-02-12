import { create } from "zustand";
import { createPairSlice, PairSlice } from "./pair";

export type BoundStore = PairSlice;

export const useBoundStore = create<BoundStore>((...a) => ({
  ...createPairSlice(...a),
}));
