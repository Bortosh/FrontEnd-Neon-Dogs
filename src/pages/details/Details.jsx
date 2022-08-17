import React, { useEffect } from "react";
import { getOneDog, cleanDog, deleteDog} from "../../actions";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import style from './Details.module.css';
import { useState } from "react";


export default function Details() {
    const { id } = useParams();
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [disable, setDisable] = useState(true)
    
    const dog = useSelector((state) => state.dog)
    const {name, image, temperament, weight, height, life_span, createInDb} = dog;
    
    useEffect(() => {
        dispatch(getOneDog(id))
        return dispatch(cleanDog())
    }, [dispatch, id])

    useEffect(() => {
        if(createInDb){
            setDisable(false)
        }else {
            setDisable(true)
        }
    },[createInDb])
    
    const handleDelete = () => {
            dispatch(deleteDog(id))
            alert('dog deleted.')
            navigate('/home')
    }

    // if (!dog.length) return <div className={style.loader}>Loading...</div>

    return(
        <div>
            {
                dog.length === 0 
                    ? (<div className={style.loader}>Loading...</div>)
                    : (
                        <div>
                            <h1 className={style.detalle}>Details</h1>
                            <h3>Name: {name}</h3>
                            <h3>Tempers: {temperament}</h3>
                            <h3>Height: {height} Cm</h3>
                            <h3>Weight: {weight} Kg</h3>
                            <h3>Life span: {life_span}</h3>
                            <div className={style.box}>
                                <img className={style.image} src={image} alt={name} />
                            </div>
                            <div className={style.divDelete}>
                                <span className={style.a}><button className={style.btn} disabled={disable} onClick={()=>handleDelete(id)}><span className={style.span6}></span><text className={style.text}>Delete</text></button></span>
                            </div>
                        </div>
                        )
            }
        </div>
    )
}
