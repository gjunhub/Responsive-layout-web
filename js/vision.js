/*只做了媒询lg的视觉差*/
(function() {

	//第二屏
	var Mwrap = document.querySelector('.Mwrap');
	var MwrapP = Mwrap.querySelectorAll('p');
	var downIco = Mwrap.querySelector('.downIco');
	var finger = Mwrap.querySelector('.finger');
	var handheld = Mwrap.querySelector('.handheld');

	//第三屏
	var Iwrap = document.querySelector('.Iwrap');
	var labelT = Iwrap.querySelector('.labelT');
	var labelB = Iwrap.querySelector('.labelB');
	var phone = Iwrap.querySelector('.phone');
	var appPage = Iwrap.querySelector('.appPage');

	var phoneTitle = Iwrap.querySelector('.phoneTitle');
	var introduceRDesc = Iwrap.querySelector('.introduceRDesc');
	var pageIco = Iwrap.querySelector('.pageIco');
	var introduceRText = Iwrap.querySelector('.introduceRText');

	//第四屏
	var Mxwrap = document.querySelector('.Mxwrap');
	var TextImgs = Mxwrap.querySelectorAll('.TextImgs');
	var blue = TextImgs[0].querySelector('img');
	var water = TextImgs[1].querySelector('img');
	var pools = TextImgs[2].querySelector('img');
	var sigfox = TextImgs[3].querySelector('img');

	var isResize = true;
/*判断当前缩小浏览器后，执不执行label的startMove函数,因为下面reSize()
页面一刷新就执行了，而下面startMove是有时间规定的，比reSize()后执行
所以覆盖了reSize()里面的参数*/

	visionView();
	function visionView() {
		//滚轮滑到第二区域之后 减240~360px，这样出现视觉差才比较舒服,不会很突兀;
		var MwrapRect = Mwrap.getBoundingClientRect().top - 360;

		//滚轮到第三屏时的视觉差
		var IwrapRect = Iwrap.getBoundingClientRect().top - 240;

		//滚轮到第四屏时的视觉差
		var MxwrapRectI = Mxwrap.getBoundingClientRect().top - 240;//---img0
		var MxwrapRectII = Mxwrap.getBoundingClientRect().top + 40;//---img1
		var MxwrapRectIII = Mxwrap.getBoundingClientRect().top + 240;//---img2
		var MxwrapRectIV = Mxwrap.getBoundingClientRect().top + 420;//---img3

		for(var i = 0; i< MwrapP.length;i++) {

			MwrapP[i].style.opacity = 0;
		}

		downIco.style.opacity = 0;
		css(finger,'opacity',0);
		css(handheld,'opacity',0);

		css(labelT,'opacity',0);
		css(labelB,'opacity',0);
		css(labelT,'opacity',0);
		css(phone,'opacity',0);
		css(appPage,'opacity',0);
		css(phoneTitle,'opacity',0);
		css(introduceRDesc,'opacity',0);
		css(pageIco,'opacity',0);
		css(introduceRText,'opacity',0);


	
	reSize();
	window.addEventListener('resize',() => {
		reSize();

	});

	function reSize() {
		if(document.documentElement.clientWidth < 499) {
			labelB.style.opacity = labelT.style.opacity = 1;
			labelT.style.top = labelB.style.top = 420 + 'px';
			labelT.style.left = 50 + 'px';
			labelB.style.left = 150 + 'px';
			console.log(labelB.style.opacity,222);
			isResize = false;//屏幕已经缩小了，就不然下面的startMove执行了
		} else if(document.documentElement.clientWidth <= 979
			&& document.documentElement.clientWidth > 500) {
			labelB.style.opacity = labelT.style.opacity = 1;
			labelB.style.top = labelT.style.top = 360 + 'px';
			isResize = false;//屏幕已经缩小了，就不然下面的startMove执行了
		} else {
			isResize = true;
		}
	}


		window.addEventListener('scroll', () => {
			var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
		// console.log(scrollY,MwrapRect);

			if(scrollY >= MwrapRect) {
				setTimeout(function () {
					//第二屏
					startMove({
						el: MwrapP[0],
						target: {
							opacity: 100,
							marginLeft: 0
						},
						time: 600,
						type: "easeOut",
						callIn: function() {
							setTimeout(function() {
								startMove({
									el: MwrapP[1],
									target: {
										marginTop: 0,
										opacity: 100
									},
									time: 600,
									type: "easeOut",
									callIn: function() {
										setTimeout(function() {
											startMove({
												el: MwrapP[2],
												target: {
													marginTop: 0,
													opacity: 100
												},
												time: 600,
												type: "easeOut",
												callIn: function() {
													setTimeout(function() {
														startMove({
															el: MwrapP[3],
															target: {
																marginTop: 0,
																opacity: 100
															},
															time: 600,
															type: "easeOut",
															callIn: function() {
																setTimeout(function(){
																	startMove({
																		el: downIco,
																		target: {
																			opacity: 100,
																			marginTop: 0
																		},
																		time: 600,
																		type: "easeOut"
																	});
																},100)
															}
														});
													},100);
												}
											});
										},100);
									}
								});
							},100);
						}
					});

					var MwrapWidth = Mwrap.offsetWidth;
					// console.log(MwrapWidth,'MwrapWidth');

					startMove({
						el: handheld,
						target: {
							opacity: 100,
							left: MwrapWidth
						},
						time: 1200,
						type: "easeOut",
						callIn: function() {
							setTimeout(function() {
								startMove({
									el: finger,
									target: {
										opacity: 100,
										marginTop: 0
									},
									time: 600,
									type: "easeOut"
								});
							},100)
						}
					});

				},100);
			}

			//第三屏
			var introduceLWidth = Iwrap.querySelector('.introduceL').offsetWidth;
console.log(introduceLWidth,'introduceLWidth');
		
			if(scrollY >= IwrapRect) {
				
				startMove({
					el: appPage,
					target: {
						left: introduceLWidth / 10,
						opacity: 75
					},
					time: 1000,
					type: "easeOut",
					callIn: function() {
						setTimeout(function() {
							startMove({
								el: phone,
								target: {
									left: introduceLWidth / 100 * 34.2,
									opacity: 100
								},
								time: 1000,
								type: "easeOut"
							});
						},100)
					}
				});

				if(isResize) {
					startMove({
					el: labelT,
					target: {
						opacity: 100,
						top: 220
					},
					time: 500,
					type: "easeOut",
					callIn: function() {
						setTimeout(() => {
							startMove({
								el: labelB,
								target: {
									opacity: 100,
									top: 300
								},
								time: 500,
								type: "easeOut"
							});
						},100);
					}
				});
				}

				startMove({
					el: phoneTitle,
					target: {
						marginLeft: 0,
						opacity: 100
					},
					time: 600,
					type: "easeOut",
					callIn: function() {
						setTimeout(function() {
							startMove({
								el: introduceRDesc,
								target: {
									marginTop: 0,
									opacity: 100
								},
								time: 600,
								type: "easeOut",
								callIn: function() {
									setTimeout(function() {
										startMove({
											el: pageIco,
											target: {
												marginTop: 0,
												opacity: 100
											},
											time: 600,
											type: "easeOut",
											callIn: function() {
												setTimeout(() => {
													startMove({
														el: introduceRText,
														target: {
															marginTop: 0,
															opacity: 100
														},
														time: 600,
														type: "easeOut"
													});
												},100);
											}
										});
									},100);
								}
							});
						},100);
					}
				});
			}
			//console.log(Math.ceil(scrollY),MxwrapRectI,MxwrapRectII,MxwrapRectIII,MxwrapRectIV);
			//第四屏 blue water pools sigfox
			if(scrollY >= MxwrapRectI && scrollY < MxwrapRectII) {
				startMove({
					el: blue,
					target: {
						marginTop: -100
					},
					time: 800,
					type: "easeOut"
				});
			} else if(scrollY >= MxwrapRectII && scrollY < MxwrapRectIII) {
				startMove({
					el: water,
					target: {
						marginTop: -210
					},
					time: 800,
					type: "easeOut"
				});
			} else if(scrollY >= MxwrapRectIII && scrollY < MxwrapRectIV) {
				startMove({
					el: pools,
					target: {
						top: 50
					},
					time: 800,
					type: "easeOut"
				});
			} else if(scrollY >= MxwrapRectIV) {
				startMove({
					el: sigfox,
					target: {
						marginTop: -100
					},
					time: 800,
					type: "easeOut"
				});
			}

		})

	}

})();