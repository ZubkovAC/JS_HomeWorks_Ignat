import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div style={{display:'flex'}} key={p._id}>
            <div>
                name : <b style={{color:'red'}}>{p.name} </b>
            </div>

            <div>
                age : <b>{p.age}</b>
            </div>
        </div>
    ))


    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const sortCheck = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))


    return (
        <div >
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}

            {finalPeople}
            <div><SuperButton title={'sort Up'} onClickButon={sortUp}/></div>
            <div><SuperButton title={'sort Down'} onClickButon={sortDown}/></div>
            <div><SuperButton title={'sort Check'} onClickButon={sortCheck}/></div>
            <div>sort down</div>

            check 18

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
