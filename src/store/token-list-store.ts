// src/store/token-list-store.ts
import { getTokenList } from "@/apis/server/tokens";
import { UnknownToken } from "@/constants/unknown";
import { logger } from "@/helper/zustand/middleware/logger";
import { Token } from "@/types/Token";
import { Address } from "@ton/core";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { useSwapStore } from "./swap-store";
import { useTonWalletStore } from "./ton-wallet-store";
import { TokenListState } from "./types";

const filterTokens = (
  tokensList: Record<string, Token>,
  excludedTokens: (Token | null)[]
) => {
  const excludedNames = excludedTokens
    .filter(Boolean)
    .map((t) => t!.token.name);
  return Object.values(tokensList).filter(
    (t) => !excludedNames.includes(t.token.name)
  );
};

export const useTokenListStore = create<
  TokenListState & {
    fetchTokens: () => Promise<void>;
    getTokenList: () => Promise<Record<string, Token>>;
    getFilteredTokens: (excludedTokens: (Token | null)[]) => Token[];
    fetchAccountData: () => Promise<void>;
    getTokenByKey: (key: string) => Token;
    resetBalance: () => void;
  }
>()(
  devtools(
    logger(
      (set, get) => ({
        tokensList: {},
        filteredTokens: [],
        fetchTokens: async () => {
          const tokenInfos = await getTokenList();
          const tokensList: Record<string, Token> = {};
          tokenInfos.forEach((token) => {
            const key = token.address
              ? Address.parse(token.address).toRawString()
              : token.symbol; // Adjust based on your Token structure
            tokensList[key] = { token };
          });
          const tokenArr = Object.values(tokensList);
          set({ tokensList, filteredTokens: tokenArr });
        },
        getTokenList: async () => {
          const tokenList = get().tokensList;
          if (Object.keys(tokenList).length === 0) {
            await get().fetchTokens();
          }
          return get().tokensList;
        },
        getFilteredTokens: (excludedTokens) => {
          console.log(get().tokensList);
          const filtered = filterTokens(get().tokensList, excludedTokens);
          console.log(filtered);
          set({ filteredTokens: filtered });
          return filtered;
        },
        getTokenByKey: (key: string) => {
          const token = get().tokensList[key];
          return token || UnknownToken;
        },
        fetchAccountData: async () => {
          const walletStore = useTonWalletStore.getState();
          const client = walletStore.tonApiClient;
          const address = walletStore.rawAddress;
          const tokenList = get().tokensList;

          if (client && address && Object.keys(tokenList).length > 0) {
            console.log("called");
            const accountJettonBalances =
              await client.accounts.getAccountJettonsBalances(
                Address.parse(address),
                { currencies: ["usd"] }
              );

            const addressMap = new Map<string, Token>(
              Object.entries(tokenList)
            );
            for (const item of accountJettonBalances.balances) {
              const jettonMaster = item.jetton.address.toRawString();
              if (addressMap.has(jettonMaster)) {
                addressMap.set(jettonMaster, {
                  ...addressMap.get(jettonMaster)!,
                  balance: item.balance.toString(),
                  jettonMaster: item.jetton.address.toRawString(),
                  jettonMinter: item.walletAddress.address.toRawString(),
                });
              }
            }

            const newTokens = Object.fromEntries(addressMap.entries());
            set({ tokensList: newTokens });

            const swapStore = useSwapStore.getState();
            const token1 = get().getTokenByKey(
              Address.parse(swapStore.token1?.token.address || "").toRawString()
            );
            const token2 = get().getTokenByKey(
              Address.parse(swapStore.token2?.token.address || "").toRawString()
            );
            swapStore.setPair(token1, token2);
          }

          if (!address) {
            Object.keys(tokenList).forEach((tokenAddr) => {
              tokenList[tokenAddr] = {
                ...tokenList[tokenAddr],
                balance: undefined,
              };
            });
            set({ tokensList: tokenList });
          }
        },
        resetBalance: () => {
          const tokenList = get().tokensList;
          Object.keys(tokenList).forEach((tokenAddr) => {
            tokenList[tokenAddr] = {
              ...tokenList[tokenAddr],
              balance: undefined,
            };
          });
          set({ tokensList: tokenList });

          const swapStore = useSwapStore.getState();
          const token1 = get().getTokenByKey(
            Address.parse(swapStore.token1?.token.address || "").toRawString()
          );
          const token2 = get().getTokenByKey(
            Address.parse(swapStore.token2?.token.address || "").toRawString()
          );
          swapStore.setPair(token1, token2);
        },
      }),
      "token-list"
    )
  )
);
