import { Address, OpenedContract, Sender } from "@ton/ton";
import {
  JettonMinterWrapper,
  JettonWalletWrapper,
} from "orbiton-contracts-sdk";
import client from "./ton-client";

export const getUserJettonData = async (
  jettonMaster: string,
  sender: Sender
): Promise<{
  minter: OpenedContract<JettonMinterWrapper.JettonMinter> | null;
  wallet: OpenedContract<JettonWalletWrapper.JettonWallet> | null;
  balance: bigint;
}> => {
  try {
    const jettonMinter = client.open(
      new JettonMinterWrapper.JettonMinter(Address.parse(jettonMaster))
    );

    const walletAddress = await jettonMinter.getWalletAddress(sender.address!);
    const jettonWallet = client.open(
      JettonWalletWrapper.JettonWallet.createFromAddress(walletAddress)
    );

    const balance = (await jettonWallet.getBalance()).amount;

    return {
      minter: jettonMinter,
      wallet: jettonWallet,
      balance,
    };
  } catch (error) {
    console.log(error);
    return {
      minter: null,
      wallet: null,
      balance: 0n,
    };
  }
};
