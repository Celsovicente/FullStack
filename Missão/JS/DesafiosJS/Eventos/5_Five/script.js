const email = document.querySelector("#email");

email.addEventListener("input", (e) =>{
    if(email.value === ""){
        console.log("Mude o seu email, ele deve conter @");
    }
    else
        console.log("Seja bem vindo")
})