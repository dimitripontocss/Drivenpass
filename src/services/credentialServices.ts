import Cryptr from "cryptr";
import { safeCredentials } from '@prisma/client'

import { TypeCredentialData } from "../interfaces/interfaces.js";
import * as credentialRepository from "../repositories/credentialRepository.js";

export async function registerCredential(userId: number, credentialData: TypeCredentialData) {
    const alreadyExists = await credentialRepository.getSingleCredentialByTitle(userId, credentialData.title);
    if(alreadyExists){
        throw {name: "Already used", message: "This title has already been used by you, try to come up with another one." }
    }

    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const encryptedPassword = cryptr.encrypt(credentialData.password);

    await credentialRepository.insertCredential({...credentialData, userId, password: encryptedPassword})
}

export async function getAllCredentials(userId: number) {
    const UserCredentials = await credentialRepository.getAllUserCredentials(userId);
    decryptInfo(UserCredentials);
    return UserCredentials;
}

export async function getSingleCredential(userId: number, credentialId: number) {
    const singleCredential = await verifySingleCredential(userId,credentialId);

    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const decryptedPassword = cryptr.decrypt(singleCredential.password);

    return {...singleCredential, password: decryptedPassword};
}

export async function deleteCredential(userId: number, credentialId: number) {
    await verifySingleCredential(userId,credentialId);
    await credentialRepository.deleteCredentialById(credentialId);
}

async function verifySingleCredential(userId:number, credentialId: number){
    const singleCredential = await credentialRepository.getSingleCredentialById(credentialId);
    if(!singleCredential){
        throw {name: "Unexistent", message: "This Credential dont exist." }
    }
    if(singleCredential.userId !== userId){
        throw {name: "Not_Authorized", message: "Not authorized." }
    }

    return singleCredential;
}

function decryptInfo(credentials: safeCredentials[]){
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    credentials.forEach(credential => {
        credential.password = cryptr.decrypt(credential.password);
    });
}