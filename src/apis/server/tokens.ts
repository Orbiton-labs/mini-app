import { sleep } from "@/helper/time";
import { TokenInfo, TokenType } from "@/types/Token";
import { TonClient } from "@ton/ton";

export const getTokenList = async (): Promise<TokenInfo[]> => {
  try {
    await sleep(3000);

    return [
      {
        type: TokenType.NATIVE,
        address: null,
        name: "Toncoin",
        symbol: "TON",
        image: "https://assets.dedust.io/images/ton.webp",
        decimals: 9,
        aliased: true,
        price: "3.68",
      },
      {
        type: TokenType.JETTON,
        address: "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
        name: "Tether USD",
        symbol: "USDT",
        image: "https://assets.dedust.io/images/usdt.webp",
        decimals: 6,
        aliased: true,
        price: "0.9998",
      },
      {
        type: TokenType.JETTON,
        address: "EQCQZpelevHNsbw5IUtwSa4Cs8kqWww0KsYeDri9kwS18eCz",
        name: "DYOR Coin",
        symbol: "DYOR",
        image: "https://assets.dedust.io/images/dyor.webp",
        decimals: 15,
        aliased: true,
        price: "1.03881",
      },
      {
        type: TokenType.JETTON,
        address: "EQAMSx9XLYJ6lYB9LL0kAPjZPhGYdlV7QQsPgRrVGv3qGLNt",
        name: "Stec Network",
        symbol: "STEC",
        image: "https://assets.dedust.io/images/stec.webp",
        decimals: 9,
        aliased: true,
        price: "0.0005749",
      },
      {
        type: TokenType.JETTON,
        address: "EQBfl_pzi8t_fYXJEygZoz8cId1sdjnPTsBpvqiHjggXS3Ep",
        name: "Kartoshka",
        symbol: "POTATO",
        image: "https://assets.dedust.io/images/potato.webp",
        decimals: 9,
        aliased: true,
        price: "0.00138",
      },
      {
        type: TokenType.JETTON,
        address: "EQCtnNdPnA4NTt4XQ_M21dKyoUR7da_SX7uqtO-wh1HeqsX4",
        name: "indicaTon",
        symbol: "ICTN",
        image: "https://assets.dedust.io/images/ictn.webp",
        decimals: 9,
        aliased: true,
        price: "0.001602",
      },
      {
        type: TokenType.JETTON,
        address: "EQCQ8FSCoOnCIaeX29YFGOgGdRn7p9A1uS8giVjZKQyRDxui",
        name: "Liquidator",
        symbol: "LIQ",
        image: "https://assets.dedust.io/images/liq.webp",
        decimals: 9,
        aliased: false,
        price: "0.355",
      },
      {
        type: TokenType.JETTON,
        address: "EQC9zWTrdj7Dm5ZOl1YugX_SSgGcSSeUBivmWToV6joAV-vV",
        name: "Bullish Balloons ",
        symbol: "BULL",
        image: "https://assets.dedust.io/images/bull1.webp",
        decimals: 9,
        aliased: false,
        price: "0.0000021",
      },
      {
        type: TokenType.JETTON,
        address: "EQAEBhAUSSJ_NqYJO3WRNkBUMpfAf7hnd9X7WBhZSqLaxYko",
        name: "TPLANT",
        symbol: "TPLANT",
        image: "https://assets.dedust.io/images/tplant.webp",
        decimals: 9,
        aliased: true,
        price: "0",
      },
      
    ];
  } catch (error) {
    console.log("getTokenList: ", error);
    return [
      {
        type: TokenType.NATIVE,
        address: null,
        name: "Toncoin",
        symbol: "TON",
        image: "https://assets.dedust.io/images/ton.webp",
        decimals: 9,
        aliased: true,
        price: "3.68",
      },
      {
        type: TokenType.JETTON,
        address: "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
        name: "Tether USD",
        symbol: "USDT",
        image: "https://assets.dedust.io/images/usdt.webp",
        decimals: 6,
        aliased: true,
        price: "0.9998",
      },
    ];
  }
};
