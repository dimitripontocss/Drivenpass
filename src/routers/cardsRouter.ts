import { Router } from "express";

import { jtwAuth } from "../middlewares/jwtAuthMiddleware.js";
import { schemasMiddleware } from "../middlewares/schemasMiddleware.js";
import { cardSchema } from "../schemas/cardSchema.js";
import { registerNewCard,getAllCards,getSingleCard,deleteCard } from "../controllers/cardController.js";

const cardRouter = Router();

cardRouter.post("/card", jtwAuth, schemasMiddleware(cardSchema),registerNewCard);
cardRouter.get("/cards", jtwAuth, getAllCards);
cardRouter.get("/card/:id", jtwAuth, getSingleCard);
cardRouter.delete("/card/:id", jtwAuth, deleteCard);

export default cardRouter;