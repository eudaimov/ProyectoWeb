// JavaScript Document
$(document).ready(function(){
	
	
	$(document).scroll(function() {
		$("#posicion").html($(document).scrollTop());
		var posicion=$(document).scrollTop();
	});
	
	
	var posicion1=($(window).height());
	var posicion2=(($(window).height())*2);
	
	/*$('html, body').animate({
		scrollTop: posicion1
	}, 2000);*/
	
	
		//detectar scroll hacia abajo
		var obj = $(document);          //objeto sobre el que quiero detectar scroll
		var obj_top = obj.scrollTop()   //scroll vertical inicial del objeto
		obj.scroll(function(){
			var obj_act_top = $(this).scrollTop();  //obtener scroll top instantaneo
			if((obj_act_top > obj_top) && (obj_top<posicion1)){
				var accion=1;				         
			}
			else if((obj_act_top > obj_top) && (obj_top>=posicion1)){
				var accion=2;
			}
			else if((obj_act_top < obj_top) && (obj_top>posicion1)){
				var accion=3;
			}
			else if((obj_act_top < obj_top) && (obj_top<=posicion1)){
				var accion=4;
			}
			
			if(accion==1){
				var body = $("html, body");
				body.stop().animate({scrollTop:posicion1}, 50);
				//$(document).stop().scrollTop(posicion1);
			}
			else if(accion==2){
				var body = $("html, body");
				body.stop().animate({scrollTop:posicion2}, 50);
			}
			else if(accion==3){
				var body = $("html, body");
				body.stop().animate({scrollTop:posicion1}, 50);
			}
			else if(accion==4){
				var body = $("html, body");
				body.stop().animate({scrollTop:0}, 50);
			}
			
			obj_top = obj_act_top;                  //almacenar scroll top anterior
		});
	
	
	
});
