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

		locais.bairro =  req.body.bairro;

		locais.coords.push(req.body.lng); 
		locais.coords.push(req.body.lat);
		
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


	module.exports.listarProximos = function(req, res){


		if(!req.body.lng || !req.body.lat || !req.body.quantidade) {
			sendJsonResponse(res, 404, {
				'message': 'Geocódigos faltando!'
			})

			return;
		}

		var lng = parseFloat(req.body.lng);
		var lat = parseFloat(req.body.lat);
		var quantidade = parseInt(req.body.quantidade);


		var point = {
			type: "Point",
			coordinates: [lng, lat]
		};

		var options = {
			'spherical': true,
			'num': quantidade,
			'query': {'local': ''}
		}


		Locais.geoNear(point, options, function(err, results, stats){
			if(err){
				console.log('erro: ' + err);
				sendJsonResponse(res, 400, err);

			}else{
		
				sendJsonResponse(res, 200, results);

			}

			
		})
		
	}


	module.exports.atualizar = function(req, res){

		if(!req.body.id || !req.body.local || !req.body.dist) {
			sendJsonResponse(res, 404, {
				'message': 'Dados faltando!'
			})

			return;
		}

		Locais

		.findById(req.body.id)
		.exec(
			function(err, data){
				data.local = req.body.local;
				data.dist = req.body.dist;
				data.save(function(err, data){
					if(err){
						sendJsonResponse(res, 404, err)
					}else{
						sendJsonResponse(res, 200, data)
					}
				})

			}
		)
	}


	