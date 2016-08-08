var mongoose = require("mongoose");
var ingredient = require("./ingredient")

var recipeSchema = new mongoose.Schema({

	name : {
		type : String,
		index : true
	},
	picture: [String],
	cookTime : {
		type: Number,
		required: true 
	},
	prepTime: {
		type: Number,
		required: true
	},
	recipeCategory: {
		type: String,
		required: true
	},
	recipeCuisine: {
		type: String
	},
	instructions: [String],
	dietType: {
		type: [String]
	},
	calorieCount: {
		type: Number
	},
	serves : {
		type : Number
	}

})

module.exports = mongoose.model('Recipe', recipeSchema); 