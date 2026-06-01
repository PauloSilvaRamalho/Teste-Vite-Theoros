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
 const destaqueCard = [
  {
    imgSrc: '/img1.jpg',
    alt: 'Card 1',
    title: "Azir",
    text: "Azir foi um imperador mortal de Shurima em era muito antiga, um homem orgulhoso que esteve a um passo da imortalidade. Sua insolência fez com que fosse traído e assassinado no momento de seu maior triunfo, mas, agora, milênios depois, ele renasceu como um Ascendente de poder imenso. Com sua cidade antes soterrada agora erguida, Azir busca devolver Shurima à sua antiga glória. Milênios atrás, o império shurimane era um reino com uma multitude de estados vassalos, conquistados por poderosos exércitos liderados por guerreiros semi-invencíveis conhecidos como Ascendentes. Governados por um imperador ambicioso e insaciável, Shurima foi o maior reino de seu tempo: uma terra fértil e abençoada pelos poderes do sol, que brilhava através de um imenso disco dourado, flutuando sobre o templo situado no coração da capital.",
    },
    {
      imgSrc: '/img5.jpg',
      alt: 'Card 2',
      title: "Aurora",
      text: "A maioria dos mortais vive e morre conhecendo apenas um plano de realidade: o reino material. Porém, essa perspectiva reflete apenas metade da existência. Paralelamente, existe o reino espiritual, invisível para muitos, mas igualmente vibrante e cheio de vida. Ainda assim, nas profundas tundras congeladas de Freljord, existe uma vastaya que vive em um mundo que é uma mistura própria...Aurora nasceu na isolada vila de Aamu, lar da tribo Bryni, e passou a juventude brincando com criaturas que ninguém mais podia ver, enquanto explorava um mundo que ninguém mais podia apreciar. Apesar de feliz, ela sempre se sentiu isolada do restante da vila. Nem mesmo seus pais acreditavam nela, jurando que os amigos da filha eram apenas imaginários.",
    },
    {
      imgSrc: '/img6.jpg',
      alt: 'Card 3',
      title: "Volibear",
      text: "Para alguns, ele é o Rugido do Trovão, a Tempestade, o Valhir. Para outros, ele é a Ruína, o Urso dos Mil Flagelos, Aquele que Resiste. Mas, para a maior parte das tribos que ainda seguem os velhos costumes, ele é conhecido como Volibear. A forma manifestada da destruição, da força e da tempestade, Volibear representa o poder e a fúria incontroláveis da própria Freljord. Ele e seus irmãos semideuses criaram a terra chamada Vorrijaard muito antes da chegada das raças mortais. As lendas contam como ele criou os cinco fiordes com um poderoso golpe de suas garras, e como sua épica batalha contra Rhond, a serpente de magma, formou incontáveis vales e ravinas. Quando Volibear finalmente derrubou a fera, o sangue vertido da criatura se tornou o primeiro rio de Freljord, e sua carcaça colossal acabou formando o que conhecemos como as Montanhas Wyrmback.",
    }
 ]

const [indexDestaque, setIndexDestaque] = useState(0);
const destaqueData = destaqueCard[indexDestaque];

function nextCard() {
  setIndexDestaque((prev) =>
    prev === destaqueCard.length - 1 ? 0 : prev + 1
  );
}

function prevCard() {
  setIndexDestaque((prev) =>
    prev === 0 ? destaqueCard.length - 1 : prev - 1
  );
}


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
          <img src="/seta.webp" className={s.imgSetaEsq} role='button' onClick={prevCard}/>

          <Card imgSrc={destaqueData.imgSrc} alt={destaqueData.alt} text={destaqueData.text} title={destaqueData.title} className={s.cartaum}/>
          <img src="/seta.webp" className={s.imgSetaDir} role='button' onClick={nextCard}/>

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
