import { Request, Response } from "express";
import bcrypt from "bcrypt"

import { IUserData } from "../interfaces/userInterface.js";

export async function signup(req:Request, res:Response){
    const newUserData: IUserData = req.body;
    
    // const alreadyExist = await PRISMA
    // if(alreadyExist.rowCount !== 0){
    //     throw {name: "Already used", message: "Cannot use this email try again with a new one." }
    // }

    const cryptedPassword = bcrypt.hashSync(newUserData.password, 10); 

    res.sendStatus(201);
}


export async function signin(req:Request, res:Response){
    const userData: IUserData = req.body;

    const cryptedPassword = bcrypt.hashSync(userData.password, 10); 

    res.sendStatus(201);
}