import React from "react";
import style from "./Onas.module.css"

export const Onas = () => {
    return (
        <div className={style.wrap1}>
            <h1 className={style.zagolovok}>О нас</h1>
            <div className={style.info}>
                <h1>Спасибо за выбор нашей продукции!</h1>
                <p>
                    ООО «Конгломерат» — белорусская компания-производитель конструкторов, механических сборных моделей,  игрушек, сувениров, предметов интерьера и подарков из натуральных материалов.
                </p>
                <p>
                    С 2016 года мы выпустили более 50 оригинальных моделей различной тематики и сложности из высококачественной фанеры, предназначенных для детей-подростков и их родителей. Наша продукция выпускаемая под торговой маркой EWA ™  (ECO-WOOD-ART) сочетает в себе положительную энергию природы, высокие экологически чистые технологии и заслужила доверие у довольных клиентов и партнеров уже во многих странах мира!
                </p>
                <p>
                    Помимо игровой и развлекательной направленности, механические сборные 3D-модели активно и успешно используются в маркетинговых целях, украшают интерьеры кабинетов и офисов, витрины центров продаж, притягивают взгляды, вызывают положительные ассоциации и воспоминания, напоминают о деловых встречах и важных событиях, создают положительные образы и поддерживают имидж компаний повышая их статус, могут быть использованы как эксклюзивные корпоративные подарки и как наградной фонд при проведении различных мероприятий!
                </p>
                <p>
                    Дополнительно мы производим сувенирную продукцию в виде стильных салфетниц, шкатулок, коробок для алкоголя, блокнотов, календарей, брелоков, линеек и т.п.
                </p>
                <div>
                        <h1>Наши достоинства:</h1>
                        <p> — Отличный коллектив, налаженное производство и высокоточное лазерное оборудование</p>
                        <p> — Оригинальный дизайн и разработка моделей собственными конструкторами и дизайнерами</p>
                        <p> — Зарегистрированный в Республике Беларусь, РФ, Европе, США и Китае товарный знак EWA ™</p>
                        <p> — Производство в соответствии с  ТУ  и  СТБ</p>
                        <p> — Продукция не подлежит обязательной сертификации, возрастная категория 14+</p>
                        <p> — Упаковка и инструкции по сборке содержат информацию на 8 языках.</p>
                </div>

                <h2 className={style.silka}>
                    ПОЛЕЗНЫЕ ССЫЛКИ:
                </h2>
                <ul className={style.poleznoe}>
                    <li><p>Рекомендуем посетить наши страницы в социальных сетях:</p></li>
                    <li><b>YouTube:</b> <a href="https://www.youtube.com/ewaecowoodart">https://www.youtube.com/ewaecowoodart</a></li>
                    <li><b>Instagram: </b><a href="https://www.instagram.com/ewa_ecowoodart">https://www.instagram.com/ewa_ecowoodart</a></li>
                    <li><b>Instagram:</b> <a href="https://www.instagram.com/ewa.belarus">https://www.instagram.com/ewa.belarus</a></li>
                    <li><b>ВК:</b> <a href="https://vk.com/ecowoodart">https://vk.com/ecowoodart</a></li>
                    <li><b>Facebook:</b> <a href="https://www.facebook.com/ewabelarus">https://www.facebook.com/ewabelarus</a></li>
                    <li><b>Оставайтесь с нами и мы будем радовать Вас новыми моделями!</b></li>
                </ul>
            </div>
        </div>
    )
}