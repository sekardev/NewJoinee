var express = require('express');
var fs = require('fs');
var https = require('https');
var app = express();
var bodyParser = require('body-parser');
var sqlite = require('sqlite3');
var env = require('dotenv').load();
var port = process.env.PORT || 8010;


// models
var models = require("./models");

// routes
var router = require('./routes/router')

//Sync Database
models.sequelize.sync().then(function() {
    console.log('connected to database')
}).catch(function(err) {
    console.log(err)
});

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({
    extended: true,limit: '50mb'
}));


// register routes
app.use('/NewJoinee/api/', router);

// app.use(function (req, res, next) {
    
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // res.setHeader('Access-Control-Allow-Credentials', true);
    // next();
// });

// index path
app.get('/', function(req, res){
    console.log('app listening on port: '+port);
    res.send('tes express nodejs sqlite')
});

 app.listen(port, function(){
     console.log('app listening on port: '+port);
 });
var options = {
    
    pfx: fs.readFileSync('./config/learning_portal_cert.pfx'),
    passphrase: 'test123'
};

//https.createServer(options, app).listen(8010);