import { AdapterUser } from "next-auth/adapters"

export interface UserInfo extends AdapterUser {
    firstName: string
    lastName: string
}