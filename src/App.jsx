import { useState, useRef } from 'react';
import './App.css';
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
     <nav><img src="/logo.png" alt="Logo" className={s.logo} />
      <a
        className={s.menu}
        id="botao-menu"
        href="#"
        role="button"
        aria-expanded={menuAberto}
        onClick={(e) => {
          e.preventDefault();
          chamarMenu();
        }}
      >
        <img className={s.menuImg} src="/imgMenu.webp" alt="Menu" />
      </a>

      <div  className={`${s.menuContainer} ${menuAberto ? s.menuAberto : ''}`}>
      <button
              onClick={(e) => {
                e.preventDefault();
                fecharMenu();
              }}
            >
              <img className={s.menuOpen} src="/openMenu.webp" alt="Menu" />    
        </button>
        <div className={s.opcoesMenu}>
            <a href="/">Home</a>
            <a href="/rotas/criar/criar.html">Criar</a>
            <a href="/rotas/ficha/ficha.html">Ficha</a>
            <a href="/rotas/perfil/perfil.html">Perfil</a>
        </div>
        </div>    


     </nav>
    <main>
      <div className={s.maincont}>
      <div className={s.container}>
        <div id="s2"  className={s.s2}>
         
          <Card imgSrc={"/img1.jpg"} alt="Card img1" text="Lorem Ipsum..." title="Card 1"className={s.cartaum}/>
          
        </div>
        </div>
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
         <section id="s3" className={s.s3}>
          <CardEsp imgSrc={"/img2.jpg"} alt="Card img2" title="Card 2" />
        </section>
        
      </div>
      </div>
      </main>
    </>
  )
} 

export default App
