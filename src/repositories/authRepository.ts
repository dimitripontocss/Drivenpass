import { prisma } from "../databaseStrategy/database.js";
import { TypeUserData } from "../interfaces/userInterface.js"

export async function insertUser(userData: TypeUserData) {
    await prisma.users.create({
        data: userData
    })
}

export async function findSingleUser(email: string) {
    const result = await prisma.users.findUnique({
        where: {
            email
        }
    })
    return result;
}

