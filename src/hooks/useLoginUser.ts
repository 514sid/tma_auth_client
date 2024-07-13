import { useState } from "react"
import { LoginResponse, userService } from "../api/userService"

export const useLoginUser = () => {
    const [authData, setAuthData] = useState<LoginResponse | undefined>()
    const [error, setError] = useState<Error | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const loginUser = async (initData: string) => {
        setIsLoading(true)
        setError(null)

        try {
            const data = await userService.login(initData)
            setAuthData(data)
        } catch (err) {
            setError(err as Error)
        } finally {
            setIsLoading(false)
        }
    }

    return { authData, error, isLoading, loginUser }
}
