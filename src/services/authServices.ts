import { IUserData } from "../interfaces/userInterface.js";
import bcrypt from "bcrypt"

export async function signUpService(newUserData: IUserData) {
    console.log(newUserData);
    // const alreadyExist = await PRISMA
    // if(alreadyExist.rowCount !== 0){
    //     throw {name: "Already used", message: "Cannot use this email try again with a new one." }
    // }

    const cryptedPassword = bcrypt.hashSync(newUserData.password, 10); 
}

export async function signInService(userData: IUserData) {
    console.log(userData);
    // const alreadyExist = await PRISMA
    // if(alreadyExist.rowCount !== 0){
    //     throw {name: "Already used", message: "Cannot use this email try again with a new one." }
    // }
 
}