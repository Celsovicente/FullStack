const projetos = document.querySelector("#projetos");
const mensagem = document.querySelector("#mensagem");

async function carregarProjetos() {

    try {

        mensagem.textContent = "Carregando projetos...";

        const resposta = await fetch("projetos.json");

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        mensagem.textContent = "Projetos carregados com sucesso!";

        dados.forEach(projeto => {

            const card = document.createElement("article");

            card.innerHTML = `
                <h2>${projeto.nome}</h2>
                <p><strong>Tecnologia:</strong> ${projeto.tecnologia}</p>
                <p>${projeto.descricao}</p>
            `;

            projetos.appendChild(card);

        });

    } catch (erro) {

        mensagem.textContent = "Erro ao carregar os projetos.";

        console.error(erro);
    }
}

carregarProjetos();