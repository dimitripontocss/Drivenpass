import { users, safeCredentials } from '@prisma/client'

export type TypeUserData = Omit<users,'id'>

export type TypeCredentialData = Omit<safeCredentials,'id'| 'userId'>
export type TypeCredentialDataWUserId = Omit<safeCredentials,'id'>

export interface IJWTData {
    email: string;
    id: number;
}

export interface IError {
    name: string;
    message: string;
}