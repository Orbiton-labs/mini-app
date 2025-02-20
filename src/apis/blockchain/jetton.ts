import { Address, OpenedContract, Sender } from "@ton/ton";
import {
  JettonMinterWrapper,
  JettonWalletWrapper,
} from "orbiton-contracts-sdk";
import client from "./ton-client";
import { tonCenterClient } from "./ton-indexer-v3";

export const getUserJettonData = async (
  jettonMaster: string | null,
  sender: Sender
): Promise<{
  minter: OpenedContract<JettonMinterWrapper.JettonMinter> | null;
  wallet: OpenedContract<JettonWalletWrapper.JettonWallet> | null;
  balance: string;
}> => {
  try {
    // return {
    //   minter: null,
    //   wallet: null,
    //   balance: "0",
    // };

    if (!jettonMaster) {
      const balance = await getTonNativeBalance(sender.address!);

      return {
        minter: null,
        wallet: null,
        balance: balance.toString(),
      };
    }

    const res = await tonCenterClient.getJettonWallets({
      owner_address: [sender.address!.toString()],
      jetton_address: jettonMaster,
      limit: 1,
      offset: 0,
    });

    const jettonWalletInfo = res.jetton_wallets[0];

    const jettonMinter = client.open(
      new JettonMinterWrapper.JettonMinter(Address.parse(jettonMaster))
    );

    let jettonWallet = null;
    let balance = "0";
    if (jettonWalletInfo) {
      jettonWallet = client.open(
        JettonWalletWrapper.JettonWallet.createFromAddress(
          Address.parse(jettonWalletInfo.address)
        )
      );
      balance = jettonWalletInfo.balance;
    }

    return {
      minter: jettonMinter,
      wallet: jettonWallet,
      balance: balance,
    };
  } catch (error) {
    console.log(error);
    return {
      minter: null,
      wallet: null,
      balance: "0",
    };
  }
};

export const getTonNativeBalance = async (
  address: Address
): Promise<bigint> => {
  try {
    const balance = await client.getBalance(address);
    return balance;
  } catch (error) {
    console.log(error);
    return 0n;
  }
};
