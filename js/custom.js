$(document).ready(function() {
	// funllpage plugin initialization
	$('#fullpage').fullpage({
		//anchors錨點
		anchors:['firstPage', 'secondPage','4thpage','5thpage'],
		menu: '#js-menu',
		autoScrolling: false,
		//取消自動抓取某個區塊
		fitToSection: false,
		scrollingSpeed: 1200
	});
	//logo change when scroll
	$(window).on('scroll',function(){
		var scorllDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scorllDistance > 80){
			$header.addClass("header--scrolling");
		}
		else{
			$header.removeClass("header--scrolling");
		}
	})
		// rellex initialiaztion
	
	if(screen.width > 768){
		var rellax = new Rellax('.rellax',{
			center: true
		});
	}
		// carousel plugin
	
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:16,
	    nav:true,
	    navText:[],
	    dots: false,
	    video: true,
	    responsive:{
	        0:{
	            items: 1
	        },
	        480:{
	            items: 2
	        },
	        768:{
	            items: 3
	        },
	        1000:{
	        	items: 4
	        }
	    }
	})
	//---


});