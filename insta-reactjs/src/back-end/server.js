const express = require('express');
var cors = require('cors')
const app = express();
const port = 3200;
const mongoose = require('mongoose');
const DATABASE_URI = require('./const/const').DATABASE_URI;
const DATABASE_NAME = require('./const/const').DATABASE_NAME;

try{
    mongoose.connect(DATABASE_URI + '/' + DATABASE_NAME, { useNewUrlParser: true, useUnifiedTopology: true });
}
catch (error){
    console.log("Error while connecting to Database => ",error);
}

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

app.listen(port, () => {
    console.log("Listening to port 3200.");
})
