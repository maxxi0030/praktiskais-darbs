

function aprekinat() {
  let sadaļas = parseInt(document.getElementById("sadalas").value);

  // negative check
  if (sadaļas < 1 || isNaN(sadaļas)) {
    sadaļas = 1;
    document.getElementById("sadalas").value = 1;
  }

  const funkcijas = document.querySelectorAll(".funkcija:checked");

  let bazesCena = sadaļas * 30;
  let funkcijuCena = 0;

  funkcijas.forEach(f => {
    funkcijuCena += parseInt(f.value);
  });

  let kopāBezPVN = bazesCena + funkcijuCena;
  let PVN = kopāBezPVN * 0.21;
  let galaCena = kopāBezPVN + PVN;

  document.getElementById("rezultats").innerHTML = `  
    <h3>Tava cena</h3>
    <p>Funkcionalitātes cena: ${funkcijuCena.toFixed(2)} €</p>
    <p>Sadaļu cena: ${bazesCena.toFixed(2)} €</p>
    <p>PVN (21%): ${PVN.toFixed(2)} €</p>
    <hr>
    <p style="font-weight: bold; font-size: 20px;">Kopējā summa: ${galaCena.toFixed(2)} €</p>
  `;
}

document.getElementById("sadalas").addEventListener("input", aprekinat);
document.querySelectorAll(".funkcija").forEach(chk => {
  chk.addEventListener("change", aprekinat);
});
window.addEventListener("DOMContentLoaded", aprekinat);
