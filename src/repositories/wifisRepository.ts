import { prisma } from "../databaseStrategy/database.js";
import { TypeWifisDataWUserId } from "../interfaces/interfaces.js"

export async function insertNewWifi(newWifi: TypeWifisDataWUserId) {
    await prisma.wifis.create({
        data: newWifi
    });
}

export async function getSingleWifiByById(id: number) {
    const result = await prisma.wifis.findFirst({
        where: {
            id
        }
    })
    return result;
}

export async function getAllUserWifis(userId: number) {
    const result = await prisma.wifis.findMany({
        where: {
            userId
        }
    })
    return result;
}

export async function deleteWifiById(id: number) {
    const result = await prisma.wifis.delete({
        where: {
            id
        }
    })
    return result;
}