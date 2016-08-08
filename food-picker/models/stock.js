var mongoose = require("mongoose");

var stockSchema = new mongoose.Schema({

	name : {
		type : String,
		index : true
	}
})
 
module.exports = mongoose.model('Stock', stockSchema); 