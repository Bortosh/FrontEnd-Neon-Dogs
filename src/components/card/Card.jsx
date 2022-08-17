import React from "react";
import { useSelector } from "react-redux";
import style from './Card.module.css'
import { Link} from 'react-router-dom';

export default function Card() {

    const dogsToRender = useSelector((state) => state.dogsToRender)

    if (!dogsToRender.length) return <div className={style.loader}></div>

    return (
        <div className={style.cardWrapper}>
            {
                dogsToRender?.map(({ id, name, weight, temperament, image }) => (
                    <div key={id} className={style.box}>
                        <div className={style.content}>
                            <h2 className={style.text}>{name}<br/><span className={style.span3}>{weight} Kg</span><br/><span className={style.span3}>{temperament}</span></h2>
                            <span className={style.btn2}><Link to={`/details/${id}`} className={style.none}>View Dog</Link></span>
                            <img src={image} alt="imagen de perrito" className={style.image} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}