import Image from "../models/imageModel.js";
import {v2 as cloudinary} from "cloudinary";

//add image
export const addImage = async (req, res) => {
    try {
        const imageFile = req.files.image[0];
        if (!imageFile) {
            return res.status(400).json({ message: "Image is required" });
        }
        // Upload image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"});

        // Save image data to the database
        const image = await Image.create({ image: imageUpload.secure_url });
        return res.status(200).json({message: "Image uploaded successfully",data: image});
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

//get images
export const getImage=async(req,res)=>{
   try{
    const image=await Image.find();
    res.status(200).json({message:"Successfully get the images",data:image})
   }catch(err){
    res.status(500).json({error:"Internal server error"});
   }
}

//get single image
export const getSingleImage=async(req,res)=>{
    try{
        const id=req.params.id;
        const image=await Image.findById(id);
        res.status(200).json({message:"Single image is successfully fetch",data:image});
    }catch(err){
        res.status(500).json({error:"Internal server error"});
    }
}

//delete image
export const deleteImage=async(req,res)=>{
    try{
        const id=req.params.id;
        const image=await Image.findByIdAndUpdate(id);
        res.status(200).json({message:"Image is successfully delete",data:image});
    }catch(err){
        res.status(500).json({error:"Internal server error"});
    }
}

export const updateImage = async (req, res) => {
    try {
      const id = req.params.id;
  
      // Validate if the image file is provided
      const imageFile = req.files?.image?.[0];
      if (!imageFile) {
        return res.status(400).json({ message: "Image file is required" });
      }
  
      // Upload the new image to Cloudinary
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
resource_type: "image"});
  
      // Update the image URL in the database
      const updatedImage = await Image.findByIdAndUpdate(
        id,
        { $set: { image: imageUpload.secure_url } },
        { new: true } // Return the updated document
      );
  
      if (!updatedImage) {
        return res.status(404).json({ message: "Image not found" });
      }
  
      res.status(200).json({
        message: "Image successfully updated",
        data: updatedImage,
      });
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ message: "Internal server error", error: err.message });
    }
  };