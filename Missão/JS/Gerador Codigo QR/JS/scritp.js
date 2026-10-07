// constantes
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeBtn = document.querySelector("#qr-fom button");
const container = document.querySelector(".container");
const qrCodeImg = document.querySelector("#qr-code img")

// Função
function generateCodeQr()
{
    const qrInputValue = qrCodeInput.value
    
    qrCodeBtn.innerHTML = "Gerando Código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;
    
    qrCodeImg.addEventListener("load", () =>{
        container.classList.add("active");
        qrCodeBtn.innerHTML = "Código Criado!!!";
    })
}

// Eventos
qrCodeBtn.addEventListener("click", () =>{
    generateCodeQr();
})

qrCodeInput.addEventListener("keydown", (e) =>{
    if(e.code == "Enter")
    {
        generateCodeQr();
    }
})

qrCodeInput.addEventListener("keyup", () =>{
    if(!qrCodeInput.value) 
    {
        container.classList.remove("active");
        qrCodeBtn.innerHTML = "Gerar Código....";
    }
})