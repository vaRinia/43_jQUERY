//Las validaciones solo se hacen mientras se escribe, si hay un dato mal NO seguirá avisando que está mal al cambiar el focus a otro input

var regexEmilio = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var regexNombreApellido = /^[ÑA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/;
//no necesita estas variables cargadas para ejecutar el dom, pueden ir afuera.
var spane = $('<span></span>')
$(document).ready(function () { //cuando el documento esté cargado ejecutará la función
	console.log("Está super listo"); //para comprobar que entró
	

	$("#name").on("input", function(evt) {//cuando se presionan teclas ejecutará la función
		console.log("Presiono una super nombre tecla");
		$(".name-container span").remove(); 
		var nombre = $("#name").val();
		//var nombre = $(evt.target).val(); //esto hace lo mismo que lo de arriba
		
		if (nombre.trim() === "") {
			console.log("nombre vacío");
			spane = $('<span class = "error"> Campo vacío </span>');
			$(".name-container").append(spane);
		} else if(!regexNombreApellido.test(nombre)) {
			console.log("Valor inválido");
			var spane = $('<span class = "error"> Caracteres inválidos </span>');
			$(".name-container").append(spane);
		}
	});
	$("#lastname").on("input", function(evt){
		console.log("Presiono una super apellido tecla");
		$(".lastname-container span").remove(); 
		var apellido = $("#lastname").val();
		//var apellido = $(evt.target).val(); //esto hace lo mismo que lo de arriba
		
		if (apellido.trim() === "") {
			console.log("apellido vacío");
			spane = $('<span class = "error"> Campo vacío </span>');
			$(".lastname-container").append(spane);
		} else if(!regexNombreApellido.test(apellido)) {
			console.log("Valor inválido");
			var spane = $('<span class = "error"> Caracteres inválidos </span>');
			$(".lastname-container").append(spane);
		}
	});
	$("#input-email").on("input", function(evt){
		console.log("Presiono una super tecla");
		$(".email-container span").remove(); 
		var emilio = $("#input-email").val();

		if(emilio.trim() === "") {
			console.log("emilio vacio");
			spane = $('<span class = "error">Campo vacío</span>');
			$(".email-container").append(spane);
		} else if (!regexEmilio.test(emilio)) {
			console.log("emilio no cumple");
			spane = $('<span class = "error">Caracteres inválidos</span>');
			$(".email-container").append(spane);
		}

	});
	$("#input-password").on("input", function(evt){
		console.log("Presiono una super password tecla");
		$("#input-password").parent().remove("span"); // REMUEEEEEEVETE SESAMO --- no funciona
		var contra = $("#input-password").val();

		if(contra.trim === "") {
			console.log("contraseña vacía");
			spane = $('<span class = "error">Campo vacío</span>');
			$("#input-password").parent().append(spane);
		} else if(contra.length < 6) {
			console.log("faltan letras contra");
			spane = $('<span class = "error">Debe ser mayor a 6 caracteres</span>');
			$("#input-password").parent().append(spane);
		} else if(contra == "password" || contra == 123456 || contra == 098754) {
			console.log("pass invalida");
			spane = $('<span class = "error">Escribe otra contraseña</span>');
			$("#input-password").parent().append(spane);
		}
	});
	$("select").change(function(){
		console.log("select funciona");
		$("select").parent().remove("span"); // REMUEEEEEEVETE SESAMO -- no funciona
		var seleccion = $("select").val();
		if(seleccion == "0" || seleccion == null) {
			console.log("seleccion ninguna");
			spane = $('<span class = "error">Selecciona un tipo bici loka</span>');
			$("select").parent().append(spane); //si funciona para append pero no para remove
		}
	});
});


// $("span").remove(); //elimina un solo elemento
/*$("span").each(function() {//elimina muchos elementos
		$(this).remove(); //esta función, remove() es intercambiable por cualquier otra, como addClass, o removeClass o así
	});*/