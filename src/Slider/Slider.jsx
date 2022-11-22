import React from "react";
import style from "./Slider.module.css"
import {Poisk} from "../Poisk/Poisk";

export const Slider=({poisk})=>{
    return(
        <div className={style.wrapper}>
            {poisk && <Poisk/>}
            <img className={style.image} src="https://eco-wood-art.by/wp-content/uploads/2022/07/banner-na-sajt-ru-.jpg" alt=""/>
        </div>
    )
}