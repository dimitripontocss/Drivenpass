import { Router } from "express";

import { jtwAuth } from "../middlewares/jwtAuthMiddleware.js";
import { schemasMiddleware } from "../middlewares/schemasMiddleware.js";
import { safeNoteSchema } from "../schemas/safeNotesSchema.js";
import { deleteSafeNote, getAllSafeNotes, getSingleSafeNote, registerNewSafeNote } from "../controllers/safeNoteController.js";

const safeNotesRouter = Router();

safeNotesRouter.post("/safeNote", jtwAuth, schemasMiddleware(safeNoteSchema), registerNewSafeNote);
safeNotesRouter.get("/safeNotes", jtwAuth, getAllSafeNotes);
safeNotesRouter.get("/safeNote/:id", jtwAuth, getSingleSafeNote);
safeNotesRouter.delete("/safeNote/:id", jtwAuth, deleteSafeNote);

export default safeNotesRouter;