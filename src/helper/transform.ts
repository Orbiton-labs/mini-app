import { PTON_MASTER } from "@/constants/pton";
import { TokenInfo, TokenType } from "@/types/Token";
import { Jetton } from "@orbiton_labs/v3-contracts-sdk";

export const parseJetton = (token: TokenInfo): Jetton => {
  if (token.type === TokenType.NATIVE) {
    return new Jetton(
      PTON_MASTER,
      token.decimals,
      token.symbol,
      token.name,
      token.image
    );
  }

  return new Jetton(
    token.address!,
    token.decimals,
    token.symbol,
    token.name,
    token.image
  );
};
