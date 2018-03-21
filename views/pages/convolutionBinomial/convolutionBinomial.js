let txtN = document.querySelector('#n');
let txtK = document.querySelector('#k');
let txtP = document.querySelector('#p');
let btnSubmit = document.querySelector('#submit');

let divResults = document.querySelector('#results');
let tblResults = document.querySelector('#tbl-results');
let resultsDesc = document.querySelector('#results-desc');

btnSubmit.onclick = (e) => {
  e.preventDefault();

  let n = parseInt(txtN.value);
  let k = parseFloat(txtK.value);
  let p = parseFloat(txtP.value);

  fillTable(binomial(n, k, p));

  resultsDesc.innerText = `Simulación para una distribución binomial con lotes de ${k} piezas con una probabilidad p de ${p}.`;
};

function binomial(n, k, p) {
  let list = [];

  for (let i = 1; i <= n; i++) {
    let defectivePieces = 0;
    
    for(let j = 0; j < k; j++) 
      defectivePieces += (Math.random() < p) ? 1 : 0;

    list.push({ i: i, num: defectivePieces});
  }

  return list;
}

function fillTable(list) {
  divResults.style.display = 'block';

  let tblGeneration = `<table class="table" id="tbl-results">
                          <thead>
                            <tr>
                              <th>Lote</th>
                              <th>Piezas defectuosas</th>
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