import { Router } from "express";

import { signin, signup } from "../controllers/authController.js";
import { schemasMiddleware } from "../middlewares/schemasMiddleware.js";
import { authSchema } from "../schemas/authSchemas.js";

const authRouter = Router();

authRouter.post("/sign-in", schemasMiddleware(authSchema), signin);
authRouter.post("/sign-up", schemasMiddleware(authSchema), signup);

export default authRouter;