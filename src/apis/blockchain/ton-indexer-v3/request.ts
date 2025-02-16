interface Pagination {
  limit?: number;
  offset?: number;
  sort?: "desc" | "asc";
}

interface Times {
  start_utime?: number;
  end_utime?: number;
  start_lt?: number;
  end_lt?: number;
}

type Direction = "in" | "out";

interface GeneralRequest extends Pagination, Times {
  account?: string;
  tx_hash?: string[];
  msg_hash?: string[];
  mc_seqno?: number;
}

export interface EstimateFeeRequest {
  address: string;
  body: string;
  ignore_chksig: boolean;
  init_code: string;
  init_data: string;
}

interface StackEntry {
  type: string;
  value: string;
}

export interface RunMethodRequest {
  address: string;
  method: string;
  stack: StackEntry[];
}

export interface TransactionsByMasterchainRequest extends Pagination {
  seqno: number;
}

export interface TransactionsByMessageRequest extends Omit<Pagination, "sort"> {
  msg_hash?: string;
  body_hash?: string;
  opcode?: string;
  direction?: Direction;
}

export interface ActionsRequest extends GeneralRequest {
  action_id?: string[];
  trace_id?: string[];
}

export interface TracesRequest extends GeneralRequest {
  trace_id?: string[];
  include_actions?: boolean;
}

export interface BlocksRequest
  extends Omit<GeneralRequest, "account" | "tx_hash" | "msg_hash"> {
  workchain?: number;
  shard?: string;
  seqno?: number;
}

export interface MessagesRequest
  extends Omit<GeneralRequest, "account" | "tx_hash" | "mc_seqno"> {
  msg_hash?: string[];
  body_hash?: string;
  source?: string;
  destination?: string;
  opcode?: string;
  direction?: Direction;
  exclude_externals?: boolean;
  only_externals?: boolean;
}

export interface TransactionsRequest
  extends Omit<GeneralRequest, "account" | "msg_hash" | "tx_hash"> {
  workchain?: number;
  shard?: string;
  seqno?: number;
  account?: string[];
  exclude_account?: string[];
  hash?: string;
  lt?: number;
}

export interface JettonBurnsRequest extends Pagination, Times {
  address?: string[];
  jetton_wallet?: string[];
  jetton_master?: string;
}

export interface JettonMastersRequest extends Omit<Pagination, "sort"> {
  address?: string[];
  admin_address?: string[];
}

export interface JettonTransfersRequest extends Pagination, Times {
  owner_address?: string[];
  jetton_wallet?: string[];
  jetton_master?: string;
  direction?: Direction;
}

export interface JettonWalletsRequest extends Pagination {
  address?: string[];
  owner_address?: string[];
  jetton_address?: string;
  exclude_zero_balance?: boolean;
}

export interface NftCollectionsRequest extends Omit<Pagination, "sort"> {
  collection_address?: string[];
  owner_address?: string[];
}

export interface NftItemsRequest extends Omit<Pagination, "sort"> {
  collection_address?: string;
  owner_address?: string[];
  address?: string[];
  index?: string[];
}

export interface NftTransfersRequest extends Pagination, Times {
  collection_address?: string;
  owner_address?: string[];
  item_address?: string[];
  direction?: Direction;
}
