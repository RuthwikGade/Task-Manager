const mongoose = require('mongoose')
// require('dotenv').config();
const DbString = process.env.DbString
// const DbString = "mongodb+srv://TaskManager:ruthwik123@cluster0.jhtn9tu.mongodb.net/?appName=Cluster0"


const Connectdb = async () =>{
    try {
        await mongoose.connect(DbString)

        console.log("MongoDB is connected")
    }
    catch(error){
        console.error("Mongodb Connection failed",error)
    }
    
}

module.exports = Connectdb