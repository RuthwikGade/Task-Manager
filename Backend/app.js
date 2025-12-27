const express  = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();

const Connectdb = require('./config/DataBaseConn.js');

const port = 5000;
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true
}))
app.use(express.json());
const router = require('./routes/Router.js');


app.use("/app/api",router)

const start = async () =>{
    try {
        await Connectdb();
        app.listen(port,()=>{
            console.log(`app is running on the ${port}`)
        })
    }
    catch (error){
        console.error(error);
    }
}

start()

