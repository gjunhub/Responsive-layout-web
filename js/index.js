(function(){
	var oHideNav = document.getElementById('hideNav');
	var oDelete = document.getElementById('delete');
	var oMenuIco = document.getElementById('menuIco');
	var oMiddle = document.getElementById('middle');
	var oIntroduce = document.getElementById('introduce');
	var oMainText = document.getElementById('mainText');
	var oPicture = document.getElementById('picture');
	var oSellPrice = document.getElementById('sellPrice');
	var oFooter = document.getElementById('footer');

	oMenuIco.onclick = function (){
		oHideNav.style.display = 'block';
		oMenuIco.style.display = 'none';
		oDelete.style.display = 'block';
		oMiddle.style.display = 'none';
		oIntroduce.style.display = 'none';
		oMainText.style.display = 'none';
		oPicture.style.display = 'none';
		oSellPrice.style.display = 'none';
		oFooter.style.display = 'none';
	};
	oDelete.onclick = function() {
		oHideNav.style.display = 'none';
		oMenuIco.style.display = 'block';
		oDelete.style.display = 'none';
		oMiddle.style.display = 'block';
		oIntroduce.style.display = 'block';
		oMainText.style.display = 'block';
		oPicture.style.display = 'block';
		oSellPrice.style.display = 'block';
		oFooter.style.display = 'block';
	};
})();

(function(){
	var appPage = document.querySelector('.appPage');
	var appPageDiv = document.querySelector('.appPage div');
	var appSpan = appPage.querySelectorAll('span');
	var turnPage = document.querySelector('.turnPage');
	var turnPageList = document.querySelector('.turnPageList');
	var turnLi = turnPageList.querySelectorAll('li');
	var labelT = document.querySelector('.labelT');
	var labelB = document.querySelector('.labelB');
	var pageIco = document.querySelector('.pageIco');
	var pageSpan = pageIco.querySelectorAll('span');
	var introduceRText = document.querySelector('.introduceRText');
	var introduceRTextDiv = introduceRText.querySelector('.introduceRText div');
	var introduceRp = introduceRText.querySelectorAll('p');
	var num = 0;
	var introduceRTextWidth;
	var timer = setInterval(() => {
		introduceRTextWidth = introduceRText.clientWidth + 60;
	},1000);
	console.log(introduceRTextWidth);

	labelT.onclick = () => {
		num--;
		if(num <= -6) {
			num = -6;
		} else {
			for(var i = 0;i<pageSpan.length;i++) {
				pageSpan[i].className = '';
				pageSpan[Math.abs(num)].className = 'pig';
				startMove({
					el: appPageDiv,
					target: {
						top: num * 355
					},
					time: 600,
					type: "backOut",
					callIn: function() {
						startMove({
							el: turnPageList,
							target: {
								left: num * 218
							},
							time: 600,
							type: "backOut",
							callIn: () => {
								startMove({
									el: introduceRTextDiv,
									target: {
										left: num * introduceRTextWidth
									},
									time: 600,
									type: "backOut"
								});
							}
						});
					}
				});
			}
		}
	}

	labelB.onclick = () => {
		num++;
		if(num > 0) {
			num = 0;
		} else {
			for(var i = 0;i<pageSpan.length;i++) {
				pageSpan[i].className = '';
				pageSpan[Math.abs(num)].className = 'pig';
				startMove({
					el: appPageDiv,
					target: {
						top: num * 355
					},
					time: 600,
					type: "backOut",
					callIn: function() {
						startMove({
							el: turnPageList,
							target: {
								left: num * 218
							},
							time: 600,
							type: "backOut",
							callIn: () => {
								startMove({
									el: introduceRTextDiv,
									target: {
										left: num * introduceRTextWidth
									},
									time: 600,
									type: "backOut"
								});
							}
						});
					}
				});
			}
		}
	}
})();