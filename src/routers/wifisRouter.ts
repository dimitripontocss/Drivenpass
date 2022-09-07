import { Router } from "express";

import { jtwAuth } from "../middlewares/jwtAuthMiddleware.js";
import { schemasMiddleware } from "../middlewares/schemasMiddleware.js";
import { wifiSchema } from "../schemas/wifiSchemas.js";
import { registerNewWifi,getAllWifis,getSingleWifi,deleteWifi } from "../controllers/wifiController.js";

const wifiRouter = Router();

wifiRouter.post("/wifi", jtwAuth, schemasMiddleware(wifiSchema), registerNewWifi);
wifiRouter.get("/wifis", jtwAuth, getAllWifis);
wifiRouter.get("/wifi/:id", jtwAuth, getSingleWifi);
wifiRouter.delete("/wifi/:id", jtwAuth, deleteWifi);

export default wifiRouter;