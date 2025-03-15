import {
  useListPositionInPoolQuery,
  usePoolDetailQueryQuery,
} from "@/graphql/generated/graphql";
import { poolTransform, positionTransform } from "@/pipelines/transformer";
import { Address } from "@ton/core";
import { useMemo } from "react";

export const usePositionDetail = (positionAddr: string) => {
  const { data: positionList, loading: positionLoading } =
    useListPositionInPoolQuery({
      variables: {
        where: {
          id: {
            eq: positionAddr,
          },
        },
      },
    });

  const positionTransformed = useMemo(() => {
    return positionTransform(positionList)[0];
  }, [positionList]);

  const { data: poolDetail, loading: poolDetailLoading } =
    usePoolDetailQueryQuery({
      variables: {
        where: {
          id: {
            eq: positionTransformed
              ? Address.parse(positionTransformed.pool.address).toString()
              : "-1",
          },
        },
      },
    });

  const poolDetailTransformed = useMemo(() => {
    console.log(poolDetail);
    return poolTransform(poolDetail)[0];
  }, [poolDetail]);

  return {
    poolDetail: poolDetailTransformed,
    poolDetailLoading,
    position: positionTransformed,
    positionLoading,
  };
};
