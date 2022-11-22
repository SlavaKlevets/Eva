import React from "react";
import style from "./Footer.module.css"
import {Link} from "react-router-dom";

export const Footer=()=>{
    return(
        <div className={style.footer}>
            <div>
                <img src="https://eco-wood-art.by/wp-content/uploads/2020/04/logo.svg" alt=""/>
                <p>Режим работы интернет-магазина:
                    Онлайн-заказ: круглосуточно
                    Оператор: 09.00-18.00 Пн-Пт
                    Свидетельство о государственной регистрации выдано Брестским облисполкомом 17.05.2016
                    Интернет-магазин зарегистрирован в Торговом реестре Республики Беларусь 19.05.2020</p>
                <img className={style.image} src="https://eco-wood-art.by/wp-content/uploads/2021/08/logotipy_dlya_futera_czvetnye_na_prozrachnom_fone_217-800x96.png" alt=""/>
            </div>
            <div>
                <h1>НАВИГАЦИЯ</h1>
                <ul className={style.ule}>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/">Каталог</Link></li>
                    <li><Link to="/oprodukcii">О продукции</Link></li>
                    <li><Link to="/onas">О нас</Link></li>
                    <li><Link to="/">Оплата и доставка</Link></li>
                    <li> <Link to="/cont">Контакты</Link></li>
                    <li><Link to={"ret"}>Личный кабинет</Link></li>
                    <li><Link to={"ret"}>Возврат и обмен</Link></li>
                    <li><Link to={"ret"}>Политика в отношении обработки персональных данных</Link></li>
                </ul>
            </div>
            <div>
                <h1>Contacts</h1>
                <ul className={style.ule}>
                    <li><Link to={"ret"}>ООО «Конгломерат»</Link></li>
                    <li>
                        Юридический адрес:
                        224144, Республика Беларусь, Брестская обл., г.Пинск, ул.Брестская 162
                    </li>
                    <li>
                        Почтовый адрес:
                        224144, Республика Беларусь, Брестская обл., г.Пинск, ул.Брестская 162
                    </li>
                    <li>
                        УНП291193982
                    </li>
                    <li>
                        Контактные телефоны: +375(44)5584036,+375(165)617077
                    </li>
                </ul>
            </div>
        </div>
    )
}