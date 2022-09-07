import { Request, Response, NextFunction } from "express";

import { IError } from "../interfaces/utilsInterfaces.js";

export default function errorHandlingMiddleware(error: IError | Error, req: Request, res: Response, next: NextFunction) {
	if(error.name === "Already used"){
		return res.status(400).send(error.message);
	}
	if(error.name === "Login_Error"){
		return res.status(404).send(error.message);
	}
	return res.sendStatus(500);
}


