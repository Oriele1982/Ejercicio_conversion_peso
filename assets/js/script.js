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

			var utm = parseInt(indicador.utm.valor); 
			console.log(utm);

			var uf = parseInt(indicador.uf.valor); 
			console.log(uf);
		
			var peso  = $('#pesocl').text();
			console.log(peso);
			var peso  = 1;
			// console.log(peso);


		//CONVERSION PESO CHILENO A DOLAR - EURO
		$('#pesochile').on('click', function(event) {
 				event.preventDefault(event);
 
 				var valor_peso = $('#peso-dolar').val();
 				console.log(valor_peso);
 
 				var resultado1 = parseInt(valor_peso * dolar);
 				console.log(resultado1);
 
 				var resultado2 = parseInt(valor_peso * euro);
 				console.log(resultado2);
 
 				$('#dolar').text(resultado1);
 				$('#euro').text(resultado2);
 			});

		//CONVERSION PESO INDICADORES
		$('#indicadores').on('click', function(event) {
				event.preventDefault(event);
				
				var valor_peso = $('#peso-indica').val();
				console.log(valor_peso);
				
				var resultado3 = parseInt(valor_peso * uf);
				console.log(resultado3);

				var resultado4 = parseInt(valor_peso * utm);
				console.log(resultado3);

				$('#uf').text(resultado3);
 				$('#utm').text(resultado4);
			});



		//CONVERSION DOLAR PESO CHILENO

		$('#dolarpeso').on('click', function(event) {
				event.preventDefault(event);
				var valor_dolar_ingresado = $('#valor_dolar').val();
				console.log(valor_dolar_ingresado);
				peso = $('#dolar-peso').val();
				console.log(peso);
				$('#pesocl').text(peso * dolar)
			})

		})

	});
