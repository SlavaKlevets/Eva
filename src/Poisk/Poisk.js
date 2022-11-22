import React from "react";
import style from "./Poisk.module.css";

export const Poisk=()=>{

    return(
        <div className={style.wrapper}>
            <form action="">
                <input type="text" placeholder="введите назвние товра"/>
            </form>
        </div>
    )
}