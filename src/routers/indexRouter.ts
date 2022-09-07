import { Router } from "express";

import authRouter from "./authRouter.js";
import credentialRouter from "./credentialsRouter.js";

const indexRouter = Router();

indexRouter.use([authRouter,credentialRouter]);

export default indexRouter;