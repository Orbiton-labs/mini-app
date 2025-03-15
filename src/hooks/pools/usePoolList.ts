import { usePoolListQueryQuery } from "@/graphql/generated/graphql";
import { poolTransform } from "@/pipelines/transformer";

export const usePoolList = () => {
  const { data, loading } = usePoolListQueryQuery();

  //   const testData: PoolListQueryQuery = {
  //     pool: [
  //       {
  //         id: "EQCtpowhg8efNm364J51zDiKNT_CNnApUU-bor5Jpd7HzhR3",
  //         jetton0: {
  //           id: "EQCF8jfV05w00abPcvsW64XNanQ9vateIhCLSkNAQ7Qfo-WW",
  //           image: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
  //           name: "USD Coin",
  //           symbol: "USDC",
  //           derivedUSD: "2.83",
  //           decimals: 9,
  //         },
  //         jetton1: {
  //           id: "EQCqaCb9S8wqYjPT1d18Z0f-HemRnEDm4heFyNfPKMESAIjQ",
  //           image:
  //             "https://pbs.twimg.com/profile_images/1871028225511702528/N23ltPQQ_400x400.jpg",
  //           name: "Orbiton Swap",
  //           symbol: "ORB",
  //           derivedUSD: "0.283",
  //           decimals: 9,
  //         },
  //         volumeUSD: "0",
  //         totalValueLockedUSD: "14052.34030332014",
  //         txCount: "1",
  //         feesUSD: "0",
  //         feeTier: "3000",
  //         tickSpacing: "60",
  //       },
  //     ],
  //   };

  return {
    loading,
    poolList: poolTransform(data),
  };
};
