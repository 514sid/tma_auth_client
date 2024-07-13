import axiosInstance from "../axiosInstance"

export type User = {
    id: number
    telegramId: number
    username: string
}

export type LoginResponse = {
    user: User
    token: string
}

export const userService = Object.freeze({
    login: async (initData: string) => {
        const response = await axiosInstance.post<LoginResponse>("/auth/login", {
            initData
        })
        
        return response.data
    },
    getCurrentUser: async () => {
        const response = await axiosInstance.get<User>("/auth/me")

        return response.data
    }
})