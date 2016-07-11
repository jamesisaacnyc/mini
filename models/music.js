var mongoose = require('mongoose');

var musicSchema = new mongoose.Schema({
	artist: String,
	album: String, 
	song: String,
	genre: String,
	comment: String,
	username: String
});

var Music = mongoose.model('Music', musicSchema);

module.exports = Music;