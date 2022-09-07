import { Request, Response } from "express";

import { TypeWifisData } from "../interfaces/interfaces.js";
import * as wifiServices from "../services/wifiServices.js";

export async function registerNewWifi(req:Request, res:Response){
    const newWifi: TypeWifisData = req.body;
    const userData = res.locals.data;
    await wifiServices.registerNewWifi(userData.id, newWifi);
    res.sendStatus(201);
}

export async function getAllWifis(req:Request, res:Response){
    const userData = res.locals.data;
    const userWifis = await wifiServices.getAllWifis(userData.id)
    res.status(200).send(userWifis);
}

export async function getSingleWifi(req:Request, res:Response){
    const userData = res.locals.data;
    const wifiId = +req.params.id;
    const singleWifi = await wifiServices.getSingleWifi(userData.id,wifiId)
    res.status(200).send(singleWifi);
}

export async function deleteWifi(req:Request, res:Response){
    const userData = res.locals.data;
    const wifiId = +req.params.id;
    await wifiServices.deleteWifi(userData.id,wifiId)
    res.sendStatus(200)
}