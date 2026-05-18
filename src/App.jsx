import { useState } from 'react'
import './App.css'
import s from './App.module.css';
import { Card } from './components/cards';
//import das imagens
import cardImg1 from "/img1.jpg";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>Theoros</nav>
      <div className={s.container}>
      <section id="s2" className={s.s2}>
          <Card imgSrc={"/img1.jpg"} alt="Card img1" text="Lorem Ipsum dbuyasgfdyguyq2euy8ify8v
          yiuwegfiqegfqiugfqiugfuqey" title="Card 1"> </Card>
        </section>
        </div>
    </>
  )
}

export default App
