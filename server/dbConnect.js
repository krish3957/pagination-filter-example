const dbConnect= ()=>{
   const mongoose = require('mongoose');

    mongoose.connect(process.env.DB,{useNewUrlParser: true});

    mongoose.connection.on("connected",()=>{
        console.log("Connected Succesfully");
    });

    mongoose.connection.on("error",(err)=>{
        console.log("There is an error please try again" + err);
    });

    mongoose.connection.on("disconnected",()=>{
        console.log("Disconnected Succesfully");
    });
}
module.exports = dbConnect;