var express = require('express');
app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override')
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/mini-project-db-4';
var port = process.env.PORT || 3000;

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

app.use(methodOverride('_method'));

// DATABASE
mongoose.connect(mongoUri);

// CONTROLLERS

var must_doController = require('./controllers/must-do.js');
app.use('/mustdo', must_doController);


// var seedController = require('./controllers/seed.js');
// app.use('/seed', seedController);

// LISTEN
app.listen(port);
console.log('=============================');
console.log('Server running off PORT: ' + port);
console.log('PORT:', port)
console.log('DB:', mongoUri)
console.log('=============================');
