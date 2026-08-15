let nota = parseFloat(prompt("Digite a nota"));

switch(true){
    case nota >= 0 && nota <= 9:
        document.body.innerHTML = `<h2>${nota}</h2> <br/>  <p>Reprovado</p>`;
        break;
    case nota >= 10 && nota <= 13:
        document.body.innerHTML = `<h2>${nota}</h2> <br/> <p>Suficiente</p>`;
        break;
    case nota >= 14 && nota <= 16:
        document.body.innerHTML = `<h2>${nota}</h2> <br/> <p>Bom</p>`;
        break;
    case nota >= 17 && nota <= 18:
        document.body.innerHTML = `<h2>${nota}</h2> <br/> <p>Muito Bom</p>`;
        break;
    case nota >= 19 && nota <= 20:
        document.body.innerHTML = `<h2>${nota}</h2> <br/> <p>Excelente</p>`;
        break;
    default:
        document.body.innerHTML = `<h2>Valor inválido!</h2>`;
        break;
}