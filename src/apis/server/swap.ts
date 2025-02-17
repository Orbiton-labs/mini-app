import { SimulateSwapResponse } from "@/types/Swap";
import { TokenInfo } from "@/types/Token";

export const simulateSwap = async (
  tokenFrom: TokenInfo,
  tokenTo: TokenInfo,
  amountIn: string
): Promise<SimulateSwapResponse | null> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return {
      tokenIn: "A",
      tokenOut: "B",
      route: null,
      amountOut: "9000000",
      msg: null,
      txEstimation: {
        price: "0.2443",
        priceImpact: "0.01",
        minimumReceived: "241914",
        slippageTolerance: "1.03",
        fee: {
          rate: "0.3",
          amount: "30",
        },
        route: ["TON", "DUST", "USDT"],
      },
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
