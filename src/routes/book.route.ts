import { Router } from "express";
import { bookController } from "../controllers/book.controller";

const router = Router();

router.get("/", bookController.getBooks);

router.post("/", bookController.createBook);

router.put("/:id", bookController.updateBook);

export default router;