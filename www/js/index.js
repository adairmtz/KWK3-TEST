
document.addEventListener('prechange', function(event) {
	document.querySelector('ons-toolbar .center')
	.innerHTML = event.tabItem.getAttribute('label');
});


document.addEventListener('init', function(event) {
	var page = event.target;

	if (page.id === 'page1') {

		document.querySelector('#invitado').onclick = function() {
			document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Page 2'}});
		};


	} else if (page.id === 'page2') {
		scrollHide();
		carousel();
		carousel2();

		document.querySelector('#credito').onclick = function() {
			document.querySelector('#myNavigator').pushPage('page3.html', {data: {title: 'Page 3'}});

		};


	}
	




	
});









//TIMER para el fondo del inicio


var rutas = ["imagen_01", "imagen_02", "imagen_03"];
var setRuta = 1;

setInterval(function(){

	console.log("Tamaño de rutas = " + rutas.length)
	console.log("ruta = " + setRuta);

	setRuta += 1;
	if(setRuta >= 4){
		setRuta = 1;
	}

	start_bck();

}, 3000);




function start_bck(){

	var rutilla = setRuta;
	console.log("ruta final 1: " + rutilla);
	
	rutilla += -1;
	console.log("ruta final 2: " + rutilla);

	

	$('#start_back').fadeOut(1000, function() {
		$('#start_back').fadeIn(1000)
		$('#start_back').css('background-image','url("img/' + rutas[rutilla] + '.png")');
	});
	



}


function scrollHide(){

	

	var options = {
  		duration: 100
  	
  	
	};

	var options2 = {
  		duration: 250,
  		delay: 100
	};



	var divGD = ons.GestureDetector(document.querySelector('#carru_1'));

	divGD.on('dragend', function(event){
		console.log("ya casi me sale");

		$(document).off('dragend', '#page2', function(event) {});



	});


	



	 $(document).on('dragup dragdown dragend', '#page2', function(event) {

	 	
    	
     

      if (event.type == 'dragend'){
      		console.log(event.type);
        
        	window.animatelo.fadeInUp('.tab-bar', options2);
      	}

      	else {

      
        	console.log(event.type);
      		window.animatelo.fadeOutDown('.tab-bar', options);
        	
      	}
    });



	/*divGD.on('dragup', function(event) {
		console.log("inicia el scroll");
		
		 window.animatelo.fadeOutDown('.tab-bar', options);
		 	console.log(event.type);
		 if (event.type !== 'dragup') {
        	console.log("perro");
      }

	});

	divGD.off('dragup', function(event) {

		console.log("termina");
		window.animatelo.fadeInUp('.tab-bar', options2);
		

		
	});*/

}


function carousel(){
	$('.oneC').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    items: 1,
    dotsEach: true,
    autoplay: true,
    stagePadding: 5
       
	})

}

function carousel2(){
	$('.twoC').owlCarousel({
    loop:false,
    margin: 70,
    nav:false,
    items: 1,
    dotsEach: false,
    dots: false,
    autoplay: false,
    stagePadding: 5
});
       

}

