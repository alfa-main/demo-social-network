import { UsersType } from "../types/types"
import { instance } from "./Api"

type GetUsers = {
    items: Array<UsersType>,
    totalCount: number,
    error: string
}

// type UnfollowUsersType = {
//     resultCode: ResultCodes,
//     messages: Array<string>,
//     data: any
// }

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUsers>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowUsers(usersId: number) {
        return instance.delete(`follow/${usersId}`)
            .then(response => response.data)
    },
    followUsers(usersId: number) {
        return instance.post(`follow/${usersId}`)
    }
}