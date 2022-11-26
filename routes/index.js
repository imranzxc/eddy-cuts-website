import UserRoute from "./users.route.js";
import PostRoute from "./posts.route.js";
import ProductRoute from "./products.route.js";
import Router from "express";

const router = new Router();

router.use(UserRoute);
router.use(PostRoute);
router.use(ProductRoute);

export default router;
