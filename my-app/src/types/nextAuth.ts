import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { UserInfo } from './user';
import { AdapterUser } from 'next-auth/adapters';

export interface CustomSession extends Session {
    user: UserInfo
    access_token?: string
}

export interface CustomJWT extends JWT {
    user: UserInfo
    access_token: string
}

export interface CredentialUser extends AdapterUser {
    user: UserInfo
    token: string
}

export enum SessionStatus {
    Authenticated  = 'authenticated',
    Unauthenticated = 'unauthenticated',
    Loading = 'loading'
}