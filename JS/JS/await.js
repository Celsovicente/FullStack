async function executar(){
    const resultado = await Promise.resolve("Concluído");
    console.log(resultado); 
}

executar();

async function imprimir(){
    const number = parseInt(prompt("Digite um número"));
    const dobre = number * 2;
    const resultado = await Promise.resolve(dobre);
    console.log(resultado);
}

imprimir()