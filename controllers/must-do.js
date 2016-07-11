var express = require('express');
var router = express.Router();
var All = require('../models/all.js');
var Food = require('../models/food.js');
var Music = require('../models/music.js');
var Movie = require('../models/movie.js');

// ---------------------------
// BASIC CRUD - ew so basic...
// ---------------------------

// Home////////////
router.get('/', function(req, res) {
	All.find().then(function(all) {
		res.render('home.ejs', {all});
		// res.json(all);
	});
});




////////////////////////////////////////////
					///Movie Crud Routes
////////////////////////////////////////////

router.get('/movies', function(req, res) {
	Movie.find().then(function(movies) {
		res.render('movies/movies.ejs', {movies});
		// res.json(authors);
	});
});

router.get('/movies/action', function(req, res) {
	Movie.find().then(function(movies) {
		res.render('movies/actionindex.ejs', {movies});
		// res.json(authors);
	});
});

router.get('/movies/comedy', function(req, res) {
	Movie.find().then(function(movies) {
		res.render('movies/comedyindex.ejs', {movies});
		// res.json(authors);
	});
});

router.get('/movies/scifi', function(req, res) {
	Movie.find().then(function(movies) {
		res.render('movies/scifiindex.ejs', {movies});
		// res.json(authors);
	});
});


router.get('/movies/action/new', function(req, res){
  res.render('movies/new.ejs');
});
router.get('/movies/comedy/new', function(req, res){
  res.render('movies/new.ejs');
});
router.get('/movies/scifi/new', function(req, res){
  res.render('movies/new.ejs');
});

router.post('/movies', function(req, res){  
  var newMovie = new Movie({
      title: req.body.title,
      poster: req.body.poster,
      genre: req.body.genre,
      comment: req.body.comment,
      username: req.body.username,
  });
  newMovie.save(function(err, data){
    if(err){
      throw err;
    } else{
    res.redirect('/mustdo/movies');
   };
  });
});


////////////////////////////////////////////
					///Movie Crud Routes
////////////////////////////////////////////

router.get('/music', function(req, res) {
	Music.find().then(function(music) {
		res.render('music/music.ejs', {music});
		// res.json(authors);
	});
});
router.get('/music/rock', function(req, res) {
	Music.find().then(function(music) {
		res.render('music/rockindex.ejs', {music});
		// res.json(authors);
	});
});
router.get('/music/rap', function(req, res) {
	Music.find().then(function(music) {
		res.render('music/rapindex.ejs', {music});
		// res.json(authors);
	});
});
router.get('/music/rb', function(req, res) {
	Music.find().then(function(music) {
		res.render('music/rbindex.ejs', {music});
		// res.json(authors);
	});
});

router.get('/movies/scifi', function(req, res) {
	Movies.find().then(function(movies) {
		res.render('movies/scifiindex.ejs', {movies});
		// res.json(authors);
	});
});


router.get('/music/rock/new', function(req, res){
  res.render('music/new.ejs');
});
router.get('/music/rap/new', function(req, res){
  res.render('music/new.ejs');
});
router.get('/music/rb/new', function(req, res){
  res.render('music/new.ejs');
});

router.post('/music', function(req, res){  
  var newMusic = new Music({
      artist: req.body.artist,
      album: req.body.album,
      song: req.body.song,
      genre: req.body.genre,
      comment: req.body.comment,
      username: req.body.username,
  });
  newMusic.save(function(err, data){
    if(err){
      throw err;
    } else{
    res.redirect('/mustdo/music');
   };
  });
});




////////////////////////////////////////////
					///Food Crud Routes
////////////////////////////////////////////


router.get('/foods', function(req, res) {
	Food.find().then(function(foods) {
		res.render('foods/foods.ejs', {foods});
		// res.json(foods);
	});
});

router.get('/foods/american', function(req, res) {
	Food.find().then(function(foods) {
		res.render('foods/americanindex.ejs', {foods});
		// res.json(authors);
	});
});

router.get('/foods/asian', function(req, res) {
	Food.find().then(function(foods) {
		res.render('foods/asianindex.ejs', {foods});
		// res.json(authors);
	});
});
router.get('/foods/europe', function(req, res) {
	Food.find().then(function(foods) {
		res.render('foods/europeindex.ejs', {foods});
		// res.json(authors);
	});
});

 router.get('/watches/:id/edit',function(req, res){
  Watches.findById(req.params.id, function(err, watches){
    res.render('watches/edit.ejs', {watches: watches})
  });
});

router.put('/watches/:id', function(req,res){
    var query = {"_id": req.params.id};
    Watches.findOneAndUpdate(query, req.body, function(err, watches){
        if (err) {
            console.log(err); 
        } else {
            res.redirect('/closet/watches');
        }
    });
}); 

router.delete('/watches/:id', function(req, res){
  Watches.findByIdAndRemove(req.params.id, function(){
      res.redirect('/watches');
  });
})


router.get('/foods/europe/new', function(req, res){
  res.render('foods/new.ejs');
});
router.get('/foods/asian/new', function(req, res){
  res.render('foods/new.ejs');
});
router.get('/foods/american/new', function(req, res){
  res.render('foods/new.ejs');
});

router.post('/foods', function(req, res){  
  var newFood = new Food({
      name: req.body.name,
      style: req.body.style,
      location: req.body.location,
      comment: req.body.comment,
      username: req.body.username,
  });
  newFood.save(function(err, data){
    if(err){
      throw err;
    } else{
    res.redirect('/mustdo/foods');
   };
  });
});




/////////////////////////////////////////////////////////////////


// New
// router.get('/new', function(req, res) {
// 	res.render('authors/new.ejs');
// });

// Edit
// router.get('/:id/edit', function(req, res) {
// 	Author.findById(req.params.id).then(function(author) {
// 		// res.render('authors/edit.ejs', {author});
// 		res.json(author);
// 	});
// });


// Update
router.put('/:id', function(req, res) {
	Author.findOneAndUpdate({
		_id: req.params.id
	}, {
		$set: req.body
	}, function(err, author) {
		if(err) {
			console.log(err);
			res.json(false);
		} else {
			res.json(true);
		}
	});
});


// Create
router.post('/', function(req, res) {
	console.log(req.body);
	var author = new Author(req.body);
	author.save(function(err) {
		if(err) {
			console.log(err);
			res.json(false);
		} else {
			res.json(true);
		}
	});
});


// Delete
router.delete('/:id', function(req, res) {
	Author.findOneAndRemove({ _id: req.params.id}, function(err) {
		if(err) {
			console.log(err);
			res.json(false);
		} else {
			res.json(true)
		}
	});
});


// ----------------------------------
// NESTED RESOURCED ROUTES - So sexy!
// ----------------------------------

// New author.article
// 	- Render the form for a new article but keep track of the author's ID
// router.get('/:id/articles/new', function(req, res) {
// 	Author.findById(req.params.id).then(function(author) {
// 		res.render('articles/new.ejs', {author})
// 	});
// });


// Create author.article
// 	- Handle the post request to create a new article
// 	-	Create and save the article into articles collection in mongo
// 	- Add the article into the author's article array and save to mongo
router.post('/:id/articles', function(req, res) {
	Author.findById(req.params.id).then(function(author) {
		Article.create(req.body).then(function(article) {
			console.log('--------------------------------------');
			console.log("New Article: ", article);
			console.log('--------------------------------------');
			author.articles.push(article);
			author.save();
			// res.render('authors/show.ejs', {author});
			res.json(true);
		});
	});
});


// Edit author.article
// 	- Populate the form with the existing article's attributes to edit 
// 	- Keep track of the author it belongs to 
// router.get('/:id/articles/:article_id', function(req, res) {
// 	Author.findById(req.params.id).then(function(author) {
// 		Article.findById(req.params.article_id).then(function(article) {
// 			console.log('Here is my author: ', author);
// 			console.log('Here is my article: ', article);

// 			// Let's create a random variable to send as my data for both instances into my ejs
// 			var data = {
// 				author: author,
// 				article: article
// 			};

// 			res.render('articles/edit.ejs', data);
// 		})
// 	})
// })


// Update author.article
// 	- Update the article in the articles collection in mongo
// 	- Update the author's article array
// 		- Find the author
// 		- Find the article in the author's article array
// 		-	Replace the existing author's article with the data from form
router.put('/:id/articles/:article_id', function(req, res) {
	console.log('step1');

	// To Avoid Callbeck Hell, let's update one the article collection side first
	Article.findOneAndUpdate({
		_id: req.params.article_id
	}, {
		$set: req.body
	}, function(err, article) {
		console.log(article._id);
	});

	// Update the author
	Author.findById(req.params.id).then(function(author) {
		console.log('step3');
		author.articles.forEach(function(article) {
			if(article._id == req.params.article_id) {
				article.title = req.body.title;
				article.body = req.body.body;
				author.save();
			}
		});
	});

	res.json(true);
	// res.redirect('/authors');
});

// Delete author.article
// 	- Delete the article from the articles collection in mongo
// 	-	Remove the article from the author's article array, remember to save.
router.delete('/:id/articles/:article_id',function(req,res){

  // Delete the article
  Article.findOneAndRemove({_id:req.params.article_id}).then(function(err){
    if(err){
    	console.log(err)
    	res.json(false);
    } else {
    	console.log('Article deleted');
    }
  });

  // Remove the article from the author: first find the author
  Author.findById(req.params.id).then(function(author) {
  	// Iterate through all that author's articles
    author.articles.forEach(function(article) {
    	// Find the author's article
      if(article._id == req.params.article_id) {
      	// Use .splice to remove that article from the array
	      var index = author.articles.indexOf(article);
	      author.articles.splice(index, 1);
	      // Save the change made to the author into the DB
	      author.save();
      };
      console.log("Author's article deleted");
    });
  });
  // res.redirect('/authors');
  res.json(true);
});

module.exports = router;
