import Header from './Components/Header'
import Footer from './Components/Footer'
import { Banner, Servicos, Projetos, Container }  from './Components/Main'
import './Components/Style.css';

function App(){
    return(
      <div>
        <Header/>
        <Banner/>
        <Servicos/>
        <Container/>
        <Projetos/>
        <Footer/>
      </div>
    )
}

export default App