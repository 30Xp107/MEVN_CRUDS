require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4001;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const postRoute = require('./post.route');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Cannot connect to the database'+err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/posts', postRoute);

app.listen(PORT, function(){
    console.log(`Server is running on Port:${PORT}`);
})