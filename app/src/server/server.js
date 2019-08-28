const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();
require('./config/config');

app.use(function(req, res, next) {
   var allowedOrigins = ['http://localhost:4200'];
   var origin = req.headers.origin;
   if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
   }
   /*https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods*/
   //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
   res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT, POST, DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   res.header('Access-Control-Allow-Credentials', true);
   return next();
 });
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configuracion global de rutas
app.use(require('./controller/index'));

app.get('/', function (req, res) {
   res.json('Hello World')
});

mongoose.connect(process.env.URLDB, {useNewUrlParser: true, useCreateIndex: true}, (err, res) => {
   if(err)throw err;
   else console.log('base online')
});


app.listen(process.env.PORT, ()=> console.log(process.env.PORT));
 