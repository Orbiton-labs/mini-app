import { usePoolDetailQueryQuery } from "@/graphql/generated/graphql";
import { poolTransform } from "@/pipelines/transformer";
import { Address } from "@ton/core";
import { useMemo } from "react";

export const useAddLiquidity = (poolAddr: string) => {
  const { data: poolDetail, loading: poolDetailLoading } =
    usePoolDetailQueryQuery({
      variables: {
        where: {
          id: {
            eq: Address.parse(poolAddr).toString(),
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
  };
};
