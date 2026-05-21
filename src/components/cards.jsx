import s from './card.module.css'


export const Card = ({imgSrc, alt, text}) => {
    return (
        <div className={s.card}>
            <img src={imgSrc} alt={alt} />
            

            <p>{text}</p>
        </div>
    )
}

export const CardEsp = ({imgSrc, alt, text}) => {
    return (
        <div className={s.cardesp}>
            <img src={imgSrc} alt={alt} />


            <p>{text}</p>
        </div>
    )
}