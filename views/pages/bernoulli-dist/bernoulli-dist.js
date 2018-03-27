let txtN = document.querySelector('#n');
let txtP = document.querySelector('#p');
let btnSubmit = document.querySelector('#submit');

let divResults = document.querySelector('#results');
let tblResults = document.querySelector('#tbl-results');
let resultsDesc = document.querySelector('#results-desc');

btnSubmit.onclick = (e) => {
  e.preventDefault();

  let n = parseInt(txtN.value);
  let p = parseFloat(txtP.value);

  fillTable(binomial(n, p));

  resultsDesc.innerText = `Simulación con transformada inversa de Bernoulli para ${k} eventos con una probabilidad de fallo p de ${p}.`;
};

function binomial(n, p) {
  let list = [];

  for (let i = 1; i <= n; i++) {
    let defectivePieces = (Math.random() < p) ? 'Falla' : 'No falla';

    list.push({ i: i, num: defectivePieces});
  }

  return list;
}

function fillTable(list) {
  divResults.style.display = 'block';

  let tblGeneration = `<table class="table" id="tbl-results">
                          <thead>
                            <tr>
                              <th>Evento</th>
                              <th>Estado del sistema</th>
                            </tr>
                          </thead>`;
        
  for (let i = 0; i < list.length; i++) {
    tblGeneration += `<tr>
                              <td>${list[i].i}</td>
                              <td>${list[i].num}</td>
                            </tr>`;
  }

  tblGeneration += `</table>`;
  tblResults.innerHTML = tblGeneration;
}