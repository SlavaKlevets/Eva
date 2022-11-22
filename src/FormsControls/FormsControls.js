import React from "react";
import style from "./FormsControls.module.css";
import {TextField}from "@material-ui/core";

export const Textarea=({input,meta,...props})=>{
    let er=meta.touched && meta.error;
    return (
         <div className={style.formControl1}>
            <div>
                <TextField label='Input text' className={(er ? style.textarea1 : "")} {...input}{...props}/>
                {/*<textarea className={(er ? style.textarea1 : "")} {...input}{...props} />*/}
            </div>
            {er && <span className={style.err}>"Some error"</span>}
        </div>
    )
}