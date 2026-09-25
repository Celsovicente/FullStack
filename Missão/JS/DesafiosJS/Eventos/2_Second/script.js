const texto = document.querySelector("#texto");
const paragrafo = document.querySelector("#paragrafo");
texto.addEventListener("input", (e) =>{
    paragrafo.textContent = e.target.value
    console.log(paragrafo);
})