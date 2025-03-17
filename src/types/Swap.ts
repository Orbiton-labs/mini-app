import { SenderArguments } from "@ton/core";

export type SimulateSwapResponse = {
  messages: SenderArguments[];
  returnAmount: string;
};
