export enum TokenType {
  NATIVE,
  JETTON,
}

export type TokenInfo = {
  type: TokenType;
  address: string | null; // native is null
  name: string;
  symbol: string;
  image: string;
  decimals: number;
  price: number;
};

export type Token = {
  token: TokenInfo;
  jettonMaster?: string;
  jettonMinter?: string;
  balance?: string;
  amount?: string;
};
