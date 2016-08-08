var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Ingredient = require('../models/ingredient');
var Recipe = require('../models/recipe');

/* GET home page. */
router.get('/', function(req, res, next) {

	
	var recipe = new Recipe({
		name: 'Kadala curry',
		cookTime: 25,
		prepTime: 15,
		recipeCategory: "Dinner",
		recipeCuisine: "Indian",
		instructions: [
			'To make the paste, heat a little of the oil in a frying pan, add the onion and chilli, and cook until softened, about 8 mins. Meanwhile, in a food processor, roughly combine the garlic, ginger and remaining oil, then add the spices, tomato purée, 1/2 tsp salt and the fried onion. Blend to a smooth paste – add a drop of water or more oil, if needed.',
			'Cook the paste in a medium saucepan for 2 mins over a medium-high heat, stirring occasionally so it doesn’t stick. Tip in the chickpeas and chopped tomatoes, and simmer for 5 mins until reduced down. Add the coconut with a little water, cook for 5 mins more, then add the coriander and spinach, and cook until wilted. Garnish with extra coriander and serve with rice or dhal (or both).'
		],
		dietType: ["Vegetarian", "Vegan", "Gluten-free"],
		calorieCount: 458,
		serves: 4,
		ingredients: [
			new Ingredient({
				name : "Oil",
				amount : "2",
				unit : "tbsp"
			}),
			new Ingredient({
				name : "Onion",
				amount : "1",
			}),
			new Ingredient({
				name : "Chili",
				amount : "1",
				unit: "tsp"
			}),
			new Ingredient({
				name : "Garlic",
				amount : "9",
				unit: "cloves"
			}),
			new Ingredient({
				name : "Ginger",
				amount : "1",
				unit: "inch"
			}),
			new Ingredient({
				name : "Dried coriander",
				amount : "1",
				unit: "tbsp"
			}),
			new Ingredient({
				name : "Cumin",
				amount : "1",
				unit: "tbsp"
			}),
			new Ingredient({
				name : "Garam Masala",
				amount : "1",
				unit: "tbsp"
			}),
			new Ingredient({
				name : "Tomato purée",
				amount : "2",
				unit: "tbsp"
			}),
			new Ingredient({
				name : "Chickpeas",
				amount : "800",
				unit: "g"
			}),
			new Ingredient({
				name : "Chopped tomatoes",
				amount : "400",
				unit: "g"
			}),
			new Ingredient({
				name : "Creamed coconut",
				amount : "100",
				unit: "g"
			}),
			new Ingredient({
				name : "Fresh coriander",
				amount : "100",
				unit: "g"
			}),
			new Ingredient({
				name : "Spinach",
				amount : "100",
				unit: "g"
			}).save(),
			new Ingredient({
				name : "Rice",
				amount : "500",
				unit: "g"
			}).save()
		]

	});

	recipe.save(function(err){
		if (err !== null)
			console.log(err);
	});

	res.status(200).send();

});

module.exports = router;
