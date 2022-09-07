import Cryptr from "cryptr";
import { cards } from '@prisma/client'

import { TypeCardsData } from "../interfaces/interfaces.js";
import * as cardsRepository from "../repositories/cardsRepository.js";

export async function registerNewCard(userId: number, cardData: TypeCardsData) {
    const alreadyExists = await cardsRepository.getSingleCardByTitle(userId, cardData.title);
    if(alreadyExists){
        throw {name: "Already used", message: "This title has already been used by you, try to come up with another one." }
    }

    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const encryptedPassword = cryptr.encrypt(cardData.password);
    const encryptedSecurityCode = cryptr.encrypt(cardData.securityCode);

    await cardsRepository.insertNewCard({...cardData, userId, password: encryptedPassword,securityCode: encryptedSecurityCode})
}

export async function getAllCards(userId: number) {
    const UserCards = await cardsRepository.getAllUserCards(userId);
    decryptInfo(UserCards);
    return UserCards;
}

export async function getSingleCard(userId: number, cardId: number) {
    const singleCard = await verifySingleCard(userId,cardId);

    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const decryptedPassword = cryptr.decrypt(singleCard.password);
    const decryptedSecurityCode = cryptr.decrypt(singleCard.securityCode);

    return {...singleCard, password: decryptedPassword,securityCode: decryptedSecurityCode};
}

export async function deleteCard(userId: number, cardId: number) {
    await verifySingleCard(userId,cardId);
    await cardsRepository.deleteCardById(cardId);
}

async function verifySingleCard(userId:number, cardId: number){
    const singleCard = await cardsRepository.getSingleCardByById(cardId);
    if(!singleCard){
        throw {name: "Unexistent", message: "This Card dont exist." }
    }
    if(singleCard.userId !== userId){
        throw {name: "Not_Authorized", message: "Not authorized." }
    }

    return singleCard;
}

function decryptInfo(cards: cards[]){
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    cards.forEach(card => {
        card.password = cryptr.decrypt(card.password);
        card.securityCode = cryptr.decrypt(card.securityCode);
    });
}