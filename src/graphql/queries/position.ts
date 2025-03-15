import gql from "graphql-tag";

export const PositionDetailQuery = gql`
  query PositionDetailQuery($where: PositionFilters) {
    position(where: $where) {
      pool {
        id
        tick
        sqrtPrice
      }
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
      liquidity
      tickLower
      tickUpper
      collectedFeeJetton0
      collectedFeeJetton1
      depositedJetton0
      depositedJetton1
    }
  }
`;

export const PositionFee24HQuery = gql`
  query PositionFee24HQuery($where: PositionDataFilters) {
    positionData(where: $where) {
      id
      collectedFeeJetton0
      collectedFeeJetton1
      poolId
    }
  }
`;

export const ListPositionInPool = gql`
  query ListPositionInPool($where: PositionFilters) {
    position(where: $where) {
      id
      owner
      jetton0 {
        id
        image
        name
        symbol
        decimals
        derivedUSD
      }
      jetton1 {
        decimals
        derivedUSD
        id
        image
        name
        symbol
      }
      depositedJetton0
      depositedJetton1
      tickLower
      tickUpper
      liquidity
      pool {
        id
        tick
        sqrtPrice
      }
      collectedFeeJetton0
      collectedFeeJetton1
    }
  }
`;
