import { Request, Response } from "express";

import { TypeUserData } from "../interfaces/userInterface.js";
import * as authServices from "../services/authServices.js";

export async function signup(req:Request, res:Response){
    const newUserData: TypeUserData = req.body;
    await authServices.signUpService(newUserData);
    res.sendStatus(201);
}


export async function signin(req:Request, res:Response){
    const userData: TypeUserData = req.body;
    const token = await authServices.signInService(userData);
    res.status(201).send(token);
}