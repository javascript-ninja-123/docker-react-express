const express = require('express');
const  bodyParser = require("body-parser");
const  cors = require('cors')

require('./database');


const app = express();
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app)


module.exports = app.listen(5000, ()=> console.log('it should work the way we want'))
