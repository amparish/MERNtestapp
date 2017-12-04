var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var port = 4200;

// mongoose
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/merntestapp')
        .then(() => {
            console.log('Mongoose started');
        }).catch(err => {
            console.log('Mongoose...not started:', err.stack);
            process.exit(1);
        });

var toyRouter = require('./src/routes/toyRouter');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//whenever /toys, go to /toys/etc...
app.use('/toys', toyRouter);

app.listen(port, function(){
    console.log('Listening on port ', port);
});