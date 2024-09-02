import React, { useState } from 'react';
import style from './LatestJokes.module.scss';

export const Welcome = (props) => {
    return (
        <>
        <section style={{ display: props.showDiv1 ? 'block' : 'none' }} >
            <h1>{props.title}</h1>
            <div className={style.allButs} >
            <button onClick={props.toggleDivs} >Get randome joke</button>
            <button>Cfreate your jokes</button>
            </div>
        </section>
        </>
    )
}