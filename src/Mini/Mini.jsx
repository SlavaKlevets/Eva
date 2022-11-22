import React, {useState} from "react";
import style from "./Mini.module.css"
import {Link, useParams} from "react-router-dom";

export const Mini=({setKorzina,korzina,setKolvo})=>{

    const [zagolovok,setZagolovok]=useState("Товары");

    let arr=[
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2020/05/07_zubr_s-300x200.jpg",
            name:"ЭВА: ЗУБР",
            price:"7.50 BYN"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2020/05/p01-300x200.jpg",
            name:"ЭВА: САМОЛЕТ",
            price:"7.50 BYN"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2020/05/04_crossbike_s-300x200.jpg",
            name:"ЭВА: КРОССБАЙК",
            price:"10.00 BYN"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2020/05/01_auto_s2-300x200.jpg",
            name:"ЭВА: АВТОМОБИЛЬ",
            price:"7.50 BYN"
        },
        {
            id:4,
            img:"https://eco-wood-art.by/wp-content/uploads/2020/05/bowling-300x200.jpg",
            name:"БОУЛИНГ МИНИ",
            price:"7.50 BYN"
        }
    ];

    let cart=arr.map(item=><div className={style.wrapper4}><Link to={`/catalog/mini/${item.id}`}><img src={item.img} alt=""/></Link>
        <h2 onClick={()=>{setKorzina([item,...korzina]);setKolvo(korzina.length+1)}}>{item.name}</h2>
        <p>{item.price}</p>
    </div>);


    return(
        <div className={style.ddd}>
                <div className={style.wrapper3}>
                    {cart}
                </div>
        </div>
    )
}