import React from "react";

 export const required=(value)=>{
    if(value) return undefined;
    return "Field is required";
};

 export const maxLength30=(maxLength)=>(value)=>{
    if(value.length>maxLength) return "Max length is 30 symbols";
    return undefined;
}