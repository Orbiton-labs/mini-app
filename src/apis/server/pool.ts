import { FeeTier } from "@/types/FeeTier";
import { TokenInfo } from "@/types/Token";
import { TransactionCreatePoolEstimation } from "@/types/Transaction";

export const simulateCreatePool = async (
  token1: TokenInfo,
  token2: TokenInfo,
  feeTier: FeeTier
): Promise<TransactionCreatePoolEstimation | null> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return {};
  } catch (error) {
    console.log(error);
    return null;
  }
};
