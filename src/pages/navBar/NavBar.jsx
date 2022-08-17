import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css'

export default function NavBar() {


    return (
    <div className="">
        <div className={style.container}>
            <span className={style.span}><Link to='/' className={style.btn}><span className={style.span2}>Landing Page</span></Link></span>
            <span className={style.span}><Link to='/home' className={style.btn}><span className={style.span2}>Home</span></Link></span>
            <span className={style.span}><Link to='/createdogs' className={style.btn}><span className={style.span2}>crear perrito</span></Link></span>
        </div>
    </div>
    )
}