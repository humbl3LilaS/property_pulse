import {immer} from "zustand/middleware/immer";
import {create} from "zustand";

interface State {
    messageCount: number;
    setMessageCount: (payload: number) => void;
    decreaseMessageCount: (payload: number) => void;
}

export const useMessageCountStore = create<State>()(
    immer((set) => ({
        messageCount: 0,
        setMessageCount: (payload: number) => set((state) => {
            state.messageCount = payload;
        }),
        decreaseMessageCount: (payload: number) => set((state) => {
            state.messageCount = state.messageCount - payload;
        })
    }))
);