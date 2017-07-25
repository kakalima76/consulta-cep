// Enviando e-mails usando o Node.js e o famoso nodemailer


var nodemailer = require('nodemailer');


	var atualizar = function(nome, destino, token){
		// Vamos criar a conta que irá mandar os e-mails
		var conta = nodemailer.createTransport({
		    service: 'Gmail', // Existem outros services, você pode procurar
		                      // na documentação do nodemailer como utilizar
		                      // os outros serviços
		    auth: {
		        user: 'nieraldo@gmail.com', // Seu usuário no Gmail
		        pass: process.env.SENHA // A senha da sua conta no Gmail :-)
		    }
		});

		var path = '<a href=https://credenciais.herokuapp.com/?token=' + token + '#/login/atualizar>Clique para criar nova senha de acesso</a>'
		console.log(path);

		conta.sendMail({
		    from: 'Nieraldo <nieraldo@gmail.com>', // Quem está mandando
		    to: "'" + nome + "<" + destino + ">'", // Para quem o e-mail deve chegar
		    subject: 'Alterar senha de Acesso', // O assunto
		    html: path

		}, function(err){
		    if(err)
		        throw err;

		    console.log('E-mail enviado!');
		});
	}



	var solicitar = function(nome, destino, token){
		// Vamos criar a conta que irá mandar os e-mails
		var conta = nodemailer.createTransport({
		    service: 'Gmail', // Existem outros services, você pode procurar
		                      // na documentação do nodemailer como utilizar
		                      // os outros serviços
		     auth: {
		        user: 'controleurbano.pcrj@gmail.com', // Seu usuário no Gmail
		        pass: 'Ni102442@' // A senha da sua conta no Gmail :-)
		    }
		});


		var path = '<a href=https://credenciais.herokuapp.com/?token=' + token + '#/login/acesso>Clique para criar usuário e senha de acesso</a>'

		conta.sendMail({
		    from: 'Nieraldo <nieraldo@gmail.com>', // Quem está mandando
		    to: "'" + nome + "<" + destino + ">'", // Para quem o e-mail deve chegar
		    subject: 'Acesso ao app da GDICU', // O assunto
		    html: path

		}, function(err){
		    if(err)
		        throw err;

		    console.log('E-mail enviado!');
		});
	}



module.exports = {
	atualizar: atualizar,
	solicitar: solicitar
}