import { ReactNode, useEffect } from "react"
import { retrieveLaunchParams } from "@telegram-apps/sdk"
import { AuthContext } from "../contexts/AuthContext"
import { useFetchCurrentUser } from "../hooks/useFetchCurrentUser"
import { useLoginUser } from "../hooks/useLoginUser"

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { initDataRaw } = retrieveLaunchParams()

    const { user, error: fetchCurrentUserError, fetchCurrentUser, setUser, isLoading: isFetchingCurrentUser } = useFetchCurrentUser()

    const { authData, error: loginUserError, loginUser, isLoading: isLoggingIn } = useLoginUser()

    useEffect(() => {
        fetchCurrentUser()
    }, [])

    useEffect(() => {
        if(fetchCurrentUserError && initDataRaw) {
            loginUser(initDataRaw)
        }
    }, [fetchCurrentUserError, initDataRaw])

    useEffect(() => {
        if(authData) {
            setUser(authData.user)
            localStorage.setItem("token", authData.token)
        }
    }, [authData])

    const isLoading = isFetchingCurrentUser || isLoggingIn

    const isError = fetchCurrentUserError || loginUserError

    if(user !== undefined) {
        return (
            <AuthContext.Provider value={{ user }}>
                {children}
            </AuthContext.Provider>
        )
    }

    if(isLoading) return "Loading"

    if(isError) return "Error"

    return null
}