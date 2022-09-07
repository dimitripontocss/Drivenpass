import { Request, Response } from "express";

import { TypeSafeNotesData } from "../interfaces/interfaces.js";
import * as safeNoteServices from "../services/safeNotesServices.js"

export async function registerNewSafeNote(req:Request, res:Response){
    const newSafeNote: TypeSafeNotesData = req.body;
    const userData = res.locals.data;
    await safeNoteServices.registerSafeNote(userData.id, newSafeNote);
    res.sendStatus(201);
}

export async function getAllSafeNotes(req:Request, res:Response){
    const userData = res.locals.data;
    const userSafeNotes = await safeNoteServices.getAllSafeNotes(userData.id);
    res.status(200).send(userSafeNotes);
}

export async function getSingleSafeNote(req:Request, res:Response){
    const userData = res.locals.data;
    const safeNoteId = +req.params.id;
    const singleSafeNote = await safeNoteServices.getSingleSafeNote(userData.id, safeNoteId);
    res.status(200).send(singleSafeNote);
}

export async function deleteSafeNote(req:Request, res:Response){
    const userData = res.locals.data;
    const safeNoteId = +req.params.id;
    await safeNoteServices.deleteSafeNote(userData.id, safeNoteId);
    res.sendStatus(200);
}