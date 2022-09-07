import jwt from "jsonwebtoken";

import { IJWTData } from "../interfaces/interfaces.js";

export default function jwtGenerator(data: IJWTData): string{
    const key = process.env.JWT_KEY;
    const config = { expiresIn: 60*60*24 };//Expira em 1 dia
    const token = jwt.sign(data, key, config);
    return token;
}