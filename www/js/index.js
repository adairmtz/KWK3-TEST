
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
		//scrollHide();
		carrusel1();
		carrusel2();
		carrusel3();
		carrusel4();
		carrusel5();

		navigate();

		$('.c2foto, .c1foto, .sectionTitle a, .c3foto, .c5foto, .oferta_especial').click(function(){
			alert("No hay nada Martha");
		})

		


	} else if (page.id === 'page3') {
		scrollHide();
		carrusel1();
		carrusel2();
		carrusel3();
		carrusel4();
		carrusel5();

		navigate2();

		$('.c2foto, .c1foto, .sectionTitle a, .c3foto, .c5foto, .oferta_especial').click(function(){
			alert("No hay nada Oli");
		});	

	}

	else if (page.id === 'page4') {
		scrollHide();
		carrusel1();
		carrusel2();
		carrusel3();
		carrusel4();
		carrusel5();

		navigate3();

		$('.c2foto, .c1foto, .sectionTitle a, .c3foto, .c5foto, .oferta_especial').click(function(){
			alert("No hay nada pirro");
		});

		


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
		duration: 1000,
	


	};

	var options2 = {
		duration: 500,
		delay: 500
	};



	$('.page__content').scroll(function() {

		window.animatelo.fadeOutDown('.tab-bar', options);
		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function() {
        // do something
        console.log("Haven't scrolled in 250ms!");
        window.animatelo.fadeInUp('.tab-bar', options2);
    }, 250));
	});


};



function carrusel1(){
	console.log('carga carrusel 1');
	$('.ca1').owlCarousel({
		loop:true,
		margin:50,
		nav:false,
		items: 1,
		dotsEach: true,
		autoplay: true,
		stagePadding: 5,
		dots:true,
		

	})

};

function carrusel2(){
	console.log('carga carrusel 2');
	$('.ca2').owlCarousel({
		loop:false,
		margin:10,
		nav:false,
		items: 1,
		stagePadding: 5,
		dots:false,
		animateIn: true,
		animateOut: true

	})

};

function carrusel3(){
	console.log('carga carrusel 3');
	$('.ca3').owlCarousel({
		loop:false,
		margin:10,
		nav:false,
		items: 1,
		stagePadding: 5,
		dots:false,
		animateIn: true,
		animateOut: true

	})

};

function carrusel4(){
	console.log('carga carrusel 4');
	$('.ca4').owlCarousel({
		loop:false,
		margin:10,
		nav:false,
		items: 1,
		stagePadding: 5,
		dots:false,
		animateIn: true,
		animateOut: true

	})

};


function carrusel5(){
	console.log('carga carrusel 5');
	$('.ca5').owlCarousel({
		loop:false,
		margin:15,
		nav:false,
		items: 1,
		stagePadding: 5,
		dots:false,
		animateIn: true,
		animateOut: true

	})

};

function navigate3(){
	$('.tab-bar3').click(function(){
		document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Page 2'}});
	});
}

function navigate2(){
	$('.tab-bar2').click(function(){
		document.querySelector('#myNavigator').pushPage('page4.html', {data: {title: 'Page 4'}});
	});
}

function navigate(){

	$('.tab-bar').click(function(){
		document.querySelector('#myNavigator').pushPage('page3.html', {data: {title: 'Page 3'}});
	});
	
}





