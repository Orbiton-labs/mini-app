import { SimulateSwapResponse } from "@/types/Swap";
import { Cell } from "@ton/core";
import axios from "./axios";

export const simulateSwap = async (
  tokenFrom: string,
  tokenTo: string,
  amountIn: string,
  sender: string
): Promise<SimulateSwapResponse | null> => {
  try {
    const res = await axios.get(`/swap/simulate?offerJettonAddress=${tokenFrom}&askJettonAddress=${tokenTo}&offerAmount=${amountIn}&senderAddress=${sender}`)
    const data = (res.data.data as any)
    return {
      ...data,
      messages: data.messages.map((message: any) => {
        return {
          ...message,
          body: Cell.fromBoc(Buffer.from(message.body, "hex"))[0]
        }
      })
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
