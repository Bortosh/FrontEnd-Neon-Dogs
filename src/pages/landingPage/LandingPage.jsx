import React from 'react'
import style  from './LandingPage.module.css'
import { Doggy } from '../doggy'

export default function LandingPage() {
    return(
        <div className={style.container}>
            <div>
                <h2 className={style.h2}>
                    <span className={style.span}>Neon Dogs</span>
                </h2>
                <Doggy />
            </div>
        </div>
    )
}