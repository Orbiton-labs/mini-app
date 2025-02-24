export type TransactionSwapEstimation = {
  price: string;
  priceImpact: string;
  minimumReceived: string;
  slippageTolerance: string;
  fee: {
    rate: string;
    amount: string;
  };
  route: string[];
};

export type TransactionCreatePoolEstimation = {};
