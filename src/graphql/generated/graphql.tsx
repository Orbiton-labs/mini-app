import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type BurnAmount0Filters = {
  OR?: InputMaybe<Array<BurnAmount0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnAmount0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnAmount1Filters = {
  OR?: InputMaybe<Array<BurnAmount1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnAmount1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnAmountFilters = {
  OR?: InputMaybe<Array<BurnAmountfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnAmountUsdFilters = {
  OR?: InputMaybe<Array<BurnAmountUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnAmountUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnAmountfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnFilters = {
  OR?: InputMaybe<Array<BurnFiltersOr>>;
  amount?: InputMaybe<BurnAmountFilters>;
  amount0?: InputMaybe<BurnAmount0Filters>;
  amount1?: InputMaybe<BurnAmount1Filters>;
  amountUSD?: InputMaybe<BurnAmountUsdFilters>;
  id?: InputMaybe<BurnIdFilters>;
  jetton0Id?: InputMaybe<BurnJetton0IdFilters>;
  jetton1Id?: InputMaybe<BurnJetton1IdFilters>;
  origin?: InputMaybe<BurnOriginFilters>;
  owner?: InputMaybe<BurnOwnerFilters>;
  poolId?: InputMaybe<BurnPoolIdFilters>;
  tickLower?: InputMaybe<BurnTickLowerFilters>;
  tickUpper?: InputMaybe<BurnTickUpperFilters>;
  timestamp?: InputMaybe<BurnTimestampFilters>;
  transactionId?: InputMaybe<BurnTransactionIdFilters>;
};

export type BurnFiltersOr = {
  amount?: InputMaybe<BurnAmountFilters>;
  amount0?: InputMaybe<BurnAmount0Filters>;
  amount1?: InputMaybe<BurnAmount1Filters>;
  amountUSD?: InputMaybe<BurnAmountUsdFilters>;
  id?: InputMaybe<BurnIdFilters>;
  jetton0Id?: InputMaybe<BurnJetton0IdFilters>;
  jetton1Id?: InputMaybe<BurnJetton1IdFilters>;
  origin?: InputMaybe<BurnOriginFilters>;
  owner?: InputMaybe<BurnOwnerFilters>;
  poolId?: InputMaybe<BurnPoolIdFilters>;
  tickLower?: InputMaybe<BurnTickLowerFilters>;
  tickUpper?: InputMaybe<BurnTickUpperFilters>;
  timestamp?: InputMaybe<BurnTimestampFilters>;
  transactionId?: InputMaybe<BurnTransactionIdFilters>;
};

export type BurnIdFilters = {
  OR?: InputMaybe<Array<BurnIdfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnInsertInput = {
  amount: Scalars['String']['input'];
  amount0: Scalars['String']['input'];
  amount1: Scalars['String']['input'];
  amountUSD: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  jetton0Id: Scalars['String']['input'];
  jetton1Id: Scalars['String']['input'];
  origin: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  poolId: Scalars['String']['input'];
  /** BigInt */
  tickLower: Scalars['String']['input'];
  /** BigInt */
  tickUpper: Scalars['String']['input'];
  /** Date */
  timestamp: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
};

export type BurnItem = {
  __typename?: 'BurnItem';
  amount: Scalars['String']['output'];
  amount0: Scalars['String']['output'];
  amount1: Scalars['String']['output'];
  amountUSD: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  jetton0Id: Scalars['String']['output'];
  jetton1Id: Scalars['String']['output'];
  origin: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  poolId: Scalars['String']['output'];
  /** BigInt */
  tickLower: Scalars['String']['output'];
  /** BigInt */
  tickUpper: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
};

export type BurnJetton0IdFilters = {
  OR?: InputMaybe<Array<BurnJetton0IdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnJetton0IdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnJetton0Relation = {
  __typename?: 'BurnJetton0Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type BurnJetton1IdFilters = {
  OR?: InputMaybe<Array<BurnJetton1IdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnJetton1IdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnJetton1Relation = {
  __typename?: 'BurnJetton1Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type BurnOrderBy = {
  amount?: InputMaybe<InnerOrder>;
  amount0?: InputMaybe<InnerOrder>;
  amount1?: InputMaybe<InnerOrder>;
  amountUSD?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  jetton0Id?: InputMaybe<InnerOrder>;
  jetton1Id?: InputMaybe<InnerOrder>;
  origin?: InputMaybe<InnerOrder>;
  owner?: InputMaybe<InnerOrder>;
  poolId?: InputMaybe<InnerOrder>;
  tickLower?: InputMaybe<InnerOrder>;
  tickUpper?: InputMaybe<InnerOrder>;
  timestamp?: InputMaybe<InnerOrder>;
  transactionId?: InputMaybe<InnerOrder>;
};

export type BurnOriginFilters = {
  OR?: InputMaybe<Array<BurnOriginfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnOriginfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnOwnerFilters = {
  OR?: InputMaybe<Array<BurnOwnerfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnOwnerfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnPoolIdFilters = {
  OR?: InputMaybe<Array<BurnPoolIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnPoolIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnPoolRelation = {
  __typename?: 'BurnPoolRelation';
  collectedFeesJetton0: Scalars['String']['output'];
  collectedFeesJetton1: Scalars['String']['output'];
  collectedFeesUSD: Scalars['String']['output'];
  feeGrowthGlobal0X128: Scalars['String']['output'];
  feeGrowthGlobal1X128: Scalars['String']['output'];
  /** BigInt */
  feeProtocol: Scalars['String']['output'];
  /** BigInt */
  feeTier: Scalars['String']['output'];
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jetton0?: Maybe<BurnPoolRelationJetton0Relation>;
  jetton0Id: Scalars['String']['output'];
  jetton0Price: Scalars['String']['output'];
  jetton1?: Maybe<BurnPoolRelationJetton1Relation>;
  jetton1Id: Scalars['String']['output'];
  jetton1Price: Scalars['String']['output'];
  liquidity: Scalars['String']['output'];
  liquidityProviderCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  sqrtPrice: Scalars['String']['output'];
  /** BigInt */
  tick: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  totalValueLockedJetton0: Scalars['String']['output'];
  totalValueLockedJetton1: Scalars['String']['output'];
  totalValueLockedTon: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volumeJetton0: Scalars['String']['output'];
  volumeJetton1: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};


export type BurnPoolRelationJetton0Args = {
  where?: InputMaybe<JettonFilters>;
};


export type BurnPoolRelationJetton1Args = {
  where?: InputMaybe<JettonFilters>;
};

export type BurnPoolRelationJetton0Relation = {
  __typename?: 'BurnPoolRelationJetton0Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type BurnPoolRelationJetton1Relation = {
  __typename?: 'BurnPoolRelationJetton1Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type BurnSelectItem = {
  __typename?: 'BurnSelectItem';
  amount: Scalars['String']['output'];
  amount0: Scalars['String']['output'];
  amount1: Scalars['String']['output'];
  amountUSD: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  jetton0?: Maybe<BurnJetton0Relation>;
  jetton0Id: Scalars['String']['output'];
  jetton1?: Maybe<BurnJetton1Relation>;
  jetton1Id: Scalars['String']['output'];
  origin: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  pool?: Maybe<BurnPoolRelation>;
  poolId: Scalars['String']['output'];
  /** BigInt */
  tickLower: Scalars['String']['output'];
  /** BigInt */
  tickUpper: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
};


export type BurnSelectItemJetton0Args = {
  where?: InputMaybe<JettonFilters>;
};


export type BurnSelectItemJetton1Args = {
  where?: InputMaybe<JettonFilters>;
};


export type BurnSelectItemPoolArgs = {
  where?: InputMaybe<PoolFilters>;
};

export type BurnTickLowerFilters = {
  OR?: InputMaybe<Array<BurnTickLowerfiltersOr>>;
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnTickLowerfiltersOr = {
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnTickUpperFilters = {
  OR?: InputMaybe<Array<BurnTickUpperfiltersOr>>;
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnTickUpperfiltersOr = {
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnTimestampFilters = {
  OR?: InputMaybe<Array<BurnTimestampfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnTimestampfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnTransactionIdFilters = {
  OR?: InputMaybe<Array<BurnTransactionIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnTransactionIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BurnUpdateInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  amount0?: InputMaybe<Scalars['String']['input']>;
  amount1?: InputMaybe<Scalars['String']['input']>;
  amountUSD?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jetton0Id?: InputMaybe<Scalars['String']['input']>;
  jetton1Id?: InputMaybe<Scalars['String']['input']>;
  origin?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  tickLower?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  tickUpper?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  timestamp?: InputMaybe<Scalars['String']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
};

export type CollectAmount0Filters = {
  OR?: InputMaybe<Array<CollectAmount0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectAmount0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectAmount1Filters = {
  OR?: InputMaybe<Array<CollectAmount1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectAmount1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectAmountUsdFilters = {
  OR?: InputMaybe<Array<CollectAmountUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectAmountUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectFilters = {
  OR?: InputMaybe<Array<CollectFiltersOr>>;
  amount0?: InputMaybe<CollectAmount0Filters>;
  amount1?: InputMaybe<CollectAmount1Filters>;
  amountUSD?: InputMaybe<CollectAmountUsdFilters>;
  id?: InputMaybe<CollectIdFilters>;
  owner?: InputMaybe<CollectOwnerFilters>;
  poolId?: InputMaybe<CollectPoolIdFilters>;
  tickLower?: InputMaybe<CollectTickLowerFilters>;
  tickUpper?: InputMaybe<CollectTickUpperFilters>;
  timestamp?: InputMaybe<CollectTimestampFilters>;
  transactionId?: InputMaybe<CollectTransactionIdFilters>;
};

export type CollectFiltersOr = {
  amount0?: InputMaybe<CollectAmount0Filters>;
  amount1?: InputMaybe<CollectAmount1Filters>;
  amountUSD?: InputMaybe<CollectAmountUsdFilters>;
  id?: InputMaybe<CollectIdFilters>;
  owner?: InputMaybe<CollectOwnerFilters>;
  poolId?: InputMaybe<CollectPoolIdFilters>;
  tickLower?: InputMaybe<CollectTickLowerFilters>;
  tickUpper?: InputMaybe<CollectTickUpperFilters>;
  timestamp?: InputMaybe<CollectTimestampFilters>;
  transactionId?: InputMaybe<CollectTransactionIdFilters>;
};

export type CollectIdFilters = {
  OR?: InputMaybe<Array<CollectIdfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectInsertInput = {
  amount0: Scalars['String']['input'];
  amount1: Scalars['String']['input'];
  amountUSD: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  owner: Scalars['String']['input'];
  poolId: Scalars['String']['input'];
  /** BigInt */
  tickLower: Scalars['String']['input'];
  /** BigInt */
  tickUpper: Scalars['String']['input'];
  /** Date */
  timestamp?: InputMaybe<Scalars['String']['input']>;
  transactionId: Scalars['String']['input'];
};

export type CollectItem = {
  __typename?: 'CollectItem';
  amount0: Scalars['String']['output'];
  amount1: Scalars['String']['output'];
  amountUSD: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  owner: Scalars['String']['output'];
  poolId: Scalars['String']['output'];
  /** BigInt */
  tickLower: Scalars['String']['output'];
  /** BigInt */
  tickUpper: Scalars['String']['output'];
  /** Date */
  timestamp?: Maybe<Scalars['String']['output']>;
  transactionId: Scalars['String']['output'];
};

export type CollectOrderBy = {
  amount0?: InputMaybe<InnerOrder>;
  amount1?: InputMaybe<InnerOrder>;
  amountUSD?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  owner?: InputMaybe<InnerOrder>;
  poolId?: InputMaybe<InnerOrder>;
  tickLower?: InputMaybe<InnerOrder>;
  tickUpper?: InputMaybe<InnerOrder>;
  timestamp?: InputMaybe<InnerOrder>;
  transactionId?: InputMaybe<InnerOrder>;
};

export type CollectOwnerFilters = {
  OR?: InputMaybe<Array<CollectOwnerfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectOwnerfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectPoolIdFilters = {
  OR?: InputMaybe<Array<CollectPoolIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectPoolIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectPoolRelation = {
  __typename?: 'CollectPoolRelation';
  collectedFeesJetton0: Scalars['String']['output'];
  collectedFeesJetton1: Scalars['String']['output'];
  collectedFeesUSD: Scalars['String']['output'];
  feeGrowthGlobal0X128: Scalars['String']['output'];
  feeGrowthGlobal1X128: Scalars['String']['output'];
  /** BigInt */
  feeProtocol: Scalars['String']['output'];
  /** BigInt */
  feeTier: Scalars['String']['output'];
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jetton0?: Maybe<CollectPoolRelationJetton0Relation>;
  jetton0Id: Scalars['String']['output'];
  jetton0Price: Scalars['String']['output'];
  jetton1?: Maybe<CollectPoolRelationJetton1Relation>;
  jetton1Id: Scalars['String']['output'];
  jetton1Price: Scalars['String']['output'];
  liquidity: Scalars['String']['output'];
  liquidityProviderCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  sqrtPrice: Scalars['String']['output'];
  /** BigInt */
  tick: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  totalValueLockedJetton0: Scalars['String']['output'];
  totalValueLockedJetton1: Scalars['String']['output'];
  totalValueLockedTon: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volumeJetton0: Scalars['String']['output'];
  volumeJetton1: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};


export type CollectPoolRelationJetton0Args = {
  where?: InputMaybe<JettonFilters>;
};


export type CollectPoolRelationJetton1Args = {
  where?: InputMaybe<JettonFilters>;
};

export type CollectPoolRelationJetton0Relation = {
  __typename?: 'CollectPoolRelationJetton0Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type CollectPoolRelationJetton1Relation = {
  __typename?: 'CollectPoolRelationJetton1Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type CollectSelectItem = {
  __typename?: 'CollectSelectItem';
  amount0: Scalars['String']['output'];
  amount1: Scalars['String']['output'];
  amountUSD: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  owner: Scalars['String']['output'];
  pool?: Maybe<CollectPoolRelation>;
  poolId: Scalars['String']['output'];
  /** BigInt */
  tickLower: Scalars['String']['output'];
  /** BigInt */
  tickUpper: Scalars['String']['output'];
  /** Date */
  timestamp?: Maybe<Scalars['String']['output']>;
  transactionId: Scalars['String']['output'];
};


export type CollectSelectItemPoolArgs = {
  where?: InputMaybe<PoolFilters>;
};

export type CollectTickLowerFilters = {
  OR?: InputMaybe<Array<CollectTickLowerfiltersOr>>;
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectTickLowerfiltersOr = {
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectTickUpperFilters = {
  OR?: InputMaybe<Array<CollectTickUpperfiltersOr>>;
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectTickUpperfiltersOr = {
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectTimestampFilters = {
  OR?: InputMaybe<Array<CollectTimestampfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectTimestampfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectTransactionIdFilters = {
  OR?: InputMaybe<Array<CollectTransactionIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectTransactionIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type CollectUpdateInput = {
  amount0?: InputMaybe<Scalars['String']['input']>;
  amount1?: InputMaybe<Scalars['String']['input']>;
  amountUSD?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  tickLower?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  tickUpper?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  timestamp?: InputMaybe<Scalars['String']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
};

export type InnerOrder = {
  direction: OrderDirection;
  /** Priority of current field */
  priority: Scalars['Int']['input'];
};

export type JettonDataFeesUsdFilters = {
  OR?: InputMaybe<Array<JettonDataFeesUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataFeesUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataFilters = {
  OR?: InputMaybe<Array<JettonDataFiltersOr>>;
  feesUSD?: InputMaybe<JettonDataFeesUsdFilters>;
  id?: InputMaybe<JettonDataIdFilters>;
  jettonId?: InputMaybe<JettonDataJettonIdFilters>;
  priceUSD?: InputMaybe<JettonDataPriceUsdFilters>;
  protocolFeesUSD?: InputMaybe<JettonDataProtocolFeesUsdFilters>;
  timestamp?: InputMaybe<JettonDataTimestampFilters>;
  totalValueLocked?: InputMaybe<JettonDataTotalValueLockedFilters>;
  totalValueLockedUSD?: InputMaybe<JettonDataTotalValueLockedUsdFilters>;
  volume?: InputMaybe<JettonDataVolumeFilters>;
  volumeUSD?: InputMaybe<JettonDataVolumeUsdFilters>;
};

export type JettonDataFiltersOr = {
  feesUSD?: InputMaybe<JettonDataFeesUsdFilters>;
  id?: InputMaybe<JettonDataIdFilters>;
  jettonId?: InputMaybe<JettonDataJettonIdFilters>;
  priceUSD?: InputMaybe<JettonDataPriceUsdFilters>;
  protocolFeesUSD?: InputMaybe<JettonDataProtocolFeesUsdFilters>;
  timestamp?: InputMaybe<JettonDataTimestampFilters>;
  totalValueLocked?: InputMaybe<JettonDataTotalValueLockedFilters>;
  totalValueLockedUSD?: InputMaybe<JettonDataTotalValueLockedUsdFilters>;
  volume?: InputMaybe<JettonDataVolumeFilters>;
  volumeUSD?: InputMaybe<JettonDataVolumeUsdFilters>;
};

export type JettonDataIdFilters = {
  OR?: InputMaybe<Array<JettonDataIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataInsertInput = {
  feesUSD: Scalars['String']['input'];
  id: Scalars['String']['input'];
  jettonId: Scalars['String']['input'];
  priceUSD: Scalars['String']['input'];
  protocolFeesUSD: Scalars['String']['input'];
  /** Date */
  timestamp: Scalars['String']['input'];
  totalValueLocked: Scalars['String']['input'];
  totalValueLockedUSD: Scalars['String']['input'];
  volume: Scalars['String']['input'];
  volumeUSD: Scalars['String']['input'];
};

export type JettonDataItem = {
  __typename?: 'JettonDataItem';
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jettonId: Scalars['String']['output'];
  priceUSD: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type JettonDataJettonIdFilters = {
  OR?: InputMaybe<Array<JettonDataJettonIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataJettonIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataOrderBy = {
  feesUSD?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  jettonId?: InputMaybe<InnerOrder>;
  priceUSD?: InputMaybe<InnerOrder>;
  protocolFeesUSD?: InputMaybe<InnerOrder>;
  timestamp?: InputMaybe<InnerOrder>;
  totalValueLocked?: InputMaybe<InnerOrder>;
  totalValueLockedUSD?: InputMaybe<InnerOrder>;
  volume?: InputMaybe<InnerOrder>;
  volumeUSD?: InputMaybe<InnerOrder>;
};

export type JettonDataPriceUsdFilters = {
  OR?: InputMaybe<Array<JettonDataPriceUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataPriceUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataProtocolFeesUsdFilters = {
  OR?: InputMaybe<Array<JettonDataProtocolFeesUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataProtocolFeesUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataSelectItem = {
  __typename?: 'JettonDataSelectItem';
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jettonId: Scalars['String']['output'];
  priceUSD: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type JettonDataTimestampFilters = {
  OR?: InputMaybe<Array<JettonDataTimestampfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataTimestampfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataTotalValueLockedFilters = {
  OR?: InputMaybe<Array<JettonDataTotalValueLockedfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataTotalValueLockedUsdFilters = {
  OR?: InputMaybe<Array<JettonDataTotalValueLockedUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataTotalValueLockedUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataTotalValueLockedfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataUpdateInput = {
  feesUSD?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  jettonId?: InputMaybe<Scalars['String']['input']>;
  priceUSD?: InputMaybe<Scalars['String']['input']>;
  protocolFeesUSD?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  timestamp?: InputMaybe<Scalars['String']['input']>;
  totalValueLocked?: InputMaybe<Scalars['String']['input']>;
  totalValueLockedUSD?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['String']['input']>;
  volumeUSD?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataVolumeFilters = {
  OR?: InputMaybe<Array<JettonDataVolumefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataVolumeUsdFilters = {
  OR?: InputMaybe<Array<JettonDataVolumeUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataVolumeUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDataVolumefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDecimalsFilters = {
  OR?: InputMaybe<Array<JettonDecimalsfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDecimalsfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDerivedTonFilters = {
  OR?: InputMaybe<Array<JettonDerivedTonfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDerivedTonfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDerivedUsdFilters = {
  OR?: InputMaybe<Array<JettonDerivedUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDerivedUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDescriptionFilters = {
  OR?: InputMaybe<Array<JettonDescriptionfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonDescriptionfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonFeesUsdFilters = {
  OR?: InputMaybe<Array<JettonFeesUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonFeesUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonFilters = {
  OR?: InputMaybe<Array<JettonFiltersOr>>;
  decimals?: InputMaybe<JettonDecimalsFilters>;
  derivedTon?: InputMaybe<JettonDerivedTonFilters>;
  derivedUSD?: InputMaybe<JettonDerivedUsdFilters>;
  description?: InputMaybe<JettonDescriptionFilters>;
  feesUSD?: InputMaybe<JettonFeesUsdFilters>;
  id?: InputMaybe<JettonIdFilters>;
  image?: InputMaybe<JettonImageFilters>;
  name?: InputMaybe<JettonNameFilters>;
  poolCount?: InputMaybe<JettonPoolCountFilters>;
  protocolFeesUSD?: InputMaybe<JettonProtocolFeesUsdFilters>;
  symbol?: InputMaybe<JettonSymbolFilters>;
  totalSupply?: InputMaybe<JettonTotalSupplyFilters>;
  totalValueLocked?: InputMaybe<JettonTotalValueLockedFilters>;
  totalValueLockedUSD?: InputMaybe<JettonTotalValueLockedUsdFilters>;
  txCount?: InputMaybe<JettonTxCountFilters>;
  volume?: InputMaybe<JettonVolumeFilters>;
  volumeUSD?: InputMaybe<JettonVolumeUsdFilters>;
};

export type JettonFiltersOr = {
  decimals?: InputMaybe<JettonDecimalsFilters>;
  derivedTon?: InputMaybe<JettonDerivedTonFilters>;
  derivedUSD?: InputMaybe<JettonDerivedUsdFilters>;
  description?: InputMaybe<JettonDescriptionFilters>;
  feesUSD?: InputMaybe<JettonFeesUsdFilters>;
  id?: InputMaybe<JettonIdFilters>;
  image?: InputMaybe<JettonImageFilters>;
  name?: InputMaybe<JettonNameFilters>;
  poolCount?: InputMaybe<JettonPoolCountFilters>;
  protocolFeesUSD?: InputMaybe<JettonProtocolFeesUsdFilters>;
  symbol?: InputMaybe<JettonSymbolFilters>;
  totalSupply?: InputMaybe<JettonTotalSupplyFilters>;
  totalValueLocked?: InputMaybe<JettonTotalValueLockedFilters>;
  totalValueLockedUSD?: InputMaybe<JettonTotalValueLockedUsdFilters>;
  txCount?: InputMaybe<JettonTxCountFilters>;
  volume?: InputMaybe<JettonVolumeFilters>;
  volumeUSD?: InputMaybe<JettonVolumeUsdFilters>;
};

export type JettonIdFilters = {
  OR?: InputMaybe<Array<JettonIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonImageFilters = {
  OR?: InputMaybe<Array<JettonImagefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonImagefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonInsertInput = {
  decimals: Scalars['Int']['input'];
  derivedTon: Scalars['String']['input'];
  derivedUSD: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  feesUSD: Scalars['String']['input'];
  id: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  poolCount: Scalars['String']['input'];
  protocolFeesUSD: Scalars['String']['input'];
  symbol: Scalars['String']['input'];
  totalSupply: Scalars['String']['input'];
  totalValueLocked: Scalars['String']['input'];
  totalValueLockedUSD: Scalars['String']['input'];
  txCount: Scalars['String']['input'];
  volume: Scalars['String']['input'];
  volumeUSD: Scalars['String']['input'];
};

export type JettonItem = {
  __typename?: 'JettonItem';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type JettonNameFilters = {
  OR?: InputMaybe<Array<JettonNamefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonNamefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonOrderBy = {
  decimals?: InputMaybe<InnerOrder>;
  derivedTon?: InputMaybe<InnerOrder>;
  derivedUSD?: InputMaybe<InnerOrder>;
  description?: InputMaybe<InnerOrder>;
  feesUSD?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  image?: InputMaybe<InnerOrder>;
  name?: InputMaybe<InnerOrder>;
  poolCount?: InputMaybe<InnerOrder>;
  protocolFeesUSD?: InputMaybe<InnerOrder>;
  symbol?: InputMaybe<InnerOrder>;
  totalSupply?: InputMaybe<InnerOrder>;
  totalValueLocked?: InputMaybe<InnerOrder>;
  totalValueLockedUSD?: InputMaybe<InnerOrder>;
  txCount?: InputMaybe<InnerOrder>;
  volume?: InputMaybe<InnerOrder>;
  volumeUSD?: InputMaybe<InnerOrder>;
};

export type JettonPoolCountFilters = {
  OR?: InputMaybe<Array<JettonPoolCountfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonPoolCountfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonProtocolFeesUsdFilters = {
  OR?: InputMaybe<Array<JettonProtocolFeesUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonProtocolFeesUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonSelectItem = {
  __typename?: 'JettonSelectItem';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type JettonSymbolFilters = {
  OR?: InputMaybe<Array<JettonSymbolfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonSymbolfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonTotalSupplyFilters = {
  OR?: InputMaybe<Array<JettonTotalSupplyfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonTotalSupplyfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonTotalValueLockedFilters = {
  OR?: InputMaybe<Array<JettonTotalValueLockedfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonTotalValueLockedUsdFilters = {
  OR?: InputMaybe<Array<JettonTotalValueLockedUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonTotalValueLockedUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonTotalValueLockedfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonTxCountFilters = {
  OR?: InputMaybe<Array<JettonTxCountfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonTxCountfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonUpdateInput = {
  decimals?: InputMaybe<Scalars['Int']['input']>;
  derivedTon?: InputMaybe<Scalars['String']['input']>;
  derivedUSD?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feesUSD?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  poolCount?: InputMaybe<Scalars['String']['input']>;
  protocolFeesUSD?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  totalSupply?: InputMaybe<Scalars['String']['input']>;
  totalValueLocked?: InputMaybe<Scalars['String']['input']>;
  totalValueLockedUSD?: InputMaybe<Scalars['String']['input']>;
  txCount?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['String']['input']>;
  volumeUSD?: InputMaybe<Scalars['String']['input']>;
};

export type JettonVolumeFilters = {
  OR?: InputMaybe<Array<JettonVolumefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonVolumeUsdFilters = {
  OR?: InputMaybe<Array<JettonVolumeUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonVolumeUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type JettonVolumefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MetaFilters = {
  OR?: InputMaybe<Array<MetaFiltersOr>>;
  id?: InputMaybe<MetaIdFilters>;
  seqno?: InputMaybe<MetaSeqnoFilters>;
};

export type MetaFiltersOr = {
  id?: InputMaybe<MetaIdFilters>;
  seqno?: InputMaybe<MetaSeqnoFilters>;
};

export type MetaIdFilters = {
  OR?: InputMaybe<Array<MetaIdfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MetaIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MetaInsertInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  seqno: Scalars['Float']['input'];
};

export type MetaItem = {
  __typename?: 'MetaItem';
  id: Scalars['Int']['output'];
  seqno: Scalars['Float']['output'];
};

export type MetaOrderBy = {
  id?: InputMaybe<InnerOrder>;
  seqno?: InputMaybe<InnerOrder>;
};

export type MetaSelectItem = {
  __typename?: 'MetaSelectItem';
  id: Scalars['Int']['output'];
  seqno: Scalars['Float']['output'];
};

export type MetaSeqnoFilters = {
  OR?: InputMaybe<Array<MetaSeqnofiltersOr>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MetaSeqnofiltersOr = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MetaUpdateInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  seqno?: InputMaybe<Scalars['Float']['input']>;
};

export type MintAmount0Filters = {
  OR?: InputMaybe<Array<MintAmount0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintAmount0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintAmount1Filters = {
  OR?: InputMaybe<Array<MintAmount1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintAmount1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintAmountFilters = {
  OR?: InputMaybe<Array<MintAmountfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintAmountUsdFilters = {
  OR?: InputMaybe<Array<MintAmountUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintAmountUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintAmountfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintFilters = {
  OR?: InputMaybe<Array<MintFiltersOr>>;
  amount?: InputMaybe<MintAmountFilters>;
  amount0?: InputMaybe<MintAmount0Filters>;
  amount1?: InputMaybe<MintAmount1Filters>;
  amountUSD?: InputMaybe<MintAmountUsdFilters>;
  id?: InputMaybe<MintIdFilters>;
  jetton0Id?: InputMaybe<MintJetton0IdFilters>;
  jetton1Id?: InputMaybe<MintJetton1IdFilters>;
  owner?: InputMaybe<MintOwnerFilters>;
  poolId?: InputMaybe<MintPoolIdFilters>;
  sender?: InputMaybe<MintSenderFilters>;
  tickLower?: InputMaybe<MintTickLowerFilters>;
  tickUpper?: InputMaybe<MintTickUpperFilters>;
  timestamp?: InputMaybe<MintTimestampFilters>;
  transactionId?: InputMaybe<MintTransactionIdFilters>;
};

export type MintFiltersOr = {
  amount?: InputMaybe<MintAmountFilters>;
  amount0?: InputMaybe<MintAmount0Filters>;
  amount1?: InputMaybe<MintAmount1Filters>;
  amountUSD?: InputMaybe<MintAmountUsdFilters>;
  id?: InputMaybe<MintIdFilters>;
  jetton0Id?: InputMaybe<MintJetton0IdFilters>;
  jetton1Id?: InputMaybe<MintJetton1IdFilters>;
  owner?: InputMaybe<MintOwnerFilters>;
  poolId?: InputMaybe<MintPoolIdFilters>;
  sender?: InputMaybe<MintSenderFilters>;
  tickLower?: InputMaybe<MintTickLowerFilters>;
  tickUpper?: InputMaybe<MintTickUpperFilters>;
  timestamp?: InputMaybe<MintTimestampFilters>;
  transactionId?: InputMaybe<MintTransactionIdFilters>;
};

export type MintIdFilters = {
  OR?: InputMaybe<Array<MintIdfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintInsertInput = {
  amount: Scalars['String']['input'];
  amount0: Scalars['String']['input'];
  amount1: Scalars['String']['input'];
  amountUSD: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  jetton0Id: Scalars['String']['input'];
  jetton1Id: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  poolId: Scalars['String']['input'];
  sender: Scalars['String']['input'];
  /** BigInt */
  tickLower: Scalars['String']['input'];
  /** BigInt */
  tickUpper: Scalars['String']['input'];
  /** Date */
  timestamp: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
};

export type MintItem = {
  __typename?: 'MintItem';
  amount: Scalars['String']['output'];
  amount0: Scalars['String']['output'];
  amount1: Scalars['String']['output'];
  amountUSD: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  jetton0Id: Scalars['String']['output'];
  jetton1Id: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  poolId: Scalars['String']['output'];
  sender: Scalars['String']['output'];
  /** BigInt */
  tickLower: Scalars['String']['output'];
  /** BigInt */
  tickUpper: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
};

export type MintJetton0IdFilters = {
  OR?: InputMaybe<Array<MintJetton0IdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintJetton0IdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintJetton0Relation = {
  __typename?: 'MintJetton0Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type MintJetton1IdFilters = {
  OR?: InputMaybe<Array<MintJetton1IdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintJetton1IdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintJetton1Relation = {
  __typename?: 'MintJetton1Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type MintOrderBy = {
  amount?: InputMaybe<InnerOrder>;
  amount0?: InputMaybe<InnerOrder>;
  amount1?: InputMaybe<InnerOrder>;
  amountUSD?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  jetton0Id?: InputMaybe<InnerOrder>;
  jetton1Id?: InputMaybe<InnerOrder>;
  owner?: InputMaybe<InnerOrder>;
  poolId?: InputMaybe<InnerOrder>;
  sender?: InputMaybe<InnerOrder>;
  tickLower?: InputMaybe<InnerOrder>;
  tickUpper?: InputMaybe<InnerOrder>;
  timestamp?: InputMaybe<InnerOrder>;
  transactionId?: InputMaybe<InnerOrder>;
};

export type MintOwnerFilters = {
  OR?: InputMaybe<Array<MintOwnerfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintOwnerfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintPoolIdFilters = {
  OR?: InputMaybe<Array<MintPoolIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintPoolIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintPoolRelation = {
  __typename?: 'MintPoolRelation';
  collectedFeesJetton0: Scalars['String']['output'];
  collectedFeesJetton1: Scalars['String']['output'];
  collectedFeesUSD: Scalars['String']['output'];
  feeGrowthGlobal0X128: Scalars['String']['output'];
  feeGrowthGlobal1X128: Scalars['String']['output'];
  /** BigInt */
  feeProtocol: Scalars['String']['output'];
  /** BigInt */
  feeTier: Scalars['String']['output'];
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jetton0?: Maybe<MintPoolRelationJetton0Relation>;
  jetton0Id: Scalars['String']['output'];
  jetton0Price: Scalars['String']['output'];
  jetton1?: Maybe<MintPoolRelationJetton1Relation>;
  jetton1Id: Scalars['String']['output'];
  jetton1Price: Scalars['String']['output'];
  liquidity: Scalars['String']['output'];
  liquidityProviderCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  sqrtPrice: Scalars['String']['output'];
  /** BigInt */
  tick: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  totalValueLockedJetton0: Scalars['String']['output'];
  totalValueLockedJetton1: Scalars['String']['output'];
  totalValueLockedTon: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volumeJetton0: Scalars['String']['output'];
  volumeJetton1: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};


export type MintPoolRelationJetton0Args = {
  where?: InputMaybe<JettonFilters>;
};


export type MintPoolRelationJetton1Args = {
  where?: InputMaybe<JettonFilters>;
};

export type MintPoolRelationJetton0Relation = {
  __typename?: 'MintPoolRelationJetton0Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type MintPoolRelationJetton1Relation = {
  __typename?: 'MintPoolRelationJetton1Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type MintSelectItem = {
  __typename?: 'MintSelectItem';
  amount: Scalars['String']['output'];
  amount0: Scalars['String']['output'];
  amount1: Scalars['String']['output'];
  amountUSD: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  jetton0?: Maybe<MintJetton0Relation>;
  jetton0Id: Scalars['String']['output'];
  jetton1?: Maybe<MintJetton1Relation>;
  jetton1Id: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  pool?: Maybe<MintPoolRelation>;
  poolId: Scalars['String']['output'];
  sender: Scalars['String']['output'];
  /** BigInt */
  tickLower: Scalars['String']['output'];
  /** BigInt */
  tickUpper: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
};


export type MintSelectItemJetton0Args = {
  where?: InputMaybe<JettonFilters>;
};


export type MintSelectItemJetton1Args = {
  where?: InputMaybe<JettonFilters>;
};


export type MintSelectItemPoolArgs = {
  where?: InputMaybe<PoolFilters>;
};

export type MintSenderFilters = {
  OR?: InputMaybe<Array<MintSenderfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintSenderfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintTickLowerFilters = {
  OR?: InputMaybe<Array<MintTickLowerfiltersOr>>;
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintTickLowerfiltersOr = {
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintTickUpperFilters = {
  OR?: InputMaybe<Array<MintTickUpperfiltersOr>>;
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintTickUpperfiltersOr = {
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintTimestampFilters = {
  OR?: InputMaybe<Array<MintTimestampfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintTimestampfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintTransactionIdFilters = {
  OR?: InputMaybe<Array<MintTransactionIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintTransactionIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type MintUpdateInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  amount0?: InputMaybe<Scalars['String']['input']>;
  amount1?: InputMaybe<Scalars['String']['input']>;
  amountUSD?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jetton0Id?: InputMaybe<Scalars['String']['input']>;
  jetton1Id?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  tickLower?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  tickUpper?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  timestamp?: InputMaybe<Scalars['String']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
};

/** Order by direction */
export enum OrderDirection {
  /** Ascending order */
  Asc = 'asc',
  /** Descending order */
  Desc = 'desc'
}

export type PoolCollectedFeesJetton0Filters = {
  OR?: InputMaybe<Array<PoolCollectedFeesJetton0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolCollectedFeesJetton0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolCollectedFeesJetton1Filters = {
  OR?: InputMaybe<Array<PoolCollectedFeesJetton1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolCollectedFeesJetton1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolCollectedFeesUsdFilters = {
  OR?: InputMaybe<Array<PoolCollectedFeesUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolCollectedFeesUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataFeeGrowthGlobal0X128Filters = {
  OR?: InputMaybe<Array<PoolDataFeeGrowthGlobal0X128filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataFeeGrowthGlobal0X128filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataFeeGrowthGlobal1X128Filters = {
  OR?: InputMaybe<Array<PoolDataFeeGrowthGlobal1X128filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataFeeGrowthGlobal1X128filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataFeesUsdFilters = {
  OR?: InputMaybe<Array<PoolDataFeesUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataFeesUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataFilters = {
  OR?: InputMaybe<Array<PoolDataFiltersOr>>;
  feeGrowthGlobal0X128?: InputMaybe<PoolDataFeeGrowthGlobal0X128Filters>;
  feeGrowthGlobal1X128?: InputMaybe<PoolDataFeeGrowthGlobal1X128Filters>;
  feesUSD?: InputMaybe<PoolDataFeesUsdFilters>;
  id?: InputMaybe<PoolDataIdFilters>;
  jetton0Price?: InputMaybe<PoolDataJetton0PriceFilters>;
  jetton1Price?: InputMaybe<PoolDataJetton1PriceFilters>;
  liquidity?: InputMaybe<PoolDataLiquidityFilters>;
  poolId?: InputMaybe<PoolDataPoolIdFilters>;
  protocolFeesUSD?: InputMaybe<PoolDataProtocolFeesUsdFilters>;
  sqrtPrice?: InputMaybe<PoolDataSqrtPriceFilters>;
  tick?: InputMaybe<PoolDataTickFilters>;
  timestamp?: InputMaybe<PoolDataTimestampFilters>;
  tvlUSD?: InputMaybe<PoolDataTvlUsdFilters>;
  txCount?: InputMaybe<PoolDataTxCountFilters>;
  volumeJetton0?: InputMaybe<PoolDataVolumeJetton0Filters>;
  volumeJetton1?: InputMaybe<PoolDataVolumeJetton1Filters>;
  volumeUSD?: InputMaybe<PoolDataVolumeUsdFilters>;
};

export type PoolDataFiltersOr = {
  feeGrowthGlobal0X128?: InputMaybe<PoolDataFeeGrowthGlobal0X128Filters>;
  feeGrowthGlobal1X128?: InputMaybe<PoolDataFeeGrowthGlobal1X128Filters>;
  feesUSD?: InputMaybe<PoolDataFeesUsdFilters>;
  id?: InputMaybe<PoolDataIdFilters>;
  jetton0Price?: InputMaybe<PoolDataJetton0PriceFilters>;
  jetton1Price?: InputMaybe<PoolDataJetton1PriceFilters>;
  liquidity?: InputMaybe<PoolDataLiquidityFilters>;
  poolId?: InputMaybe<PoolDataPoolIdFilters>;
  protocolFeesUSD?: InputMaybe<PoolDataProtocolFeesUsdFilters>;
  sqrtPrice?: InputMaybe<PoolDataSqrtPriceFilters>;
  tick?: InputMaybe<PoolDataTickFilters>;
  timestamp?: InputMaybe<PoolDataTimestampFilters>;
  tvlUSD?: InputMaybe<PoolDataTvlUsdFilters>;
  txCount?: InputMaybe<PoolDataTxCountFilters>;
  volumeJetton0?: InputMaybe<PoolDataVolumeJetton0Filters>;
  volumeJetton1?: InputMaybe<PoolDataVolumeJetton1Filters>;
  volumeUSD?: InputMaybe<PoolDataVolumeUsdFilters>;
};

export type PoolDataIdFilters = {
  OR?: InputMaybe<Array<PoolDataIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataInsertInput = {
  feeGrowthGlobal0X128: Scalars['String']['input'];
  feeGrowthGlobal1X128: Scalars['String']['input'];
  feesUSD: Scalars['String']['input'];
  id: Scalars['String']['input'];
  jetton0Price: Scalars['String']['input'];
  jetton1Price: Scalars['String']['input'];
  liquidity: Scalars['String']['input'];
  poolId: Scalars['String']['input'];
  protocolFeesUSD: Scalars['String']['input'];
  sqrtPrice: Scalars['String']['input'];
  /** BigInt */
  tick: Scalars['String']['input'];
  /** Date */
  timestamp: Scalars['String']['input'];
  tvlUSD: Scalars['String']['input'];
  txCount: Scalars['String']['input'];
  volumeJetton0: Scalars['String']['input'];
  volumeJetton1: Scalars['String']['input'];
  volumeUSD: Scalars['String']['input'];
};

export type PoolDataItem = {
  __typename?: 'PoolDataItem';
  feeGrowthGlobal0X128: Scalars['String']['output'];
  feeGrowthGlobal1X128: Scalars['String']['output'];
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jetton0Price: Scalars['String']['output'];
  jetton1Price: Scalars['String']['output'];
  liquidity: Scalars['String']['output'];
  poolId: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  sqrtPrice: Scalars['String']['output'];
  /** BigInt */
  tick: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  tvlUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volumeJetton0: Scalars['String']['output'];
  volumeJetton1: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type PoolDataJetton0PriceFilters = {
  OR?: InputMaybe<Array<PoolDataJetton0PricefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataJetton0PricefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataJetton1PriceFilters = {
  OR?: InputMaybe<Array<PoolDataJetton1PricefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataJetton1PricefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataLiquidityFilters = {
  OR?: InputMaybe<Array<PoolDataLiquidityfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataLiquidityfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataOrderBy = {
  feeGrowthGlobal0X128?: InputMaybe<InnerOrder>;
  feeGrowthGlobal1X128?: InputMaybe<InnerOrder>;
  feesUSD?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  jetton0Price?: InputMaybe<InnerOrder>;
  jetton1Price?: InputMaybe<InnerOrder>;
  liquidity?: InputMaybe<InnerOrder>;
  poolId?: InputMaybe<InnerOrder>;
  protocolFeesUSD?: InputMaybe<InnerOrder>;
  sqrtPrice?: InputMaybe<InnerOrder>;
  tick?: InputMaybe<InnerOrder>;
  timestamp?: InputMaybe<InnerOrder>;
  tvlUSD?: InputMaybe<InnerOrder>;
  txCount?: InputMaybe<InnerOrder>;
  volumeJetton0?: InputMaybe<InnerOrder>;
  volumeJetton1?: InputMaybe<InnerOrder>;
  volumeUSD?: InputMaybe<InnerOrder>;
};

export type PoolDataPoolIdFilters = {
  OR?: InputMaybe<Array<PoolDataPoolIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataPoolIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataPoolRelation = {
  __typename?: 'PoolDataPoolRelation';
  collectedFeesJetton0: Scalars['String']['output'];
  collectedFeesJetton1: Scalars['String']['output'];
  collectedFeesUSD: Scalars['String']['output'];
  feeGrowthGlobal0X128: Scalars['String']['output'];
  feeGrowthGlobal1X128: Scalars['String']['output'];
  /** BigInt */
  feeProtocol: Scalars['String']['output'];
  /** BigInt */
  feeTier: Scalars['String']['output'];
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jetton0?: Maybe<PoolDataPoolRelationJetton0Relation>;
  jetton0Id: Scalars['String']['output'];
  jetton0Price: Scalars['String']['output'];
  jetton1?: Maybe<PoolDataPoolRelationJetton1Relation>;
  jetton1Id: Scalars['String']['output'];
  jetton1Price: Scalars['String']['output'];
  liquidity: Scalars['String']['output'];
  liquidityProviderCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  sqrtPrice: Scalars['String']['output'];
  /** BigInt */
  tick: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  totalValueLockedJetton0: Scalars['String']['output'];
  totalValueLockedJetton1: Scalars['String']['output'];
  totalValueLockedTon: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volumeJetton0: Scalars['String']['output'];
  volumeJetton1: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};


export type PoolDataPoolRelationJetton0Args = {
  where?: InputMaybe<JettonFilters>;
};


export type PoolDataPoolRelationJetton1Args = {
  where?: InputMaybe<JettonFilters>;
};

export type PoolDataPoolRelationJetton0Relation = {
  __typename?: 'PoolDataPoolRelationJetton0Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type PoolDataPoolRelationJetton1Relation = {
  __typename?: 'PoolDataPoolRelationJetton1Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type PoolDataProtocolFeesUsdFilters = {
  OR?: InputMaybe<Array<PoolDataProtocolFeesUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataProtocolFeesUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataSelectItem = {
  __typename?: 'PoolDataSelectItem';
  feeGrowthGlobal0X128: Scalars['String']['output'];
  feeGrowthGlobal1X128: Scalars['String']['output'];
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jetton0Price: Scalars['String']['output'];
  jetton1Price: Scalars['String']['output'];
  liquidity: Scalars['String']['output'];
  pool?: Maybe<PoolDataPoolRelation>;
  poolId: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  sqrtPrice: Scalars['String']['output'];
  /** BigInt */
  tick: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  tvlUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volumeJetton0: Scalars['String']['output'];
  volumeJetton1: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};


export type PoolDataSelectItemPoolArgs = {
  where?: InputMaybe<PoolFilters>;
};

export type PoolDataSqrtPriceFilters = {
  OR?: InputMaybe<Array<PoolDataSqrtPricefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataSqrtPricefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataTickFilters = {
  OR?: InputMaybe<Array<PoolDataTickfiltersOr>>;
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataTickfiltersOr = {
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataTimestampFilters = {
  OR?: InputMaybe<Array<PoolDataTimestampfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataTimestampfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataTvlUsdFilters = {
  OR?: InputMaybe<Array<PoolDataTvlUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataTvlUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataTxCountFilters = {
  OR?: InputMaybe<Array<PoolDataTxCountfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataTxCountfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataUpdateInput = {
  feeGrowthGlobal0X128?: InputMaybe<Scalars['String']['input']>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['String']['input']>;
  feesUSD?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  jetton0Price?: InputMaybe<Scalars['String']['input']>;
  jetton1Price?: InputMaybe<Scalars['String']['input']>;
  liquidity?: InputMaybe<Scalars['String']['input']>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  protocolFeesUSD?: InputMaybe<Scalars['String']['input']>;
  sqrtPrice?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  tick?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  timestamp?: InputMaybe<Scalars['String']['input']>;
  tvlUSD?: InputMaybe<Scalars['String']['input']>;
  txCount?: InputMaybe<Scalars['String']['input']>;
  volumeJetton0?: InputMaybe<Scalars['String']['input']>;
  volumeJetton1?: InputMaybe<Scalars['String']['input']>;
  volumeUSD?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataVolumeJetton0Filters = {
  OR?: InputMaybe<Array<PoolDataVolumeJetton0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataVolumeJetton0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataVolumeJetton1Filters = {
  OR?: InputMaybe<Array<PoolDataVolumeJetton1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataVolumeJetton1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataVolumeUsdFilters = {
  OR?: InputMaybe<Array<PoolDataVolumeUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolDataVolumeUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolFeeGrowthGlobal0X128Filters = {
  OR?: InputMaybe<Array<PoolFeeGrowthGlobal0X128filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolFeeGrowthGlobal0X128filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolFeeGrowthGlobal1X128Filters = {
  OR?: InputMaybe<Array<PoolFeeGrowthGlobal1X128filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolFeeGrowthGlobal1X128filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolFeeProtocolFilters = {
  OR?: InputMaybe<Array<PoolFeeProtocolfiltersOr>>;
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolFeeProtocolfiltersOr = {
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolFeeTierFilters = {
  OR?: InputMaybe<Array<PoolFeeTierfiltersOr>>;
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolFeeTierfiltersOr = {
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolFeesUsdFilters = {
  OR?: InputMaybe<Array<PoolFeesUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolFeesUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolFilters = {
  OR?: InputMaybe<Array<PoolFiltersOr>>;
  collectedFeesJetton0?: InputMaybe<PoolCollectedFeesJetton0Filters>;
  collectedFeesJetton1?: InputMaybe<PoolCollectedFeesJetton1Filters>;
  collectedFeesUSD?: InputMaybe<PoolCollectedFeesUsdFilters>;
  feeGrowthGlobal0X128?: InputMaybe<PoolFeeGrowthGlobal0X128Filters>;
  feeGrowthGlobal1X128?: InputMaybe<PoolFeeGrowthGlobal1X128Filters>;
  feeProtocol?: InputMaybe<PoolFeeProtocolFilters>;
  feeTier?: InputMaybe<PoolFeeTierFilters>;
  feesUSD?: InputMaybe<PoolFeesUsdFilters>;
  id?: InputMaybe<PoolIdFilters>;
  jetton0Id?: InputMaybe<PoolJetton0IdFilters>;
  jetton0Price?: InputMaybe<PoolJetton0PriceFilters>;
  jetton1Id?: InputMaybe<PoolJetton1IdFilters>;
  jetton1Price?: InputMaybe<PoolJetton1PriceFilters>;
  liquidity?: InputMaybe<PoolLiquidityFilters>;
  liquidityProviderCount?: InputMaybe<PoolLiquidityProviderCountFilters>;
  protocolFeesUSD?: InputMaybe<PoolProtocolFeesUsdFilters>;
  sqrtPrice?: InputMaybe<PoolSqrtPriceFilters>;
  tick?: InputMaybe<PoolTickFilters>;
  timestamp?: InputMaybe<PoolTimestampFilters>;
  totalValueLockedJetton0?: InputMaybe<PoolTotalValueLockedJetton0Filters>;
  totalValueLockedJetton1?: InputMaybe<PoolTotalValueLockedJetton1Filters>;
  totalValueLockedTon?: InputMaybe<PoolTotalValueLockedTonFilters>;
  totalValueLockedUSD?: InputMaybe<PoolTotalValueLockedUsdFilters>;
  transactionId?: InputMaybe<PoolTransactionIdFilters>;
  txCount?: InputMaybe<PoolTxCountFilters>;
  volumeJetton0?: InputMaybe<PoolVolumeJetton0Filters>;
  volumeJetton1?: InputMaybe<PoolVolumeJetton1Filters>;
  volumeUSD?: InputMaybe<PoolVolumeUsdFilters>;
};

export type PoolFiltersOr = {
  collectedFeesJetton0?: InputMaybe<PoolCollectedFeesJetton0Filters>;
  collectedFeesJetton1?: InputMaybe<PoolCollectedFeesJetton1Filters>;
  collectedFeesUSD?: InputMaybe<PoolCollectedFeesUsdFilters>;
  feeGrowthGlobal0X128?: InputMaybe<PoolFeeGrowthGlobal0X128Filters>;
  feeGrowthGlobal1X128?: InputMaybe<PoolFeeGrowthGlobal1X128Filters>;
  feeProtocol?: InputMaybe<PoolFeeProtocolFilters>;
  feeTier?: InputMaybe<PoolFeeTierFilters>;
  feesUSD?: InputMaybe<PoolFeesUsdFilters>;
  id?: InputMaybe<PoolIdFilters>;
  jetton0Id?: InputMaybe<PoolJetton0IdFilters>;
  jetton0Price?: InputMaybe<PoolJetton0PriceFilters>;
  jetton1Id?: InputMaybe<PoolJetton1IdFilters>;
  jetton1Price?: InputMaybe<PoolJetton1PriceFilters>;
  liquidity?: InputMaybe<PoolLiquidityFilters>;
  liquidityProviderCount?: InputMaybe<PoolLiquidityProviderCountFilters>;
  protocolFeesUSD?: InputMaybe<PoolProtocolFeesUsdFilters>;
  sqrtPrice?: InputMaybe<PoolSqrtPriceFilters>;
  tick?: InputMaybe<PoolTickFilters>;
  timestamp?: InputMaybe<PoolTimestampFilters>;
  totalValueLockedJetton0?: InputMaybe<PoolTotalValueLockedJetton0Filters>;
  totalValueLockedJetton1?: InputMaybe<PoolTotalValueLockedJetton1Filters>;
  totalValueLockedTon?: InputMaybe<PoolTotalValueLockedTonFilters>;
  totalValueLockedUSD?: InputMaybe<PoolTotalValueLockedUsdFilters>;
  transactionId?: InputMaybe<PoolTransactionIdFilters>;
  txCount?: InputMaybe<PoolTxCountFilters>;
  volumeJetton0?: InputMaybe<PoolVolumeJetton0Filters>;
  volumeJetton1?: InputMaybe<PoolVolumeJetton1Filters>;
  volumeUSD?: InputMaybe<PoolVolumeUsdFilters>;
};

export type PoolIdFilters = {
  OR?: InputMaybe<Array<PoolIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolInsertInput = {
  collectedFeesJetton0: Scalars['String']['input'];
  collectedFeesJetton1: Scalars['String']['input'];
  collectedFeesUSD: Scalars['String']['input'];
  feeGrowthGlobal0X128: Scalars['String']['input'];
  feeGrowthGlobal1X128: Scalars['String']['input'];
  /** BigInt */
  feeProtocol: Scalars['String']['input'];
  /** BigInt */
  feeTier: Scalars['String']['input'];
  feesUSD: Scalars['String']['input'];
  id: Scalars['String']['input'];
  jetton0Id: Scalars['String']['input'];
  jetton0Price: Scalars['String']['input'];
  jetton1Id: Scalars['String']['input'];
  jetton1Price: Scalars['String']['input'];
  liquidity: Scalars['String']['input'];
  liquidityProviderCount: Scalars['String']['input'];
  protocolFeesUSD: Scalars['String']['input'];
  sqrtPrice: Scalars['String']['input'];
  /** BigInt */
  tick: Scalars['String']['input'];
  /** Date */
  timestamp: Scalars['String']['input'];
  totalValueLockedJetton0: Scalars['String']['input'];
  totalValueLockedJetton1: Scalars['String']['input'];
  totalValueLockedTon: Scalars['String']['input'];
  totalValueLockedUSD: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
  txCount: Scalars['String']['input'];
  volumeJetton0: Scalars['String']['input'];
  volumeJetton1: Scalars['String']['input'];
  volumeUSD: Scalars['String']['input'];
};

export type PoolItem = {
  __typename?: 'PoolItem';
  collectedFeesJetton0: Scalars['String']['output'];
  collectedFeesJetton1: Scalars['String']['output'];
  collectedFeesUSD: Scalars['String']['output'];
  feeGrowthGlobal0X128: Scalars['String']['output'];
  feeGrowthGlobal1X128: Scalars['String']['output'];
  /** BigInt */
  feeProtocol: Scalars['String']['output'];
  /** BigInt */
  feeTier: Scalars['String']['output'];
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jetton0Id: Scalars['String']['output'];
  jetton0Price: Scalars['String']['output'];
  jetton1Id: Scalars['String']['output'];
  jetton1Price: Scalars['String']['output'];
  liquidity: Scalars['String']['output'];
  liquidityProviderCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  sqrtPrice: Scalars['String']['output'];
  /** BigInt */
  tick: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  totalValueLockedJetton0: Scalars['String']['output'];
  totalValueLockedJetton1: Scalars['String']['output'];
  totalValueLockedTon: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volumeJetton0: Scalars['String']['output'];
  volumeJetton1: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type PoolJetton0IdFilters = {
  OR?: InputMaybe<Array<PoolJetton0IdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolJetton0IdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolJetton0PriceFilters = {
  OR?: InputMaybe<Array<PoolJetton0PricefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolJetton0PricefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolJetton0Relation = {
  __typename?: 'PoolJetton0Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type PoolJetton1IdFilters = {
  OR?: InputMaybe<Array<PoolJetton1IdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolJetton1IdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolJetton1PriceFilters = {
  OR?: InputMaybe<Array<PoolJetton1PricefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolJetton1PricefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolJetton1Relation = {
  __typename?: 'PoolJetton1Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type PoolLiquidityFilters = {
  OR?: InputMaybe<Array<PoolLiquidityfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolLiquidityProviderCountFilters = {
  OR?: InputMaybe<Array<PoolLiquidityProviderCountfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolLiquidityProviderCountfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolLiquidityfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolOrderBy = {
  collectedFeesJetton0?: InputMaybe<InnerOrder>;
  collectedFeesJetton1?: InputMaybe<InnerOrder>;
  collectedFeesUSD?: InputMaybe<InnerOrder>;
  feeGrowthGlobal0X128?: InputMaybe<InnerOrder>;
  feeGrowthGlobal1X128?: InputMaybe<InnerOrder>;
  feeProtocol?: InputMaybe<InnerOrder>;
  feeTier?: InputMaybe<InnerOrder>;
  feesUSD?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  jetton0Id?: InputMaybe<InnerOrder>;
  jetton0Price?: InputMaybe<InnerOrder>;
  jetton1Id?: InputMaybe<InnerOrder>;
  jetton1Price?: InputMaybe<InnerOrder>;
  liquidity?: InputMaybe<InnerOrder>;
  liquidityProviderCount?: InputMaybe<InnerOrder>;
  protocolFeesUSD?: InputMaybe<InnerOrder>;
  sqrtPrice?: InputMaybe<InnerOrder>;
  tick?: InputMaybe<InnerOrder>;
  timestamp?: InputMaybe<InnerOrder>;
  totalValueLockedJetton0?: InputMaybe<InnerOrder>;
  totalValueLockedJetton1?: InputMaybe<InnerOrder>;
  totalValueLockedTon?: InputMaybe<InnerOrder>;
  totalValueLockedUSD?: InputMaybe<InnerOrder>;
  transactionId?: InputMaybe<InnerOrder>;
  txCount?: InputMaybe<InnerOrder>;
  volumeJetton0?: InputMaybe<InnerOrder>;
  volumeJetton1?: InputMaybe<InnerOrder>;
  volumeUSD?: InputMaybe<InnerOrder>;
};

export type PoolProtocolFeesUsdFilters = {
  OR?: InputMaybe<Array<PoolProtocolFeesUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolProtocolFeesUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolSelectItem = {
  __typename?: 'PoolSelectItem';
  collectedFeesJetton0: Scalars['String']['output'];
  collectedFeesJetton1: Scalars['String']['output'];
  collectedFeesUSD: Scalars['String']['output'];
  feeGrowthGlobal0X128: Scalars['String']['output'];
  feeGrowthGlobal1X128: Scalars['String']['output'];
  /** BigInt */
  feeProtocol: Scalars['String']['output'];
  /** BigInt */
  feeTier: Scalars['String']['output'];
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jetton0?: Maybe<PoolJetton0Relation>;
  jetton0Id: Scalars['String']['output'];
  jetton0Price: Scalars['String']['output'];
  jetton1?: Maybe<PoolJetton1Relation>;
  jetton1Id: Scalars['String']['output'];
  jetton1Price: Scalars['String']['output'];
  liquidity: Scalars['String']['output'];
  liquidityProviderCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  sqrtPrice: Scalars['String']['output'];
  /** BigInt */
  tick: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  totalValueLockedJetton0: Scalars['String']['output'];
  totalValueLockedJetton1: Scalars['String']['output'];
  totalValueLockedTon: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volumeJetton0: Scalars['String']['output'];
  volumeJetton1: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};


export type PoolSelectItemJetton0Args = {
  where?: InputMaybe<JettonFilters>;
};


export type PoolSelectItemJetton1Args = {
  where?: InputMaybe<JettonFilters>;
};

export type PoolSqrtPriceFilters = {
  OR?: InputMaybe<Array<PoolSqrtPricefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolSqrtPricefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolTickFilters = {
  OR?: InputMaybe<Array<PoolTickfiltersOr>>;
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolTickfiltersOr = {
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolTimestampFilters = {
  OR?: InputMaybe<Array<PoolTimestampfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolTimestampfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolTotalValueLockedJetton0Filters = {
  OR?: InputMaybe<Array<PoolTotalValueLockedJetton0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolTotalValueLockedJetton0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolTotalValueLockedJetton1Filters = {
  OR?: InputMaybe<Array<PoolTotalValueLockedJetton1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolTotalValueLockedJetton1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolTotalValueLockedTonFilters = {
  OR?: InputMaybe<Array<PoolTotalValueLockedTonfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolTotalValueLockedTonfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolTotalValueLockedUsdFilters = {
  OR?: InputMaybe<Array<PoolTotalValueLockedUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolTotalValueLockedUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolTransactionIdFilters = {
  OR?: InputMaybe<Array<PoolTransactionIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolTransactionIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolTxCountFilters = {
  OR?: InputMaybe<Array<PoolTxCountfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolTxCountfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolUpdateInput = {
  collectedFeesJetton0?: InputMaybe<Scalars['String']['input']>;
  collectedFeesJetton1?: InputMaybe<Scalars['String']['input']>;
  collectedFeesUSD?: InputMaybe<Scalars['String']['input']>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['String']['input']>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  feeProtocol?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  feeTier?: InputMaybe<Scalars['String']['input']>;
  feesUSD?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  jetton0Id?: InputMaybe<Scalars['String']['input']>;
  jetton0Price?: InputMaybe<Scalars['String']['input']>;
  jetton1Id?: InputMaybe<Scalars['String']['input']>;
  jetton1Price?: InputMaybe<Scalars['String']['input']>;
  liquidity?: InputMaybe<Scalars['String']['input']>;
  liquidityProviderCount?: InputMaybe<Scalars['String']['input']>;
  protocolFeesUSD?: InputMaybe<Scalars['String']['input']>;
  sqrtPrice?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  tick?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  timestamp?: InputMaybe<Scalars['String']['input']>;
  totalValueLockedJetton0?: InputMaybe<Scalars['String']['input']>;
  totalValueLockedJetton1?: InputMaybe<Scalars['String']['input']>;
  totalValueLockedTon?: InputMaybe<Scalars['String']['input']>;
  totalValueLockedUSD?: InputMaybe<Scalars['String']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  txCount?: InputMaybe<Scalars['String']['input']>;
  volumeJetton0?: InputMaybe<Scalars['String']['input']>;
  volumeJetton1?: InputMaybe<Scalars['String']['input']>;
  volumeUSD?: InputMaybe<Scalars['String']['input']>;
};

export type PoolVolumeJetton0Filters = {
  OR?: InputMaybe<Array<PoolVolumeJetton0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolVolumeJetton0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolVolumeJetton1Filters = {
  OR?: InputMaybe<Array<PoolVolumeJetton1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolVolumeJetton1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolVolumeUsdFilters = {
  OR?: InputMaybe<Array<PoolVolumeUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PoolVolumeUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionCollectedFeeJetton0Filters = {
  OR?: InputMaybe<Array<PositionCollectedFeeJetton0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionCollectedFeeJetton0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionCollectedFeeJetton1Filters = {
  OR?: InputMaybe<Array<PositionCollectedFeeJetton1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionCollectedFeeJetton1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataBlockFilters = {
  OR?: InputMaybe<Array<PositionDataBlockfiltersOr>>;
  /** JSON */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataBlockfiltersOr = {
  /** JSON */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataCollectedFeeJetton0Filters = {
  OR?: InputMaybe<Array<PositionDataCollectedFeeJetton0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataCollectedFeeJetton0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataCollectedFeeJetton1Filters = {
  OR?: InputMaybe<Array<PositionDataCollectedFeeJetton1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataCollectedFeeJetton1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataDepositedJetton0Filters = {
  OR?: InputMaybe<Array<PositionDataDepositedJetton0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataDepositedJetton0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataDepositedJetton1Filters = {
  OR?: InputMaybe<Array<PositionDataDepositedJetton1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataDepositedJetton1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataFeeGrowthInside0LastX128Filters = {
  OR?: InputMaybe<Array<PositionDataFeeGrowthInside0LastX128filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataFeeGrowthInside0LastX128filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataFeeGrowthInside1LastX128Filters = {
  OR?: InputMaybe<Array<PositionDataFeeGrowthInside1LastX128filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataFeeGrowthInside1LastX128filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataFilters = {
  OR?: InputMaybe<Array<PositionDataFiltersOr>>;
  block?: InputMaybe<PositionDataBlockFilters>;
  collectedFeeJetton0?: InputMaybe<PositionDataCollectedFeeJetton0Filters>;
  collectedFeeJetton1?: InputMaybe<PositionDataCollectedFeeJetton1Filters>;
  depositedJetton0?: InputMaybe<PositionDataDepositedJetton0Filters>;
  depositedJetton1?: InputMaybe<PositionDataDepositedJetton1Filters>;
  feeGrowthInside0LastX128?: InputMaybe<PositionDataFeeGrowthInside0LastX128Filters>;
  feeGrowthInside1LastX128?: InputMaybe<PositionDataFeeGrowthInside1LastX128Filters>;
  id?: InputMaybe<PositionDataIdFilters>;
  liquidity?: InputMaybe<PositionDataLiquidityFilters>;
  owner?: InputMaybe<PositionDataOwnerFilters>;
  poolId?: InputMaybe<PositionDataPoolIdFilters>;
  positionId?: InputMaybe<PositionDataPositionIdFilters>;
  timestamp?: InputMaybe<PositionDataTimestampFilters>;
  withdrawnJetton0?: InputMaybe<PositionDataWithdrawnJetton0Filters>;
  withdrawnJetton1?: InputMaybe<PositionDataWithdrawnJetton1Filters>;
};

export type PositionDataFiltersOr = {
  block?: InputMaybe<PositionDataBlockFilters>;
  collectedFeeJetton0?: InputMaybe<PositionDataCollectedFeeJetton0Filters>;
  collectedFeeJetton1?: InputMaybe<PositionDataCollectedFeeJetton1Filters>;
  depositedJetton0?: InputMaybe<PositionDataDepositedJetton0Filters>;
  depositedJetton1?: InputMaybe<PositionDataDepositedJetton1Filters>;
  feeGrowthInside0LastX128?: InputMaybe<PositionDataFeeGrowthInside0LastX128Filters>;
  feeGrowthInside1LastX128?: InputMaybe<PositionDataFeeGrowthInside1LastX128Filters>;
  id?: InputMaybe<PositionDataIdFilters>;
  liquidity?: InputMaybe<PositionDataLiquidityFilters>;
  owner?: InputMaybe<PositionDataOwnerFilters>;
  poolId?: InputMaybe<PositionDataPoolIdFilters>;
  positionId?: InputMaybe<PositionDataPositionIdFilters>;
  timestamp?: InputMaybe<PositionDataTimestampFilters>;
  withdrawnJetton0?: InputMaybe<PositionDataWithdrawnJetton0Filters>;
  withdrawnJetton1?: InputMaybe<PositionDataWithdrawnJetton1Filters>;
};

export type PositionDataIdFilters = {
  OR?: InputMaybe<Array<PositionDataIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataInsertInput = {
  /** JSON */
  block: Scalars['String']['input'];
  collectedFeeJetton0: Scalars['String']['input'];
  collectedFeeJetton1: Scalars['String']['input'];
  depositedJetton0: Scalars['String']['input'];
  depositedJetton1: Scalars['String']['input'];
  feeGrowthInside0LastX128: Scalars['String']['input'];
  feeGrowthInside1LastX128: Scalars['String']['input'];
  id: Scalars['String']['input'];
  liquidity: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  poolId: Scalars['String']['input'];
  positionId: Scalars['String']['input'];
  /** Date */
  timestamp: Scalars['String']['input'];
  withdrawnJetton0: Scalars['String']['input'];
  withdrawnJetton1: Scalars['String']['input'];
};

export type PositionDataItem = {
  __typename?: 'PositionDataItem';
  /** JSON */
  block: Scalars['String']['output'];
  collectedFeeJetton0: Scalars['String']['output'];
  collectedFeeJetton1: Scalars['String']['output'];
  depositedJetton0: Scalars['String']['output'];
  depositedJetton1: Scalars['String']['output'];
  feeGrowthInside0LastX128: Scalars['String']['output'];
  feeGrowthInside1LastX128: Scalars['String']['output'];
  id: Scalars['String']['output'];
  liquidity: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  poolId: Scalars['String']['output'];
  positionId: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  withdrawnJetton0: Scalars['String']['output'];
  withdrawnJetton1: Scalars['String']['output'];
};

export type PositionDataLiquidityFilters = {
  OR?: InputMaybe<Array<PositionDataLiquidityfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataLiquidityfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataOrderBy = {
  block?: InputMaybe<InnerOrder>;
  collectedFeeJetton0?: InputMaybe<InnerOrder>;
  collectedFeeJetton1?: InputMaybe<InnerOrder>;
  depositedJetton0?: InputMaybe<InnerOrder>;
  depositedJetton1?: InputMaybe<InnerOrder>;
  feeGrowthInside0LastX128?: InputMaybe<InnerOrder>;
  feeGrowthInside1LastX128?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  liquidity?: InputMaybe<InnerOrder>;
  owner?: InputMaybe<InnerOrder>;
  poolId?: InputMaybe<InnerOrder>;
  positionId?: InputMaybe<InnerOrder>;
  timestamp?: InputMaybe<InnerOrder>;
  withdrawnJetton0?: InputMaybe<InnerOrder>;
  withdrawnJetton1?: InputMaybe<InnerOrder>;
};

export type PositionDataOwnerFilters = {
  OR?: InputMaybe<Array<PositionDataOwnerfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataOwnerfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataPoolIdFilters = {
  OR?: InputMaybe<Array<PositionDataPoolIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataPoolIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataPositionIdFilters = {
  OR?: InputMaybe<Array<PositionDataPositionIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataPositionIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataSelectItem = {
  __typename?: 'PositionDataSelectItem';
  /** JSON */
  block: Scalars['String']['output'];
  collectedFeeJetton0: Scalars['String']['output'];
  collectedFeeJetton1: Scalars['String']['output'];
  depositedJetton0: Scalars['String']['output'];
  depositedJetton1: Scalars['String']['output'];
  feeGrowthInside0LastX128: Scalars['String']['output'];
  feeGrowthInside1LastX128: Scalars['String']['output'];
  id: Scalars['String']['output'];
  liquidity: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  poolId: Scalars['String']['output'];
  positionId: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  withdrawnJetton0: Scalars['String']['output'];
  withdrawnJetton1: Scalars['String']['output'];
};

export type PositionDataTimestampFilters = {
  OR?: InputMaybe<Array<PositionDataTimestampfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataTimestampfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataUpdateInput = {
  /** JSON */
  block?: InputMaybe<Scalars['String']['input']>;
  collectedFeeJetton0?: InputMaybe<Scalars['String']['input']>;
  collectedFeeJetton1?: InputMaybe<Scalars['String']['input']>;
  depositedJetton0?: InputMaybe<Scalars['String']['input']>;
  depositedJetton1?: InputMaybe<Scalars['String']['input']>;
  feeGrowthInside0LastX128?: InputMaybe<Scalars['String']['input']>;
  feeGrowthInside1LastX128?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  liquidity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  positionId?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  timestamp?: InputMaybe<Scalars['String']['input']>;
  withdrawnJetton0?: InputMaybe<Scalars['String']['input']>;
  withdrawnJetton1?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataWithdrawnJetton0Filters = {
  OR?: InputMaybe<Array<PositionDataWithdrawnJetton0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataWithdrawnJetton0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataWithdrawnJetton1Filters = {
  OR?: InputMaybe<Array<PositionDataWithdrawnJetton1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDataWithdrawnJetton1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDepositedJetton0Filters = {
  OR?: InputMaybe<Array<PositionDepositedJetton0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDepositedJetton0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDepositedJetton1Filters = {
  OR?: InputMaybe<Array<PositionDepositedJetton1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionDepositedJetton1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionFeeGrowthInside0LastX128Filters = {
  OR?: InputMaybe<Array<PositionFeeGrowthInside0LastX128filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionFeeGrowthInside0LastX128filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionFeeGrowthInside1LastX128Filters = {
  OR?: InputMaybe<Array<PositionFeeGrowthInside1LastX128filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionFeeGrowthInside1LastX128filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionFilters = {
  OR?: InputMaybe<Array<PositionFiltersOr>>;
  collectedFeeJetton0?: InputMaybe<PositionCollectedFeeJetton0Filters>;
  collectedFeeJetton1?: InputMaybe<PositionCollectedFeeJetton1Filters>;
  depositedJetton0?: InputMaybe<PositionDepositedJetton0Filters>;
  depositedJetton1?: InputMaybe<PositionDepositedJetton1Filters>;
  feeGrowthInside0LastX128?: InputMaybe<PositionFeeGrowthInside0LastX128Filters>;
  feeGrowthInside1LastX128?: InputMaybe<PositionFeeGrowthInside1LastX128Filters>;
  id?: InputMaybe<PositionIdFilters>;
  jetton0Id?: InputMaybe<PositionJetton0IdFilters>;
  jetton1Id?: InputMaybe<PositionJetton1IdFilters>;
  liquidity?: InputMaybe<PositionLiquidityFilters>;
  owner?: InputMaybe<PositionOwnerFilters>;
  poolId?: InputMaybe<PositionPoolIdFilters>;
  tickLower?: InputMaybe<PositionTickLowerFilters>;
  tickUpper?: InputMaybe<PositionTickUpperFilters>;
  transactionId?: InputMaybe<PositionTransactionIdFilters>;
  withdrawnJetton0?: InputMaybe<PositionWithdrawnJetton0Filters>;
  withdrawnJetton1?: InputMaybe<PositionWithdrawnJetton1Filters>;
};

export type PositionFiltersOr = {
  collectedFeeJetton0?: InputMaybe<PositionCollectedFeeJetton0Filters>;
  collectedFeeJetton1?: InputMaybe<PositionCollectedFeeJetton1Filters>;
  depositedJetton0?: InputMaybe<PositionDepositedJetton0Filters>;
  depositedJetton1?: InputMaybe<PositionDepositedJetton1Filters>;
  feeGrowthInside0LastX128?: InputMaybe<PositionFeeGrowthInside0LastX128Filters>;
  feeGrowthInside1LastX128?: InputMaybe<PositionFeeGrowthInside1LastX128Filters>;
  id?: InputMaybe<PositionIdFilters>;
  jetton0Id?: InputMaybe<PositionJetton0IdFilters>;
  jetton1Id?: InputMaybe<PositionJetton1IdFilters>;
  liquidity?: InputMaybe<PositionLiquidityFilters>;
  owner?: InputMaybe<PositionOwnerFilters>;
  poolId?: InputMaybe<PositionPoolIdFilters>;
  tickLower?: InputMaybe<PositionTickLowerFilters>;
  tickUpper?: InputMaybe<PositionTickUpperFilters>;
  transactionId?: InputMaybe<PositionTransactionIdFilters>;
  withdrawnJetton0?: InputMaybe<PositionWithdrawnJetton0Filters>;
  withdrawnJetton1?: InputMaybe<PositionWithdrawnJetton1Filters>;
};

export type PositionIdFilters = {
  OR?: InputMaybe<Array<PositionIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionInsertInput = {
  collectedFeeJetton0: Scalars['String']['input'];
  collectedFeeJetton1: Scalars['String']['input'];
  depositedJetton0: Scalars['String']['input'];
  depositedJetton1: Scalars['String']['input'];
  feeGrowthInside0LastX128: Scalars['String']['input'];
  feeGrowthInside1LastX128: Scalars['String']['input'];
  id: Scalars['String']['input'];
  jetton0Id: Scalars['String']['input'];
  jetton1Id: Scalars['String']['input'];
  liquidity: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  poolId: Scalars['String']['input'];
  /** BigInt */
  tickLower: Scalars['String']['input'];
  /** BigInt */
  tickUpper: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
  withdrawnJetton0: Scalars['String']['input'];
  withdrawnJetton1: Scalars['String']['input'];
};

export type PositionItem = {
  __typename?: 'PositionItem';
  collectedFeeJetton0: Scalars['String']['output'];
  collectedFeeJetton1: Scalars['String']['output'];
  depositedJetton0: Scalars['String']['output'];
  depositedJetton1: Scalars['String']['output'];
  feeGrowthInside0LastX128: Scalars['String']['output'];
  feeGrowthInside1LastX128: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jetton0Id: Scalars['String']['output'];
  jetton1Id: Scalars['String']['output'];
  liquidity: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  poolId: Scalars['String']['output'];
  /** BigInt */
  tickLower: Scalars['String']['output'];
  /** BigInt */
  tickUpper: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
  withdrawnJetton0: Scalars['String']['output'];
  withdrawnJetton1: Scalars['String']['output'];
};

export type PositionJetton0IdFilters = {
  OR?: InputMaybe<Array<PositionJetton0IdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionJetton0IdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionJetton0Relation = {
  __typename?: 'PositionJetton0Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type PositionJetton1IdFilters = {
  OR?: InputMaybe<Array<PositionJetton1IdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionJetton1IdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionJetton1Relation = {
  __typename?: 'PositionJetton1Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type PositionLiquidityFilters = {
  OR?: InputMaybe<Array<PositionLiquidityfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionLiquidityfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionOrderBy = {
  collectedFeeJetton0?: InputMaybe<InnerOrder>;
  collectedFeeJetton1?: InputMaybe<InnerOrder>;
  depositedJetton0?: InputMaybe<InnerOrder>;
  depositedJetton1?: InputMaybe<InnerOrder>;
  feeGrowthInside0LastX128?: InputMaybe<InnerOrder>;
  feeGrowthInside1LastX128?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  jetton0Id?: InputMaybe<InnerOrder>;
  jetton1Id?: InputMaybe<InnerOrder>;
  liquidity?: InputMaybe<InnerOrder>;
  owner?: InputMaybe<InnerOrder>;
  poolId?: InputMaybe<InnerOrder>;
  tickLower?: InputMaybe<InnerOrder>;
  tickUpper?: InputMaybe<InnerOrder>;
  transactionId?: InputMaybe<InnerOrder>;
  withdrawnJetton0?: InputMaybe<InnerOrder>;
  withdrawnJetton1?: InputMaybe<InnerOrder>;
};

export type PositionOwnerFilters = {
  OR?: InputMaybe<Array<PositionOwnerfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionOwnerfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionPoolIdFilters = {
  OR?: InputMaybe<Array<PositionPoolIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionPoolIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionPoolRelation = {
  __typename?: 'PositionPoolRelation';
  collectedFeesJetton0: Scalars['String']['output'];
  collectedFeesJetton1: Scalars['String']['output'];
  collectedFeesUSD: Scalars['String']['output'];
  feeGrowthGlobal0X128: Scalars['String']['output'];
  feeGrowthGlobal1X128: Scalars['String']['output'];
  /** BigInt */
  feeProtocol: Scalars['String']['output'];
  /** BigInt */
  feeTier: Scalars['String']['output'];
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jetton0?: Maybe<PositionPoolRelationJetton0Relation>;
  jetton0Id: Scalars['String']['output'];
  jetton0Price: Scalars['String']['output'];
  jetton1?: Maybe<PositionPoolRelationJetton1Relation>;
  jetton1Id: Scalars['String']['output'];
  jetton1Price: Scalars['String']['output'];
  liquidity: Scalars['String']['output'];
  liquidityProviderCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  sqrtPrice: Scalars['String']['output'];
  /** BigInt */
  tick: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  totalValueLockedJetton0: Scalars['String']['output'];
  totalValueLockedJetton1: Scalars['String']['output'];
  totalValueLockedTon: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volumeJetton0: Scalars['String']['output'];
  volumeJetton1: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};


export type PositionPoolRelationJetton0Args = {
  where?: InputMaybe<JettonFilters>;
};


export type PositionPoolRelationJetton1Args = {
  where?: InputMaybe<JettonFilters>;
};

export type PositionPoolRelationJetton0Relation = {
  __typename?: 'PositionPoolRelationJetton0Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type PositionPoolRelationJetton1Relation = {
  __typename?: 'PositionPoolRelationJetton1Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type PositionPositionDataRelation = {
  __typename?: 'PositionPositionDataRelation';
  /** JSON */
  block: Scalars['String']['output'];
  collectedFeeJetton0: Scalars['String']['output'];
  collectedFeeJetton1: Scalars['String']['output'];
  depositedJetton0: Scalars['String']['output'];
  depositedJetton1: Scalars['String']['output'];
  feeGrowthInside0LastX128: Scalars['String']['output'];
  feeGrowthInside1LastX128: Scalars['String']['output'];
  id: Scalars['String']['output'];
  liquidity: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  poolId: Scalars['String']['output'];
  positionId: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  withdrawnJetton0: Scalars['String']['output'];
  withdrawnJetton1: Scalars['String']['output'];
};

export type PositionSelectItem = {
  __typename?: 'PositionSelectItem';
  collectedFeeJetton0: Scalars['String']['output'];
  collectedFeeJetton1: Scalars['String']['output'];
  depositedJetton0: Scalars['String']['output'];
  depositedJetton1: Scalars['String']['output'];
  feeGrowthInside0LastX128: Scalars['String']['output'];
  feeGrowthInside1LastX128: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jetton0?: Maybe<PositionJetton0Relation>;
  jetton0Id: Scalars['String']['output'];
  jetton1?: Maybe<PositionJetton1Relation>;
  jetton1Id: Scalars['String']['output'];
  liquidity: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  pool?: Maybe<PositionPoolRelation>;
  poolId: Scalars['String']['output'];
  positionData: Array<PositionPositionDataRelation>;
  /** BigInt */
  tickLower: Scalars['String']['output'];
  /** BigInt */
  tickUpper: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
  withdrawnJetton0: Scalars['String']['output'];
  withdrawnJetton1: Scalars['String']['output'];
};


export type PositionSelectItemJetton0Args = {
  where?: InputMaybe<JettonFilters>;
};


export type PositionSelectItemJetton1Args = {
  where?: InputMaybe<JettonFilters>;
};


export type PositionSelectItemPoolArgs = {
  where?: InputMaybe<PoolFilters>;
};


export type PositionSelectItemPositionDataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionDataOrderBy>;
  where?: InputMaybe<PositionDataFilters>;
};

export type PositionTickLowerFilters = {
  OR?: InputMaybe<Array<PositionTickLowerfiltersOr>>;
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionTickLowerfiltersOr = {
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionTickUpperFilters = {
  OR?: InputMaybe<Array<PositionTickUpperfiltersOr>>;
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionTickUpperfiltersOr = {
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionTransactionIdFilters = {
  OR?: InputMaybe<Array<PositionTransactionIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionTransactionIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionUpdateInput = {
  collectedFeeJetton0?: InputMaybe<Scalars['String']['input']>;
  collectedFeeJetton1?: InputMaybe<Scalars['String']['input']>;
  depositedJetton0?: InputMaybe<Scalars['String']['input']>;
  depositedJetton1?: InputMaybe<Scalars['String']['input']>;
  feeGrowthInside0LastX128?: InputMaybe<Scalars['String']['input']>;
  feeGrowthInside1LastX128?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  jetton0Id?: InputMaybe<Scalars['String']['input']>;
  jetton1Id?: InputMaybe<Scalars['String']['input']>;
  liquidity?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  tickLower?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  tickUpper?: InputMaybe<Scalars['String']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  withdrawnJetton0?: InputMaybe<Scalars['String']['input']>;
  withdrawnJetton1?: InputMaybe<Scalars['String']['input']>;
};

export type PositionWithdrawnJetton0Filters = {
  OR?: InputMaybe<Array<PositionWithdrawnJetton0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionWithdrawnJetton0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionWithdrawnJetton1Filters = {
  OR?: InputMaybe<Array<PositionWithdrawnJetton1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type PositionWithdrawnJetton1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  burn: Array<BurnSelectItem>;
  burnSingle?: Maybe<BurnSelectItem>;
  collect: Array<CollectSelectItem>;
  collectSingle?: Maybe<CollectSelectItem>;
  jetton: Array<JettonSelectItem>;
  jettonData: Array<JettonDataSelectItem>;
  jettonDataSingle?: Maybe<JettonDataSelectItem>;
  jettonSingle?: Maybe<JettonSelectItem>;
  meta: Array<MetaSelectItem>;
  metaSingle?: Maybe<MetaSelectItem>;
  mint: Array<MintSelectItem>;
  mintSingle?: Maybe<MintSelectItem>;
  pool: Array<PoolSelectItem>;
  poolData: Array<PoolDataSelectItem>;
  poolDataSingle?: Maybe<PoolDataSelectItem>;
  poolSingle?: Maybe<PoolSelectItem>;
  position: Array<PositionSelectItem>;
  positionData: Array<PositionDataSelectItem>;
  positionDataSingle?: Maybe<PositionDataSelectItem>;
  positionSingle?: Maybe<PositionSelectItem>;
  router: Array<RouterSelectItem>;
  routerData: Array<RouterDataSelectItem>;
  routerDataSingle?: Maybe<RouterDataSelectItem>;
  routerSingle?: Maybe<RouterSelectItem>;
  swap: Array<SwapSelectItem>;
  swapSingle?: Maybe<SwapSelectItem>;
  tick: Array<TickSelectItem>;
  tickSingle?: Maybe<TickSelectItem>;
  transaction: Array<TransactionSelectItem>;
  transactionSingle?: Maybe<TransactionSelectItem>;
};


export type QueryBurnArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BurnOrderBy>;
  where?: InputMaybe<BurnFilters>;
};


export type QueryBurnSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BurnOrderBy>;
  where?: InputMaybe<BurnFilters>;
};


export type QueryCollectArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollectOrderBy>;
  where?: InputMaybe<CollectFilters>;
};


export type QueryCollectSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollectOrderBy>;
  where?: InputMaybe<CollectFilters>;
};


export type QueryJettonArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<JettonOrderBy>;
  where?: InputMaybe<JettonFilters>;
};


export type QueryJettonDataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<JettonDataOrderBy>;
  where?: InputMaybe<JettonDataFilters>;
};


export type QueryJettonDataSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<JettonDataOrderBy>;
  where?: InputMaybe<JettonDataFilters>;
};


export type QueryJettonSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<JettonOrderBy>;
  where?: InputMaybe<JettonFilters>;
};


export type QueryMetaArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MetaOrderBy>;
  where?: InputMaybe<MetaFilters>;
};


export type QueryMetaSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MetaOrderBy>;
  where?: InputMaybe<MetaFilters>;
};


export type QueryMintArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MintOrderBy>;
  where?: InputMaybe<MintFilters>;
};


export type QueryMintSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MintOrderBy>;
  where?: InputMaybe<MintFilters>;
};


export type QueryPoolArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolOrderBy>;
  where?: InputMaybe<PoolFilters>;
};


export type QueryPoolDataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolDataOrderBy>;
  where?: InputMaybe<PoolDataFilters>;
};


export type QueryPoolDataSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolDataOrderBy>;
  where?: InputMaybe<PoolDataFilters>;
};


export type QueryPoolSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolOrderBy>;
  where?: InputMaybe<PoolFilters>;
};


export type QueryPositionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionOrderBy>;
  where?: InputMaybe<PositionFilters>;
};


export type QueryPositionDataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionDataOrderBy>;
  where?: InputMaybe<PositionDataFilters>;
};


export type QueryPositionDataSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionDataOrderBy>;
  where?: InputMaybe<PositionDataFilters>;
};


export type QueryPositionSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionOrderBy>;
  where?: InputMaybe<PositionFilters>;
};


export type QueryRouterArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RouterOrderBy>;
  where?: InputMaybe<RouterFilters>;
};


export type QueryRouterDataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RouterDataOrderBy>;
  where?: InputMaybe<RouterDataFilters>;
};


export type QueryRouterDataSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RouterDataOrderBy>;
  where?: InputMaybe<RouterDataFilters>;
};


export type QueryRouterSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RouterOrderBy>;
  where?: InputMaybe<RouterFilters>;
};


export type QuerySwapArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapOrderBy>;
  where?: InputMaybe<SwapFilters>;
};


export type QuerySwapSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapOrderBy>;
  where?: InputMaybe<SwapFilters>;
};


export type QueryTickArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TickOrderBy>;
  where?: InputMaybe<TickFilters>;
};


export type QueryTickSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TickOrderBy>;
  where?: InputMaybe<TickFilters>;
};


export type QueryTransactionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransactionOrderBy>;
  where?: InputMaybe<TransactionFilters>;
};


export type QueryTransactionSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransactionOrderBy>;
  where?: InputMaybe<TransactionFilters>;
};

export type RouterDataFeesUsdFilters = {
  OR?: InputMaybe<Array<RouterDataFeesUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterDataFeesUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterDataFilters = {
  OR?: InputMaybe<Array<RouterDataFiltersOr>>;
  feesUSD?: InputMaybe<RouterDataFeesUsdFilters>;
  id?: InputMaybe<RouterDataIdFilters>;
  protocolFeesUSD?: InputMaybe<RouterDataProtocolFeesUsdFilters>;
  timestamp?: InputMaybe<RouterDataTimestampFilters>;
  tvlUSD?: InputMaybe<RouterDataTvlUsdFilters>;
  txCount?: InputMaybe<RouterDataTxCountFilters>;
  volumeTon?: InputMaybe<RouterDataVolumeTonFilters>;
  volumeUSD?: InputMaybe<RouterDataVolumeUsdFilters>;
};

export type RouterDataFiltersOr = {
  feesUSD?: InputMaybe<RouterDataFeesUsdFilters>;
  id?: InputMaybe<RouterDataIdFilters>;
  protocolFeesUSD?: InputMaybe<RouterDataProtocolFeesUsdFilters>;
  timestamp?: InputMaybe<RouterDataTimestampFilters>;
  tvlUSD?: InputMaybe<RouterDataTvlUsdFilters>;
  txCount?: InputMaybe<RouterDataTxCountFilters>;
  volumeTon?: InputMaybe<RouterDataVolumeTonFilters>;
  volumeUSD?: InputMaybe<RouterDataVolumeUsdFilters>;
};

export type RouterDataIdFilters = {
  OR?: InputMaybe<Array<RouterDataIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterDataIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterDataInsertInput = {
  feesUSD: Scalars['String']['input'];
  id: Scalars['String']['input'];
  protocolFeesUSD: Scalars['String']['input'];
  /** Date */
  timestamp: Scalars['String']['input'];
  tvlUSD: Scalars['String']['input'];
  txCount: Scalars['String']['input'];
  volumeTon: Scalars['String']['input'];
  volumeUSD: Scalars['String']['input'];
};

export type RouterDataItem = {
  __typename?: 'RouterDataItem';
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  tvlUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volumeTon: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type RouterDataOrderBy = {
  feesUSD?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  protocolFeesUSD?: InputMaybe<InnerOrder>;
  timestamp?: InputMaybe<InnerOrder>;
  tvlUSD?: InputMaybe<InnerOrder>;
  txCount?: InputMaybe<InnerOrder>;
  volumeTon?: InputMaybe<InnerOrder>;
  volumeUSD?: InputMaybe<InnerOrder>;
};

export type RouterDataProtocolFeesUsdFilters = {
  OR?: InputMaybe<Array<RouterDataProtocolFeesUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterDataProtocolFeesUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterDataSelectItem = {
  __typename?: 'RouterDataSelectItem';
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  tvlUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volumeTon: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type RouterDataTimestampFilters = {
  OR?: InputMaybe<Array<RouterDataTimestampfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterDataTimestampfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterDataTvlUsdFilters = {
  OR?: InputMaybe<Array<RouterDataTvlUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterDataTvlUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterDataTxCountFilters = {
  OR?: InputMaybe<Array<RouterDataTxCountfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterDataTxCountfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterDataUpdateInput = {
  feesUSD?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  protocolFeesUSD?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  timestamp?: InputMaybe<Scalars['String']['input']>;
  tvlUSD?: InputMaybe<Scalars['String']['input']>;
  txCount?: InputMaybe<Scalars['String']['input']>;
  volumeTon?: InputMaybe<Scalars['String']['input']>;
  volumeUSD?: InputMaybe<Scalars['String']['input']>;
};

export type RouterDataVolumeTonFilters = {
  OR?: InputMaybe<Array<RouterDataVolumeTonfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterDataVolumeTonfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterDataVolumeUsdFilters = {
  OR?: InputMaybe<Array<RouterDataVolumeUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterDataVolumeUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterFilters = {
  OR?: InputMaybe<Array<RouterFiltersOr>>;
  id?: InputMaybe<RouterIdFilters>;
  poolCount?: InputMaybe<RouterPoolCountFilters>;
  tonPriceUSD?: InputMaybe<RouterTonPriceUsdFilters>;
  totalFeesTon?: InputMaybe<RouterTotalFeesTonFilters>;
  totalFeesUSD?: InputMaybe<RouterTotalFeesUsdFilters>;
  totalProtocolFeesTon?: InputMaybe<RouterTotalProtocolFeesTonFilters>;
  totalProtocolFeesUSD?: InputMaybe<RouterTotalProtocolFeesUsdFilters>;
  totalValueLockedTon?: InputMaybe<RouterTotalValueLockedTonFilters>;
  totalValueLockedUSD?: InputMaybe<RouterTotalValueLockedUsdFilters>;
  totalVolumeTon?: InputMaybe<RouterTotalVolumeTonFilters>;
  totalVolumeUSD?: InputMaybe<RouterTotalVolumeUsdFilters>;
  txCount?: InputMaybe<RouterTxCountFilters>;
};

export type RouterFiltersOr = {
  id?: InputMaybe<RouterIdFilters>;
  poolCount?: InputMaybe<RouterPoolCountFilters>;
  tonPriceUSD?: InputMaybe<RouterTonPriceUsdFilters>;
  totalFeesTon?: InputMaybe<RouterTotalFeesTonFilters>;
  totalFeesUSD?: InputMaybe<RouterTotalFeesUsdFilters>;
  totalProtocolFeesTon?: InputMaybe<RouterTotalProtocolFeesTonFilters>;
  totalProtocolFeesUSD?: InputMaybe<RouterTotalProtocolFeesUsdFilters>;
  totalValueLockedTon?: InputMaybe<RouterTotalValueLockedTonFilters>;
  totalValueLockedUSD?: InputMaybe<RouterTotalValueLockedUsdFilters>;
  totalVolumeTon?: InputMaybe<RouterTotalVolumeTonFilters>;
  totalVolumeUSD?: InputMaybe<RouterTotalVolumeUsdFilters>;
  txCount?: InputMaybe<RouterTxCountFilters>;
};

export type RouterIdFilters = {
  OR?: InputMaybe<Array<RouterIdfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterInsertInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  poolCount: Scalars['String']['input'];
  tonPriceUSD: Scalars['String']['input'];
  totalFeesTon: Scalars['String']['input'];
  totalFeesUSD: Scalars['String']['input'];
  totalProtocolFeesTon: Scalars['String']['input'];
  totalProtocolFeesUSD: Scalars['String']['input'];
  totalValueLockedTon: Scalars['String']['input'];
  totalValueLockedUSD: Scalars['String']['input'];
  totalVolumeTon: Scalars['String']['input'];
  totalVolumeUSD: Scalars['String']['input'];
  txCount: Scalars['String']['input'];
};

export type RouterItem = {
  __typename?: 'RouterItem';
  id: Scalars['Int']['output'];
  poolCount: Scalars['String']['output'];
  tonPriceUSD: Scalars['String']['output'];
  totalFeesTon: Scalars['String']['output'];
  totalFeesUSD: Scalars['String']['output'];
  totalProtocolFeesTon: Scalars['String']['output'];
  totalProtocolFeesUSD: Scalars['String']['output'];
  totalValueLockedTon: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  totalVolumeTon: Scalars['String']['output'];
  totalVolumeUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
};

export type RouterOrderBy = {
  id?: InputMaybe<InnerOrder>;
  poolCount?: InputMaybe<InnerOrder>;
  tonPriceUSD?: InputMaybe<InnerOrder>;
  totalFeesTon?: InputMaybe<InnerOrder>;
  totalFeesUSD?: InputMaybe<InnerOrder>;
  totalProtocolFeesTon?: InputMaybe<InnerOrder>;
  totalProtocolFeesUSD?: InputMaybe<InnerOrder>;
  totalValueLockedTon?: InputMaybe<InnerOrder>;
  totalValueLockedUSD?: InputMaybe<InnerOrder>;
  totalVolumeTon?: InputMaybe<InnerOrder>;
  totalVolumeUSD?: InputMaybe<InnerOrder>;
  txCount?: InputMaybe<InnerOrder>;
};

export type RouterPoolCountFilters = {
  OR?: InputMaybe<Array<RouterPoolCountfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterPoolCountfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterSelectItem = {
  __typename?: 'RouterSelectItem';
  id: Scalars['Int']['output'];
  poolCount: Scalars['String']['output'];
  tonPriceUSD: Scalars['String']['output'];
  totalFeesTon: Scalars['String']['output'];
  totalFeesUSD: Scalars['String']['output'];
  totalProtocolFeesTon: Scalars['String']['output'];
  totalProtocolFeesUSD: Scalars['String']['output'];
  totalValueLockedTon: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  totalVolumeTon: Scalars['String']['output'];
  totalVolumeUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
};

export type RouterTonPriceUsdFilters = {
  OR?: InputMaybe<Array<RouterTonPriceUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTonPriceUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTotalFeesTonFilters = {
  OR?: InputMaybe<Array<RouterTotalFeesTonfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTotalFeesTonfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTotalFeesUsdFilters = {
  OR?: InputMaybe<Array<RouterTotalFeesUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTotalFeesUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTotalProtocolFeesTonFilters = {
  OR?: InputMaybe<Array<RouterTotalProtocolFeesTonfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTotalProtocolFeesTonfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTotalProtocolFeesUsdFilters = {
  OR?: InputMaybe<Array<RouterTotalProtocolFeesUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTotalProtocolFeesUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTotalValueLockedTonFilters = {
  OR?: InputMaybe<Array<RouterTotalValueLockedTonfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTotalValueLockedTonfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTotalValueLockedUsdFilters = {
  OR?: InputMaybe<Array<RouterTotalValueLockedUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTotalValueLockedUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTotalVolumeTonFilters = {
  OR?: InputMaybe<Array<RouterTotalVolumeTonfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTotalVolumeTonfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTotalVolumeUsdFilters = {
  OR?: InputMaybe<Array<RouterTotalVolumeUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTotalVolumeUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTxCountFilters = {
  OR?: InputMaybe<Array<RouterTxCountfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterTxCountfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type RouterUpdateInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  poolCount?: InputMaybe<Scalars['String']['input']>;
  tonPriceUSD?: InputMaybe<Scalars['String']['input']>;
  totalFeesTon?: InputMaybe<Scalars['String']['input']>;
  totalFeesUSD?: InputMaybe<Scalars['String']['input']>;
  totalProtocolFeesTon?: InputMaybe<Scalars['String']['input']>;
  totalProtocolFeesUSD?: InputMaybe<Scalars['String']['input']>;
  totalValueLockedTon?: InputMaybe<Scalars['String']['input']>;
  totalValueLockedUSD?: InputMaybe<Scalars['String']['input']>;
  totalVolumeTon?: InputMaybe<Scalars['String']['input']>;
  totalVolumeUSD?: InputMaybe<Scalars['String']['input']>;
  txCount?: InputMaybe<Scalars['String']['input']>;
};

export type SwapAmount0Filters = {
  OR?: InputMaybe<Array<SwapAmount0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapAmount0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapAmount1Filters = {
  OR?: InputMaybe<Array<SwapAmount1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapAmount1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapAmountFeeUsdFilters = {
  OR?: InputMaybe<Array<SwapAmountFeeUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapAmountFeeUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapAmountUsdFilters = {
  OR?: InputMaybe<Array<SwapAmountUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapAmountUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapFilters = {
  OR?: InputMaybe<Array<SwapFiltersOr>>;
  amount0?: InputMaybe<SwapAmount0Filters>;
  amount1?: InputMaybe<SwapAmount1Filters>;
  amountFeeUSD?: InputMaybe<SwapAmountFeeUsdFilters>;
  amountUSD?: InputMaybe<SwapAmountUsdFilters>;
  id?: InputMaybe<SwapIdFilters>;
  jetton0Id?: InputMaybe<SwapJetton0IdFilters>;
  jetton1Id?: InputMaybe<SwapJetton1IdFilters>;
  poolId?: InputMaybe<SwapPoolIdFilters>;
  recipient?: InputMaybe<SwapRecipientFilters>;
  sender?: InputMaybe<SwapSenderFilters>;
  sqrtPriceX96?: InputMaybe<SwapSqrtPriceX96Filters>;
  tick?: InputMaybe<SwapTickFilters>;
  timestamp?: InputMaybe<SwapTimestampFilters>;
  transactionId?: InputMaybe<SwapTransactionIdFilters>;
};

export type SwapFiltersOr = {
  amount0?: InputMaybe<SwapAmount0Filters>;
  amount1?: InputMaybe<SwapAmount1Filters>;
  amountFeeUSD?: InputMaybe<SwapAmountFeeUsdFilters>;
  amountUSD?: InputMaybe<SwapAmountUsdFilters>;
  id?: InputMaybe<SwapIdFilters>;
  jetton0Id?: InputMaybe<SwapJetton0IdFilters>;
  jetton1Id?: InputMaybe<SwapJetton1IdFilters>;
  poolId?: InputMaybe<SwapPoolIdFilters>;
  recipient?: InputMaybe<SwapRecipientFilters>;
  sender?: InputMaybe<SwapSenderFilters>;
  sqrtPriceX96?: InputMaybe<SwapSqrtPriceX96Filters>;
  tick?: InputMaybe<SwapTickFilters>;
  timestamp?: InputMaybe<SwapTimestampFilters>;
  transactionId?: InputMaybe<SwapTransactionIdFilters>;
};

export type SwapIdFilters = {
  OR?: InputMaybe<Array<SwapIdfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapInsertInput = {
  amount0: Scalars['String']['input'];
  amount1: Scalars['String']['input'];
  amountFeeUSD: Scalars['String']['input'];
  amountUSD: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  jetton0Id: Scalars['String']['input'];
  jetton1Id: Scalars['String']['input'];
  poolId: Scalars['String']['input'];
  recipient: Scalars['String']['input'];
  sender: Scalars['String']['input'];
  sqrtPriceX96: Scalars['String']['input'];
  /** BigInt */
  tick: Scalars['String']['input'];
  /** Date */
  timestamp: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
};

export type SwapItem = {
  __typename?: 'SwapItem';
  amount0: Scalars['String']['output'];
  amount1: Scalars['String']['output'];
  amountFeeUSD: Scalars['String']['output'];
  amountUSD: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  jetton0Id: Scalars['String']['output'];
  jetton1Id: Scalars['String']['output'];
  poolId: Scalars['String']['output'];
  recipient: Scalars['String']['output'];
  sender: Scalars['String']['output'];
  sqrtPriceX96: Scalars['String']['output'];
  /** BigInt */
  tick: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
};

export type SwapJetton0IdFilters = {
  OR?: InputMaybe<Array<SwapJetton0IdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapJetton0IdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapJetton0Relation = {
  __typename?: 'SwapJetton0Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type SwapJetton1IdFilters = {
  OR?: InputMaybe<Array<SwapJetton1IdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapJetton1IdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapJetton1Relation = {
  __typename?: 'SwapJetton1Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type SwapOrderBy = {
  amount0?: InputMaybe<InnerOrder>;
  amount1?: InputMaybe<InnerOrder>;
  amountFeeUSD?: InputMaybe<InnerOrder>;
  amountUSD?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  jetton0Id?: InputMaybe<InnerOrder>;
  jetton1Id?: InputMaybe<InnerOrder>;
  poolId?: InputMaybe<InnerOrder>;
  recipient?: InputMaybe<InnerOrder>;
  sender?: InputMaybe<InnerOrder>;
  sqrtPriceX96?: InputMaybe<InnerOrder>;
  tick?: InputMaybe<InnerOrder>;
  timestamp?: InputMaybe<InnerOrder>;
  transactionId?: InputMaybe<InnerOrder>;
};

export type SwapPoolIdFilters = {
  OR?: InputMaybe<Array<SwapPoolIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapPoolIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapPoolRelation = {
  __typename?: 'SwapPoolRelation';
  collectedFeesJetton0: Scalars['String']['output'];
  collectedFeesJetton1: Scalars['String']['output'];
  collectedFeesUSD: Scalars['String']['output'];
  feeGrowthGlobal0X128: Scalars['String']['output'];
  feeGrowthGlobal1X128: Scalars['String']['output'];
  /** BigInt */
  feeProtocol: Scalars['String']['output'];
  /** BigInt */
  feeTier: Scalars['String']['output'];
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jetton0?: Maybe<SwapPoolRelationJetton0Relation>;
  jetton0Id: Scalars['String']['output'];
  jetton0Price: Scalars['String']['output'];
  jetton1?: Maybe<SwapPoolRelationJetton1Relation>;
  jetton1Id: Scalars['String']['output'];
  jetton1Price: Scalars['String']['output'];
  liquidity: Scalars['String']['output'];
  liquidityProviderCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  sqrtPrice: Scalars['String']['output'];
  /** BigInt */
  tick: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  totalValueLockedJetton0: Scalars['String']['output'];
  totalValueLockedJetton1: Scalars['String']['output'];
  totalValueLockedTon: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volumeJetton0: Scalars['String']['output'];
  volumeJetton1: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};


export type SwapPoolRelationJetton0Args = {
  where?: InputMaybe<JettonFilters>;
};


export type SwapPoolRelationJetton1Args = {
  where?: InputMaybe<JettonFilters>;
};

export type SwapPoolRelationJetton0Relation = {
  __typename?: 'SwapPoolRelationJetton0Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type SwapPoolRelationJetton1Relation = {
  __typename?: 'SwapPoolRelationJetton1Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type SwapRecipientFilters = {
  OR?: InputMaybe<Array<SwapRecipientfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapRecipientfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapSelectItem = {
  __typename?: 'SwapSelectItem';
  amount0: Scalars['String']['output'];
  amount1: Scalars['String']['output'];
  amountFeeUSD: Scalars['String']['output'];
  amountUSD: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  jetton0?: Maybe<SwapJetton0Relation>;
  jetton0Id: Scalars['String']['output'];
  jetton1?: Maybe<SwapJetton1Relation>;
  jetton1Id: Scalars['String']['output'];
  pool?: Maybe<SwapPoolRelation>;
  poolId: Scalars['String']['output'];
  recipient: Scalars['String']['output'];
  sender: Scalars['String']['output'];
  sqrtPriceX96: Scalars['String']['output'];
  /** BigInt */
  tick: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
};


export type SwapSelectItemJetton0Args = {
  where?: InputMaybe<JettonFilters>;
};


export type SwapSelectItemJetton1Args = {
  where?: InputMaybe<JettonFilters>;
};


export type SwapSelectItemPoolArgs = {
  where?: InputMaybe<PoolFilters>;
};

export type SwapSenderFilters = {
  OR?: InputMaybe<Array<SwapSenderfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapSenderfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapSqrtPriceX96Filters = {
  OR?: InputMaybe<Array<SwapSqrtPriceX96filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapSqrtPriceX96filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapTickFilters = {
  OR?: InputMaybe<Array<SwapTickfiltersOr>>;
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapTickfiltersOr = {
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapTimestampFilters = {
  OR?: InputMaybe<Array<SwapTimestampfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapTimestampfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapTransactionIdFilters = {
  OR?: InputMaybe<Array<SwapTransactionIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapTransactionIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type SwapUpdateInput = {
  amount0?: InputMaybe<Scalars['String']['input']>;
  amount1?: InputMaybe<Scalars['String']['input']>;
  amountFeeUSD?: InputMaybe<Scalars['String']['input']>;
  amountUSD?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jetton0Id?: InputMaybe<Scalars['String']['input']>;
  jetton1Id?: InputMaybe<Scalars['String']['input']>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  recipient?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sqrtPriceX96?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  tick?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  timestamp?: InputMaybe<Scalars['String']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
};

export type TickCollectedFeesJetton0Filters = {
  OR?: InputMaybe<Array<TickCollectedFeesJetton0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickCollectedFeesJetton0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickCollectedFeesJetton1Filters = {
  OR?: InputMaybe<Array<TickCollectedFeesJetton1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickCollectedFeesJetton1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickCollectedFeesUsdFilters = {
  OR?: InputMaybe<Array<TickCollectedFeesUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickCollectedFeesUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickFeeGrowthOutside0X128Filters = {
  OR?: InputMaybe<Array<TickFeeGrowthOutside0X128filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickFeeGrowthOutside0X128filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickFeeGrowthOutside1X128Filters = {
  OR?: InputMaybe<Array<TickFeeGrowthOutside1X128filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickFeeGrowthOutside1X128filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickFeesUsdFilters = {
  OR?: InputMaybe<Array<TickFeesUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickFeesUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickFilters = {
  OR?: InputMaybe<Array<TickFiltersOr>>;
  collectedFeesJetton0?: InputMaybe<TickCollectedFeesJetton0Filters>;
  collectedFeesJetton1?: InputMaybe<TickCollectedFeesJetton1Filters>;
  collectedFeesUSD?: InputMaybe<TickCollectedFeesUsdFilters>;
  feeGrowthOutside0X128?: InputMaybe<TickFeeGrowthOutside0X128Filters>;
  feeGrowthOutside1X128?: InputMaybe<TickFeeGrowthOutside1X128Filters>;
  feesUSD?: InputMaybe<TickFeesUsdFilters>;
  id?: InputMaybe<TickIdFilters>;
  liquidityGross?: InputMaybe<TickLiquidityGrossFilters>;
  liquidityNet?: InputMaybe<TickLiquidityNetFilters>;
  liquidityProviderCount?: InputMaybe<TickLiquidityProviderCountFilters>;
  poolAddress?: InputMaybe<TickPoolAddressFilters>;
  poolId?: InputMaybe<TickPoolIdFilters>;
  price0?: InputMaybe<TickPrice0Filters>;
  price1?: InputMaybe<TickPrice1Filters>;
  tickIdx?: InputMaybe<TickTickIdxFilters>;
  timestamp?: InputMaybe<TickTimestampFilters>;
  volumeJetton0?: InputMaybe<TickVolumeJetton0Filters>;
  volumeJetton1?: InputMaybe<TickVolumeJetton1Filters>;
  volumeUSD?: InputMaybe<TickVolumeUsdFilters>;
};

export type TickFiltersOr = {
  collectedFeesJetton0?: InputMaybe<TickCollectedFeesJetton0Filters>;
  collectedFeesJetton1?: InputMaybe<TickCollectedFeesJetton1Filters>;
  collectedFeesUSD?: InputMaybe<TickCollectedFeesUsdFilters>;
  feeGrowthOutside0X128?: InputMaybe<TickFeeGrowthOutside0X128Filters>;
  feeGrowthOutside1X128?: InputMaybe<TickFeeGrowthOutside1X128Filters>;
  feesUSD?: InputMaybe<TickFeesUsdFilters>;
  id?: InputMaybe<TickIdFilters>;
  liquidityGross?: InputMaybe<TickLiquidityGrossFilters>;
  liquidityNet?: InputMaybe<TickLiquidityNetFilters>;
  liquidityProviderCount?: InputMaybe<TickLiquidityProviderCountFilters>;
  poolAddress?: InputMaybe<TickPoolAddressFilters>;
  poolId?: InputMaybe<TickPoolIdFilters>;
  price0?: InputMaybe<TickPrice0Filters>;
  price1?: InputMaybe<TickPrice1Filters>;
  tickIdx?: InputMaybe<TickTickIdxFilters>;
  timestamp?: InputMaybe<TickTimestampFilters>;
  volumeJetton0?: InputMaybe<TickVolumeJetton0Filters>;
  volumeJetton1?: InputMaybe<TickVolumeJetton1Filters>;
  volumeUSD?: InputMaybe<TickVolumeUsdFilters>;
};

export type TickIdFilters = {
  OR?: InputMaybe<Array<TickIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickInsertInput = {
  collectedFeesJetton0: Scalars['String']['input'];
  collectedFeesJetton1: Scalars['String']['input'];
  collectedFeesUSD: Scalars['String']['input'];
  feeGrowthOutside0X128?: InputMaybe<Scalars['String']['input']>;
  feeGrowthOutside1X128?: InputMaybe<Scalars['String']['input']>;
  feesUSD: Scalars['String']['input'];
  id: Scalars['String']['input'];
  liquidityGross: Scalars['String']['input'];
  liquidityNet: Scalars['String']['input'];
  liquidityProviderCount?: InputMaybe<Scalars['String']['input']>;
  poolAddress: Scalars['String']['input'];
  poolId: Scalars['String']['input'];
  price0: Scalars['String']['input'];
  price1: Scalars['String']['input'];
  /** BigInt */
  tickIdx: Scalars['String']['input'];
  /** Date */
  timestamp: Scalars['String']['input'];
  volumeJetton0: Scalars['String']['input'];
  volumeJetton1: Scalars['String']['input'];
  volumeUSD: Scalars['String']['input'];
};

export type TickItem = {
  __typename?: 'TickItem';
  collectedFeesJetton0: Scalars['String']['output'];
  collectedFeesJetton1: Scalars['String']['output'];
  collectedFeesUSD: Scalars['String']['output'];
  feeGrowthOutside0X128?: Maybe<Scalars['String']['output']>;
  feeGrowthOutside1X128?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  liquidityGross: Scalars['String']['output'];
  liquidityNet: Scalars['String']['output'];
  liquidityProviderCount?: Maybe<Scalars['String']['output']>;
  poolAddress: Scalars['String']['output'];
  poolId: Scalars['String']['output'];
  price0: Scalars['String']['output'];
  price1: Scalars['String']['output'];
  /** BigInt */
  tickIdx: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  volumeJetton0: Scalars['String']['output'];
  volumeJetton1: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type TickLiquidityGrossFilters = {
  OR?: InputMaybe<Array<TickLiquidityGrossfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickLiquidityGrossfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickLiquidityNetFilters = {
  OR?: InputMaybe<Array<TickLiquidityNetfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickLiquidityNetfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickLiquidityProviderCountFilters = {
  OR?: InputMaybe<Array<TickLiquidityProviderCountfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickLiquidityProviderCountfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickOrderBy = {
  collectedFeesJetton0?: InputMaybe<InnerOrder>;
  collectedFeesJetton1?: InputMaybe<InnerOrder>;
  collectedFeesUSD?: InputMaybe<InnerOrder>;
  feeGrowthOutside0X128?: InputMaybe<InnerOrder>;
  feeGrowthOutside1X128?: InputMaybe<InnerOrder>;
  feesUSD?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  liquidityGross?: InputMaybe<InnerOrder>;
  liquidityNet?: InputMaybe<InnerOrder>;
  liquidityProviderCount?: InputMaybe<InnerOrder>;
  poolAddress?: InputMaybe<InnerOrder>;
  poolId?: InputMaybe<InnerOrder>;
  price0?: InputMaybe<InnerOrder>;
  price1?: InputMaybe<InnerOrder>;
  tickIdx?: InputMaybe<InnerOrder>;
  timestamp?: InputMaybe<InnerOrder>;
  volumeJetton0?: InputMaybe<InnerOrder>;
  volumeJetton1?: InputMaybe<InnerOrder>;
  volumeUSD?: InputMaybe<InnerOrder>;
};

export type TickPoolAddressFilters = {
  OR?: InputMaybe<Array<TickPoolAddressfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickPoolAddressfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickPoolIdFilters = {
  OR?: InputMaybe<Array<TickPoolIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickPoolIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickPoolRelation = {
  __typename?: 'TickPoolRelation';
  collectedFeesJetton0: Scalars['String']['output'];
  collectedFeesJetton1: Scalars['String']['output'];
  collectedFeesUSD: Scalars['String']['output'];
  feeGrowthGlobal0X128: Scalars['String']['output'];
  feeGrowthGlobal1X128: Scalars['String']['output'];
  /** BigInt */
  feeProtocol: Scalars['String']['output'];
  /** BigInt */
  feeTier: Scalars['String']['output'];
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jetton0?: Maybe<TickPoolRelationJetton0Relation>;
  jetton0Id: Scalars['String']['output'];
  jetton0Price: Scalars['String']['output'];
  jetton1?: Maybe<TickPoolRelationJetton1Relation>;
  jetton1Id: Scalars['String']['output'];
  jetton1Price: Scalars['String']['output'];
  liquidity: Scalars['String']['output'];
  liquidityProviderCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  sqrtPrice: Scalars['String']['output'];
  /** BigInt */
  tick: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  totalValueLockedJetton0: Scalars['String']['output'];
  totalValueLockedJetton1: Scalars['String']['output'];
  totalValueLockedTon: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volumeJetton0: Scalars['String']['output'];
  volumeJetton1: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};


export type TickPoolRelationJetton0Args = {
  where?: InputMaybe<JettonFilters>;
};


export type TickPoolRelationJetton1Args = {
  where?: InputMaybe<JettonFilters>;
};

export type TickPoolRelationJetton0Relation = {
  __typename?: 'TickPoolRelationJetton0Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type TickPoolRelationJetton1Relation = {
  __typename?: 'TickPoolRelationJetton1Relation';
  decimals: Scalars['Int']['output'];
  derivedTon: Scalars['String']['output'];
  derivedUSD: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  poolCount: Scalars['String']['output'];
  protocolFeesUSD: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply: Scalars['String']['output'];
  totalValueLocked: Scalars['String']['output'];
  totalValueLockedUSD: Scalars['String']['output'];
  txCount: Scalars['String']['output'];
  volume: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};

export type TickPrice0Filters = {
  OR?: InputMaybe<Array<TickPrice0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickPrice0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickPrice1Filters = {
  OR?: InputMaybe<Array<TickPrice1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickPrice1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickSelectItem = {
  __typename?: 'TickSelectItem';
  collectedFeesJetton0: Scalars['String']['output'];
  collectedFeesJetton1: Scalars['String']['output'];
  collectedFeesUSD: Scalars['String']['output'];
  feeGrowthOutside0X128?: Maybe<Scalars['String']['output']>;
  feeGrowthOutside1X128?: Maybe<Scalars['String']['output']>;
  feesUSD: Scalars['String']['output'];
  id: Scalars['String']['output'];
  liquidityGross: Scalars['String']['output'];
  liquidityNet: Scalars['String']['output'];
  liquidityProviderCount?: Maybe<Scalars['String']['output']>;
  pool?: Maybe<TickPoolRelation>;
  poolAddress: Scalars['String']['output'];
  poolId: Scalars['String']['output'];
  price0: Scalars['String']['output'];
  price1: Scalars['String']['output'];
  /** BigInt */
  tickIdx: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
  volumeJetton0: Scalars['String']['output'];
  volumeJetton1: Scalars['String']['output'];
  volumeUSD: Scalars['String']['output'];
};


export type TickSelectItemPoolArgs = {
  where?: InputMaybe<PoolFilters>;
};

export type TickTickIdxFilters = {
  OR?: InputMaybe<Array<TickTickIdxfiltersOr>>;
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickTickIdxfiltersOr = {
  /** BigInt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<BigInt> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickTimestampFilters = {
  OR?: InputMaybe<Array<TickTimestampfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickTimestampfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickUpdateInput = {
  collectedFeesJetton0?: InputMaybe<Scalars['String']['input']>;
  collectedFeesJetton1?: InputMaybe<Scalars['String']['input']>;
  collectedFeesUSD?: InputMaybe<Scalars['String']['input']>;
  feeGrowthOutside0X128?: InputMaybe<Scalars['String']['input']>;
  feeGrowthOutside1X128?: InputMaybe<Scalars['String']['input']>;
  feesUSD?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  liquidityGross?: InputMaybe<Scalars['String']['input']>;
  liquidityNet?: InputMaybe<Scalars['String']['input']>;
  liquidityProviderCount?: InputMaybe<Scalars['String']['input']>;
  poolAddress?: InputMaybe<Scalars['String']['input']>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  price0?: InputMaybe<Scalars['String']['input']>;
  price1?: InputMaybe<Scalars['String']['input']>;
  /** BigInt */
  tickIdx?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  timestamp?: InputMaybe<Scalars['String']['input']>;
  volumeJetton0?: InputMaybe<Scalars['String']['input']>;
  volumeJetton1?: InputMaybe<Scalars['String']['input']>;
  volumeUSD?: InputMaybe<Scalars['String']['input']>;
};

export type TickVolumeJetton0Filters = {
  OR?: InputMaybe<Array<TickVolumeJetton0filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickVolumeJetton0filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickVolumeJetton1Filters = {
  OR?: InputMaybe<Array<TickVolumeJetton1filtersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickVolumeJetton1filtersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickVolumeUsdFilters = {
  OR?: InputMaybe<Array<TickVolumeUsDfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TickVolumeUsDfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionBlockFilters = {
  OR?: InputMaybe<Array<TransactionBlockfiltersOr>>;
  /** JSON */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionBlockfiltersOr = {
  /** JSON */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** JSON */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<JSON> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionFilters = {
  OR?: InputMaybe<Array<TransactionFiltersOr>>;
  block?: InputMaybe<TransactionBlockFilters>;
  id?: InputMaybe<TransactionIdFilters>;
  timestamp?: InputMaybe<TransactionTimestampFilters>;
};

export type TransactionFiltersOr = {
  block?: InputMaybe<TransactionBlockFilters>;
  id?: InputMaybe<TransactionIdFilters>;
  timestamp?: InputMaybe<TransactionTimestampFilters>;
};

export type TransactionIdFilters = {
  OR?: InputMaybe<Array<TransactionIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionInsertInput = {
  /** JSON */
  block: Scalars['String']['input'];
  id: Scalars['String']['input'];
  /** Date */
  timestamp: Scalars['String']['input'];
};

export type TransactionItem = {
  __typename?: 'TransactionItem';
  /** JSON */
  block: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
};

export type TransactionOrderBy = {
  block?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  timestamp?: InputMaybe<InnerOrder>;
};

export type TransactionSelectItem = {
  __typename?: 'TransactionSelectItem';
  /** JSON */
  block: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** Date */
  timestamp: Scalars['String']['output'];
};

export type TransactionTimestampFilters = {
  OR?: InputMaybe<Array<TransactionTimestampfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionTimestampfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionUpdateInput = {
  /** JSON */
  block?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  timestamp?: InputMaybe<Scalars['String']['input']>;
};

export type PoolListQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PoolListQueryQuery = { __typename?: 'Query', pool: Array<{ __typename?: 'PoolSelectItem', id: string, volumeUSD: string, totalValueLockedUSD: string, txCount: string, feesUSD: string, feeTier: string, jetton0?: { __typename?: 'PoolJetton0Relation', id: string, image?: string | null, name: string, symbol: string, derivedUSD: string, decimals: number } | null, jetton1?: { __typename?: 'PoolJetton1Relation', id: string, image?: string | null, name: string, symbol: string, derivedUSD: string, decimals: number } | null }> };

export type PoolExistQueryQueryVariables = Exact<{
  where?: InputMaybe<PoolFilters>;
}>;


export type PoolExistQueryQuery = { __typename?: 'Query', pool: Array<{ __typename?: 'PoolSelectItem', id: string }> };

export type PoolDetailQueryQueryVariables = Exact<{
  where?: InputMaybe<PoolFilters>;
}>;


export type PoolDetailQueryQuery = { __typename?: 'Query', pool: Array<{ __typename?: 'PoolSelectItem', id: string, totalValueLockedUSD: string, volumeUSD: string, feesUSD: string, txCount: string, jetton0?: { __typename?: 'PoolJetton0Relation', decimals: number, derivedUSD: string, id: string, image?: string | null, name: string, symbol: string } | null, jetton1?: { __typename?: 'PoolJetton1Relation', decimals: number, derivedUSD: string, id: string, image?: string | null, name: string, symbol: string } | null }> };

export type Pool24HQueryQueryVariables = Exact<{
  where?: InputMaybe<PoolDataFilters>;
}>;


export type Pool24HQueryQuery = { __typename?: 'Query', poolData: Array<{ __typename?: 'PoolDataSelectItem', poolId: string, volumeUSD: string, feesUSD: string }> };

export type PoolInfoToCreatePositionQueryQueryVariables = Exact<{
  where?: InputMaybe<PoolFilters>;
}>;


export type PoolInfoToCreatePositionQueryQuery = { __typename?: 'Query', pool: Array<{ __typename?: 'PoolSelectItem', id: string, sqrtPrice: string, tick: string, liquidity: string, jetton0Price: string, jetton1Price: string, jetton0?: { __typename?: 'PoolJetton0Relation', decimals: number, derivedUSD: string, id: string, image?: string | null, name: string, symbol: string } | null, jetton1?: { __typename?: 'PoolJetton1Relation', decimals: number, derivedUSD: string, id: string, image?: string | null, name: string, symbol: string } | null }> };

export type PositionDetailQueryQueryVariables = Exact<{
  where?: InputMaybe<PositionFilters>;
}>;


export type PositionDetailQueryQuery = { __typename?: 'Query', position: Array<{ __typename?: 'PositionSelectItem', liquidity: string, tickLower: string, tickUpper: string, collectedFeeJetton0: string, collectedFeeJetton1: string, depositedJetton0: string, depositedJetton1: string, pool?: { __typename?: 'PositionPoolRelation', id: string, tick: string, sqrtPrice: string } | null, jetton0?: { __typename?: 'PositionJetton0Relation', decimals: number, derivedUSD: string, id: string, image?: string | null, name: string, symbol: string } | null, jetton1?: { __typename?: 'PositionJetton1Relation', decimals: number, derivedUSD: string, id: string, image?: string | null, name: string, symbol: string } | null }> };

export type PositionFee24HQueryQueryVariables = Exact<{
  where?: InputMaybe<PositionDataFilters>;
}>;


export type PositionFee24HQueryQuery = { __typename?: 'Query', positionData: Array<{ __typename?: 'PositionDataSelectItem', id: string, collectedFeeJetton0: string, collectedFeeJetton1: string, poolId: string }> };

export type ListPositionInPoolQueryVariables = Exact<{
  where?: InputMaybe<PositionFilters>;
}>;


export type ListPositionInPoolQuery = { __typename?: 'Query', position: Array<{ __typename?: 'PositionSelectItem', id: string, depositedJetton0: string, depositedJetton1: string, tickLower: string, tickUpper: string, liquidity: string, jetton0?: { __typename?: 'PositionJetton0Relation', id: string, image?: string | null, name: string, symbol: string, decimals: number, derivedUSD: string } | null, jetton1?: { __typename?: 'PositionJetton1Relation', decimals: number, derivedUSD: string, id: string, image?: string | null, name: string, symbol: string } | null, pool?: { __typename?: 'PositionPoolRelation', id: string, tick: string, sqrtPrice: string } | null }> };


export const PoolListQueryDocument = gql`
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

/**
 * __usePoolListQueryQuery__
 *
 * To run a query within a React component, call `usePoolListQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePoolListQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePoolListQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function usePoolListQueryQuery(baseOptions?: Apollo.QueryHookOptions<PoolListQueryQuery, PoolListQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PoolListQueryQuery, PoolListQueryQueryVariables>(PoolListQueryDocument, options);
      }
export function usePoolListQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PoolListQueryQuery, PoolListQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PoolListQueryQuery, PoolListQueryQueryVariables>(PoolListQueryDocument, options);
        }
export function usePoolListQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PoolListQueryQuery, PoolListQueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PoolListQueryQuery, PoolListQueryQueryVariables>(PoolListQueryDocument, options);
        }
export type PoolListQueryQueryHookResult = ReturnType<typeof usePoolListQueryQuery>;
export type PoolListQueryLazyQueryHookResult = ReturnType<typeof usePoolListQueryLazyQuery>;
export type PoolListQuerySuspenseQueryHookResult = ReturnType<typeof usePoolListQuerySuspenseQuery>;
export type PoolListQueryQueryResult = Apollo.QueryResult<PoolListQueryQuery, PoolListQueryQueryVariables>;
export const PoolExistQueryDocument = gql`
    query PoolExistQuery($where: PoolFilters) {
  pool(where: $where) {
    id
  }
}
    `;

/**
 * __usePoolExistQueryQuery__
 *
 * To run a query within a React component, call `usePoolExistQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePoolExistQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePoolExistQueryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePoolExistQueryQuery(baseOptions?: Apollo.QueryHookOptions<PoolExistQueryQuery, PoolExistQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PoolExistQueryQuery, PoolExistQueryQueryVariables>(PoolExistQueryDocument, options);
      }
export function usePoolExistQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PoolExistQueryQuery, PoolExistQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PoolExistQueryQuery, PoolExistQueryQueryVariables>(PoolExistQueryDocument, options);
        }
export function usePoolExistQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PoolExistQueryQuery, PoolExistQueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PoolExistQueryQuery, PoolExistQueryQueryVariables>(PoolExistQueryDocument, options);
        }
export type PoolExistQueryQueryHookResult = ReturnType<typeof usePoolExistQueryQuery>;
export type PoolExistQueryLazyQueryHookResult = ReturnType<typeof usePoolExistQueryLazyQuery>;
export type PoolExistQuerySuspenseQueryHookResult = ReturnType<typeof usePoolExistQuerySuspenseQuery>;
export type PoolExistQueryQueryResult = Apollo.QueryResult<PoolExistQueryQuery, PoolExistQueryQueryVariables>;
export const PoolDetailQueryDocument = gql`
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

/**
 * __usePoolDetailQueryQuery__
 *
 * To run a query within a React component, call `usePoolDetailQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePoolDetailQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePoolDetailQueryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePoolDetailQueryQuery(baseOptions?: Apollo.QueryHookOptions<PoolDetailQueryQuery, PoolDetailQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PoolDetailQueryQuery, PoolDetailQueryQueryVariables>(PoolDetailQueryDocument, options);
      }
export function usePoolDetailQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PoolDetailQueryQuery, PoolDetailQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PoolDetailQueryQuery, PoolDetailQueryQueryVariables>(PoolDetailQueryDocument, options);
        }
export function usePoolDetailQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PoolDetailQueryQuery, PoolDetailQueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PoolDetailQueryQuery, PoolDetailQueryQueryVariables>(PoolDetailQueryDocument, options);
        }
export type PoolDetailQueryQueryHookResult = ReturnType<typeof usePoolDetailQueryQuery>;
export type PoolDetailQueryLazyQueryHookResult = ReturnType<typeof usePoolDetailQueryLazyQuery>;
export type PoolDetailQuerySuspenseQueryHookResult = ReturnType<typeof usePoolDetailQuerySuspenseQuery>;
export type PoolDetailQueryQueryResult = Apollo.QueryResult<PoolDetailQueryQuery, PoolDetailQueryQueryVariables>;
export const Pool24HQueryDocument = gql`
    query Pool24HQuery($where: PoolDataFilters) {
  poolData(where: $where) {
    poolId
    volumeUSD
    feesUSD
  }
}
    `;

/**
 * __usePool24HQueryQuery__
 *
 * To run a query within a React component, call `usePool24HQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePool24HQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePool24HQueryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePool24HQueryQuery(baseOptions?: Apollo.QueryHookOptions<Pool24HQueryQuery, Pool24HQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Pool24HQueryQuery, Pool24HQueryQueryVariables>(Pool24HQueryDocument, options);
      }
export function usePool24HQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Pool24HQueryQuery, Pool24HQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Pool24HQueryQuery, Pool24HQueryQueryVariables>(Pool24HQueryDocument, options);
        }
export function usePool24HQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Pool24HQueryQuery, Pool24HQueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Pool24HQueryQuery, Pool24HQueryQueryVariables>(Pool24HQueryDocument, options);
        }
export type Pool24HQueryQueryHookResult = ReturnType<typeof usePool24HQueryQuery>;
export type Pool24HQueryLazyQueryHookResult = ReturnType<typeof usePool24HQueryLazyQuery>;
export type Pool24HQuerySuspenseQueryHookResult = ReturnType<typeof usePool24HQuerySuspenseQuery>;
export type Pool24HQueryQueryResult = Apollo.QueryResult<Pool24HQueryQuery, Pool24HQueryQueryVariables>;
export const PoolInfoToCreatePositionQueryDocument = gql`
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

/**
 * __usePoolInfoToCreatePositionQueryQuery__
 *
 * To run a query within a React component, call `usePoolInfoToCreatePositionQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePoolInfoToCreatePositionQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePoolInfoToCreatePositionQueryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePoolInfoToCreatePositionQueryQuery(baseOptions?: Apollo.QueryHookOptions<PoolInfoToCreatePositionQueryQuery, PoolInfoToCreatePositionQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PoolInfoToCreatePositionQueryQuery, PoolInfoToCreatePositionQueryQueryVariables>(PoolInfoToCreatePositionQueryDocument, options);
      }
export function usePoolInfoToCreatePositionQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PoolInfoToCreatePositionQueryQuery, PoolInfoToCreatePositionQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PoolInfoToCreatePositionQueryQuery, PoolInfoToCreatePositionQueryQueryVariables>(PoolInfoToCreatePositionQueryDocument, options);
        }
export function usePoolInfoToCreatePositionQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PoolInfoToCreatePositionQueryQuery, PoolInfoToCreatePositionQueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PoolInfoToCreatePositionQueryQuery, PoolInfoToCreatePositionQueryQueryVariables>(PoolInfoToCreatePositionQueryDocument, options);
        }
export type PoolInfoToCreatePositionQueryQueryHookResult = ReturnType<typeof usePoolInfoToCreatePositionQueryQuery>;
export type PoolInfoToCreatePositionQueryLazyQueryHookResult = ReturnType<typeof usePoolInfoToCreatePositionQueryLazyQuery>;
export type PoolInfoToCreatePositionQuerySuspenseQueryHookResult = ReturnType<typeof usePoolInfoToCreatePositionQuerySuspenseQuery>;
export type PoolInfoToCreatePositionQueryQueryResult = Apollo.QueryResult<PoolInfoToCreatePositionQueryQuery, PoolInfoToCreatePositionQueryQueryVariables>;
export const PositionDetailQueryDocument = gql`
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

/**
 * __usePositionDetailQueryQuery__
 *
 * To run a query within a React component, call `usePositionDetailQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionDetailQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionDetailQueryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePositionDetailQueryQuery(baseOptions?: Apollo.QueryHookOptions<PositionDetailQueryQuery, PositionDetailQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PositionDetailQueryQuery, PositionDetailQueryQueryVariables>(PositionDetailQueryDocument, options);
      }
export function usePositionDetailQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PositionDetailQueryQuery, PositionDetailQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PositionDetailQueryQuery, PositionDetailQueryQueryVariables>(PositionDetailQueryDocument, options);
        }
export function usePositionDetailQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PositionDetailQueryQuery, PositionDetailQueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PositionDetailQueryQuery, PositionDetailQueryQueryVariables>(PositionDetailQueryDocument, options);
        }
export type PositionDetailQueryQueryHookResult = ReturnType<typeof usePositionDetailQueryQuery>;
export type PositionDetailQueryLazyQueryHookResult = ReturnType<typeof usePositionDetailQueryLazyQuery>;
export type PositionDetailQuerySuspenseQueryHookResult = ReturnType<typeof usePositionDetailQuerySuspenseQuery>;
export type PositionDetailQueryQueryResult = Apollo.QueryResult<PositionDetailQueryQuery, PositionDetailQueryQueryVariables>;
export const PositionFee24HQueryDocument = gql`
    query PositionFee24HQuery($where: PositionDataFilters) {
  positionData(where: $where) {
    id
    collectedFeeJetton0
    collectedFeeJetton1
    poolId
  }
}
    `;

/**
 * __usePositionFee24HQueryQuery__
 *
 * To run a query within a React component, call `usePositionFee24HQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionFee24HQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionFee24HQueryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePositionFee24HQueryQuery(baseOptions?: Apollo.QueryHookOptions<PositionFee24HQueryQuery, PositionFee24HQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PositionFee24HQueryQuery, PositionFee24HQueryQueryVariables>(PositionFee24HQueryDocument, options);
      }
export function usePositionFee24HQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PositionFee24HQueryQuery, PositionFee24HQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PositionFee24HQueryQuery, PositionFee24HQueryQueryVariables>(PositionFee24HQueryDocument, options);
        }
export function usePositionFee24HQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PositionFee24HQueryQuery, PositionFee24HQueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PositionFee24HQueryQuery, PositionFee24HQueryQueryVariables>(PositionFee24HQueryDocument, options);
        }
export type PositionFee24HQueryQueryHookResult = ReturnType<typeof usePositionFee24HQueryQuery>;
export type PositionFee24HQueryLazyQueryHookResult = ReturnType<typeof usePositionFee24HQueryLazyQuery>;
export type PositionFee24HQuerySuspenseQueryHookResult = ReturnType<typeof usePositionFee24HQuerySuspenseQuery>;
export type PositionFee24HQueryQueryResult = Apollo.QueryResult<PositionFee24HQueryQuery, PositionFee24HQueryQueryVariables>;
export const ListPositionInPoolDocument = gql`
    query ListPositionInPool($where: PositionFilters) {
  position(where: $where) {
    id
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
  }
}
    `;

/**
 * __useListPositionInPoolQuery__
 *
 * To run a query within a React component, call `useListPositionInPoolQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPositionInPoolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPositionInPoolQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useListPositionInPoolQuery(baseOptions?: Apollo.QueryHookOptions<ListPositionInPoolQuery, ListPositionInPoolQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPositionInPoolQuery, ListPositionInPoolQueryVariables>(ListPositionInPoolDocument, options);
      }
export function useListPositionInPoolLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPositionInPoolQuery, ListPositionInPoolQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPositionInPoolQuery, ListPositionInPoolQueryVariables>(ListPositionInPoolDocument, options);
        }
export function useListPositionInPoolSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListPositionInPoolQuery, ListPositionInPoolQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListPositionInPoolQuery, ListPositionInPoolQueryVariables>(ListPositionInPoolDocument, options);
        }
export type ListPositionInPoolQueryHookResult = ReturnType<typeof useListPositionInPoolQuery>;
export type ListPositionInPoolLazyQueryHookResult = ReturnType<typeof useListPositionInPoolLazyQuery>;
export type ListPositionInPoolSuspenseQueryHookResult = ReturnType<typeof useListPositionInPoolSuspenseQuery>;
export type ListPositionInPoolQueryResult = Apollo.QueryResult<ListPositionInPoolQuery, ListPositionInPoolQueryVariables>;