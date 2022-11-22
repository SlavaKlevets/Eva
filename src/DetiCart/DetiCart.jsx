import React, {useState} from "react";
import style from "./DetiCart.module.css"
import {Link, useParams} from "react-router-dom";

export const DetiCart = ({setKorzina, korzina, setKolvo}) => {

    const {id} = useParams();
    const [opis,setOpis]=useState(true);

    let arr = [
        {
            id: 0,
            img: "https://eco-wood-art.by/wp-content/uploads/2022/08/czif-1-300x300.jpg",
            name: "Игрушка развивающая «Сортер» Цифры",
            price: "7.50 BYN",
            artikul:"Артикул: 4815123002543 Категория: Товары для детей",
            opisanie:"Развивающая игра в виде сортера для малышей по системе Монтессори. Это инструмент для развития детей, помогающий изучить цифры и освоить простой счет.",
            detali:"detali"
        },
        {
            id: 1,
            img: "https://eco-wood-art.by/wp-content/uploads/2022/08/fig-1-300x300.jpg",
            name: "Игрушка развивающая «Сортер» Геометрические фигуры",
            price: "7.50 BYN",
            artikul:"Артикул: 4815123002550 Категория: Товары для детей",
            opisanie:"Развивающая игра в виде сортера для малышей по системе Монтессори, которая помогает развивать понимание форм, мелкую моторику, логику и сообразительность, а также помогает в изучении цвета.",
            detali:"detali"
        },
        {
            id: 2,
            img: "https://eco-wood-art.by/wp-content/uploads/2022/08/rus-1-300x300.jpg",
            name: "Игрушка развивающая «Сортер» Алфавит русский",
            price: "10.00 BYN",
            artikul:"Артикул: 4815123002567 Категория: Товары для детей",
            opisanie:"Развивающая игра в виде сортера для малышей по системе Монтессори, которая помогает изучить русский алфавит от а до я в игровой форме.",
            detali:"detali"
        },
        {
            id: 3,
            img: "https://eco-wood-art.by/wp-content/uploads/2022/08/angl-1-300x300.jpg",
            name: "Игрушка развивающая «Сортер» Алфавит английский",
            price: "7.50 BYN",
            artikul:"Артикул: 4815123002574 Категория: Товары для детей",
            opisanie:"Развивающая игра в виде сортера для малышей по системе Монтессори, которая помогает изучить русский алфавит от а до я в игровой форме.",
            detali:"detali"
        },
        {
            id: 4,
            img: "https://eco-wood-art.by/wp-content/uploads/2022/07/1-300x300.jpg",
            name: "Игрушка развивающая Бизиборд — Трактор",
            price: "7.50 BYN",
            artikul:"Артикул: 4815123002581 Категория: Товары для детей",
            opisanie:"Игрушка развивающая Бизиборд — Трактор поможет вашим деткам увлекательно и, главное, безопасно исследовать этот мир. " +
                "Это просто кладезь полезных и занимательных упражнений для малыша, которые способствуют развитию логического мышления, воображения и фантазии, " +
                "усидчивости, а также помогают постепенно адаптироваться к бытовой среде. И самое главное, бизиборд незаменим для развития и тренировки мелкой моторики малышей.\n" +
                "Он заменит сразу несколько игрушек, а главное, убережет малыша от опасностей в доме.",
            detali:"detali"
        }
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





