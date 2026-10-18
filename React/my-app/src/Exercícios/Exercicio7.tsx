

export function Header(){
    return(
        <header id="navbar">            
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Contactos</li>
                    <li>Sobre</li>
                    <li>Informações</li>
                </ul>
            </nav>
        </header>
    )
}

export function Main(){
    return(
        <main>
            <div className="banner">
                
                <h1 id="titulo">Construímos soluções <br/> digitais incríveis.</h1>
                <p>
                    Ajudamos empresas e pessoas a transformarem <br/>
                    ideias em produtos digitais de alto impacto.
                </p>

                <div>
                    <button className="btn">Ver Serviços</button>
                    <button className="btn">Saiba Mais </button>
                </div>
            </div>
        </main>
    )
}

export function Footer(){
    return(
        <footer>
            <section id="dev">
                <h3>DevStart</h3>
                <p>
                    Transformamos ideias em soluções digitais que impulsionam o seu negócio
                    para o próximo nível.
                </p>
            </section>
            
            <section id="navegacao">
                <h3>Navegação</h3>
                <ul>
                    <li>Início</li>
                    <li>Serviços</li>
                    <li>Sobre</li>
                    <li>Portfólio</li>
                    <li>Blog</li>
                </ul>
            </section>

            <section id="servicos">
                <h3>Serviços</h3>
                <ul>
                    <li>Desenvolvimento Web</li>
                    <li>Aplicações Mobile</li>
                    <li>Marketing Digital</li>
                    <li>Soluções em Nuvem</li>
                </ul>
            </section>

            <section id="navegacao">
                <h3>Navegação</h3>
                <ul>
                    <li>Luanda, Angola</li>
                    <li>contacto@devstart.ao</li>
                    <li>+244 123 456 789</li>
                </ul>
            </section>
            <p id="rodape">&copy; 2026 DevStart. Todos os direitos reservados.</p>
        </footer>
    
    )
}

