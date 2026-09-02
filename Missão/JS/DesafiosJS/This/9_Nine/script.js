const carteira = {
    saldo: 2000,
    
    adicionarDinheiro(valor){
        this.saldo += valor;
    },

    removerDinheiro(valor){
        this.saldo -= valor;
    },

    consultarConta(){
        this.saldo
    }
}

carteira.adicionarDinheiro(3000)
carteira.removerDinheiro(200);
carteira.consultarConta();

console.log(carteira);
