import { TonClient } from "@ton/ton";

const client = new TonClient({
  // TODO: move to env
  endpoint: "https://toncenter.com/api/v2/jsonRPC",
});

export default client;
