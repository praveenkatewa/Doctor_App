const express = require('express');
const colors = require('colors');
const moragan = require('morgan');
const dotenv = require('dotenv');

// dotenv config
dotenv.config();

// rest object
const app =express();

// middlewares
app.use(express.json());
app.use(moragan('dev')); 

 

const PORT = process.env.PORT || 3000;

app.use(express.json());


// routes


app.get('/', (req, res) => {
    res.status(200).send({
        message:"Doctor App Server is running"
});
});

//  port
const port=process.env.PORT || 8080

// listen port
app.listen(port, () => {
    console.log(`Server is running ${process.env.NODE_MODE} mode on port ${process.env.PORT}`.bgCyan.white
        );
});

