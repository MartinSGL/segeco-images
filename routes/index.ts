import Router from "express";
import { getImage, removeImage, saveImage } from "../images";
import fileUpload from "express-fileupload";

const router = Router();
router.get("/images/:image", getImage);
router.post("/images/:image", getImage);
router.post("/images", fileUpload(), saveImage);
router.delete("/images/:image", removeImage);

export { router };
