const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./routes/index');


const app = express()

const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use('/api', router);


app.listen(PORT, async () => {
    await mongoose.connect('mongodb+srv://Sirenko:P6GWMSCB48zvGsb2@cluster0.jaqwm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    console.log(`WORKING ON ${PORT} PORT`);
})

