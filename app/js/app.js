$(document).ready(function(){




$('.geo-nav').on('click',()=>{
	$('.address_header').toggle(50)
})



$('.info_map').on("mouseleave",()=>{
	$('.client__text').removeClass('slide-out-top')
	$('.info_map_wrapper').slideToggle(250)
	$('.client__text').addClass('slide-in-top')
})


$('.info_map').on("mouseenter",()=>{
	$('.client__text').addClass('slide-out-top')
	$('.client__text').removeClass('slide-in-top')
	$('.info_map_wrapper').slideToggle(250)
})


















	$('.nav-link_more').append($('.nav-bar_content').html());
	$('.nav-bar_links').hide()
	if(window.innerWidth>=1025){
		$('.nav-link_more').on('click',function(){
		$('.nav-bar_links').toggle()
		$('.navbar-nav').show()
		})
	}

	if(window.innerWidth<=1025){
		$('.nav-bar_content').hide()
		$('.nav-link_more').on('click',function(){	
			$('.nav-bar_content').show(100)
			$('.navbar-nav').hide(100)
			$('.wr').show()
			$('.btn_back').show(100)
			$('.nav-bar_links').show(100)
		})
		$('.btn_back').on('click',function(){
			$('.navbar-nav').show(100)
			$('.nav-bar_content').hide(100)
			$('.btn_back').hide(100)
			$('.nav-bar_links').hide(100)
		})
		
		$('.close_btn').on('click',function(){
			$('.con-right').hide()
			$('.wrapper-page').hide()
		})
		$('.menu-btn').on('click',function(){
			$('.con-right').show();
			$('.wrapper-page').show();
			$('.wr').hide();

		})
	}

})