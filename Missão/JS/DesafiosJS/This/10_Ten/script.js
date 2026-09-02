const contaBancaria = {
    titular: "Celso Vicente",
    saldo: 200000,
    
    depositar(valor){
        this.saldo += valor;
    },

    levantar(valor){
        this.saldo -= valor;
    },

    consultarSaldo(){
       return this.saldo;
    }
}

contaBancaria.depositar(10000);
contaBancaria.levantar(5000);
contaBancaria.consultarSaldo()
console.log(contaBancaria);

