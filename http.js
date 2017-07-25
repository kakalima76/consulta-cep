1var http = require('http');
var https = require('https');
var obj = require('./config/autorizado');
var mongoose = require('./db/mongoose');
var autorizadoModel = require('./models/modelAutorizado')(mongoose, obj);
var autorizadoController = require('./controllers/autorizadoController')(autorizadoModel);

var num = 0;

function testaNum(value){
	if(num < value){
		num = value;
		console.log('Vistoria número: ' + num);

	http.get('http://ccuanexos.herokuapp.com/autorizado/ultima', (res) => {
  
  	res.on('data', (d) => {
  	var autorizado = JSON.parse(d.toString().replace('[', '').replace(']', '').trim())
  	var imprime = '';
    imprime += 'Agente: ' + autorizado.nome + ' Matricula: ' + autorizado.matricula + '\n';
    imprime += 'Dia e Hora: ' + autorizado.horaAutuacao + '\n';
    imprime += 'Ordem de Serviço: ' + autorizado.ordem + '\n';
    imprime += 'Coordenadas: ' + autorizado.latitude + ',' + autorizado.longitude + '\n';
    imprime += 'Inscrição Municipal nº: ' + autorizado.im + '\n';
    imprime += 'Logradouro da autorização: ' + autorizado.local + '\n';
    imprime += 'Situação: ' + autorizado.situacao + '\n';
    imprime += 'CPF do Titular: ' + autorizado.cpf + '\n';
    imprime += 'Nome do Titular: ' + autorizado.titular + '\n';
    imprime += 'Conformidade: ' + autorizado.conformidade + '\n';
    imprime += 'Autuação(ões): ' + autorizado.multas + '\n';
    imprime += 'Pontos conferidos: ' + autorizado.pontos+ '\n\n\n';


    console.log(imprime);
  	});

	}).on('error', (e) => {
  	console.error(e);
	})
	}
}


setInterval(function(){
	
	http.get('http://ccuanexos.herokuapp.com/autorizado/totais', (res) => {
  
  	res.on('data', (d) => {
    testaNum(parseInt(d));
  	});

	}).on('error', (e) => {
  	console.error(e);
	})

}, 2000);

