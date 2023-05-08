const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    time:Date
});

const userModel= new mongoose.model("User", userSchema);

module.exports={
    userModel
}