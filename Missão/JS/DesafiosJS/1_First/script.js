let idade = parseInt(prompt("Digite a sua idade: "));

    if(idade >= 1 && idade <= 12)
    {
        document.body.innerHTML =
        `   
            <h2>Criança</h2>
        `   
    }
    else if(idade >= 13 && idade <= 17)
    {
        document.body.innerHTML =
        `   
            <h2>Adolescente</h2>
        `   
    }
    else if(idade >= 18 && idade <= 59)
    {
        document.body.innerHTML =
        `   
            <h2>Adulto</h2>
        `   
    }
    else
    {
        document.body.innerHTML =
        `   
            <h2>Idoso</h2>
        `   
    }