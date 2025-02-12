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
  aliased: boolean;
  price: string;
};

export type Token = {
  token: TokenInfo;
  balance?: string;
  amount?: string;
};
