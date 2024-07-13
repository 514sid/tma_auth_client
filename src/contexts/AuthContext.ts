import { createContext } from "react"
import { User } from "../api/userService"

export type AuthContextType = {
    user: User | undefined
} | undefined

export const AuthContext = createContext<AuthContextType>(undefined)
