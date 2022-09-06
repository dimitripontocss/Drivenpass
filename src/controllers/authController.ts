import { Request, Response } from "express";

import { IUserData } from "../interfaces/userInterface.js";
import * as authServices from "../services/authServices.js";

export async function signup(req:Request, res:Response){
    const newUserData: IUserData = req.body;
    await authServices.signUpService(newUserData);
    res.sendStatus(201);
}


export async function signin(req:Request, res:Response){
    const userData: IUserData = req.body;
    const token = await authServices.signInService(userData);
    res.status(201).send(token);
}