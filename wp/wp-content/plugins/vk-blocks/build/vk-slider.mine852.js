document.defaultView.addEventListener("load",function(){let sliderNodeList=document.querySelectorAll("[data-vkb-slider]");if(sliderNodeList=Array.from(sliderNodeList),sliderNodeList)for(var index in sliderNodeList){let sliderNode=sliderNodeList[index],attributes=JSON.parse(sliderNode.getAttribute("data-vkb-slider")),sliderId=(sliderNode.classList.contains("swiper")||sliderNode.classList.add("swiper"),""),SwiperSetting=(void 0!==attributes.blockId?sliderId=attributes.blockId:void 0!==attributes.clientId&&(sliderId=attributes.clientId),`
			var swiper${index} = new Swiper ('.vk_slider_${sliderId}', {
			`);attributes.autoPlay&&(SwiperSetting+=`
				autoplay: {
					delay: ${attributes.autoPlayDelay},
					disableOnInteraction: ${attributes.autoPlayStop},
					stopOnLastSlide: ${!attributes.loop},
				},
				`),"hide"!==attributes.pagination&&(SwiperSetting+=`
				pagination: {
					el: '.swiper-pagination',
					clickable : true,
					type: '${attributes.pagination}',
					renderFraction: function (currentClass, totalClass) {
						return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
					},
				},
				`),attributes.speed&&(SwiperSetting+=`
				speed: ${attributes.speed},
				`),"fade"!==attributes.effect&&(attributes.slidesPerViewMobile?(SwiperSetting+=`slidesPerView: ${attributes.slidesPerViewMobile},`,attributes.slidesPerGroup&&"slides-per-view"===attributes.slidesPerGroup&&Number.isInteger(attributes.slidesPerViewMobile)?SwiperSetting+=`slidesPerGroup: ${attributes.slidesPerViewMobile},`:SwiperSetting+="slidesPerGroup: 1,"):attributes.slidesPerView?(SwiperSetting+=`slidesPerView: ${attributes.slidesPerView},`,attributes.slidesPerGroup&&"slides-per-view"===attributes.slidesPerGroup&&Number.isInteger(attributes.slidesPerView)?SwiperSetting+=`slidesPerGroup: ${attributes.slidesPerView},`:SwiperSetting+="slidesPerGroup: 1,"):(SwiperSetting+="slidesPerView: 1,",SwiperSetting+="slidesPerGroup: 1,"),(attributes.slidesPerViewTablet||attributes.slidesPerViewPC)&&(SwiperSetting+="breakpoints: {",attributes.slidesPerViewTablet&&(SwiperSetting+="576: {",SwiperSetting+=`slidesPerView: ${attributes.slidesPerViewTablet},`,attributes.slidesPerGroup&&"slides-per-view"===attributes.slidesPerGroup&&Number.isInteger(attributes.slidesPerViewTablet)&&(SwiperSetting+=`slidesPerGroup: ${attributes.slidesPerViewTablet},`),SwiperSetting+="},"),attributes.slidesPerViewPC&&(SwiperSetting+="992: {",SwiperSetting+=`slidesPerView: ${attributes.slidesPerViewPC},`,attributes.slidesPerGroup&&"slides-per-view"===attributes.slidesPerGroup&&Number.isInteger(attributes.slidesPerViewPC)&&(SwiperSetting+=`slidesPerGroup: ${attributes.slidesPerViewPC},`),SwiperSetting+="},"),SwiperSetting+="},"),attributes.centeredSlides)&&(SwiperSetting+=`centeredSlides: ${attributes.centeredSlides},`),attributes.loop&&(SwiperSetting+=`
				loop: ${attributes.loop},
				`),attributes.effect&&(SwiperSetting+=`
				effect: '${attributes.effect}',
				`),SwiperSetting+=`
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});`,eval(SwiperSetting),"hide"===attributes.pagination&&eval(`swiper${index}.pagination.destroy();`)}});