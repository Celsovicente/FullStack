function executarDepois(callBack){
    setTimeout(() =>{
        callBack();
    }, 1000)
}

executarDepois(function(){
    console.log("After 1 minute"); 
})