import { useState } from "react"
import { User, userService } from "../api/userService"

export const useFetchCurrentUser = () => {
    const [user, setUser] = useState<User | undefined>()
    const [error, setError] = useState<Error | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchCurrentUser = async () => {
        setIsLoading(true)
        setError(null)

        try {
            const data = await userService.getCurrentUser()
            setUser(data)
        } catch (err) {
            setError(err as Error)
        } finally {
            setIsLoading(false)
        }
    }

    return { user, error, isLoading, fetchCurrentUser, setUser }
}