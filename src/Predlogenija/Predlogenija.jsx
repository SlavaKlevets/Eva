import React from "react";
import style from "./Predlogenija.module.css"
import {Link} from "react-router-dom";

export const Predlogenija=()=>{

    let arr=[
        {
          src:"https://eco-wood-art.by/wp-content/uploads/2020/04/delivery-truck.svg",
          zagolovok:"ОРГАНИЗУЕМ ДОСТАВКУ",
          ssilka:"/oplata"
         },
        {
            src:"https://eco-wood-art.by/wp-content/uploads/2020/04/piggy-bank.svg",
            zagolovok:"ВЫГОДНЫЕ ПОКУПКИ",
            ssilka:"/oplata"
        },
        {
            src:"https://eco-wood-art.by/wp-content/uploads/2020/04/guarantee.svg",
            zagolovok:"ГАРАНТИЯ ПРОИЗВОДИТЕЛЯ",
            ssilka:"/oplata"
        }
    ];

    let predlog=arr.map(item=><Link to={item.ssilka}><div className={style.wrap1}>
            <img className={style.image} src={item.src} alt=""/>
        <h2 className={style.navigate}>{item.zagolovok}</h2>
    </div></Link>
    );

    return(
        <div className={style.wrapper}>
            <div className={style.obertka}>
                {predlog}
            </div>
        </div>
    )
}