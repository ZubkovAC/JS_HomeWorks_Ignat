import React from "react";
import s from './App.module.css'
import HW1 from "../../../p2-homeworks/h1/HW1";
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from "../../../p2-homeworks/h3/HW3";
import {Switch} from "./switch";
import HW4 from "../../../p2-homeworks/h4/HW4";
import HW5 from "../../../p2-homeworks/h5/HW5";

let img = 1
let one = 'https://images.wallpaperscraft.ru/image/gory_noch_more_115661_3840x2400.jpg'
const cheked =()=>{
    img +=1
    if (img %2 ){
        one = 'https://w-dog.ru/wallpapers/9/18/476035417475237.jpg'
    }
    else {
        one = 'https://images.wallpaperscraft.ru/image/gory_noch_more_115661_3840x2400.jpg'
    }
}


function App() {
    return (
        <div className={s.App}>
            <Switch cheked={cheked}/>
            <div>
                <img src={one}/>
            </div>



            <div className={s.GOD}>react homeworks:</div>
            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>
            <HW4/>*/}
            <HW5/>

        </div>
    );
}

export default App;
