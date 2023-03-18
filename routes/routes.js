const express = require("express")
const router = express.Router()
const User = require("../models/users")
const multer = require("multer")
const { render } = require("ejs")

// image upload
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./uploads")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname +"-"+Date.now()+"-"+file.originalname );
     },
 })
 var upload = multer({
    storage:storage,
 }).single("image")

 router.post("/",async(req,res)=>{
  const user = new User({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    // image:req.file.filename,
})
let userz = await user.save()
res.status(201).send(userz);
   
 })
 router.get("/",upload,async(req,res)=>{
   console.log("get")
 })
 router.put("/",async(req,res)=>{
   console.log("put")
 })
 router.delete("/",upload,async(req,res)=>{
  console.log("delete")
 })

module.exports = router