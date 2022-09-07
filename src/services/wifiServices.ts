import Cryptr from "cryptr";
import { wifis } from '@prisma/client'

import { TypeWifisData } from "../interfaces/interfaces.js";
import * as wifisRepository from "../repositories/wifisRepository.js";

export async function registerNewWifi(userId: number, wifiData: TypeWifisData) {
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const encryptedPassword = cryptr.encrypt(wifiData.password);

    await wifisRepository.insertNewWifi({...wifiData, userId, password: encryptedPassword})
}

export async function getAllWifis(userId: number) {
    const userWifis = await wifisRepository.getAllUserWifis(userId);
    decryptInfo(userWifis);
    return userWifis;
}

export async function getSingleWifi(userId: number, wifiId: number) {
    const singleWifi = await verifySingleWifi(userId,wifiId);

    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const decryptedPassword = cryptr.decrypt(singleWifi.password);

    return {...singleWifi, password: decryptedPassword};
}

export async function deleteWifi(userId: number, wifiId: number) {
    await verifySingleWifi(userId,wifiId);
    await wifisRepository.deleteWifiById(wifiId);
}

async function verifySingleWifi(userId:number, wifiId: number){
    const singleWifi = await wifisRepository.getSingleWifiByById(wifiId);
    if(!singleWifi){
        throw {name: "Unexistent", message: "This Wifi dont exist." }
    }
    if(singleWifi.userId !== userId){
        throw {name: "Not_Authorized", message: "Not authorized." }
    }

    return singleWifi;
}

function decryptInfo(wifis: wifis[]){
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    wifis.forEach(wifi => {
        wifi.password = cryptr.decrypt(wifi.password);
    });
}