import { TokenInfo } from "@/types/Token";
import { Jetton } from "@orbiton_labs/v3-contracts-sdk";

export const parseJetton = (token: TokenInfo): Jetton => {
  return new Jetton(
    token.address || "ton",
    token.decimals,
    token.symbol,
    token.name,
    token.image
  );
};
