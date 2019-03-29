window.onload = function () {

	let getJSON = function (url, callback) {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = 'json';
		xhr.onload = function() {
			let status = xhr.status;
			if (status === 200) {
				callback(null, xhr.response)
			} else {
				callback(status, xhr.response)
			}			
		};
		xhr.send();
	}

	getJSON('https://spreadsheets.google.com/feeds/list/10_QITMmb3xkWxzqSfJLtbmqIX1Idj96a_N_hNCEEKXQ/od6/public/values?alt=json', function(err, data) {

		if (err !== null) {
			console.log('Error' + err);
		} else {
			data = data['feed']['entry'];
			console.log(data);
			document.querySelector('.shop-field').innerHTML = showGoods(data);
		}
	});

	function showGoods(data) {
		let out = '';
		for (var i = 0; i < data.length; i++) {
			if (data[i]['gsx$show']['$t'] !=0) {
				out += `<div class="col-lg-3 col-sm-2 text-center">
							<div class="item-product">
								<h5 class="item-product__title">${data[i]['gsx$name']['$t']}</h5>
								<div class="item-product__img">
									<img src="${data[i]['gsx$image']['$t']}" alt="">
								</div>
								<div class="item-product__desc">
									<span class="item-product__cost">
										Цена: ${data[i]['gsx$price']['$t']} руб.
									</span>
									<span class="item-product__wight">
										На складе: ${data[i]['gsx$kg']['$t']} кг
									</span>
								</div>
							</div>
						</div>`;
			}
		}
		return out;
	}

}