function aprekinat() {
    const sadaļas = parseInt(document.getElementById("sadalas").value);
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
      <strong>Aprēķins:</strong><br>
      - Sadaļas: ${sadaļas} × 30€ = ${bazesCena.toFixed(2)}€<br>
      - Funkcionalitātes: ${funkcijuCena.toFixed(2)}€<br>
      - PVN (21%): ${PVN.toFixed(2)}€<br>
      <strong>Kopējā cena: ${galaCena.toFixed(2)}€</strong>
    `;
  }
  

  document.getElementById("sadalas").addEventListener("input", aprekinat);
  document.querySelectorAll(".funkcija").forEach(chk => {
    chk.addEventListener("change", aprekinat);
  });

  window.addEventListener("DOMContentLoaded", aprekinat);
  



  
