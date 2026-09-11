const express = require ('express');
const conDB = require('./config/conDB');
const CR = require('./Routes/contact');

const app = express();
const port = 5000;

conDB()

app.use(express.json());

app.use('/API/contact', CR)



app.listen(port, console.log('Server is running'));
