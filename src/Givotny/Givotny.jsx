import React, {useState} from "react";
import style from "./Givotny.module.css"
import {Link, useParams} from "react-router-dom";

export const Givotny=({setKorzina,korzina,setKolvo})=>{

    const [zagolovok,setZagolovok]=useState("Товары");

    let arr=[
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/05/3-3-300x169.jpg",
            name:"«Кошкин дом» чёрый каркас — белый мех",
            price:"7.50 BYN"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/05/3-2-300x169.jpg",
            name:"«Кошкин дом» натуральный каркас — белый мех",
            price:"99.90 BYN"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/05/3-1-300x169.jpg",
            name:"«Кошкин дом» белый каркас — черный мех",
            price:"99.90 BYN"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/05/3-300x169.jpg",
            name:"«Кошкин дом» белый каркас — розовый мех",
            price:"99.90 BYN"
        }
    ];

    let cart=arr.map(item=><div className={style.wrapper4}><Link to={`/catalog/givotny/${item.id}`}><img className={style.image} src={item.img} alt=""/></Link>
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