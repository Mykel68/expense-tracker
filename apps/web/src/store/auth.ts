import { create } from 'zustand'

interface AuthState {
    user: User | null
    setUser: (user: User) => void
}

export type User = {
    name: string
    email: string

}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user: User) => set({ user }),
}))