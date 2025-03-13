import { TokenType } from "@/types/Token";

export const DEFAULT_PAIR = {
  TON: {
    token: {
      type: TokenType.NATIVE,
      address: null,
      name: "Toncoin",
      symbol: "TON",
      image: "https://assets.dedust.io/images/ton.webp",
      decimals: 9,
      price: "3.76",
    },
  },
  USDT: {
    token: {
      type: TokenType.JETTON,
      address: "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
      name: "Tether USD",
      symbol: "USDT",
      image: "https://assets.dedust.io/images/usdt.webp",
      decimals: 6,
      price: "0.9999",
    },
  },
};
