import React, {useState} from "react";
import style from "../Deti/Deti.module.css"
import {Link, useParams} from "react-router-dom";

export const Pazly=({setKorzina,korzina})=>{

    const [zagolovok,setZagolovok]=useState("Товары");

    let arr=[
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-foto-5-300x169.jpg",
            name:"Головоломка деревянная «Южная Америка»",
            price:"7.50 BYN"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-foto-4-300x169.jpg",
            name:"Головоломка деревянная «Северная Америка»",
            price:"7.50 BYN"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-foto-3-300x169.jpg",
            name:"Головоломка деревянная «Европа»",
            price:"10.00 BYN"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-foto-2-300x169.jpg",
            name:"Игрушка развивающая «Сортер» Алфавит английский",
            price:"7.50 BYN"
        },
        {
            id:4,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-foto-1-300x169.jpg",
            name:"Игрушка развивающая Бизиборд — Трактор",
            price:"7.50 BYN"
        }
    ];

    let cart=arr.map(item=><div className={style.wrapper4}><Link to={`/catalog/pazly/${item.id}`}><img src={item.img} alt=""/></Link>
        <h2 onClick={()=>{setKorzina([item,...korzina])}}>{item.name}</h2>
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