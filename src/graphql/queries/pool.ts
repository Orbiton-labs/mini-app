import { gql } from "graphql-tag";

export const PoolListQuery = gql`
  query PoolListQuery($orderBy: PoolOrderBy) {
    pool(orderBy: $orderBy) {
      id
      jetton0 {
        id
        image
        name
        symbol
        derivedUSD
        decimals
      }
      jetton1 {
        id
        image
        name
        symbol
        derivedUSD
        decimals
      }
      volumeUSD
      totalValueLockedUSD
      txCount
      feesUSD
      feeTier
      jetton0Price
      jetton1Price
      tickSpacing
      tick
      liquidity
      sqrtPrice
    }
  }
`;

export const PoolExistQuery = gql`
  query Pools($token0: String!, $token1: String!) {
  pool(where: {
    jetton0Id: {
      inArray: [$token0, $token1]
    }
    jetton1Id: {
      inArray: [$token0, $token1]
    }
  }) {
    feeTier
    tickSpacing
  }
}
`;

export const PoolDetailQuery = gql`
  query PoolDetailQuery($where: PoolFilters) {
    pool(where: $where) {
      id
      jetton0 {
        id
        image
        name
        symbol
        derivedUSD
        decimals
      }
      jetton1 {
        id
        image
        name
        symbol
        derivedUSD
        decimals
      }
      volumeUSD
      totalValueLockedUSD
      txCount
      feesUSD
      feeTier
      jetton0Price
      jetton1Price
      tickSpacing
      tick
      liquidity
      sqrtPrice
    }
  }
`;

export const Pool24HQuery = gql`
  query Pool24HQuery($where: PoolDataFilters) {
    poolData(where: $where) {
      poolId
      volumeUSD
      feesUSD
    }
  }
`;

export const PoolInfoToCreatePositionQuery = gql`
  query PoolInfoToCreatePositionQuery($where: PoolFilters) {
    pool(where: $where) {
      id
      sqrtPrice
      tick
      liquidity
      jetton0 {
        decimals
        derivedUSD
        id
        image
        name
        symbol
      }
      jetton1 {
        decimals
        derivedUSD
        id
        image
        name
        symbol
      }
      jetton0Price
      jetton1Price
      tickSpacing
      tick
      liquidity
      sqrtPrice
    }
  }
`;
