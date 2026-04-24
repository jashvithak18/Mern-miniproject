import {create} from 'zustand'

export const useCounterStore = create((set) => ({
    // state
    newCounter: 0,
    newCounter1: 100,

    // user state
    user: { name: "Jash", email: "jash@mail.com", age: "20" },

    // fixed — use state to access user object
    changeEmail: () => set(state => ({ user: { ...state.user, email: "jash@mail.in" } })),
    changeNameAndAge: () => set(state => ({ user: { ...state.user, name: "Sneha", age: "22" } })),

    // counter functions
    incrementCounter: () => set(state => ({ newCounter: state.newCounter + 1 })),
    incrementCounter1: () => set(state => ({ newCounter1: state.newCounter1 + 1 })),

    decrementCounter: () => set(state => ({ newCounter: state.newCounter - 1 })),
    decrementCounter1: () => set(state => ({ newCounter1: state.newCounter1 - 20 })),

    reset: () => set({ newCounter: 0 }),

    newCounterSet: () => set({ newCounter: 500 }),
}))