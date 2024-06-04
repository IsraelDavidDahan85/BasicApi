import express from "express";
const router = express.Router();

import UserRouter from "./user-routes.js";

router.use("/users", new UserRouter().getRouter());

export default router;