var express = require('express');
// Requirements
var mongoose = require('mongoose');
var db = process.env.MONGODB_URI || "mongodb://localhost/mini-project-db";

var express = require('express');
var router = express.Router();
var All = require('../models/all.js');
var Food = require('../models/food.js');
var Music = require('../models/music.js');
var Movie = require('../models/movie.js');

// Seed Data
var food1 = new Food({
	name: "Blue Ribbon",
	style: "Asian",
	location: "Columbus Circle",
	comment: "An amazing hidden gem in NYC, hidden inside of hotel, the quality of fish is unparreled, I would even venutre to day that it is better quality than Nobu, though it is just as expensive which is the only issue",
	username: "Tal Toker"
});

var food2 = new Food({
	name: "Geofferys",
	style: "American",
	location: "Malibu",
	comment: "Probably the best view Ive ever seen at a resteraunt, Geofferys has there own private coast to ensure that you have the best dining experience. Service could be better considering it minimum $300 for two people, but the fresh made bread rolls makes everything ok!",
	username: "Tyler Dreben"
});

var food3 = new Food({
	name: "Le Jules Verne",
	style: "Europe",
	location: "Effiel Tower Paris",
	comment: "Took my girl friend here on the first night of our Paris anniversary trip. It is well worth the money, and the trouble of making a reservation with someone who doesnt speak a word of english. Best view of Paris hands down, go here!",
	username: "Justin Kalkin"
});

var music1 = new Music({
	artist: "Jack White",
	album: "Lazzeretto", 
	song: "Black Bat Licorice",
	genre: 'Rock',
	comment: "This often forgotten master piece of Jacks sophmore solo album is one of the better songs in his catalog, great to listen too whilst driving fast on PCH",
	username: "Gabe Fajl"
});

var music2 = new Music({
	artist: "Chance the Rapper",
	album: "Coloring Book", 
	song: "Same Drugs",
	genre: 'R&B',
	comment: "Though you quicly notice that the song is based off the Peter Pan story, it still manages to flood you with emotion, Chances personally connection to the lyrics are evident in his voice throughout the song. Not a party song, but one of his best songs",
	username: "Shaked Edri"
});

var music3 = new Music({
	artist: "Kanye West",
	album: "808's and Heartbreaks", 
	song: "Coldest Winter",
	genre: "Rap",
	comment: "In my opinion 808's and Heartbreaks is one of the most ground breaking rap albums of the past 20 years. Rappers did not sing before this, and it changed the way they make music, ushering in a melodic apporach to beats. Coldest Winter is the perfect example of both of this",
	username: "Sam Rivera"
});

var movie1 = new Movie({
	title: "Pulp Fiction",
	genre: "Action",
	poster: "http://www.impawards.com/1994/posters/pulp_fiction.jpg",
	comment: "Quinten Tarentino at his best, a cult classic, for a reason, if you havent seen this yet, youre doing something wrong",
	username: "Toby Winograd"
});

var movie2 = new Movie({
	title: "Wolf of Wall Street",
	genre: "Comedy",
	poster: "http://asiamedia.lmu.edu/wp-content/uploads/2014/01/The-Wolf-of-Wall-Street-Poster.jpg",
	comment: "Not often do we get a movie that both makes us cry laughing, and at the same time motivates us to go out and become millionaries. Jordan Belforts Story, though terrible innappropriate is equal parts amazingly cinematic, but an example of amazing acting by the respective cast",
	username: "Shaun Merrit"
});

var movie3 = new Movie({
	title: "Mad Max: Fury Road",
	genre: "Sci-Fi",
	poster: "http://cdn3-www.superherohype.com/assets/uploads/gallery/mad-max-fury-road_1/10636937_661847177254140_3001186770164503894_o.jpg",
	comment: "My friends bugged me for months to see this movie, trust me, you want to see it. Even if you arent a fan of similar movies and this genre you will love Mad Max. Why are you still reading this?!? Go watch it you fool!!",
	username: "Jordan May"
});

var all1 = new All({
	foods: [],
	movies: [],
	music: []
});


// Testing
router.get('/testing', function(req, res) {
	console.log('hi');
	res.send('bye');
});


// Seed
router.get('/', function(req, res) {

	food1.save(function(err) {
		if(err) return handleError(err);
		console.log("saved: " + food1.name);
	});

	food2.save(function(err) {
		if(err) return handleError(err);
		console.log("saved: " + food2.name);
	});

	food3.save(function(err) {
		if(err) return handleError(err);
		console.log("saved: " + food3.name);
	});

	movie1.save(function(err) {
		if(err) return handleError(err);
		console.log("saved: " + movie1.title);		
	});

	movie2.save(function(err) {
		if(err) return handleError(err);
		console.log("saved: " + movie2.title);		
	});

	movie3.save(function(err) {
		if(err) return handleError(err);
		console.log("saved: " + movie3.title);		
	});

	music1.save(function(err) {
		if(err) return handleError(err);
		console.log("saved: " + music1.song);		
	});

	music2.save(function(err) {
		if(err) return handleError(err);
		console.log("saved: " + music2.song);		
	});

	music3.save(function(err) {
		if(err) return handleError(err);
		console.log("saved: " + music3.song);		
	});

	all1.save(function(err) {
		if(err) return handleError(err);
		console.log("saved: All ");		
	});			

	all1.foods.push(food1);
	all1.foods.push(food2);
	all1.foods.push(food3);
	all1.music.push(music1);
	all1.music.push(music2);
	all1.music.push(music3);
	all1.movies.push(movie1);
	all1.movies.push(movie2);
	all1.movies.push(movie3);
	console.log('------------------');
	console.log('------------------');	
	console.log('------------------');
	console.log('------------------');
	console.log('SEEDING COMPLETE');
	console.log('------------------');
	res.send('Seeding Done');
});

module.exports = router;