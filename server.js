const express = require('express');
const colors = require('colors');
const moragan = require('morgan');
const dotenv = require('dotenv');

// rest object
const app =express();

// middlewares
app.use(express.json());
app.use(moragan('dev'));

 

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Doctor App Server is running');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});