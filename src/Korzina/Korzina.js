import React from "react";
import style from "./Korzina.module.css";

export const Korzina=({korzina,setKorzina,setKolvo})=>{

    let corz=korzina.map(item=><div className={style.wrapper4}><img className={style.img1} src={item.img} alt=""/>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <button className={style.but1} onClick={()=>{setKorzina(korzina.filter(i=>i.name!==item.name));
            setKolvo(korzina.length-1)}}>Убрать из корзины</button>
    </div>);

    return(
        <div className={style.ddd}>
            {korzina.length===0 ? <h1 className={style.pusta}>В коррзине нет товаров</h1>:corz}
        </div>
    )
}