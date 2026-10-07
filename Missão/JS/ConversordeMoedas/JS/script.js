// Declaração das variaveis
const valorInput = document.querySelector("#valor");
const origemInput = document.querySelector("#origem");
const destinoInput = document.querySelector("#destino");
const resultadoD = document.querySelector("#resultadoD");
const resultadoE = document.querySelector("#resultadoE");
const resultadoF = document.querySelector("#resultadoF");
const resultadoK = document.querySelector("#resultadoK");

const taxas = {
    D: 1,
    E: 0.85,
    K: 925,
    F: 0.91
}

// Função
function limparInputs(){
    resultadoD.value = "";
    resultadoE.value = "";
    resultadoF.value = "";
    resultadoK.value = "";
}

function converter(){
    const valor = parseFloat(valorInput.value);

    if(isNaN(valor) || valor < 0 ){
        limparInputs();
         return;
    }

    const origem = origemInput.value;
    const destino = destinoInput.value;

    const valorConvetido = valor / taxas[origem];

    const resultado = valorConvetido * taxas[destino];
    
    limparInputs();
    if(destino === "D")
        resultadoD.value = resultado.toFixed(2);
    else if(destino === "E")
        resultadoE.value = resultado.toFixed(2);
    else if(destino === "K")
        resultadoK.value = resultado.toFixed(2);
    else if(destino === "F")
        resultadoF.value = resultado.toFixed(2);
}

// Eventos
valorInput.addEventListener("input", converter);
origemInput.addEventListener("change", converter);
destinoInput.addEventListener("change", converter);
