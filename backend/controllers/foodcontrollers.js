import { log } from "console";
import foodModel from "../models/foodModel.js";

    import fs from 'fs'

    //add food item 
 const addfood = async (req, res) => {
  try {
    if (!req.file) {
      return res.json({ success: false, message: "Image is required" });
    }

    const Image_filename = req.file.filename;

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      Image: Image_filename,
    });

    await food.save();

    res.json({ success: true, message: "food added" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

    //all food list
    const listfood = async (req,res) =>  {
try {
       const foods = await foodModel.find({});
       res.json({success:true,data:foods})
} catch (error) {
    console.log(error);
    res.json({success:false,Message:"error"})
    
}


    } 
  //remove food function
  const removefood = async(req,res) => {

try {
      const food = await foodModel.findById(req.body.id);
      fs.unlink(`uploads/${food.Image}`,()=>{});
      await foodModel.findByIdAndDelete(req.body.id);
      res.json({success:true, message:"food removed"})
} catch (error) {
    res.json({success:false,message:"error"})
}

  }


     export {addfood,listfood,removefood}