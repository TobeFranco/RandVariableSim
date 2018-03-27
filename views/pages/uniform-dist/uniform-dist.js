let txtN = document.querySelector('#n');
let txtA = document.querySelector('#a');
let txtB = document.querySelector('#b');
let btnSubmit = document.querySelector('#submit');

let divResults = document.querySelector('#results');
let tblResults = document.querySelector('#tbl-results');
let resultsDesc = document.querySelector('#results-desc');

btnSubmit.onclick = (e) => {
  e.preventDefault();

  let n = parseInt(txtN.value);
  let a = parseFloat(txtA.value);
  let b = parseFloat(txtB.value);

  fillTable(binomial(n, a, b));

  resultsDesc.innerText = `Simulación de una distribución uniforme para ${n} mediciones con límite inferior de ${a} y límite superior de ${b}.`;
};

function binomial(n, a, b) {
  let list = [];

  for (let i = 1; i <= n; i++) {
    let measurement = a + (b-a)*Math.random();

    list.push({ i: i, num: measurement});
  }

  return list;
}

function fillTable(list) {
  divResults.style.display = 'block';

  let tblGeneration = `<table class="table" id="tbl-results">
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Medición</th>
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