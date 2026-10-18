import dashboard from '../img/dasboard.jfif';
import financemobile from '../img/financemobile.jfif';
import ecommerce from '../img/ecommerce.jfif';
import { FaCode } from 'react-icons/fa';
import { FaMobile } from 'react-icons/fa';
import { FaChartGantt, FaUser } from 'react-icons/fa6';
import { FaCloud } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import { FaTrophy } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import { CheckCheck } from 'lucide-react';


export function Banner(){
    return(
        <div>
            <section>
                
                <img src="../img/" alt="" />
                <h1>Construímos soluções <br/> digitais incríveis</h1>
                <p>
                    Ajudamos empresas e pessoas a transformarem 
                    ideias em produtos digitais de alto impacto.
                </p>
            </section>
                        
            <section>
                <button className="btn-primary">Ver Serviços</button>
                <button id="btn">Saiba Mais</button>
            </section>
        </div>
    )
}

export function Servicos(){
    return(
        <div>
            <h2>Nossos Serviços</h2>
            <div id="servicos">
                <section className="cardy">
                    <FaCode size={45} color='blue' />
                    <h3>Desenvolvimento Web</h3>
                    <p>
                        Sites e aplicações modernas, 
                        rápidas e responsivas com as 
                        melhores tecnologias.
                    </p>
                </section>

                <section className="cardy">
                    <FaMobile color='blueviolet' size={40} />
                    <h3>Aplicações Mobile</h3>
                    <p>
                        Apps nativos e híbridos 
                        para Android e iOS com 
                        excelente experiência.
                    </p>
                </section>

                <section className="cardy">
                    <FaChartGantt color='green' size={30}/>
                    <h3>Marketing Digital</h3>
                    <p>
                        Estratégias que aumentam sua 
                        visibilidade e geram resultados 
                        reais.
                    </p>
                </section>

                <section className="cardy">
                    <FaCloud size={45} color='orange' />
                    <h3>Soluções em Nuvem</h3>
                    <p>
                        Infraestrutura escalável, segura
                        e preparada para o futuro do 
                        seu negócio.
                    </p>
                </section>
            </div>
        </div>
    )
}

export function Container(){
    return(
        <div className="container">
            <section className='secao'>
            <FaUser size={30} color='blue'/>
                <h3>120+</h3>
                <p>Clientes Satisfeitos</p>
            </section>

            <section className='secao'>
            <CheckCheck size={30}/>
                <h3>250+</h3>
                <p>Projetos Concluídos</p>
            </section>

            <section className='secao'>
            <FaTrophy size={30} color='blueviolet' />
                <h3>8+</h3>
                <p>Anos de experiência</p>
            </section>

            <section className='secao'>
                <FaRocket size={30} color='orange' />
                <h3>98%</h3>
                <p>Taxa de Sucesso</p>
            </section>
        </div>
    )
}

export function Projetos(){
    return(
        <div>

            <h2>Projtos em Destaque</h2>
        <div className="projetos">
            <div className="projeto">
                <a href="#">
                    <img src={dashboard} width={200} alt="" />
                </a>
                <div className='desc'>
                    <div className='titulos'>
                        <h4>Dashboard Analytics</h4>
                        <button className='web-app'>Web App</button>
                    </div>
                    <p>
                        Plataforma completa de analytics com 
                        relatórios em tempo real.
                    </p>
                </div>
            </div>
        
            <div className="projeto">
                <img src={financemobile} alt="" />
                <div className="desc">
                    <div className='titulo'>
                        <h4>Finance Mobile</h4>
                        <button className='mobile'>Mobile</button>
                    </div>
                    <p>
                        Aplicação de gestão financeira pessoal
                        para Androids e iOS.
                    </p>
                </div>
            </div>

            <section className="projeto">
                <img src={ecommerce} alt="" />
                <h4>E-commerce Store</h4>
                <p>
                    Loja virtual moderna com checkout
                    otimizado e seguro.
                </p>
            </section>
        </div>
    </div>
    )
}

