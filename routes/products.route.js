import { Router } from "express";

import ProductController from '../controllers/products.controller.js'

const router = new Router()

router.get("/products", ProductController.getAll)
router.post("/products", ProductController.create)
router.delete("/products/:id", ProductController.remove)



export default router;