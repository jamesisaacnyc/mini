var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
	title: String,
	genre: String,
	poster: String,
	comment: String,
	username: String
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;