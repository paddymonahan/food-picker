var mongoose = require("mongoose");

var ingredientSchema = new mongoose.Schema({

	name : {
		type : String,
		index : true,
		required: true
	},
	amount: {
		type: String,
		required: true
	},
	unit: {
		type: String
	}
});

module.exports = mongoose.model('Ingredient', ingredientSchema); 