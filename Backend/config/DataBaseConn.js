const mongoose = require('mongoose')
const DbString = process.env.DbString


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
