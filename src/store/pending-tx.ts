import { StateCreator } from "zustand";

export interface PendingTransactionSlice {
    show: boolean;
    // for testing
    toggle: () => void;
}

export const createPendingTransactionSlice: StateCreator<PendingTransactionSlice, [], []> = (
    set,
    get
) => ({
    show: false,
    toggle: () => {
        set((state) => ({
            show: !state.show,
        }));
    }
});