import { getPoolList } from "@/apis/server/pool";
import { logger } from "@/helper/zustand/middleware/logger";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { autoInit } from "./middlewares/auto-init";
import { PoolState } from "./types";

export const usePoolStore = create<
    PoolState & {
        init: () => Promise<void>
        setSelectedPool: (poolAddress: string) => void;
    }
>()(
    devtools(
        logger(
            autoInit((set, get) => ({
                poolList: [],
                selectedPool: null,
                init: async () => {
                    const poolList = await getPoolList();
                    set({ poolList });
                },
                setSelectedPool: (poolAddress) => {
                    const pool = get().poolList.find((pool) => pool.address === poolAddress) || null
                    set({ selectedPool: pool });
                },
            })), "pool")
    )
)