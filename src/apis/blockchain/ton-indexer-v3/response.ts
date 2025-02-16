interface Account {
  account_state_hash: string;
  address: string;
  balance: string;
  balance_extra_currencies: {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  } | null;
  code_boc: string;
  code_hash: string;
  data_boc: string;
  data_hash: string;
  frozen_hash: string;
  last_transaction_hash: string;
  last_transaction_lt: number;
  status: string;
}

interface Wallet {
  status: string;
  address: string;
  balance: string;
  is_wallet: boolean;
  last_transaction_hash: string;
  last_transaction_lt: string;
  code_hash?: string;
  seqno?: number;
  wallet_id?: number;
  wallet_type?: string;
  is_signature_allowed?: boolean;
}

export interface AddressBookEntry {
  domain: string | null;
  user_friendly: string;
}

interface TokenInfo {
  description: string;
  extra: {
    additionalProp1: Record<string, unknown>;
  };
  image: string;
  name: string;
  symbol: string;
  type: string;
}

export interface MetadataEntry {
  is_indexed: boolean;
  token_info: TokenInfo[];
}

export interface AccountStatesResponse {
  accounts: Account[];
  address_book: Record<string, AddressBookEntry>;
  metadata: Record<string, MetadataEntry>;
}

export interface WalletSatesResponse {
  wallets: Wallet[];
  address_book: Record<string, AddressBookEntry>;
  metadata: Record<string, MetadataEntry>;
}

export interface Action {
  action_id: string;
  details: Record<string, unknown>;
  end_lt: string;
  end_utime: number;
  start_lt: string;
  start_utime: number;
  success: boolean;
  trace_id: string;
  transactions: string[];
  type: string;
}

export interface ActionsResponse {
  actions: Action[];
  address_book: Record<string, AddressBookEntry>;
  metadata: Record<string, MetadataEntry>;
}

export interface MessageContent {
  body: string;
  hash: string;
  decoded: {
    type: string;
    comment: string;
  };
}

export interface Message {
  hash: string;
  source: string;
  destination: string;
  value: string;
  fwd_fee: string;
  ihr_fee: string;
  import_fee: string;
  created_lt: string;
  created_at: string;
  bounce: boolean;
  bounced: boolean;
  ihr_disabled: boolean;
  init_state: MessageContent;
  message_content: MessageContent;
  in_msg_tx_hash: string;
  out_msg_tx_hash: string;
  opcode: number;
  value_extra_currencies: Record<string, string>;
}

export interface AccountState {
  account_status: string;
  balance: string;
  balance_extra_currencies: Record<string, string>;
  code_hash: string;
  code_boc: string;
  data_hash: string;
  data_boc: string;
  frozen_hash: string;
  hash: string;
}

export interface BlockRef {
  workchain: number;
  shard: string;
  seqno: number;
}

export interface ComputePhase {
  skipped: boolean;
  success: boolean;
  gas_fees: string;
  gas_used: string;
  gas_limit: string;
  gas_credit: string;
  mode: number;
  exit_code: number;
  exit_arg: number;
  vm_steps: number;
  vm_init_state_hash: string;
  vm_final_state_hash: string;
  reason: string;
  msg_state_used: boolean;
  account_activated: boolean;
}

export interface StoragePhase {
  status_change: string;
  storage_fees_collected: string;
  storage_fees_due: string;
}

export interface CreditPhase {
  due_fees_collected: string;
  credit: string;
  credit_extra_currencies: Record<string, string>;
}

export interface BouncePhase {
  type: string;
  msg_fees: string;
  fwd_fees: string;
  req_fwd_fees: string;
  msg_size: {
    cells: string;
    bits: string;
  };
}

export interface ActionPhase {
  success: boolean;
  valid: boolean;
  no_funds: boolean;
  status_change: string;
  total_fwd_fees: string;
  total_action_fees: string;
  result_code: number;
  result_arg: number;
  tot_actions: number;
  spec_actions: number;
  skipped_actions: number;
  msgs_created: number;
  action_list_hash: string;
  tot_msg_size: {
    cells: string;
    bits: string;
  };
}

export interface SplitInfo {
  cur_shard_pfx_len: number;
  acc_split_depth: number;
  this_addr: string;
  sibling_addr: string;
}

export interface TransactionDescription {
  type: string;
  credit_first: boolean;
  aborted: boolean;
  destroyed: boolean;
  installed: boolean;
  is_tock: boolean;
  compute_ph: ComputePhase;
  storage_ph: StoragePhase;
  credit_ph: CreditPhase;
  bounce: BouncePhase;
  action: ActionPhase;
  split_info: SplitInfo;
}

export interface Transaction {
  account: string;
  hash: string;
  lt: string;
  now: number;
  prev_trans_hash: string;
  prev_trans_lt: string;
  trace_id: string;
  mc_block_seqno: number;
  description: TransactionDescription;
  in_msg: Message;
  out_msgs: Message[];
  block_ref: BlockRef;
  account_state_before: AccountState;
  account_state_after: AccountState;
  total_fees: string;
  total_fees_extra_currencies: Record<string, string>;
  orig_status: string;
  end_status: string;
}

export interface TraceInfo {
  trace_state: string;
  classification_state: string;
  transactions: number;
  messages: number;
  pending_messages: number;
}

export interface TraceNode {
  tx_hash: string;
  in_msg_hash: string;
  transaction: Transaction;
  children: string[];
}

export interface Trace {
  trace_id: string;
  start_lt: string;
  end_lt: string;
  start_utime: number;
  end_utime: number;
  mc_seqno_start: string;
  mc_seqno_end: string;
  external_hash: string;
  is_incomplete: boolean;
  trace: TraceNode;
  transactions: Record<string, Transaction>;
  transactions_order: string[];
  actions: Action[];
  trace_info: TraceInfo;
  warning?: string;
}

export interface TracesResponse {
  traces: Trace[];
  address_book: Record<string, AddressBookEntry>;
  metadata: Record<string, MetadataEntry>;
}

export interface AddressInformationResponse {
  balance: string;
  code: string | null;
  data: string | null;
  frozen_hash: string | null;
  last_transaction_hash: string;
  last_transaction_lt: string;
  status: string;
}

export interface WalletInformationResponse {
  balance: string;
  last_transaction_hash: string;
  last_transaction_lt: string;
  seqno?: number;
  status: string;
  wallet_id?: number;
  wallet_type?: string;
}

export interface EstimateFeeResponse {
  destination_fees: Array<{
    fwd_fee: number;
    gas_fee: number;
    in_fwd_fee: number;
    storage_fee: number;
  }>;
  source_fees: {
    fwd_fee: number;
    gas_fee: number;
    in_fwd_fee: number;
    storage_fee: number;
  };
}

interface StackEntry {
  type: string;
  value: string;
}

export interface RunMethodResponse {
  address: string;
  method: string;
  stack: StackEntry[];
}

export interface AdjacentTransactionsResponse {
  transactions: Transaction[];
  address_book: Record<string, AddressBookEntry>;
}

export interface Block {
  after_merge: boolean;
  after_split: boolean;
  before_split: boolean;
  created_by: string;
  end_lt: string;
  file_hash: string;
  flags: number;
  gen_catchain_seqno: number;
  gen_utime: string;
  global_id: number;
  key_block: boolean;
  master_ref_seqno: number;
  masterchain_block_ref: BlockRef;
  min_ref_mc_seqno: number;
  prev_blocks: BlockRef[];
  prev_key_block_seqno: number;
  rand_seed: string;
  root_hash: string;
  seqno: number;
  shard: string;
  start_lt: string;
  tx_count: number;
  validator_list_hash_short: number;
  version: number;
  vert_seqno: number;
  vert_seqno_incr: boolean;
  want_merge: boolean;
  want_split: boolean;
  workchain: number;
}

export interface BlocksResponse {
  blocks: Block[];
}

export interface MasterchainInfoResponse {
  first: Block;
  last: Block;
}

export interface MessagesResponse {
  messages: Message[];
  address_book: Record<string, AddressBookEntry>;
  metadata: Record<string, MetadataEntry>;
}

export interface TransactionsResponse {
  transactions: Transaction[];
  address_book: Record<string, AddressBookEntry>;
}

export interface JettonBurnsResponse {
  jetton_burns: Array<{
    amount: string;
    custom_payload: string;
    jetton_master: string;
    jetton_wallet: string;
    owner: string;
    query_id: string;
    response_destination: string;
    trace_id: string;
    transaction_aborted: boolean;
    transaction_hash: string;
    transaction_lt: string;
    transaction_now: number;
  }>;
  address_book: Record<string, AddressBookEntry>;
  metadata: Record<string, MetadataEntry>;
}

export interface JettonMastersResponse {
  jetton_masters: Array<{
    address: string;
    admin_address: string;
    code_hash: string;
    data_hash: string;
    jetton_content: Record<string, unknown>;
    jetton_wallet_code_hash: string;
    last_transaction_lt: string;
    mintable: boolean;
    total_supply: string;
  }>;
  address_book: Record<string, AddressBookEntry>;
  metadata: Record<string, MetadataEntry>;
}

export interface JettonTransfersResponse {
  jetton_transfers: Array<{
    amount: string;
    custom_payload: string;
    destination: string;
    forward_payload: string;
    forward_ton_amount: string;
    jetton_master: string;
    query_id: string;
    response_destination: string;
    source: string;
    source_wallet: string;
    trace_id: string;
    transaction_aborted: boolean;
    transaction_hash: string;
    transaction_lt: string;
    transaction_now: number;
  }>;
  address_book: Record<string, AddressBookEntry>;
  metadata: Record<string, MetadataEntry>;
}

export interface JettonWalletsResponse {
  jetton_wallets: Array<{
    address: string;
    balance: string;
    code_hash: string;
    data_hash: string;
    jetton: string;
    last_transaction_lt: string;
    mintless_info: {
      amount: string;
      custom_payload_api_uri: string[];
      expire_at: number;
      start_from: number;
    };
    owner: string;
  }>;
  address_book: Record<string, AddressBookEntry>;
  metadata: Record<string, MetadataEntry>;
}

type Content = Record<string, unknown> & {
  uri: string;
};

export interface NftCollectionsResponse {
  nft_collections: Array<{
    address: string;
    code_hash: string;
    collection_content: Content;
    data_hash: string;
    last_transaction_lt: string;
    next_item_index: string;
    owner_address: string;
  }>;
  address_book: Record<string, AddressBookEntry>;
  metadata: Record<string, MetadataEntry>;
}

export interface NftItemsResponse {
  nft_items: Array<{
    address: string;
    code_hash: string;
    collection: {
      address: string;
      code_hash: string;
      collection_content: Content;
      data_hash: string;
      last_transaction_lt: string;
      next_item_index: string;
      owner_address: string;
    };
    collection_address: string;
    content: Content;
    data_hash: string;
    index: string;
    init: boolean;
    last_transaction_lt: string;
    owner_address: string;
  }>;
  address_book: Record<string, AddressBookEntry>;
  metadata: Record<string, MetadataEntry>;
}

export interface NftTransfersResponse {
  nft_transfers: Array<{
    custom_payload: string;
    forward_amount: string;
    forward_payload: string;
    new_owner: string;
    nft_address: string;
    nft_collection: string;
    old_owner: string;
    query_id: string;
    response_destination: string;
    trace_id: string;
    transaction_aborted: boolean;
    transaction_hash: string;
    transaction_lt: string;
    transaction_now: number;
  }>;
  address_book: Record<string, AddressBookEntry>;
  metadata: Record<string, MetadataEntry>;
}
