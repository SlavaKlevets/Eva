import React, {useState} from "react";
import style from "./KonstructorCart.module.css"
import {Link, useParams} from "react-router-dom";

export const KonstructorCart=({setKorzina,korzina,setKolvo})=>{

    const {id}=useParams();
    const [opis,setOpis]=useState(true);

    let arr=[
        {
            id:0,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/22222-300x300.jpg",
            name:"Дикий кот",
            price:"89.00 BYN",
            artikul:"Артикул: 4815123002543 Категория: Товары для детей",
            opisanie:"Развивающая игра в виде сортера для малышей по системе Монтессори. Это инструмент для развития детей, помогающий изучить цифры и освоить простой счет.",
            detali:"detali"
        },
        {
            id:1,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/08/1111-300x300.jpg",
            name:"Черный кот",
            price:"89.00 BYN",
            artikul:"Артикул: 4815123002543 Категория: Товары для детей",
            opisanie:"Развивающая игра в виде сортера для малышей по системе Монтессори. Это инструмент для развития детей, помогающий изучить цифры и освоить простой счет.",
            detali:"detali"
        },
        {
            id:2,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/03/j-300x169.jpg",
            name:"ВЕТРЯНАЯ МЕЛЬНИЦА",
            price:"89.00 BYN",
            artikul:"Артикул: 4815123002543 Категория: Товары для детей",
            opisanie:"Развивающая игра в виде сортера для малышей по системе Монтессори. Это инструмент для развития детей, помогающий изучить цифры и освоить простой счет.",
            detali:"detali"
        },
        {
            id:3,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/02/1-300x169.jpg",
            name:"Самолет",
            price:"89.00 BYN",
            artikul:"Артикул: 4815123002543 Категория: Товары для детей",
            opisanie:"Развивающая игра в виде сортера для малышей по системе Монтессори. Это инструмент для развития детей, помогающий изучить цифры и освоить простой счет.",
            detali:"detali"
        },
        {
            id:4,
            img:"https://eco-wood-art.by/wp-content/uploads/2022/01/j1-300x169.jpg",
            name:"ГЕЙМСЕТ домино Мексиканский поезд",
            price:"139.00 BYN",
            artikul:"Артикул: 4815123002543 Категория: Товары для детей",
            opisanie:"Развивающая игра в виде сортера для малышей по системе Монтессори. Это инструмент для развития детей, помогающий изучить цифры и освоить простой счет.",
            detali:"detali"
        },
        {
            id:5,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/10/1-1-300x169.jpg",
            name:"Скайлорд",
            price:"119.00 BYN",
            artikul:"Артикул: 4815123002543 Категория: Товары для детей",
            opisanie:"Развивающая игра в виде сортера для малышей по системе Монтессори. Это инструмент для развития детей, помогающий изучить цифры и освоить простой счет.",
            detali:"detali"
        },
        {
            id:6,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/10/1-300x169.jpg",
            name:"Луноход",
            price:"119.00 BYN",
            artikul:"Артикул: 4815123002543 Категория: Товары для детей",
            opisanie:"Развивающая игра в виде сортера для малышей по системе Монтессори. Это инструмент для развития детей, помогающий изучить цифры и освоить простой счет.",
            detali:"detali"
        },
        {
            id:7,
            img:"https://eco-wood-art.by/wp-content/uploads/2021/09/1-1-300x169.jpg",
            name:"Прицеп для БЕЛАРУС-82 и БЕЛАРУС-2022",
            price:"139.00 BYN",
            artikul:"Артикул: 4815123002543 Категория: Товары для детей",
            opisanie:"Развивающая игра в виде сортера для малышей по системе Монтессори. Это инструмент для развития детей, помогающий изучить цифры и освоить простой счет.",
            detali:"detali"
        },
    ];



    const [sss,setSss]=useState(0)

    return (
        <div className={style.wrapper4}>
            <div className={style.wrapper2}><img className={style.ava} src={arr[id].img} alt=""/></div>
            <div className={style.wrapper3}>
                <h2>{arr[id].name}</h2>
                <p>{arr[id].price}</p>
                <div className={style.wrapper5}>
                    <div className={style.dobavit}>
                        <div onClick={() =>{setSss(sss -1)}}>-</div>
                        <input className={style.inputs} type="text" value={sss}/>
                        <div onClick={() =>{setSss(sss + 1)}}>+</div>
                    </div>
                    <button onClick={() => {setKorzina([arr[id], ...korzina]);setKolvo(korzina.length + 1)}}>
                        <div><img src="https://eco-wood-art.by/wp-content/themes/bb/assets/img/shopping-cart.svg" alt=""/></div>
                        В КОРЗИНУ
                    </button>
                </div>
                <p>{arr[id].artikul}</p>
                <div>
                    <div className={style.wrapOpisanie}>
                        <ul>
                            <li className={style.opisanie} onClick={()=>{setOpis(true)}}>Описание</li>
                            <li className={style.opisanie} onClick={()=>{setOpis(false)}}>Детали</li>
                        </ul>
                    </div>
                    <div>

                        {opis ?<h1>Описание</h1>:<h1>Детали</h1>}
                        {opis ?<p>{arr[id].opisanie}</p>:<div>
                            <table >
                                <tbody>
                                <tr >
                                    <th >Размер собранной модели, мм</th>
                                    <td ><p>435*261*354</p>
                                    </td>
                                </tr>
                                <tr >
                                    <th >Размер упаковки, мм</th>
                                    <td ><p>490*380*285</p>
                                    </td>
                                </tr>
                                <tr >
                                    <th >Сложность сборки</th>
                                    <td ><p>★</p>
                                    </td>
                                </tr>
                                <tr >
                                    <th >Способ сборки</th>
                                    <td ><p>БЕЗ КЛЕЯ</p>
                                    </td>
                                </tr>
                                <tr >
                                    <th >Вес собранной модели, гр</th>
                                    <td ><p>2250</p>
                                    </td>
                                </tr>
                                <tr >
                                    <th >Вес упаковки, гр</th>
                                    <td ><p>2750</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>}

                    </div>
                </div>
            </div>
        </div>
    )
}