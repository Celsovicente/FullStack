function promessa(callBack){
    setTimeout(() =>{
        const dados = [
            "HTML", "CSS", "JS", "PHP"
        ]
        callBack(dados);
    }, 3000)
}

promessa((dados) =>{ 
    console.log(dados);
})