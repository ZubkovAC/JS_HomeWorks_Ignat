import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import css from './Greeting.module.css'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными


function HW3() {

    const [users, setUsers] = useState<UserType[]>([]); //  что писать вместо any? UserType - error
    const addUserCallback = (newName: string) => { // need to fix any
        let task = {_id: v1(), name: newName}
        setUsers([task, ...users]); // need to fix
    }

    return (

        <div className={css.box}>

            <span className={css.quistion}>Home Quiestion 3</span>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>
    );
}

export default HW3;
