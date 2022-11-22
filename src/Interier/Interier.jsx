import React, {useState} from "react";
import style from "./Interier.module.css"
import {Link, useParams} from "react-router-dom";

export const Interier=({setKorzina,korzina,setKolvo})=>{

    const [zagolovok,setZagolovok]=useState("Товары");

    let arr=[
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/3-4-300x300.jpg",
            name:"«Карта Мира Large» Эмеральд Плэнет",
            price:"7.50 BYN"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/3-3-300x300.jpg",
            name:"«Карта Мира Large» Шоко Уорлд",
            price:"7.50 BYN"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/3-2-300x300.jpg",
            name:"«Карта Мира Large» Смоуки Дримс",
            price:"10.00 BYN"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/3-1-300x300.jpg",
            name:"«Карта Мира Large» Блю Фэнтези",
            price:"7.50 BYN"
        },
        {
            id:4,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/3-4-300x300.jpg",
            name:"«Карта Мира Medium» Эмеральд Плэнет",
            price:"7.50 BYN"
        }
    ];

    let cart=arr.map(item=><div className={style.wrapper4}><Link to={`/catalog/interier/${item.id}`}><img src={item.img} alt=""/></Link>
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