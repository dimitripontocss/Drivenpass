import { prisma } from "../databaseStrategy/database.js";
import { TypeCredentialDataWUserId } from "../interfaces/interfaces.js"

export async function insertCredential(credentialData: TypeCredentialDataWUserId) {
    await prisma.safeCredentials.create({
        data: credentialData
    })
}

export async function getSingleCredentialByTitle(userId: number, title: string) {
    const result = await prisma.safeCredentials.findUnique({
        where: {
            userId_title:{
                userId: userId,
                title: title
            }
        }
    })
    return result;
}

export async function getSingleCredentialById(id: number) {
    const result = await prisma.safeCredentials.findFirst({
        where: {
            id
        }
    })
    return result;
}

export async function getAllUserCredentials(userId: number) {
    const result = await prisma.safeCredentials.findMany({
        where: {
            userId
        }
    })
    return result;
}

export async function deleteCredentialById(id: number) {
    const result = await prisma.safeCredentials.delete({
        where: {
            id
        }
    })
    return result;
}