import { Address, OpenedContract, Sender, TonClient } from "@ton/ton";
import client from "./ton-client";
import { tonCenterClient } from "./ton-indexer-v3";
import { JettonMinterWrapper, JettonWalletWrapper } from "@orbiton_labs/v3-contracts-sdk";

export const getUserJettonData = async (
  jettonMaster: string | null,
  sender: Sender
): Promise<{
  minter: OpenedContract<JettonMinterWrapper.JettonMinter> | null;
  wallet: OpenedContract<JettonWalletWrapper.JettonWallet> | null;
  balance: string;
}> => {
  try {
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

export const getUserJettonData2 = async (
  tonClient: TonClient,
  jettonMaster: string | null,
  sender: Sender
): Promise<{
  minter: OpenedContract<JettonMinterWrapper.JettonMinter> | null;
  wallet: OpenedContract<JettonWalletWrapper.JettonWallet> | null;
  balance: string;
}> => {
  try {
    if (!jettonMaster) {
      const balance = await getTonNativeBalance2(tonClient, sender.address!);

      return {
        // TODO: return pTON wallet and minter here
        minter: null,
        wallet: null,
        balance: balance.toString(),
      };
    }

    const jettonMinterContract = new JettonMinterWrapper.JettonMinter(Address.parse(jettonMaster));
    const jettonMinter = client.open(jettonMinterContract) as OpenedContract<JettonMinterWrapper.JettonMinter>;

    if (!sender.address) {
      return {
        minter: jettonMinter,
        wallet: null,
        balance: "0",
      };
    }

    const jettonWalletAddress = await jettonMinter.getWalletAddress(sender.address);
    const jettonWalletContract = new JettonWalletWrapper.JettonWallet(jettonWalletAddress);
    const jettonWallet = client.open(jettonWalletContract) as OpenedContract<JettonWalletWrapper.JettonWallet>;

    const balance = await jettonWallet.getBalance();

    return {
      minter: jettonMinter,
      wallet: jettonWallet,
      balance: balance.amount.toString(),
    };
  } catch (error) {
    console.log(error);
    return {
      minter: null,
      wallet: null,
      balance: "0",
    };
  }
}

export const getTonNativeBalance2 = async (
  tonClient: TonClient,
  address: Address
): Promise<bigint> => {
  try {
    const balance = await tonClient.getBalance(address);
    return balance;
  } catch (error) {
    console.log(error);
    return 0n;
  }
};