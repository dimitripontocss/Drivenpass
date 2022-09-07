import { Router } from "express";

import authRouter from "./authRouter.js";
import credentialRouter from "./credentialsRouter.js";
import safeNotesRouter from "./safeNotesRouter.js";
import cardRouter from "./cardsRouter.js";
import wifiRouter from "./wifisRouter.js";

const indexRouter = Router();

indexRouter.use([authRouter,credentialRouter,safeNotesRouter,cardRouter,wifiRouter]);

export default indexRouter;