var mongoose = require( 'mongoose' );


var localSchema = new mongoose.Schema({
	'inscricao': {type: String},
	'bairro': {type: String},
	'local': {type: String, 'default': ''},
	'dist': {type: Number, 'default': 0},
	'coords': {type: [Number]}
});


mongoose.model('Locais', localSchema, 'locais');
