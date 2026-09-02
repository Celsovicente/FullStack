const jogador = {
    nome: "João",
    idade: 21,
    pontos: 2,

    adicionarPontos(){
        this.pontos++;
    }
}

jogador.adicionarPontos();
console.log(jogador.pontos);
