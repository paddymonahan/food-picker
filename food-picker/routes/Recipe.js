var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
  
  var recipeID = parseInt(req.params.id);
  
  var where = {};

  var Recipe = require('../models/recipe');
  Recipe.findById(recipeID, function(err,recipe){
    if (recipe) {
      res.json(todo);
    } else  if(err){
      res.status(404).send('No recipe');
    }
  });

});

router.get('/',function(req,res,next){
	res.status(404).send();
});

module.exports = router;
