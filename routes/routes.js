import express from "express";
import testController from "../controllers/testController.js";
import loginController from "../controllers/loginController.js";
import uploadFile from "../controllers/uploadFile.js";
import middleware from "../controllers/middleware.js";
import middlewareUploadFile from "../controllers/middlewareUploadFile.js";

import addArticleController from "../controllers/addArticleController.js";
import getArticleByIdController from "../controllers/getArticleByIdController.js";
import getArticleDetailController from "../controllers/getArticleDetailController.js";
import editArticleController from "../controllers/editArticleController.js";
import deleteArticleController from "../controllers/deleteArticleController.js";
import getArticleController from "../controllers/getArticleController.js";

import addUserController from "../controllers/addUserController.js";
import getUsersController from "../controllers/getUsersController.js";
import deleteUserByIdController from "../controllers/deleteUserByIdController.js";
import editUserByIdController from "../controllers/editUserByIdController.js";
import getUserByIdController from "../controllers/getUserByIdController.js";

const router = express.Router();


router.get("/", testController);
router.post("/login", middleware,loginController);
router.post("/uploadFile", uploadFile);

router.post("/addArticle", middlewareUploadFile, addArticleController);
router.post("/getArticleById", getArticleByIdController);
router.post("/articleDetail", getArticleDetailController);
router.post("/editArticle", middlewareUploadFile, editArticleController);
router.post("/deleteArticle", deleteArticleController);
router.get("/getArticle", getArticleController);

router.post("/addUser", addUserController);
router.get("/getUsers", getUsersController);
router.post("/deleteUserById", deleteUserByIdController);
router.post("/editUserById", editUserByIdController);
router.post("/getUserById", getUserByIdController)

export default router;
