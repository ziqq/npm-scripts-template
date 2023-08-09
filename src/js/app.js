window.onload = function () {
  const gid = "0";
  const id = "1NErI3-FRfHuWj3YGKqImU4OiSt-x0uGd7tShxRXIeCo";
  const url = "https://docs.google.com/spreadsheets/d/" + id + "/gviz/tq?tqx=out:json&tq&gid=" + gid;

  // let getJSON = function (url, callback) {
  //   let xhr = new XMLHttpRequest();
  //   xhr.open('GET', url, true);
  //   xhr.responseType = 'json';
  //   xhr.onload = function() {
  //     let status = xhr.status;
  //     if (status === 200) {
  //       callback(null, xhr.response)
  //     } else {
  //       callback(status, xhr.response)
  //     }
  //   };
  //   xhr.send();
  // }

  // getJSON(url, function(err, data) {
  //     if (err !== null) {
  //       console.log('Error: ' + err);
  //     } else {
  //       console.log('Data: ' + data);
  //       data = data['feed']['entry'];
  //       console.log(data);
  //       document.querySelector('.shop-field').innerHTML = _showGoods(data);
  //     }
  // });

  fetch(url)
    .then((r) => r.text())
    .then((d) => _parseData(d))
    .then((d) => (document.getElementById("shop-field").innerHTML = _showGoods(d)));

  function _showGoods(data) {
    const rows = data["rows"];

    let out = "";
    for (var i = 0; i < rows.length; i++) {
      if (rows[i][6] != 0) {
        out += `<div class="col-lg-3 col-sm-2 text-center">
                  <div class="item-product">
                    <h5 class="item-product__title">${rows[i][1]}</h5>
                    <div class="item-product__img">
                      <img src="${rows[i][2]}" alt="">
                    </div>
                    <div class="item-product__desc">
                      <span class="item-product__cost">
                        Цена: ${rows[i][3]} руб.
                      </span>
                      <span class="item-product__wight">
                        На складе: ${rows[i][5]} кг
                      </span>
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
      const rows = table.rows.map(({ c }) => c.map((e) => (e ? e.v || "" : "")));

      console.log(header);
      console.log(rows);

      return {
        header: header,
        rows: rows,
      };
    }
  }
};
