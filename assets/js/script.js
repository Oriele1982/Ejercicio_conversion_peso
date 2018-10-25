$(function(){

	// Llamando a AJAX
	$.ajax({
		url: 'http://www.mindicador.cl/api',
		method: 'GET'
		}).then(function(data) {
			console.log(data);
			var indicador = data;
		
		$('#peso-dolar').focus(); //  Va a mostrar valor de peso chileno a dolar / euro
			$('dolar').text(indicador.dolar.valor);
			$('euro').text(indicador.euro.valor);
			$('peso').text(1)


		//VALORES EN VARIABLES 
			var dolar = parseInt(indicador.dolar.valor);
 			console.log(dolar);
 
			var euro  = parseInt(indicador.euro.valor); 
			console.log(euro);
		
			var peso  = $('#peso').text(1);
			console.log(peso);
			var peso  = 1;
			// console.log(peso);

			var utm1 = parseInt(indicador.UTM.valor); 
			console.log(utm);

			var uf1 = parseInt(indicador.UF.valor); 
			console.log(uf);

		//CONVERSION PESO CHILENO A DOLAR - EURO
		$('#pesocl').on('click', function(event) {
 				event.preventDefault(event);
 
 				var valor_chileno_ingresado = $('#pesocl').val(1);
 				console.log(valor_chileno_ingresado);
 
 				var resultado1 = parseInt(valor_chileno_ingresado / dolar);
 				console.log(resultado1);
 
 				var resultado2 = parseInt(valor_chileno_ingresado / euro);
 				console.log(resultado2);
 
 				$('#dolar').text(resultado1);
 				$('#euro').text(resultado2);
 			});

		//CONVERSION PESO INDICADORES
		$('#indicadores').on('click', function(event) {
				event.preventDefault(event);
				var valor_chileno_ingresado = $('#peso-indica').val();
				console.log(valor_chileno_ingresado);
				peso = $('#dolar-peso').val();
				console.log(peso);
				$('#peso').text(peso * uf)
			})



		//CONVERSION DOLAR PESO CHILENO

		$('#dolarpeso').on('click', function(event) {
				event.preventDefault(event);
				var valor_dolar_ingresado = $('#valor_dolar').val();
				console.log(valor_chileno_ingresado);
				peso = $('#dolar-peso').val();
				console.log(peso);
				$('#peso').text(peso * dolar)
			})

		})

	});
