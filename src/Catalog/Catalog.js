import React, {useState,useEffect} from "react";
import style from "./Catalog.module.css"
import {Link, Route, Routes, useParams,} from "react-router-dom";
import {Contacts} from "../Contacts/Contacts";
import {Deti} from "../Deti/Deti";
import {Givotny} from "../Givotny/Givotny";
import {Pazly} from "../Pazly/Pazly";
import {Konstruktory} from "../Konstruktory/Konstruktory";
import {Interier} from "../Interier/Interier";
import {Mini} from "../Mini/Mini";
import {Suveniry} from "../Suveniry/Suveniry";
import {Korzina} from "../Korzina/Korzina";
import {Lichnyi} from "../Lichnyi/Lichnyi";
import {MiniCart} from "../MiniCart/MiniCart";
import {DetiCart} from "../DetiCart/DetiCart";
import {GivotnyCart} from "../GivotnyCart/GivotnyCart";
import {PazlyCart} from "../PazlyCart/PazlyCart";
import {KonstruktoryCart} from "../KonstruktoryCart/KonstruktoryCart";
import {SuveniryCart} from "../SuveniryCart/SuveniryCart";
import {InterierCart} from "../InterierCart/InterierCart";
import {KonstructorCart} from "../KonstructorCart/KonstructorCart";

export const Catalog=({kolvo,setKolvo})=>{

    const [zagolovok,setZagolovok]=useState("Товары");
    const [korzina,setKorzina]=useState([]);

    let arr=[
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/czif-1-300x300.jpg",
            name:"Игрушка развивающая «Сортер» Цифры",
            price:"7.50 BYN"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/fig-1-300x300.jpg",
            name:"Игрушка развивающая «Сортер» Геометрические фигуры",
            price:"7.50 BYN"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/rus-1-300x300.jpg",
            name:"Игрушка развивающая «Сортер» Алфавит русский",
            price:"10.00 BYN"
        },
        {
            id:4,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/angl-1-300x300.jpg",
            name:"Игрушка развивающая «Сортер» Алфавит английский",
            price:"7.50 BYN"
        },
        {
            id:5,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/07/1-300x300.jpg",
            name:"Игрушка развивающая Бизиборд — Трактор",
            price:"7.50 BYN"
        },
        {
            id:6,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/05/3-3-300x169.jpg",
            name:"«Кошкин дом» чёрый каркас — белый мех",
            price:"7.50 BYN"
        },
        {
            id:7,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/05/3-2-300x169.jpg",
            name:"«Кошкин дом» натуральный каркас — белый мех",
            price:"99.90 BYN"
        },
        {
            id:8,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/05/3-1-300x169.jpg",
            name:"«Кошкин дом» белый каркас — черный мех",
            price:"99.90 BYN"
        },
        {
            id:9,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/05/3-300x169.jpg",
            name:"«Кошкин дом» белый каркас — розовый мех",
            price:"99.90 BYN"
        },
    ];

    let cart=arr.map(item=><div  className={style.wrapper4}><img src={item.img} alt=""/>
            <h2 onClick={()=>{setKorzina([item,...korzina])}}>{item.name}</h2>
            ss<p>{item.price}</p>
         </div>);

const fint=(e)=>{setZagolovok(e.target.innerHTML)}

    // const useEffect=(()=>{
    //
    // },[korzina])

    return(
        <div className={style.ddd}>
            <div className={style.naimenovanie}>
                <h1 className={style.zagolovok}>{zagolovok}</h1>
            </div>
           <div className={style.wrapper1}>
               <div className={style.wrapper2}>
                   <h1>Ктегории товаров</h1>

                   <ul className={style.category}>
                       <li onClick={(e)=>{fint(e)}}><Link to="/catalog/deti">Товары для детей</Link></li>
                       <li onClick={(e)=>fint(e)}><Link to="/catalog/givotny">Товары для животных</Link></li>
                       <li onClick={(e)=>fint(e)}><Link to="/catalog/pazly">Деревянные пазлы</Link></li>
                       <li onClick={(e)=>fint(e)}><Link to="/catalog/konstruktory">Механические конструкторы</Link></li>
                       <li onClick={(e)=>fint(e)}><Link to="/catalog/interier">Конструкторы для интерьера</Link></li>
                       <li onClick={(e)=>fint(e)}><Link to="/catalog/mini">Мини-конструкторы</Link></li>
                       <li onClick={(e)=>fint(e)}><Link to="/catalog/suveniry">Сувениры</Link></li>
                   </ul>
               </div>
               <div className={style.wrapper3}>
                   <Routes>
                       <Route path="/" element={cart}/>
                       <Route path="deti" element={<Deti kolvo={kolvo} setKolvo={setKolvo} setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="deti/:id" element={<DetiCart kolvo={kolvo} setKolvo={setKolvo} setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="givotny" element={<Givotny kolvo={kolvo} setKolvo={setKolvo} setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="givotny/:id" element={<GivotnyCart kolvo={kolvo} setKolvo={setKolvo} setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="pazly" element={<Pazly kolvo={kolvo} setKolvo={setKolvo} setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="pazly/:id" element={<PazlyCart kolvo={kolvo} setKolvo={setKolvo} setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="konstruktory" element={<Konstruktory kolvo={kolvo} setKolvo={setKolvo} setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="konstruktory/:id" element={<KonstruktoryCart kolvo={kolvo} setKolvo={setKolvo} setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="konstructor/:id" element={<KonstructorCart kolvo={kolvo} setKolvo={setKolvo} setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="interier" element={<Interier kolvo={kolvo} setKolvo={setKolvo} setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="interier/:id" element={<InterierCart kolvo={kolvo} setKolvo={setKolvo} setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="mini" element={<Mini kolvo={kolvo} setKolvo={setKolvo} setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="mini/:id" element={<MiniCart kolvo={kolvo} setKolvo={setKolvo} setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="suveniry" element={<Suveniry kolvo={kolvo} setKolvo={setKolvo} setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="suveniry/:id" element={<SuveniryCart kolvo={kolvo} setKolvo={setKolvo} setKorzina={setKorzina} korzina={korzina}/>}/>
                       <Route path="korzina" element={<Korzina kolvo={kolvo} setKolvo={setKolvo} korzina={korzina} setKorzina={setKorzina}/>}/>
                       <Route path="lichnyi" element={<Lichnyi/>}/>
                   </Routes>
               </div>
           </div>
        </div>
    )
}