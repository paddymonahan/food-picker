var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/:id', function(req, res, next) {
  
  var recipeID = req.params.id;
  console.log(recipeID+" recipeID");
  var where = {};

  var Recipe = require('../models/recipe');
  Recipe.findById(mongoose.Types.ObjectId(recipeID), function(err,recipe){
    console.log("err = " +err);
    console.log("recipe: "+recipe);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).send('No recipe');
    }
  });

});

router.get('/',function(req,res,next){
	res.status(404).send();
});

module.exports = router;
