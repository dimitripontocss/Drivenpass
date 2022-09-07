import { Router } from "express";

import { jtwAuth } from "../middlewares/jwtAuthMiddleware.js";
import { schemasMiddleware } from "../middlewares/schemasMiddleware.js";
import { credentialSchema } from "../schemas/credentialsSchemas.js";
import { deleteCredential, getAllCredentials, getSingleCredential, registerNewCredential } from "../controllers/credentialController.js";

const credentialRouter = Router();

credentialRouter.post("/credential", jtwAuth, schemasMiddleware(credentialSchema),registerNewCredential);
credentialRouter.get("/credentials", jtwAuth, getAllCredentials);
credentialRouter.get("/credential/:id", jtwAuth, getSingleCredential);
credentialRouter.delete("/credential/:id", jtwAuth, deleteCredential);

export default credentialRouter;
