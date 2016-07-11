var mongoose = require('mongoose');

var foodSchema = new mongoose.Schema({
	name: String,
	style: String,
	location: String,
	comment: String,
	username: String
});

var Food = mongoose.model('Food', foodSchema);

module.exports = Food;