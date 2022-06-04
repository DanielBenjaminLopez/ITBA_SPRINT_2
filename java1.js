const gastos = [];
const personas = [];
const lista = document.getElementById("list-group");
const parteInferior = document.getElementById("pie");
const persona = document.getElementById("nombre");
const gasto = document.getElementById("gastoPersona");

function repartir() {
  cargarArrays();
  mostrarLista();
  mostrarTotal();
}

function cargarArrays() {
  gastos.push(Number(gasto.value));
  personas.push(persona.value);
}

function mostrarLista() {
  const li = document.createElement("li");
  const text = document.createTextNode(
    `${persona.value} gastó $ ${gasto.value}`
  );
  li.classList.add("list-group-item");

  li.appendChild(text);
  lista.appendChild(li);
}

function mostrarTotal() {
  let importe = 0;
  for (let pago of gastos) {
    importe = importe + pago;
  }
  parteInferior.classList.add("p-5");
  parteInferior.innerText = `TOTAL = $${importe.toFixed(2)} 
  Cada persona debera pagar: $${(importe / personas.length).toFixed(2)}`;
}
