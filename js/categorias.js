// JavaScript Document
// JavaScript Document

$( document ).ready(function() {
	clonacion();
	slidercantidad();
	document.getElementById('adelante').addEventListener("click",next);
	document.getElementById('atras').addEventListener("click",prev);
	//$('#adelante').on("click", next);
	//$("#atras").on("click", prev);
});
//EVentos a la escucha;
window.addEventListener("resize",slidercantidad);



//Variables globales
//Importante para saber la direcciÃ³n
//Funcion prev y next
var contador=1;
var direcion=0;
var posicion=1;


function prev() {
	
	var pixeles_anchoescena=$('#escena').width();
	var pixeles_celda=$('.elementos_carousel').width();	
	var cantidad_posible=pixeles_anchoescena/(pixeles_celda);
	var margen_sobrante=pixeles_anchoescena-(Math.floor(cantidad_posible)*pixeles_celda);
	var margen_entreceldas_posible=Math.ceil(margen_sobrante/((Math.floor(cantidad_posible))+1));
	var numero_nodo =($('.carousel').children().length)/2;
	
	
	
	if(margen_entreceldas_posible<25){
		cantidad_posible=(pixeles_anchoescena/pixeles_celda)-1;
		margen_sobrante=pixeles_anchoescena-(Math.floor(cantidad_posible)*pixeles_celda);
		margen_entreceldas_posible=Math.ceil(margen_sobrante/((Math.floor(cantidad_posible))+1));
	}
		
	
	var translado=(margen_entreceldas_posible+pixeles_celda);
	//Para crear un bucle infinito en el slider mueve a la primera posicion del clonado
	if(posicion==1){
		posicion=numero_nodo+1;
		contador=numero_nodo*-1;
		direcion=-1;
		var cambiotranslado= translado*contador;
		$('.carousel').css('left', '+='+cambiotranslado+'px');
	}
	
	
	//Para realizarel movimiento
	//Numero de celdas que se mueve  si quieres que se mueva todas estas multiplica por esto *Math.floor(cantidad_posible)
	
	var propiedad='left';
	var opcion = {};
	if(direcion==-1){
		contador++;
	}
	opcion[propiedad]= translado*contador+"px";
	$('.carousel').animate(opcion, 400, "linear" );
	contador++;
	direcion=0;
	posicion--;
	
}

function next(){
	
	//document.getElementById('adelante').removeEvenListener("click",next);
	//document.getElementById('adelante').addEventListener("click",next);

	var pixeles_anchoescena=$('#escena').width();
	var pixeles_celda=$('.elementos_carousel').width();	
	var cantidad_posible=pixeles_anchoescena/(pixeles_celda);
	var margen_sobrante=pixeles_anchoescena-(Math.floor(cantidad_posible)*pixeles_celda);
	var margen_entreceldas_posible=Math.ceil(margen_sobrante/((Math.floor(cantidad_posible))+1));
	
	//Comprueba que al menos hay un margen de 25px, sino cambia la cantidad de celdas que pueden entrar
	if(margen_entreceldas_posible<25){
		cantidad_posible=(pixeles_anchoescena/pixeles_celda)-1;
		margen_sobrante=pixeles_anchoescena-(Math.floor(cantidad_posible)*pixeles_celda);
		margen_entreceldas_posible=Math.ceil(margen_sobrante/((Math.floor(cantidad_posible))+1));
	}	
	//Para realizar un bucle infinito es necesaria esta estructura pues cuando llegar al final del carusel te devuelve a la primera posicion.
	var translado=(margen_entreceldas_posible+pixeles_celda);
	//mejorar posicion pues puede variar.
	if(posicion==6){
		posicion=1;
		direcion=0;
		contador=1;	
		$('.carousel').css('left', '0px');
	}
	
		
	//Numero de celdas que se mueve  si quieres que se mueva todas las visibles en vez de las que estas estas multiplica por esto *Math.floor(cantidad_posible)
		
	contador--;
	if(direcion==0){
		contador--;
	}
	var opcion=translado*contador;
	
	$('.carousel').animate({
		left:opcion+"px"},{
		duration:400,
		easing:"swing"
	});
	direcion=-1;
	posicion++;
}



function slidercantidad(){
	//Deben existir un numero de celdas suficientes para rellenar sin hay error. Se puede mejorar.
	var pixeles_anchoescena=$('#escena').width();
	var pixeles_celda=$('.elementos_carousel').width();	
	var numero_nodo =$('.carousel').children().length;
	var cantidad_posible=pixeles_anchoescena/(pixeles_celda);
	var margen_sobrante=pixeles_anchoescena-(Math.floor(cantidad_posible)*pixeles_celda);
	var margen_entreceldas_posible=Math.ceil(margen_sobrante/((Math.floor(cantidad_posible))+1));
	if(margen_entreceldas_posible<25){
		cantidad_posible=(pixeles_anchoescena/pixeles_celda)-1;
		margen_sobrante=pixeles_anchoescena-(Math.floor(cantidad_posible)*pixeles_celda);
		margen_entreceldas_posible=Math.ceil(margen_sobrante/((Math.floor(cantidad_posible))+1));
	}
	var translado=0-pixeles_celda;
	for(var i=1;i<=numero_nodo;i++){
		$('.elementos_carousel').eq(i-1).css({"-webkit-transform":"translateX("+(translado+=(margen_entreceldas_posible+pixeles_celda))+"px)"});
	}
}

function clonacion(){
	$('.carousel').clone(true).appendTo("#escena").attr("id","1");//Conacion 2 veces
}


