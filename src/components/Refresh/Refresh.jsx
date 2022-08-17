import React from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../actions";
import style from './Refresh.module.css'

const Refresh = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getDogs())
    }

    return (
        <button onClick={ handleSubmit } className={style.btn}><span className={style.span}>Refresh</span><i></i></button>
    )
}

export default Refresh;