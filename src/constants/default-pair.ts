import { TokenType } from "@/types/Token";

export const DEFAULT_PAIR_TESTNET = [
  {
    type: TokenType.JETTON,
    address: "kQCF8jfV05w00abPcvsW64XNanQ9vateIhCLSkNAQ7Qfo14c",
    name: "USD Coin",
    symbol: "USDC",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
    decimals: 9,
    price: 1,
  },
  {
    type: TokenType.JETTON,
    address: "kQCqaCb9S8wqYjPT1d18Z0f-HemRnEDm4heFyNfPKMESADNa",
    name: "Orbiton Swap",
    symbol: "ORB",
    image:
      "https://pbs.twimg.com/profile_images/1871028225511702528/N23ltPQQ_400x400.jpg",
    decimals: 9,
    price: 0.1,
  },
];

export const DEFAULT_PAIR_MAINNET = [
  {
    type: TokenType.NATIVE,
    address: null,
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
    price: 0.998,
  },
];
