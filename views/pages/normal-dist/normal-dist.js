let txtN = document.querySelector('#n');
let txtM = document.querySelector('#m');
let txtD = document.querySelector('#d');
let btnSubmit = document.querySelector('#submit');

let divResults = document.querySelector('#results');
let tblResults = document.querySelector('#tbl-results');
let resultsDesc = document.querySelector('#results-desc');

btnSubmit.onclick = (e) => {
  e.preventDefault();

  let n = parseInt(txtN.value);
  let m = parseFloat(txtM.value);
  let d = parseFloat(txtD.value);

  fillTable(normal(n, m, d));

  resultsDesc.innerText = `Simulación para una distribución normal con media ${m} y desviación estándar ${d}.`;
};

function normal(n, m, d) {
  let list = [];

  for (let i = 1; i <= n; i++) {
    let y = 0.0;
    
    for(let j = 0; j < 12; j++) 
      y += Math.random();

    y = (y - 6) * d + m;

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
                                <th>volumen</th>
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