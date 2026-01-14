'use strict';

window.onload = function () {
  const url =
    'https://docs.google.com/spreadsheets/d/1NErI3-FRfHuWj3YGKqImU4OiSt-x0uGd7tShxRXIeCo/gviz/tq?tqx=out:json&tq&gid=0';

  const catalog = document.getElementById('catalog');
  fetch(url)
    .then((r) => r.text())
    .then((d) => _parseData(d))
    .then((d) => (catalog.innerHTML = _renderData(d)));

  _initializeHandlebars();

  function _renderData(data) {
    const values = data.values;
    let out = '';
    for (var i = 0; i < values.length; i++) {
      let product = values[i];
      let title = product[0];
      let img = product[1];
      let description = product[2];
      let price = product[3];
      let remainder = product[4];
      let sale = product[5];
      let show = product[6] != 0;
      if (show) {
        // TODO(ziqq): Price can by: ₽ | $
        // TODO(ziqq): Convert remainder grams to human format
        // Anton Ustinoff <a.a.ustinoff@gmail.com>, 06 January 2026
        let saleHTML = ``;
        const salePercent = Number(sale);
        const priceValue = Number(price);

        if (salePercent > 0 && !isNaN(priceValue) && !isNaN(salePercent)) {
          const discountedPrice = priceValue / salePercent;
          const calculatedDiscount = Math.ceil(discountedPrice);
          const savingsAmount = Math.abs(priceValue - calculatedDiscount);
          saleHTML = `<span class="price price--sale">${savingsAmount}</span>`;
        }
        out += `<div class="product-item">
              <div class="product-item__img" itemscope itemtype="https://schema.org/ImageObject">
                <img src="${img}" alt="${title}">
                <meta itemprop="name" content="${description}">
              </div>
              <div
                class="product-item__price"
                itemprop="offers"
                itemscope itemtype="http://schema.org/Offer"
              >
                ${saleHTML}
                <span class="price">${price}</span>
                <meta itemprop="priceCurrency" content="RUB" />
                <meta itemprop="price" content="${price}">
              </div>
              <span class="product-item__category">Тайваньский улун</span>
              <h6 class="product-item__title" itemprop="headline">${title}</h6>
              <button class="product-item__btn c-btn c-btn--primary c-btn--small">В корзину</button>
            </div>`;
      }
    }
    return out;
  }

  function _parseData(data) {
    const r = data.match(
      /google\.visualization\.Query\.setResponse\(([\s\S\w]+)\)/,
    );
    if (r && r.length == 2) {
      const obj = JSON.parse(r[1]);
      const table = obj.table;
      const keys = table.cols.map(({ label }) => label);

      // Modified from const rows = table.rows.map(({c}) => c.map(({v}) => v));
      const values = table.rows.map(({ c }) =>
        c.map((e) => (e ? e.v || '' : '')),
      );
      const data = { keys: keys, values: values };
      console.info(data);
      return data;
    }
  }

  /* Initialize Handlebars */
  function _initializeHandlebars() {
    // Регистрация хелпера для вычисления возраста
    Handlebars.registerHelper('calculateAge', function (birthYear) {
      const currentYear = new Date().getFullYear();
      return currentYear - birthYear;
    });

    // Получаем HTML из шаблона
    const source = document.getElementById('pet-item').innerHTML;
    const template = Handlebars.compile(source);

    // Генерируем HTML с данными
    const html = template(handlebardsData);

    // Вставляем сгенерированный HTML в контейнер
    document.getElementById('handlebars-content').innerHTML = html;
  }
};

/* Fake data for handlebars */
const handlebardsData = {
  pets: [
    {
      name: 'Buddy',
      species: 'Dog',
      birthYear: 2015,
      photo:
        'https://iso.500px.com/wp-content/uploads/2021/10/The-incredibly-cute-Noods-By-Elke-Vogelsang-2-1500x1000.jpeg',
      favFoods: ['Bone', 'Chicken', 'Beef'],
    },
    {
      name: 'Whiskers',
      species: 'Cat',
      birthYear: 2018,
      photo:
        'https://iso.500px.com/wp-content/uploads/2021/10/The-incredibly-cute-Noods-By-Elke-Vogelsang-2-1500x1000.jpeg',
      favFoods: ['Fish', 'Milk'],
    },
  ],
};
