$(function(){
	/* main slider */
	let mainSwiper=new Swiper(".mainSwiper", { 
		loop: true,
		autoplay: {
			delay: 5000
		},
		navigation: {
			nextEl: ".mainSwiper .swiper-button-next",
			prevEl: ".mainSwiper .swiper-button-prev"
		},
		pagination: { 
			el: ".mainSwiper .swiper-pagination",
			type: "fraction"
		},
		scrollbar: {
					el:'.mainSwiper .swiper-scrollbar',
					draggable: true,
				hide: false
		},
	});

	/* gnb */
	$("#gnb > .depth_one > li").hover(
			function(){
				$("#gnb").addClass("active");

				if($(this).find(".depth_two").length !== 0){
					$(this).find(".depth_two").addClass("active");
					$(".menu_bg").addClass("active");
				}
			},
			function(){
				$("#gnb").removeClass("active");

				if($(this).find(".depth_two").length !== 0){
					$(this).find(".depth_two").removeClass("active");
					$(".menu_bg").removeClass("active");
				}
			}
		);

		$("#gnb > .depth_one > li > a").focusin(function(){
			$("#gnb").addClass("active");
			$(this).parent().addClass("active");

			if($(this).next(".depth_two").length !== 0){
				$(this).next().addClass("active");
				$(".menu_bg").addClass("active");
			}
		});

		$("#gnb > .depth_one > li > a").focusout(function(){
			if($(this).next(".depth_two").length === 0){
				$(this).parent().removeClass("active");
			}
		});

		$("#gnb li li:last-child").focusout(function(){
			$("#gnb").removeClass("active");
			$(this).parent().parent().removeClass("active");
			$(this).parent().removeClass("active");
			$(".menu_bg").removeClass("active");
		});

		/* gnb fixed */

		let wint=0;

		$(window).scroll(function(){
		wint=$(window).scrollTop();

			if(wint > 70){
				$(".bottom").addClass("fixed");
				
			}
			else{
			$(".bottom").removeClass("fixed");
			}
		});
});