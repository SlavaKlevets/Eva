import React from "react";
import style from "./Konstructor.module.css"
import {Link} from "react-router-dom";

export const Konstructor=({setKorzina,korzina,setKolvo})=>{

    let arr=[
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/22222-300x300.jpg",
            name:"Дикий кот",
            price:"89.00 BYN"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/1111-300x300.jpg",
            name:"Черный кот",
            price:"89.00 BYN"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/03/j-300x169.jpg",
            name:"ВЕТРЯНАЯ МЕЛЬНИЦА",
            price:"89.00 BYN"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/02/1-300x169.jpg",
            name:"Самолет",
            price:"89.00 BYN"
        },
        {
            id:4,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/01/j1-300x169.jpg",
            name:"ГЕЙМСЕТ домино Мексиканский поезд",
            price:"139.00 BYN"
        },
        {
            id:5,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/10/1-1-300x169.jpg",
            name:"Скайлорд",
            price:"119.00 BYN"
        },
        {
            id:6,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/10/1-300x169.jpg",
            name:"Луноход",
            price:"119.00 BYN"
        },
        {
            id:7,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-1-300x169.jpg",
            name:"Прицеп для БЕЛАРУС-82 и БЕЛАРУС-2022",
            price:"139.00 BYN"
        },
    ];

    let predlog=arr.map(item=><div className={style.wrap1}><Link to={`/catalog/konstructor/${item.id}`}><img className={style.image} src={item.img} alt=""/></Link>
        <h2 onClick={()=>{setKorzina([item,...korzina]);setKolvo(korzina.length+1)}}>{item.name}</h2>
            <h3>{item.price}</h3>
        </div>
    );


    return(
        <div className={style.wrapper}>
            <div className={style.obertka}>
                {predlog}
            </div>
            <div className={style.but}>
                <Link to="/onas"><button>Больше моделей...</button></Link>
            </div>
        </div>
    )
}