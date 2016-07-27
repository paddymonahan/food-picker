var mongoose = require("mongoose");
var ingredient = require("./ingredient")

var recipeSchema = new mongoose.Schema({

	name : {
		type : String,
		index : true
	},
	ingredients : [ingredient],
	method : {
		type : String
	},
	serves : {
		type : Number
	}

})

module.exports = mongoose.model('Recipe', recipeSchema); 