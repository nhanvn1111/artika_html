jQuery(function($){
	
	$(document).ready(function() {
		
		// DEVICES FIX
		if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		
			$('body').removeClass('desktop');
					
		}
		
		// ADD TRANSITIONS ON HOVER MENU AND BUTTONS
		$('nav li a, nav li span').addClass('transit-m');
		$('.btn, .to-top').addClass('transit');

		// LIGHTBOX
		$('.lightbox').each(function() {
            $(this).attr('rel', 'prettyPhoto[gal]');
        });
		
		$('.lightbox').prettyPhoto({
			theme: 'light_square',
		});
		
		
		$(window).resize(function(){	
		
			var fullSlide = $('.slider').height();
			$('.slider .slide').css('height', fullSlide);			
		
		});
				
		$(window).trigger('resize');
				
		// SLIDER						
				
		$('.slider-slide').owlCarousel({
			
			loop: true,
			items: 1,
			dots: true,
			autoplay: true,
			autoplayTimeout: 5000
			
		});
		
		$('.slider-fade').owlCarousel({
			
			loop: true,
			items: 1,
			dots: true,
			autoplay: true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoplayTimeout: 5000
			
		});
		
		// OWL Controls Centering
		var owlWallControls = $('#wall .owl-controls').width() / 2;
		$('#wall .owl-controls').css('margin-left', '-'+owlWallControls+'px');
		
		var owlQuotesControls = $('#quotes .owl-controls').width() / 2;
		$('#quotes .owl-controls').css('margin-left', '-'+owlQuotesControls+'px');
		
		var owlGalleryControls = $('#gallery .owl-controls').width() / 2;
		$('#gallery .owl-controls').css('margin-left', '-'+owlGalleryControls+'px');
			
	});

	$(window).load(function() {
		
		// LOADER
		setTimeout(function(){ $('#mask').fadeOut(300) }, 300);

		/* SCROLL TO SECTIONS */
		
		$('*[data-scrollto]').click(function(e){
			
			e.preventDefault();
			
			if ($('header').hasClass('posit-f')) {
				var headerH = $('header').height();
			}else{
				var headerH = 0;
			}
			
			var dest = $(this).data('scrollto');

			if($(this).data('scrollto') == 'totop'){
				var pixels = 0;
			}else{
				var pixels = $(dest).offset().top - headerH;
			}
			var ms = Math.round(1000 + pixels/5);
			
			$('html, body').stop();
			
			$('html, body').animate({				
				scrollTop: pixels
			}, ms, 'easeOutQuint');
			 
		}); 
		
		// BACK TO TOP
		
		$('.to-top').click(function(){
			$('html, body').animate({				
				scrollTop: 0
			}, 2000, 'easeOutQuint');
		});
		
		// TRANSITIONS
		$('[class^="transit-"], [class*=" transit-"]').each(function() {
			
			if( $('body').hasClass('desktop') ){

				// Delay
				delay = $(this).data('delay');
				if (delay == ''){delay = 0;}
				$(this).css('animation-delay', delay+'ms');
				
				// Appear
				appear = $(this).data('appear');
				
				// Class
				var animClass;
				if ($(this).hasClass('transit-left')) {animClass = 'fadeInLeft';}
				if ($(this).hasClass('transit-right')) {animClass = 'fadeInRight';}
				if ($(this).hasClass('transit-top')) {animClass = 'fadeInUp';}
				if ($(this).hasClass('transit-bottom')) {animClass = 'fadeInDown';}
				if ($(this).hasClass('transit-fade')) {animClass = 'fadeIn';}
				if ($(this).hasClass('transit-bouncein')) {animClass = 'bounceIn';}
				if ($(this).hasClass('transit-flip')) {animClass = 'flipInY';}
				if ($(this).hasClass('transit-pulse')) {animClass = 'pulse';}
				if ($(this).hasClass('transit-bounce')) {animClass = 'bounce';}
				if ($(this).hasClass('transit-rotate')) {animClass = 'rotateIn';}
				
				// Animation
				if(appear == false){
					
					$(this).addClass('animated');
					$(this).addClass(animClass);
					
				}else{
					
					$(this).appear(function(){
						
						$(this).addClass('animated');
						$(this).addClass(animClass);
						
					},{accX: 0, accY: -200});
				}
	
			}
				
        });
		
		// MOBILE MENU
		$('.switch').click(function(){
			
			$('.mob-m').parent().fadeToggle();
		});
		
		// PORTFOLIO
		
		// Isotope Init
		var $container = $('.portfolio');
		
		$container.isotope({
		 
			// options
			itemSelector: '.item',
			layoutMode: 'masonry',
			
			masonry: {
			  columnWidth: '.col-1-2, .col-1-3, .col-1-4, .col-1-5, .col-1-6'
			}

		});
		
		// Filtering
		$('.filter-m li').click(function() {
		  
			var filterValue = $(this).attr('data-filter');
		  	
			$container.isotope({ 
		  		filter: filterValue 
			});
		
		});
		
		// COUNTDOWN
		$('#count-11').countdown('2016/01/01', function(event) {
			
			var $this = $(this).html(event.strftime(''
			+ '<div class="disp-ib"><span class="head-s bg-alpha-0 clr-1 padd-25 marg-25 w-100 h-100">%w</span><br><span class="title-s clr-0"> weeks </span></div>'
			+ '<div class="disp-ib"><span class="head-s bg-alpha-0 clr-1 padd-25 marg-25 w-100 h-100">%H</span><br><span class="title-s clr-0"> days </span></div>'
			+ '<div class="disp-ib"><span class="head-s bg-alpha-0 clr-1 padd-25 marg-25 w-100 h-100">%M</span><br><span class="title-s clr-0"> min </span></div>'
			+ '<div class="disp-ib"><span class="head-s bg-alpha-0 clr-1 padd-25 marg-25 w-100 h-100">%S</span><br><span class="title-s clr-0"> sec </span></div>'));
			
		});
		
		$('#count-12').countdown('2016/01/01', function(event) {
			
			var $this = $(this).html(event.strftime(''
			+ '<div class="disp-ib"><span class="head-m clr-0 marg-x-25">%w</span><div class="line-c"></div><span class="title-s clr-0"> weeks </span></div>'
			+ '<div class="disp-ib"><span class="head-m clr-0 marg-x-25">%H</span><div class="line-c"></div><span class="title-s clr-0"> days </span></div>'
			+ '<div class="disp-ib"><span class="head-m clr-0 marg-x-25">%M</span><div class="line-c"></div><span class="title-s clr-0"> min </span></div>'
			+ '<div class="disp-ib"><span class="head-m clr-0 marg-x-25">%S</span><div class="line-c"></div><span class="title-s clr-0"> sec </span></div>'));
			
		});

		// COUNTERS
		$('.count').appear(function(){
			
			 $('.value').countTo();
			 
		},{accX: 0, accY: -200});	
		
				
		// UI ELEMENTS
		/* remove comments if you're using widget ui
		/* docs here http://jqueryui.com/
		
		$('#ui-accordion').accordion();
		
		$('#ui-tabs').tabs();
		
		$('.ui-toggle-header').click(function(){
			$('.ui-toggle-content', this).toggle();
		});
		
		*/
		 
		// GMAP //
        
		// Styles		
		var styles = [{
			stylers: [
			  { hue: $('#map-canvas').data('color') },
			  { saturation: $('#map-canvas').data('saturation') }
			]
		  },{
			featureType: "road",
			elementType: "geometry",
			stylers: [
			  { lightness: 100 },
			  { visibility: "simplified" }
			]
		  },{
			featureType: "road",
			elementType: "labels",
			stylers: [
			  { visibility: "off" }
			]
		}];
		
		// Options
		var mapOptions = {
		  center: { lat: $('#map-canvas').data('lat'), lng: $('#map-canvas').data('lng')},
		  zoom: $('#map-canvas').data('zoom'),
		  scrollwheel: false,			
		  zoomControl: true,
		  disableDefaultUI : true,
		  styles : styles,
		  mapTypeId : google.maps.MapTypeId.ROADMAP,
		};
		
		// Map Creation
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
		// Markers Creation
		$('#map .map-marker').each(function() {

			var marker = new google.maps.Marker({
				position: { lat: $(this).data('lat'), lng: $(this).data('lng')},
				map: map,
				icon: $(this).data('icon')
			});
			
        });
		

		
	});
});