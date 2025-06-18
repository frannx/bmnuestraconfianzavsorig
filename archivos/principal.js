function calcularCredito() {
    const montoInput = document.getElementById('monto');
    const plazoInput = document.getElementById('plazo');
    const monto = parseFloat(montoInput.value);
    const plazo = plazoInput.value;

    if (isNaN(monto) || !plazo) {
      alert("Por favor, ingresa un monto válido y escoge un plazo.");
      return;
    }

    const interesPorcentaje = 11;
    const interesMonto = monto * (interesPorcentaje / 100);
    const totalPagar = monto + interesMonto;

    // Formato en soles
    const formatoSoles = (num) => `s/ ${num.toFixed(2)}`;

    montoInput.value = monto.toFixed(2);

let cuotasTexto = "";
let numeroCuotas = 1;

switch (plazo) {
  case "diario":
    cuotasTexto = "30 cuotas";
    numeroCuotas = 30;
    break;
  case "semanal":
    cuotasTexto = "4 cuotas";
    numeroCuotas = 4;
    break;
  case "quincenal":
    cuotasTexto = "2 cuotas";
    numeroCuotas = 2;
    break;
  case "unico":
    cuotasTexto = "1 cuota";
    numeroCuotas = 1;
    break;
}

// Cálculo de monto por cuota
const montoPorCuota = totalPagar / numeroCuotas;

// Mostrar en la sección de detalles
document.getElementById("producto").innerText = plazo.charAt(0).toUpperCase() + plazo.slice(1);
document.getElementById("total").innerText = formatoSoles(totalPagar);
document.getElementById("cuotas").innerText = cuotasTexto;
document.getElementById("montoCuota").innerText = formatoSoles(montoPorCuota);
document.getElementById("capital").innerText = formatoSoles(monto);
//document.getElementById("interes").innerText = "14%";
}