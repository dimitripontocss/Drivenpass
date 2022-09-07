import { Request, Response } from "express";

import { TypeCredentialData } from "../interfaces/interfaces.js";
import * as credentialServices from "../services/credentialServices.js";

export async function registerNewCredential(req:Request, res:Response){
    const newCredential: TypeCredentialData = req.body;
    const userData = res.locals.data;
    await credentialServices.registerCredential(userData.id, newCredential)
    res.sendStatus(201);
}

export async function getAllCredentials(req:Request, res:Response){
    const userData = res.locals.data;
    const userCredentials = await credentialServices.getAllCredentials(userData.id)
    res.status(200).send(userCredentials);
}

export async function getSingleCredential(req:Request, res:Response){
    const userData = res.locals.data;
    const credentialId = +req.params.id;
    const singleCredential = await credentialServices.getSingleCredential(userData.id,credentialId)
    res.status(200).send(singleCredential);
}

export async function deleteCredential(req:Request, res:Response){
    const userData = res.locals.data;
    const credentialId = +req.params.id;
    await credentialServices.deleteCredential(userData.id,credentialId)
    res.sendStatus(200)
}