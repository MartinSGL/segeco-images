import Router from "express";
import { getImages, saveImages } from "../images";
import fileUpload from "express-fileupload";

const router = Router();
router.get("/images/:image", getImages);
router.post("/images", fileUpload(), saveImages);

export { router };
