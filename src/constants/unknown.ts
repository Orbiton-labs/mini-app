import { Token, TokenType } from "@/types/Token";

export const UNKNOWN_IMAGE_URL =
  "https://i.ibb.co/vw91Zbj/Untitled-design-1.png";
export const UNKNOWN_TOKEN = "UNKNOWN";

export const UnknownToken: Token = {
  token: {
    type: TokenType.JETTON,
    address: "", // override this
    name: "Unknown Token",
    symbol: "UNKNOWN",
    image: UNKNOWN_IMAGE_URL,
    decimals: 9,
    aliased: true,
    price: "0",
  },
}