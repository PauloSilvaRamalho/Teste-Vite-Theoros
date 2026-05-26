import s from './card.module.css'


export const Card = ({imgSrc, alt, text}) => {
    return (
        <a href="https://www.youtube.com/watch?v=uuVaiMk8-pk" className={s.card}>
            <img src={imgSrc} alt={alt} />
            

            <p>{text}</p>
        </a>
    )
}

export const CardEsp = ({imgSrc, alt, text}) => {
    return (
        <a href="https://www.youtube.com/watch?v=uuVaiMk8-pk" className={s.cardesp}>
            <img src={imgSrc} alt={alt} />


            <p>{text}</p>
        </a>
    )
}