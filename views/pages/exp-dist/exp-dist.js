let txtN = document.querySelector('#n');
let txtM = document.querySelector('#m');
let btnSubmit = document.querySelector('#submit');

let divResults = document.querySelector('#results');
let tblResults = document.querySelector('#tbl-results');
let resultsDesc = document.querySelector('#results-desc');

btnSubmit.onclick = (e) => {
  e.preventDefault();

  let n = parseInt(txtN.value);
  let m = parseFloat(txtM.value);

  fillTable(erlang(n, m));

  resultsDesc.innerText = `Simulación con transformada inversa exponencial con media 1/λ de ${m} minutos por cliente.`;
};

function erlang(n, m) {
  let list = [];

  for (let i = 1; i <= n; i++) {
    let y = -m * Math.log(1-Math.random());

    list.push({ i: i, time: y});
  }

  return list;
}

function fillTable(list) {
  divResults.style.display = 'block';

  let tblGeneration = `<table class="table" id="tbl-results">
                          <thead>
                            <tr>
                              <th>Cliente</th>
                              <th>Tiempo de espera</th>
                            </tr>
                          </thead>`;
        
  for (let i = 0; i < list.length; i++) {
    tblGeneration += `<tr>
                              <td>${list[i].i}</td>
                              <td>${list[i].time.toFixed(4)}</td>
                            </tr>`;
  }

  tblGeneration += `</table>`;
  tblResults.innerHTML = tblGeneration;
}