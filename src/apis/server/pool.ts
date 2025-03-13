import { FeeTier } from "@/types/FeeTier";
import { Pool } from "@/types/Pool";
import { TokenInfo, TokenType } from "@/types/Token";
import { TransactionCreatePoolEstimation } from "@/types/Transaction";

export const simulateCreatePool = async (
  token1: TokenInfo,
  token2: TokenInfo,
  feeTier: FeeTier
): Promise<TransactionCreatePoolEstimation | null> => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    return {};
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPoolList = async (): Promise<Pool[]> => {
  try {
    return [{
      address: 'EQBM8PrmnB8ikh2BhgTtu43Zarl9FQ54d3fLvziNzN53dPm6',
      token1: {
        token: {
          type: TokenType.JETTON,
          address: "kQCF8jfV05w00abPcvsW64XNanQ9vateIhCLSkNAQ7Qfo14c",
          name: "USD Coin",
          symbol: "USDC",
          image: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
          decimals: 9,
          price: "1",
        }
      },
      token2: {
        token: {
          type: TokenType.JETTON,
          address: "kQCqaCb9S8wqYjPT1d18Z0f-HemRnEDm4heFyNfPKMESADNa",
          name: "Orbiton Swap",
          symbol: "ORB",
          image: "https://pbs.twimg.com/profile_images/1871028225511702528/N23ltPQQ_400x400.jpg",
          decimals: 9,
          price: "0.1",
        }
      },
      feeTier: {
        fee: "0.05",
        tickSpacing: "60"
      },
      apr: '18.8',
      fee24h: '1234',
      tvl: '1212.134',
      volume24h: '1212.41',
    }];
  } catch (error) {
    console.log(error);
    return [];
  }
}