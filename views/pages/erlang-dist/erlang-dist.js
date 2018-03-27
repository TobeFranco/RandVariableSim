let txtN = document.querySelector('#n');
let txtK = document.querySelector('#k');
let txtM = document.querySelector('#m');
let btnSubmit = document.querySelector('#submit');

let divResults = document.querySelector('#results');
let tblResults = document.querySelector('#tbl-results');
let resultsDesc = document.querySelector('#results-desc');

btnSubmit.onclick = (e) => {
  e.preventDefault();

  let n = parseInt(txtN.value);
  let k = parseInt(txtK.value);
  let m = parseFloat(txtM.value);

  fillTable(erlang(n, k, m));

  resultsDesc.innerText = `Simulación para una distribución ${k}-Erlang con media 1/λ de ${m} minutos/pieza.`;
};

function erlang(n, k, m) {
  let list = [];

  for (let i = 1; i <= n; i++) {
    let y = 1.0;
    
    for(let j = 0; j < k; j++) 
      y *= 1.0 - Math.random();

    y = -(m / k) * Math.log(y);

    list.push({ i: i, time: y});
  }

  return list;
}

function fillTable(list) {
  divResults.style.display = 'block';

  let tblGeneration = `<table class="table" id="tbl-results">
                          <thead>
                            <tr>
                              <th>Pieza</th>
                              <th>Tiempo de proceso (min/pieza)</th>
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