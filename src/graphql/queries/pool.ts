import { gql } from "graphql-tag";

export const PoolListQuery = gql`
  query PoolListQuery {
    pool {
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
    }
  }
`;

export const PoolExistQuery = gql`
  query PoolExistQuery($where: PoolFilters) {
    pool(where: $where) {
      id
    }
  }
`;

export const PoolDetailQuery = gql`
  query PoolDetailQuery($where: PoolFilters) {
    pool(where: $where) {
      id
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
      totalValueLockedUSD
      volumeUSD
      feesUSD
      txCount
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
    }
  }
`;
