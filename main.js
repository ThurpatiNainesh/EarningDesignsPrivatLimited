require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose");
const session = require("express-session");

const PORT =process.env.PORT || 3000
const app = express();

mongoose.connect(process.env.DB_URI,{
    useNewUrlParser:true
});
const db = mongoose.connection
db.on("error",(error)=>{
    console.log(error)
});
db.once("open",()=> console.log("db connected!"))
 
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use(session({
    secret:"my secret key",
    saveUninitialized:true,
    resave:false
}))

app.use((req,res,next)=>{
    res.locals.message = req.session.message;
    delete req.session.message;
    next()
})
app.use(express.static("uploads"))
app.set("view engine","ejs");

app.use("/",require("./routes/routes"))


app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})