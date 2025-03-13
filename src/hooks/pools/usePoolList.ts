import { usePoolListQueryQuery } from "@/graphql/generated/graphql";

export const usePoolList = () => {
  const { data: poolListData, loading } = usePoolListQueryQuery();

  

  return { 
    loading
  }
};
