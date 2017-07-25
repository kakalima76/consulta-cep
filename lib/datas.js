
var ano_2017 = 
[
	{'mes': 'janeiro', 'inicio': new Date(2017, 0, 1), 'fim': new Date(2017, 0, 31)},
	{'mes': 'fevereiro', 'inicio': new Date(2017, 1, 1), 'fim': new Date(2017, 1, 28)},
	{'mes': 'março', 'inicio': new Date(2017, 2, 1), 'fim': new Date(2017, 2, 31)},
	{'mes': 'abril', 'inicio': new Date(2017,3, 1), 'fim': new Date(2017, 3, 30)},
	{'mes': 'maio', 'inicio': new Date(2017, 4, 1), 'fim': new Date(2017, 4, 31)},
	{'mes': 'junho', 'inicio': new Date(2017, 5, 1), 'fim': new Date(2017, 5, 30)},
	{'mes': 'julho', 'inicio': new Date(2017, 6, 1), 'fim': new Date(2017, 6, 31)},
	{'mes': 'agosto', 'inicio': new Date(2017, 7, 1), 'fim': new Date(2017, 7, 31)},
	{'mes': 'setembro', 'inicio': new Date(2017, 8, 1), 'fim': new Date(2017, 8, 30)},
	{'mes': 'outubro', 'inicio': new Date(2017, 9, 1), 'fim': new Date(2017, 9, 31)},
	{'mes': 'novembro', 'inicio': new Date(2017, 10, 1), 'fim': new Date(2017, 10, 30)},
	{'mes': 'dezembro', 'inicio': new Date(2017, 11, 1), 'fim': new Date(2017, 11, 31)},
]


var retornaPeriodo = function(mes){
	var obj = {}
	ano_2017.forEach(function(valor, indice, array){
		if (mes === array[indice].mes){
			obj['inicio'] = array[indice].inicio.getTime();
			obj['fim'] = array[indice].fim.getTime();

			return;
		}
	
	})
	return obj;
}

var retornaMilissegundos = function(dia, mes, ano){
	var dt = new Date(parseInt(ano), (parseInt(mes) - 1), parseInt(dia));
	return dt.getTime();
}

module.exports = {
	'ano2017': ano_2017,
	'retornaPeriodo': retornaPeriodo,
	'retornaMilissegundos': retornaMilissegundos
}
