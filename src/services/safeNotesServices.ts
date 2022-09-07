import Cryptr from "cryptr";
import { safeNotes } from '@prisma/client'

import { TypeSafeNotesData } from "../interfaces/interfaces.js";
import * as safeNotesRepository from "../repositories/safeNotesRepository.js"


export async function registerSafeNote(userId: number, safeNoteData: TypeSafeNotesData) {
    const alreadyExists = await safeNotesRepository.getSingleSafeNoteByTitle(userId, safeNoteData.title);
    if(alreadyExists){
        throw {name: "Already used", message: "This title has already been used by you, try to come up with another one." }
    }

    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const encryptedContent = cryptr.encrypt(safeNoteData.content);

    await safeNotesRepository.insertNewSafeNote({...safeNoteData, userId, content: encryptedContent});
}

export async function getAllSafeNotes(userId: number) {
    const safeNotes = await safeNotesRepository.getAllUserSafeNotes(userId);
    decryptInfo(safeNotes);
    return safeNotes;
}

export async function getSingleSafeNote(userId: number, safeNoteId: number) {
    const singleSafeNote = await verifySingleSafeNote(userId,safeNoteId);

    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const decryptedContent = cryptr.decrypt(singleSafeNote.content);

    return {...singleSafeNote, content: decryptedContent};
}

export async function deleteSafeNote(userId: number, safeNoteId: number) {
    await verifySingleSafeNote(userId,safeNoteId);
    await safeNotesRepository.deleteSafeNoteById(safeNoteId);
}

async function verifySingleSafeNote(userId:number, safeNoteId: number){
    const singleSafeNote = await safeNotesRepository.getSingleSafeNoteByById(safeNoteId);
    if(!singleSafeNote){
        throw {name: "Unexistent", message: "This SafeNote dont exist." }
    }
    if(singleSafeNote.userId !== userId){
        throw {name: "Not_Authorized", message: "Not authorized." }
    }

    return singleSafeNote;
}

function decryptInfo(credentials: safeNotes[]){
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    credentials.forEach(credential => {
        credential.content = cryptr.decrypt(credential.content);
    });
}