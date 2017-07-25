var mongoose = require( 'mongoose' );


var localSchema = new mongoose.Schema({
	'bairro': {'type': String, 'index': true},
	'lng': {'type': Number}, 
	'lat': {'type': Number}
});



mongoose.model('Locais', localSchema, 'locais');
