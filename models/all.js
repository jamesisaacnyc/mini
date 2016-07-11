var mongoose = require('mongoose');
var foodSchema = require('./food').schema;
var movieSchema = require('./movie').schema;
var musicSchema = require('./music').schema;

var allSchema = new mongoose.Schema({
	foods: [foodSchema],
	movies: [movieSchema],
	music: [musicSchema]
});

var All = mongoose.model('All', allSchema);

module.exports = All;