import React, {useState} from "react";
import style from "./Lichnyi.module.css"
/*import {maxLength30, required} from "../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../FormsControls/FormsControls";
import {Button} from "@material-ui/core";*/

export const Lichnyi=(props)=>{

    return(
        <div className={style.wrapper}>
            <div>
                <h1>Личный кабинет</h1>
            </div>
            <div className={style.wrapper1}>
                <div>
                    <form className={style.wrapper2}>
                        <h1>Вход</h1>
                        <label for="username"/> Имя пользователя или Email *<label/>
                        <input type="text" placeholder=" Имя пользователя"/>
                        <label htmlFor="username"/> Пароль * <label/>
                        <input type="text" placeholder=" Пароль"/>
                        <button>Войти</button>
                    </form>
                </div>
                <div>
                    <form className={style.wrapper2}>
                        <h1>Регистрация</h1>
                        <label/> Email *<label/>
                        <input type="text" placeholder=" Email"/>
                        <label htmlFor="username"/> Пароль * <label/>
                        <input type="text" placeholder=" Пароль"/>
                        <button>Зарегистрировться</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

/*const[value,setValue]=useState(" ");

let addNewEmployee = (values) => {
    setValue(values.addEmployee.value);
};

let rd = maxLength30(30);

let AddEmployeeForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.wrapper2}>
            <h1>Вход</h1>
            <label htmlFor="username"/> Имя пользователя или Email *<label/>
            <Field name={"addEmployee"} component={Textarea} validate={[required, rd]} placeholder="Enter employee" value={value}/>
            <label htmlFor="username"/> Пароль * <label/>
            <Button onClick={props.handleSubmit} style={{margin:"20px"}} variant="contained">Добавить</Button>
        </form>
    )
}
const AddEmployeeFormRedux = reduxForm({form: "employeeAddForm"})(AddEmployeeForm);

return(
    <div className={style.wrapper}>
        <div>
            <h1>Личный кабинет</h1>
        </div>
        <div className={style.wrapper1}>
            <div>
                <AddEmployeeFormRedux onSubmit={addNewEmployee}/>
            </div>
            <div>
                <AddEmployeeFormRedux onSubmit={addNewEmployee}/>
            </div>
        </div>
    </div>
)
}*/
