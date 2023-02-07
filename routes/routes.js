import express from "express";
import testController from "../controllers/testController.js";
import loginController from "../controllers/loginController.js";
import uploadFile from "../controllers/uploadFile.js"
import addArticleController from "../controllers/addArticleController.js"
import articleGetController from "../controllers/articleGetController.js";
import editArticleController from "../controllers/editArticleController.js";
import deleteArticleByIdController from "../controllers/deleteArticleByIdController.js";
import getArticleDetailController from "../controllers/getArticleDetailController.js";




const router = express.Router();

router.get("/", testController);


router.post("/login", loginController);
router.post("/uploadFile", uploadFile);

router.post("/addArticle", addArticleController);
router.post("/editArticle", editArticleController);
router.post("/deleteArticleById", deleteArticleByIdController);
router.post("/articleDetail", getArticleDetailController);
router.get("/getArticle", articleGetController);





export default router;
