import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer(){
    return(
    <div id="rodape">
        <footer>
            <section>
                <h3>DevStart</h3>
                <p>
                    Transformamos ideias em soluções <br/> 
                    digitais impulsionam o seu <br/>
                    negócio para o próximo nível.
                </p>
                <FaFacebook size={25} color="#fff"/>
                <FaTwitter size={25} color="#fff"/>
                <FaInstagram size={25} color="#fff"/>
                <FaLinkedin size={25} color="#fff"/>
            </section>

            <section>
                <h3>Navegação</h3>
                <ul>
                    <li>
                        <a href="#">Início</a>
                    </li>
                    <li>
                        <a href="#">Serviços</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Portfólio</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
            </section>
            
            <section>
                <h3>Serviços</h3>
                <ul>
                    <li>
                        <a href="#">Desenvolvimento Web</a>
                    </li>
                    <li>
                        <a href="#">Aplicações Mobile</a>
                    </li>
                    <li>
                        <a href="#">Marketing Digital</a>
                    </li>
                    <li>
                        <a href="#">Soluções em Nuvem</a>
                    </li>
                </ul>
            </section>

            <section>
                <h3>Contactos</h3>
                <ul>
                    <li>
                        <a href="#">Luanda, Angola</a>
                    </li>
                    <li>
                        <a href="#">contacto@devstart</a>
                    </li>
                    <li>
                        <a href="#">+244 123 456 789</a>
                    </li>
                </ul>
            </section>
        </footer>
        <hr id="linha"/>
        <p id="paragrafo">&copy; 2026 DevStart. Todos os direitos reservados.</p>
    </div>
    )
}

export default Footer;