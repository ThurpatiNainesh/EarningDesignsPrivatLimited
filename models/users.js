const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        default:""
    },
    Category:{
        type: String,
      required: true,
      enum: ["People", "Tech", "Entertainment"]
    },
    itemForSale:{
        type: String,
       required: true,
        enum: ["Yes, item for Sale", "No,its free"]
    }
    
})
module.exports = mongoose.model("Images",imageSchema)