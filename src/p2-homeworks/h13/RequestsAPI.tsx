import React from "react";
import axios from "axios";

const istance = axios.create({
    baseURL:'https://neko-cafe-back.herokuapp.com/auth/test'
})
// body:{success:true}

export const usersProfileAPI = {
    getRequest(cheked:boolean) {
        return istance.post( ``, {success:cheked})
    }
}