const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const PORT = 5000 || 6000;
const URI = "mongodb://localhost:27017/userDB/usersData";

const app = express();
app.use(express.json())
app.use(cors())
dotenv.config()

mongoose.connect(URI)
.then(()=> console.log('mongoDB is connected sucessfully'))
.catch((e)=> console.log('mogoDB connection failed!'))

app.listen(PORT,()=>{`server is running on port https://localhost:${PORT}`})