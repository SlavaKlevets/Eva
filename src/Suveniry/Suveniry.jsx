import React, {useState} from "react";
import style from "./Suveniry.module.css"
import {Link, useParams} from "react-router-dom";

export const Suveniry=({setKorzina,korzina,setKolvo})=>{

    const [zagolovok,setZagolovok]=useState("Товары");

    let arr=[
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2020/05/ladywithumbrella_02-300x400.jpg",
            name:"Салфетница сувенирная «ДАМА С ЗОНТИКОМ» (черная)",
            price:"7.50 BYN"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2020/05/amelie_black_02-300x400.jpg",
            name:"Салфетница сувенирная «АМЕЛИ» (черная)",
            price:"7.50 BYN"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2020/05/amelie_red_02-300x400.jpg",
            name:"Салфетница сувенирная «АМЕЛИ» (красная)",
            price:"10.00 BYN"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2020/05/ladywithumbrella_nocolor_02-300x400.jpg",
            name:"Салфетница сувенирная «ДАМА С ЗОНТИКОМ»",
            price:"7.50 BYN"
        }
    ];

    let cart=arr.map(item=><div className={style.wrapper4}><Link to={`/catalog/suveniry/${item.id}`}><img src={item.img} alt=""/></Link>
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