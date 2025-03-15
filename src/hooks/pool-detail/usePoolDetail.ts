import {
  useListPositionInPoolQuery,
  usePoolDetailQueryQuery,
} from "@/graphql/generated/graphql";
import { poolTransform, positionTransform } from "@/pipelines/transformer";
import { useTonWalletStore } from "@/store";
import { Address } from "@ton/core";
import { useMemo } from "react";

export const usePoolDetail = (poolAddr: string) => {
  const rawAddress = useTonWalletStore((state) => state.rawAddress);

  const { data: poolDetail, loading: poolDetailLoading } =
    usePoolDetailQueryQuery({
      variables: {
        where: {
          id: {
            eq: poolAddr,
          },
        },
      },
    });

  const { data: positionList, loading: positionListLoading } =
    useListPositionInPoolQuery({
      variables: {
        where: {
          poolId: {
            eq: poolAddr,
          },
          owner: {
            eq: rawAddress ? Address.parse(rawAddress).toString() : "-1",
          },
        },
      },
    });

  const poolDetailTransformed = useMemo(() => {
    return poolTransform(poolDetail)[0];
  }, [poolDetail]);
  const positionListTransformed = useMemo(() => {
    return positionTransform(positionList);
  }, [positionList]);
  const total = useMemo(() => {
    return {
      numOfPos: positionListTransformed.length,
      tvl: 0,
      fee24h: 0,
    };
  }, [positionListTransformed]);

  return {
    poolDetail: poolDetailTransformed,
    poolDetailLoading,
    positionList: positionListTransformed,
    positionListLoading,
    total,
  };
};
