import React from "react";
import style from "./Contacts.module.css"

export const Contacts = () => {
    return (
            <div className={style.wrap1}>
                <h1 className={style.contact}>Контакты</h1>
                <div className={style.wrapper}>
                    <div className={style.wrapper2}>
                            <div className={style.image}>
                                <img src="https://eco-wood-art.by/wp-content/themes/bb/acf-blocks/blocks/block-20/img/icon-phone.svg" alt=""/>
                            </div>
                            <div className={style.imageDiv}>
                                <h1>Телефон</h1>
                                <p>+375(44) 558-40 -36</p>
                            </div>
                    </div>
                    <div className={style.wrapper2}>
                            <div className={style.image}>
                                <img src="https://eco-wood-art.by/wp-content/themes/bb/acf-blocks/blocks/block-20/img/icon-mail.svg" alt=""/>
                            </div>
                            <div className={style.imageDiv}>
                                <h1>Эл.почта</h1>
                                <p>Техподдержка покупателей:
                                    support@eco-wood-art.com</p>
                            </div>
                    </div>
                    <div className={style.wrapper2}>
                            <div className={style.image}>
                                <img src="https://eco-wood-art.by/wp-content/themes/bb/acf-blocks/blocks/block-20/img/icon-mail.svg" alt=""/>
                            </div>
                            <div className={style.imageDiv}>
                                <h1>Skype</h1>
                                <p>EWA EcoWoodArt</p>
                            </div>
                    </div>
                    <div className={style.wrapper2}>
                            <div className={style.image}>
                                <img src="https://eco-wood-art.by/wp-content/themes/bb/acf-blocks/blocks/block-20/img/icon-map.svg" alt=""/>
                            </div>
                            <div className={style.imageDiv}>
                                <h1>Адрес</h1>
                                <p>ООО «Конгломерат»
                                    Юридический адрес:</p>
                            </div>
                    </div>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.5171909342084!2d27.5209813!3d53.85145070000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd050a67d2e9f%3A0xc87084d4d6c11d14!2z0YPQuy4g0JHRgNC10YHRgtGB0LrQsNGPIDE2Miwg0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1665047965668!5m2!1sru!2sby"
                        width="600px" height="450px"  allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
    )
}