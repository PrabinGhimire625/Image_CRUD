import { Router } from "express";
import { addImage, deleteImage, getImage, getSingleImage, updateImage } from "../controllers/imageControllers.js";
import upload from "../middleware/multer.js";
const router=Router();
router.route("/").post(upload.fields([{name:'image',maxCount:1}]),addImage)
.get(getImage)
router.route("/:id").get(getSingleImage)
.patch(upload.fields([{ name: 'image', maxCount: 1 }]), updateImage)
.delete(deleteImage)


export default router;