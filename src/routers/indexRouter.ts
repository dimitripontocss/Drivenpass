import { Router } from "express";

import authRouter from "./authRouter.js";
import credentialRouter from "./credentialsRouter.js";
import safeNotesRouter from "./safeNotesRouter.js";

const indexRouter = Router();

indexRouter.use([authRouter,credentialRouter,safeNotesRouter]);

export default indexRouter;