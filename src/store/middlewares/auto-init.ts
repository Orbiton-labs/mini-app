import { StateCreator } from "zustand";

export const autoInit = <T>(
    creator: StateCreator<T & { init: () => Promise<void> }>
): StateCreator<T & { init: () => Promise<void> }> => (set, get, api) => {
    const store = creator(set, get, api);
    store.init().catch((err) => console.error("Initialization failed:", err));
    return store;
};