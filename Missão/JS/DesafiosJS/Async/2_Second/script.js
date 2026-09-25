function primeira(callBack){
    setTimeout(() =>{
        console.log("Primeira Operação realizada"); 
        callBack();
    }, 3000);
}

function segunda(){
    console.log("Segunda Operação Realizada")
}

primeira(() => {
    segunda();
})
