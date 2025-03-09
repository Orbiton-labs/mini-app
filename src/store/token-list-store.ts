// src/store/token-list-store.ts
import { getTokenList } from "@/apis/server/tokens";
import { logger } from "@/helper/zustand/middleware/logger";
import { Token } from "@/types/Token";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { TokenListState } from "./types";

const filterTokens = (
    tokensList: Token[],
    excludedTokens: (Token | null)[]
) => {
    const excludedNames = excludedTokens
        .filter(Boolean)
        .map((t) => t!.token.name);
    return tokensList.filter((t) => !excludedNames.includes(t.token.name));
};

export const useTokenListStore = create<
    TokenListState & {
        fetchTokens: () => Promise<void>;
        getTokenList: () => Promise<Token[]>;
        getFilteredTokens: (excludedTokens: (Token | null)[]) => Token[];
    }
>()(
    devtools(
        logger((set, get) => ({
            tokensList: [],
            filteredTokens: [],
            fetchTokens: async () => {
                const tokenInfos = await getTokenList();
                const tokensList = tokenInfos.map((token) => ({ token }));
                set({ tokensList, filteredTokens: tokensList });
            },
            getTokenList: async () => {
                console.log("called")
                const tokenList = get().tokensList;
                if (tokenList.length === 0) {
                    await get().fetchTokens();
                }
                return get().tokensList;
            },
            getFilteredTokens: (excludedTokens) => {
                const filtered = filterTokens(get().tokensList, excludedTokens);
                set({ filteredTokens: filtered });
                return filtered;
            },
        }), "token-list")
    )
);