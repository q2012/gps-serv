const PORT = process.env.PORT || 5000;

let express = require('express');
let app     = express();
const bodyParser = require("body-parser");
let path    = require("path");



app.use(bodyParser.urlencoded({  extended: true}));

app.use(bodyParser.json()); 
app.use(bodyParser.text()); 





app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

module.exports = app ;