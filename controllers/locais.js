var mongoose = require('mongoose');
var Locais = mongoose.model('Locais');




	var sendJsonResponse = function(res, status, content){
		res.status(status);
		res.json(content);
	}

	module.exports.criarLocal = function(req, res){

		if(!req.body.bairro || !req.body.lng || !req.body.lat) {
			sendJsonResponse(res, 404, {
				'message': 'Geocódigos faltando!'
			})

			return;
		}

		var locais = new Locais();
		
		var d = new Date();
		d.setHours(d.getHours() - 3); 
		locais.bairro =  req.body.bairro;
		locais.lng = req.body.lng;
		locais.lat = req.body.lat;  
		
		locais.save(function(err, data){
					if(err){
						sendJsonResponse(res, 404, err)
					}else{
						sendJsonResponse(res, 200, data);	
					}
				})	
	}

	
	module.exports.listarLocais = function(req, res){

		var query = Locais.find({});
		query.exec(function(err, data){
			if(!data){
				sendJsonResponse(res, 404, {
					'message': 'problemas para acessar o arquivo.'
				})

				return;

			}else if(err){
				sendJsonResponse(res, 400, err);

				return;
			}else{
				sendJsonResponse(res, 200, data);	
			}
				
		})	
	}


	