// Declaring Global variables
const programData = [];
const express = require('express');
const port = 5000;

// Create app instance 
const app = express();

// Adding dependancies and Middlewares
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json()); 
app.use(cors());

// Declare website files
app.use(express.static('website'));

// Set up the server to listen to the port
const server = app.listen(port, function(){
    console.log(`server running at localhost: ${port}`);
})

app.post('/post', function(req, res){
    newData = {
        date: req.body.date,
        place: req.body.place,
        temperature: req.body.temp,
        description: req.body.desc,
        feelings: req.body.feelings,
        icon: req.body.icon,
    }
    // Add the data to programData
    programData.unshift(newData);
    console.log(programData)
})

app.get('/alldata', function(req, res){
    res.send(programData[0]);
})