import { prisma } from "../databaseStrategy/database.js";
import { TypeSafeNotesDataWUserId } from "../interfaces/interfaces.js"

export async function insertNewSafeNote(newSafeNote: TypeSafeNotesDataWUserId) {
    await prisma.safeNotes.create({
        data: newSafeNote
    });
}

export async function getSingleSafeNoteByTitle(userId: number, title: string) {
    const result = await prisma.safeNotes.findUnique({
        where: {
            userId_title:{
                userId: userId,
                title: title
            }
        }
    })
    return result;
}

export async function getSingleSafeNoteByById(id: number) {
    const result = await prisma.safeNotes.findFirst({
        where: {
            id
        }
    })
    return result;
}

export async function getAllUserSafeNotes(userId: number) {
    const result = await prisma.safeNotes.findMany({
        where: {
            userId
        }
    })
    return result;
}

export async function deleteSafeNoteById(id: number) {
    const result = await prisma.safeNotes.delete({
        where: {
            id
        }
    })
    return result;
}