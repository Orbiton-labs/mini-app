import { PTON_MASTER } from "@/constants/pton";
import { TokenInfo, TokenType } from "@/types/Token";

export const getTokenList = async (): Promise<TokenInfo[]> => {
  try {
    console.log();
    return process.env.NEXT_PUBLIC_ENVIRONMENT === "mainnet"
      ? [
        {
          type: TokenType.NATIVE,
          address: PTON_MASTER,
          name: "Toncoin",
          symbol: "TON",
          image: "https://assets.dedust.io/images/ton.webp",
          decimals: 9,
          price: 3.68,
        },
        {
          type: TokenType.JETTON,
          address: "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
          name: "Tether USD",
          symbol: "USDT",
          image: "https://assets.dedust.io/images/usdt.webp",
          decimals: 6,
          price: 0.9998,
        },
      ]
      : [
        {
          type: TokenType.NATIVE,
          address: PTON_MASTER,
          name: "Toncoin",
          symbol: "TON",
          image: "https://assets.dedust.io/images/ton.webp",
          decimals: 9,
          price: 3.68,
        },
        {
          type: TokenType.JETTON,
          address: "kQCF8jfV05w00abPcvsW64XNanQ9vateIhCLSkNAQ7Qfo14c",
          name: "USD Coin",
          symbol: "USDC",
          image:
            "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
          decimals: 9,
          price: 1,
        },
        {
          type: TokenType.JETTON,
          address: "kQCqaCb9S8wqYjPT1d18Z0f-HemRnEDm4heFyNfPKMESADNa",
          name: "Orbiton Swap",
          symbol: "ORB",
          image:
            "https://pbs.twimg.com/profile_images/1900284998013374464/ZHYwqELr_400x400.jpg",
          decimals: 9,
          price: 0.1,
        },
        {
          type: TokenType.JETTON,
          decimals: 9,
          address: "EQBXJHKfXkPHxs8Ex9yy8gu6DWm9_FgoPCMJfx-tZlDIm_Dk",
          image:
            "https://s2.coinmarketcap.com/static/img/coins/64x64/23156.png",
          name: "Dedust Token",
          symbol: "DUST",
          price: 0.41064,
        },
        {
          type: TokenType.JETTON,
          decimals: 9,
          address: "EQBMX7QVmqvs5Gtx5_eSGm1FF88YPTOou1yKEz8CRX8QTGh-",
          image:
            "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
          name: "USDT",
          symbol: "USDT",
          price: 0.348,
        },
      ];
  } catch (error) {
    return [];
  }
};
