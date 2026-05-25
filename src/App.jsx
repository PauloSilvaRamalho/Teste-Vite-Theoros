import { useState, useRef } from 'react';
import './App.css';
import s from './app.module.css';
import { Card } from './components/cards';
import { CardEsp } from './components/cards';
//import das imagens
import cardImg1 from "/img1.jpg";
import cardImg2 from "/img2.jpg";

function App() {
  const [count, setCount] = useState(0)
  const scrollRef = useRef(null);

  return (
    <>
     <nav>Theoros
      <a href="menu">menu</a>
     </nav>
    <main>
      <div className={s.maincont}>
      <div className={s.container}>
        <section id="s2" className={s.s2} ref={scrollRef}>
          {/* <button className="seta-esq" onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}>◀</button> */}
          <Card imgSrc={"/img1.jpg"} alt="Card img1" text="Lorem Ipsum..." title="Card 1"className={s.cartaum}/>
          {/* <button className="seta-dir" onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}>▶</button> */}
        </section>
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
        
            
      </div>
      </div>
      </main>
    </>
  )
} 

export default App
