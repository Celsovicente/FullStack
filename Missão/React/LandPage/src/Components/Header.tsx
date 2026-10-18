
import { FaSearch } from "react-icons/fa";
import { Code } from "lucide-react";

function Header(){
    return(
        <header>
            <nav id="navbar">
                <span id="dev">
                    <Code size={30}/>
                    DevStart
                </span>
                <ul id="links">
                    <li>
                        <a href="#">Início</a>
                    </li>
                    <li>
                        <a href="#">Serviços</a>
                    </li>
                    <li>
                        <a href="#">Portfólio</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
        
                <FaSearch size={25} color="#fff"/>
                <button className="btn-primary">
                    Contacte-nos
                </button>
            </nav>
        </header>
    )
}

export default Header;

