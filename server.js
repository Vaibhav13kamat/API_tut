require('dotenv').config

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
//const cors = require('cors');



//middles were
app.use(bodyParser.json());
//app.use(cors());

//importing routes
const postRoute = require('./routes/post');

app.use('/posts', postRoute);

mongoose.connect(process.env.DATABASE_URL,
     { useNewUrlParser: true } ,() => console.log('connected to DB'))
const db = mongoose.connection

db.on(  'error', (error) => console.error(error))


app.listen(3000, () => console.log('server Started'))
