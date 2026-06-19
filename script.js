const bottone = document.getElementById("aggiungiBtn");
const input = document.getElementById("nuovoElemento");
const lista = document.getElementById("lista");
const messaggioErrore= document.getElementById("messaggioErrore");
const svuotaBtn = document.getElementById("svuotaBtn");
svuotaBtn.addEventListener("click", svuotaLista);
let contatore = 0;

bottone.addEventListener("click", function() {
  const testo = input.value;
  if (testo=== "") {
    messaggioErrore.textContent = "Inserire un valore valido";
    return;
  }
  messaggioErrore.textContent = "";
  contatore = contatore + 1;
  const nuovoLi = document.createElement("li");
  nuovoLi.textContent = `${contatore}. ${testo}`;
  lista.appendChild(nuovoLi);
});

function svuotaLista() {
  contatore = 0;
  lista.innerHTML = "";
  input.value = "";
}