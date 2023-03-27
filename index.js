// Inputs:
const inputTime1 = document.querySelector("#inputTime1");
const inputTime2 = document.querySelector("#inputTime2");

// Resultats:
const resultatTime = document.querySelector("#resultatTime");
const resultatArray = document.querySelector("#resultatArray");
const principal = document.querySelector("#principal");
const resultatJSON = document.querySelector("#resultatJSON");

// Botons:
const btnCalculaHora = document.querySelector("#calculaHora");
const btnNetejaEx1 = document.querySelector("#netejaEx1");
const btnGeneraArray = document.querySelector("#generaArray");
const btnNetejaEx2 = document.querySelector("#netejaEx2");
const btnCanviaEstil = document.querySelector("#canviaEstil");
const btnNetejaEstil = document.querySelector("#netejaEstil");
const btnCarregaJSON = document.querySelector("#carregaJSON");
const btnNetejaLlista = document.querySelector("#netejaLlista");

//Events:
btnCalculaHora.onclick = calculaHora;
btnNetejaEx1.onclick = netejaEx1;
btnGeneraArray.onclick = generaRandomArray;
btnNetejaEx2.onclick = netejaEx2;
btnCanviaEstil.onclick = canviaEstil;
btnNetejaEstil.onclick = netejaEstil;
btnCarregaJSON.onclick = carregaJSON;
btnNetejaLlista.onclick = netejaLlista;

//Exercici 1: suma d'hores
function calculaHora() {
 
    var inputTime1 = document.getElementsByName("inputTime1")[0].value;
    var inputTime2 = document.getElementsByName("inputTime2")[0].value;
    
    
      fecha = new Date(fecha);
          fecha.setHours(fecha.getHours()+horas);
          fecha =  fecha.toISOString();
      var fecha_date = fecha.split('T');
      var fecha_time = fecha_date[1].split('.');
      var fecha_time = fecha_date[1].split(':');
          fecha_date = fecha_date[0];
  
      fecha = fecha_date+' '+fecha_time[0]+':'+fecha_time[1];
    
    
      document.getElementsByName("log")[0].value = fecha;

}

function netejaEx1() {
    document.getElementById("resultatTime").value = "";
}

// Exercici 2: Arrays
function generaRandomArray() {
    let random = Math.random();
        random = random * 100 + 1;
        console.log(random);
}

function netejaEx2() {
    document.getElementById("resultatArray").value = "";
}

// Exercici 3: Estils CSS
function canviaEstil() {
    document.principal.style.backgroundColor = `rgb(${random()},${random()},${random()})`;

}

function netejaEstil() {
    
}

// Exercici 4: JSON
function carregaJSON() {
    fetch("./peliculas.json")
        .then(response => {
            if (response.ok) return response.json();
            else {
                alert("No s'ha pogut completar la càrrega. Error " + response.status)
            }
        })
        .then(data => {
            pintaDadesJSON(data);
        });
}

function pintaDadesJSON(data){
    
}

function netejaLlista(){
    
}