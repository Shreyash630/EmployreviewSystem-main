const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://singhshreyash466:123@cluster0.cd9nwhd.mongodb.net/employeereview");


const db= mongoose.connection;
db.on("error", console.error.bind(console,"Error in connection to Mongodb"));


db.once("open", function(){
    console.log("Successfully connected to Database :: MongoDB");

    
});

module.exports =db;

