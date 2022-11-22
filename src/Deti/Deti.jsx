import React, {useState} from "react";
import style from "./Deti.module.css"
import {Link, useParams} from "react-router-dom";

export const Deti=({setKorzina,korzina,setKolvo})=>{

    const [zagolovok,setZagolovok]=useState("Товары");

    let arr=[
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/czif-1-300x300.jpg",
            name:"Игрушка развивающая «Сортер» Цифры",
            price:"7.50 BYN"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/fig-1-300x300.jpg",
            name:"Игрушка развивающая «Сортер» Геометрические фигуры",
            price:"7.50 BYN"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/rus-1-300x300.jpg",
            name:"Игрушка развивающая «Сортер» Алфавит русский",
            price:"10.00 BYN"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/angl-1-300x300.jpg",
            name:"Игрушка развивающая «Сортер» Алфавит английский",
            price:"7.50 BYN"
        },
        {
            id:4,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/07/1-300x300.jpg",
            name:"Игрушка развивающая Бизиборд — Трактор",
            price:"7.50 BYN"
        }
    ];

    let cart=arr.map(item=><div className={style.wrapper4}><Link to={`/catalog/deti/${item.id}`}><img src={item.img} alt=""/></Link>
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