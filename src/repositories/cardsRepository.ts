import { prisma } from "../databaseStrategy/database.js";
import { TypeCardsDataWUserId } from "../interfaces/interfaces.js"

export async function insertNewCard(newCard: TypeCardsDataWUserId) {
    await prisma.cards.create({
        data: newCard
    });
}

export async function getSingleCardByTitle(userId: number, title: string) {
    const result = await prisma.cards.findUnique({
        where: {
            userId_title:{
                userId: userId,
                title: title
            }
        }
    })
    return result;
}

export async function getSingleCardByById(id: number) {
    const result = await prisma.cards.findFirst({
        where: {
            id
        }
    })
    return result;
}

export async function getAllUserCards(userId: number) {
    const result = await prisma.cards.findMany({
        where: {
            userId
        }
    })
    return result;
}

export async function deleteCardById(id: number) {
    const result = await prisma.cards.delete({
        where: {
            id
        }
    })
    return result;
}