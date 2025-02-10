import { useBoundStore } from "@/store";

export const useSwap = () => {
  const tokens = useBoundStore((state) => state.tokens);

  return { tokens };
};
