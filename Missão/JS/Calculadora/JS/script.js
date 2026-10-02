// Variaveis
const texto = document.querySelector("#texto");
const numero = document.getElementsByClassName("numero")
const limpar = document.querySelector("#limpar");

let numeroAnterior = "";
let operador = "";
let esperandoNovoNumero = false;

// Funções
function adicionarNumero(numero){

    if(esperandoNovoNumero)
    {   
        texto.value = numero;
        esperandoNovoNumero = false;
    }
    else
    {
        if(texto.value === "0")   
        {
            texto.value = numero;
        }
        else
        {
            texto.value += numero;
        }
    }
}

function validarTexto(texto){
    return texto.replace(/[^0-9,]/g,"");
}

function escolherOperador(op){
    numeroAnterior = texto.value;
    operador = op;
    esperandoNovoNumero = true;
}

function calcular() {
    const numeroAtual = texto.value;
    let resultado;

    if (operador === "+") {
        resultado = parseFloat(numeroAnterior) + parseFloat(numeroAtual);
    }

    texto.value = resultado;

    operador = "";
    numeroAnterior = "";
}

texto.forEach((e) =>{
    e.addEventListener("input", (i)=>{
        const atualizar = validarTexto(i.target.value);
        i.target.value = atualizar;
    })
})

// Eventos
limpar.addEventListener("click",  (e) =>{
    e.preventDefault();
    texto.value = "";
});