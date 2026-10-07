const div = document.querySelector(".principal")
const btnGerar = document.querySelector("#btnGerar");
const paragrafo = document.querySelector("#paragrafo");

function gerarFrases(){
    const frases = [
        "Só sei que nada sei",
        "A vida é dura, trabalhe",
        "A primeira derrota começa na mente",
        "O sofrimento é mais emocional, do que Real",
        "Um cão não pode levar dois ossos",
        "Dante: Só as almas arrependidas serão aprendidas serão perdoadas.",
        "Schopenhauer: Os grandiosos não condenam o destino que têm.",
        "Kennedy: Só com grandes fracassos se alcansam grandes sucessos.",
        "Ernest Hemingway: The World is fine place and worth figting for",
        "Holmes: Dar continuidade ao passado não é um dever, é uma necessidade",
        "Turgenev: As pessoas precisam de tristeza, miséria ou doença ou ficam com soberba",
        "Van Goh: Casamento não é a união de duas metades, mas de dois inteiros",
        "Shinran: Quando estiver sofrendo a sós, imagine que está sofrendo com alguém",
        "Nijuuichichie: O pior inimigo de todos é você mesmo",
        "Buda: Não se deixe controlar por sentimentos irracionais, controle-os",
        "Hesse: Apenas quem tem coragem de arcar com o fardo do próprio destino pode se proclamar Herói",
        "Gonchunagon Atsutada: Encontrei o amor. Quando comparo esse momento aos sentimentos passados, sinto que nunca tinha amado antes",
        "Shakespear: Se conseguimos reclamar, a situação não é tão ruim assim",
        "Beethoven: O que define um homem é a sua firmeza diante da crise",
        "César: A sorte está lançada",
        "Thoreau: As mazelas nada mais são que um trampolim para a fortuna",
        "Futabei Shimei:A vida é energia",
        "Schopenhauer: Os grandiosos não condenam o destino que têm",
        "Lu Xun: Não há por que olhar para trás, pois à`sua frente há infinitos caminhos",
        "Platão: Ritmo e harmonia conseguem penetrar no âmago da alma",
        "Hemingway: Não parta em jornadas com pessoas que não ama",
        "Turgenev: Sentamos na lama, caro amigo, e tentamos alcançar as estrelas",
        "Babe Ruth: Não tem como derrotar quem nunca desiste",
        "Hazama Kanichi: Dá para confiar mais em dinheiro do que nas pessoas",
        "Ozaki Koyo: Não dá é para confiar no coração das pessoas",
        "Henry Ford: Jovens precisam encontrar pelo menos uma semente que os distingua dos demais e fazer o melhor para cultivá-la bem",
        "Napoleão: Circunstâncias? O que são circunstâncias? Eu que faço as circunstâncias",
        "Saint-Exupéry: Com a morte de uma pessoa, todo um mundo desconhicido se perde",
        "Churchill: Olhe para os fatos, porque eles olham para voçê",
        "Jean Paul: Memórias são o único paraísoque não se perdem",
        "Jane Austen: Só pense no passado, pois sua lembrança causa apenas prazer",
        "Benjamin Disraeli: A magia do primeiro amor é a nossa ignorânciade que ele pode acabar",
        "Somerset Maugham: O amor que mais dura é o não correspondido",
        "Henry Shaw: Solidão é um ótimo lugar para visitar, mas péssimo para morar",
        "Ikuta Choko: Quando houver vários inimigos à sua frente, ollhe para trás e verá vários aliados",
        "Dazai Osamu: O homem nasceu para o amor e para a revolução",
        "Saint-Exupéry: O amor não é buscar um ao outro, mas, juntos, buscarem um objetivo comum",
        "Herbert Spencer: Os defeitos das crianças são um reflexo dos defeitos dos pais",
        "Hebbel: Amizade e romance criam felicidade na vida, assim como dois pares de lábios criam um beijo que extrasia a alma",
        "Christian Bovee: Mesmo com tudo perdido, há o futuro",
        "Aeschlyus: É da natureza do humana chutar cachorro morto",
        "Shakespeare: Rematamos com um sono a angústia e as mil pelejas naturais, herança do homem",
        "George Elliot: Só na agonia vemos as profundezas do amor",
        "Goethe: Pensar muito nem sempre significa tomar a melhor decisão",
        "Emmerson: Ser sempre voçê mesmo em um mundo que sempre tenta te mudar é uma conquista e tanto",
        "Higuicho Ichiyo: Um coração repleto de amor sincero é divino como qualquer deus",
        "Gandhi: Mesmo as menores ações geram frutos no fim",
        "Thomas Fuller: Ausência aguça o amor, a presença o fortalece",
    ];

    const indice = Math.floor(Math.random() * frases.length);
    const frase = frases[indice];
    
    paragrafo.textContent = frase;
    paragrafo.classList.add("fade");
    div.appendChild(paragrafo);
}

btnGerar.addEventListener("click", gerarFrases);