import { useState, useRef } from 'react';
import s from './app.module.css';
import { Card } from './components/cards';
import { CardEsp } from './components/cards';
//import das imagens
import cardImg1 from "/img1.jpg";
import cardImg2 from "/img2.jpg";
import cardImg3 from "/img3.png";

function App() {

 const [menuAberto, setMenuAberto] = useState(false);

  function chamarMenu() {
    setMenuAberto(!menuAberto);
  }

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <>
    {/* HEADER DO SISTEMA */}
     <nav>

      <img src="/logo.png" alt="Logo" className={s.logo} />

      <a  className={s.menu} href="#" role="button" aria-expanded={menuAberto}
        onClick={(e) => {
          e.preventDefault();
          chamarMenu();
        }}>
        <img className={s.menuImg} src="/imgMenu.webp" alt="Menu" id="botao-menu"/>
      </a>

      <div  className={`${s.menuContainer} ${menuAberto ? s.menuAberto : ''}`}>
      <button
              onClick={(e) => {
                e.preventDefault();
                fecharMenu();
              }}
            >        
        </button>
          <div className={s.opcoesMenu}>
            <a>Home</a>
            <a href="/criarFicha.jsx">Criar</a>
            <a>Ficha</a>
            <a>Perfil</a>
          </div>
        </div>

     </nav>

    {/* MAIN DO SISTEMA */}
    <main>
      <div className={s.maincont}>

      {/* SEÇÃO DE FICHAS EM DESTAQUE */}
      <h1 className={s.titulo}>Fichas em destaque:</h1>
      <div className={s.container}>
       
        <div id="s2"  className={s.s2}>
          <img src="/seta.webp" className={s.imgSetaEsq} />
          <Card imgSrc={"/img1.jpg"} alt="Card img1" text="Lorem Ipsum..." title="Card 1"className={s.cartaum}/>
          <img src="/seta.webp" className={s.imgSetaDir} />
        </div>
        
      </div>

      {/* SEÇÃO DE FICHAS DA COMUNIDADE E DO SITE */}
      <h1 className={s.titulo}>______________________________</h1>
      <h1 className={s.titulo}>Fichas da comunidade:</h1>
      <div className={s.containerdois}>
        <section id="s3" className={s.s3}>
          <CardEsp imgSrc={"/img2.jpg"} alt="Card img2" title="Card 2" />
        </section>
        <section id="s3" className={s.s3}>
          <CardEsp imgSrc={"/img2.jpg"} alt="Card img2" title="Card 2" />
        </section>  
        <section id="s3" className={s.s3}>
          <CardEsp imgSrc={"/img2.jpg"} alt="Card img2" title="Card 2" />
        </section>    
        <section id="s3" className={s.s3}>
          <CardEsp imgSrc={"/img2.jpg"} alt="Card img2" title="Card 2" />
        </section>
         <section id="s3" className={s.s3}>
          <CardEsp imgSrc={"/img2.jpg"} alt="Card img2" title="Card 2" />
        </section>
      </div>

      <h1 className={s.titulo}>______________________________</h1>
      <h1 className={s.titulo}>Fichas do site:</h1>
      <div className={s.containerdois}>
        <section id="s3" className={s.s3}>
          <CardEsp imgSrc={"/img2.jpg"} alt="Card img2" title="Card 2" />
        </section>
        <section id="s3" className={s.s3}>
          <CardEsp imgSrc={"/img2.jpg"} alt="Card img2" title="Card 2" />
        </section>  
        <section id="s3" className={s.s3}>
          <CardEsp imgSrc={"/img2.jpg"} alt="Card img2" title="Card 2" />
        </section>    
        <section id="s3" className={s.s3}>
          <CardEsp imgSrc={"/img2.jpg"} alt="Card img2" title="Card 2" />
        </section>
         <section id="s3" className={s.s3}>
          <CardEsp imgSrc={"/img2.jpg"} alt="Card img2" title="Card 2" />
        </section>
        
      </div>

      </div>
      <footer>
        <p className={s.footer}>© 2026 Theoros. Todos os direitos reservados.</p>
      </footer>
      </main>
      
    </>
  )
} 

export default App
