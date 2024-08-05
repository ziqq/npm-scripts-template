window.onload = function () {
  const gid = '0';
  const id = '1NErI3-FRfHuWj3YGKqImU4OiSt-x0uGd7tShxRXIeCo';
  const url =
    'https://docs.google.com/spreadsheets/d/' +
    id +
    '/gviz/tq?tqx=out:json&tq&gid=' +
    gid;

  fetch(url)
    .then((r) => r.text())
    .then((d) => _parseData(d))
    .then((d) => (document.getElementById('shop-field').innerHTML = _showGoods(d)));

  _handlebarsInit();

  function _showGoods(data) {
    const rows = data['rows'];
    let out = '';
    for (var i = 0; i < rows.length; i++) {
      if (rows[i][6] != 0) {
        out += `<div class="col-xl-3 col-lg-4 col-sm-6 text-center">
                  <div class="item-product">
                    <h5 class="item-product__title">${rows[i][1]}</h5>
                    <div class="item-product__img">
                      <img src="${rows[i][2]}" alt="Product photo">
                    </div>
                    <div class="item-product__desc">
                      <span class="item-product__cost">Цена: ${rows[i][3]} руб.</span>
                      <span class="item-product__wight">На складе: ${rows[i][5]} кг.</span>
                    </div>
                  </div>
                </div>`;
      }
    }
    return out;
  }

  function _parseData(data) {
    const r = data.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\)/);
    if (r && r.length == 2) {
      const obj = JSON.parse(r[1]);
      const table = obj.table;
      const header = table.cols.map(({ label }) => label);

      // Modified from const rows = table.rows.map(({c}) => c.map(({v}) => v));
      const rows = table.rows.map(({ c }) => c.map((e) => (e ? e.v || '' : '')));

      console.log(header);
      console.log(rows);

      return {
        header: header,
        rows: rows,
      };
    }
  }

  function _handlebarsInit() {
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
