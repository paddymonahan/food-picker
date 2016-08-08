var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Ingredient = require('../models/ingredient');
var Recipe = require('../models/recipe');
mongoose.Promise = global.Promise;

/* GET home page. */
router.get('/', function(req, res, next) {
	
	var recipe = new Recipe({

	})
	// var chips = new Ingredient({
	//   name : "CHIPS",
	//   amount : "34",
	//   unit : "feet"
	// })

	// chips.save(function(err){
	//   if (err !== null)
	//     console.log(err);
	// })
});

module.exports = router;
