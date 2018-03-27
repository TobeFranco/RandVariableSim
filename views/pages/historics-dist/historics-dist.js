let txtN = document.querySelector('#n');
let txtM = document.querySelector('#m');
let btnSubmit = document.querySelector('#submit');
let btnAdd = document.querySelector('#add');

let divResults = document.querySelector('#results');
let tblResults = document.querySelector('#tbl-results');
let resultsDesc = document.querySelector('#results-desc');

let historicos = [];

btnAdd.onclick = (e) =>{
  e.preventDefault();
  let n = parseInt(txtN.value);
  historicos.push(n);
};

btnSubmit.onclick = (e) => {
  e.preventDefault();
  let m = parseInt(txtM.value);
  let l = historicos.length;
  fillTable(normal(m));

  resultsDesc.innerText = `Simulación para una ${m} eventos con ${l} datos historicos.`;
};

function normal(m) {
  historicos.sort();
  let list = [];
  let probs = [];
  let vals = [];
  let act = 0;
  for (let i = 1; i < historicos.length; i++) {
    if(historicos[i]!=historicos[i-1]){
      probs.push((act/historicos.length));
      vals.push(historicos[i-1]);
      act = 1;
    }
    else{
      act++;
    }
  }
  if(historicos.length == 0){
    probs.push(1);
    vals.push(historicos[0]);
  }
  probs.push(999999);
  for (let i = 1; i <= m; i++) {
    let num = Math.random();
    for(let j=0; j<probs.length-1; j++){
      if(num<probs[j+1]){
          list.push({ i: i, time: vals[j]});
          j = 100000;
      }
    }
  }

  return list;
}

function fillTable(list) {
  divResults.style.display = 'block';

  let tblGeneration = `<table class="table" id="tbl-results">
                            <thead>
                              <tr>
                                <th>Día</th>
                                <th>Demandas</th>
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