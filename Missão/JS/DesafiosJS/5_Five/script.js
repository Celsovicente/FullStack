let palavra = prompt("Digite uma palavra: ");
let palindroma = true;

for(let i = 0; i < palavra.length / 2; i++){
    if(palavra[i] != palavra[palavra.length-i-1]){
        palindroma = false;
        break;
    }
}

if(palindroma){
    document.body.innerHTML = `<h2> A palavra ${palavra} é Palindroma</h2>`;
}else{
    document.body.innerHTML = `<h2> A palavra ${palavra} não é Palindroma</h2>`;
}

     