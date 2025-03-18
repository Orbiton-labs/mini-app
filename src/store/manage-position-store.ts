import { logger } from "@/helper/zustand/middleware/logger";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export enum ManagePositionStatus {
    IDLE = 'IDLE',
    CALCULATING = 'CALCULATING',
    INSUFFICIENT_BALANCE = 'INSUFFICIENT_BALANCE',
    COLLECTING_FEE = 'COLLECTING_FEE',
    COLLECT_FEE_SUCCESS = 'COLLECT_FEE_SUCCESS',
    COLLECT_FEE_ERROR = 'COLLECT_FEE_ERROR',
    REMOVING_LIQUIDITY = 'REMOVING_LIQUIDITY',
    REMOVE_LIQUIDITY_SUCCESS = 'REMOVE_LIQUIDITY_SUCCESS',
    REMOVE_LIQUIDITY_ERROR = 'REMOVE_LIQUIDITY_ERROR',
    CONNECT_WALLET = 'CONNECT_WALLET'
}

export enum ManagePositionTab {
    COLLECT_FEE = 'Collect Fees',
    REMOVE_LIQUIDITY = 'Remove Liquidity'
}

interface ManagePositionState {
    status: ManagePositionStatus;
    error: string | null;
    selectedTab: ManagePositionTab;
    percent: number;
    setStatus: (status: ManagePositionStatus) => void;
    setError: (error: string | null) => void;
    setSelectedTab: (tab: ManagePositionTab) => void;
    setPercent: (percent: number) => void;
    getButtonText: () => string;
    isButtonDisabled: () => boolean;
    reset: () => void;
}

export const useManagePositionStore = create<ManagePositionState>()(
    devtools(
        logger(
            (set, get) => ({
                status: ManagePositionStatus.IDLE,
                error: null,
                selectedTab: ManagePositionTab.COLLECT_FEE,
                percent: 25,

                setStatus: (status) => set({ status }),
                setError: (error) => set({ error }),
                setSelectedTab: (tab) => set({ selectedTab: tab }),
                setPercent: (percent) => set({ percent }),

                getButtonText: () => {
                    const { status, selectedTab } = get();
                    switch (status) {
                        case ManagePositionStatus.CONNECT_WALLET:
                            return "Connect Wallet";
                        case ManagePositionStatus.INSUFFICIENT_BALANCE:
                            return "Insufficient Balance";
                        case ManagePositionStatus.CALCULATING:
                            return "Calculating...";
                        case ManagePositionStatus.COLLECTING_FEE:
                            return "Collecting Fees...";
                        case ManagePositionStatus.COLLECT_FEE_SUCCESS:
                            return "Fees Collected!";
                        case ManagePositionStatus.COLLECT_FEE_ERROR:
                            return "Failed to Collect Fees";
                        case ManagePositionStatus.REMOVING_LIQUIDITY:
                            return "Removing Liquidity...";
                        case ManagePositionStatus.REMOVE_LIQUIDITY_SUCCESS:
                            return "Liquidity Removed!";
                        case ManagePositionStatus.REMOVE_LIQUIDITY_ERROR:
                            return "Failed to Remove Liquidity";
                        default:
                            return selectedTab === ManagePositionTab.COLLECT_FEE ? "Collect Fees" : "Remove Liquidity";
                    }
                },

                isButtonDisabled: () => {
                    const { status } = get();
                    return [
                        ManagePositionStatus.CALCULATING,
                        ManagePositionStatus.COLLECTING_FEE,
                        ManagePositionStatus.COLLECT_FEE_SUCCESS,
                        ManagePositionStatus.REMOVING_LIQUIDITY,
                        ManagePositionStatus.REMOVE_LIQUIDITY_SUCCESS,
                        ManagePositionStatus.INSUFFICIENT_BALANCE,
                        ManagePositionStatus.CONNECT_WALLET
                    ].includes(status);
                },

                reset: () => set({
                    status: ManagePositionStatus.IDLE,
                    error: null,
                    percent: 25
                })
            }), "manage-position")
    )
); 