import { TransactionSwapEstimation } from "./Transaction";

export type SimulateSwapResponse = {
  tokenIn: any;
  tokenOut: any;
  amountOut: string;
  route: any;
  msg: any;
  txEstimation: TransactionSwapEstimation;
};
