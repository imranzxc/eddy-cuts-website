import Router from "express";

import PostController from "../controllers/posts.controller.js";
import { checkAuth, handleValidationErrors } from "../utils/index.js";

const router = new Router();

router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.post("/posts", handleValidationErrors, PostController.create);
router.delete("/posts/:id", PostController.remove);
router.patch(
  "/posts/:id",
  checkAuth,
  handleValidationErrors,
  PostController.update,
);

export default router;
