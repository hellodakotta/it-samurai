import React from "react";
import s from './Preloader.module.css';

let Preloader = (props) => {
    return (
        <img className={s.loader} src={`${process.env.PUBLIC_URL}/images/ajax-loader.gif`}/>
    )
}

export default Preloader