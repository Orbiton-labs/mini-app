import { Address, SenderArguments } from "@ton/core";

export type Sender = {
    address?: Address;
    send: (args: SenderArguments) => Promise<string>;
    sendMultiple: (args: SenderArguments[]) => Promise<string>;
};