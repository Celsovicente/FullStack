// Declaração de Váriaveis
const inputValue = document.getElementById("valor");
const origemSelect = document.getElementById("origem");
const destinoSelect = document.getElementById("destino");
const resultadoC = document.getElementById("resultadoC");
const resultadoF = document.getElementById("resultadoF");
const resultadoK = document.getElementById("resultadoK");

// Função
function converter(){
    const valor = parseFloat(inputValue.value);

    if(isNaN(valor)) return;

    const origem = origemSelect.value;
    const destino = destinoSelect.value;

    let val;
    if(origem === "C")
        val = valor;
    else if(origem === "F")
        val = ( valor - 32 ) * (5 / 9);
    else if(origem === "K")
        val = (valor - 273);

    let resultado;
    if(destino === "C")
        resultado = val;
    else if(destino === "F")
        resultado = ( val * 9 / 5 ) - 32;
    else if(destino === "K")
        resultado = val - 273;

    if(destino === "C")
        resultadoC.value = resultado.toFixed(2);
    else if(destino === "F")
        resultadoF.value = resultado.toFixed(2);
    else if(destino === "K")
        resultadoK.value = resultado.toFixed(2);
}

// Eventos
inputValue.addEventListener("input", converter);
origemSelect.addEventListener("change", converter);
destinoSelect.addEventListener("change", converter);