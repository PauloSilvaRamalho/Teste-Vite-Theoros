import s from './card.module.css'


export const Card = ({imgSrc, alt, text, title}) => {
    return (
        <a href="https://www.youtube.com/watch?v=uuVaiMk8-pk" className={s.card}>
            <img src={imgSrc} alt={alt} />
            <div className={s.cardContent}>
            <p className={s.cardTitle}>{title}</p>
            <p>{text?.substring(0, 300)}...</p>
            </div>
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