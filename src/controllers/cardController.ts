import { Request, Response } from "express";

import { TypeCardsData } from "../interfaces/interfaces.js";
import * as cardServices from "../services/cardServices.js";

export async function registerNewCard(req:Request, res:Response){
    const newCard: TypeCardsData = req.body;
    const userData = res.locals.data;
    await cardServices.registerNewCard(userData.id, newCard);
    res.sendStatus(201);
}

export async function getAllCards(req:Request, res:Response){
    const userData = res.locals.data;
    const userCards = await cardServices.getAllCards(userData.id)
    res.status(200).send(userCards);
}

export async function getSingleCard(req:Request, res:Response){
    const userData = res.locals.data;
    const cardId = +req.params.id;
    const singleCard = await cardServices.getSingleCard(userData.id,cardId)
    res.status(200).send(singleCard);
}

export async function deleteCard(req:Request, res:Response){
    const userData = res.locals.data;
    const cardId = +req.params.id;
    await cardServices.deleteCard(userData.id,cardId)
    res.sendStatus(200)
}