import express from "express";

import inputLength from "../controllers/inputLength.js";

import testController from "../controllers/testController.js";
import loginController from "../controllers/loginController.js";
import uploadFile from "../controllers/uploadFile.js";

import addArticleController from "../controllers/addArticleController.js";
import getArticleByIdController from "../controllers/getArticleByIdController.js";
import getArticleDetailController from "../controllers/getArticleDetailController.js";
import editArticleController from "../controllers/editArticleController.js";
import deleteArticleController from "../controllers/deleteArticleController.js";

import getArticleController from "../controllers/getArticleController.js";








const router = express.Router();

router.post("/inputLength", inputLength);

router.get("/", testController);
router.post("/login", loginController);
router.post("/uploadFile", uploadFile);

router.post("/addArticle", addArticleController);
router.post("/getArticleById", getArticleByIdController);
router.post("/articleDetail", getArticleDetailController);
router.post("/editArticle", editArticleController);
router.post("/deleteArticle", deleteArticleController);

router.get("/getArticle", getArticleController);





export default router;
