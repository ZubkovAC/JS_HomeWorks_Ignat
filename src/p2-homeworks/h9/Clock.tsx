import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import css from './Clock.module.css'


export function Clock2() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<any>(new Date);
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true) // show
    };
    const onMouseLeave = () => {
        setShow(false)// close
    };

    const stringTime =  "Time"  // fix with date
    const stringDate = "Date" // fix with date

    return (




        <div className={css.Clock}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}>
            <div className={css.Clock_table}
            >
                <h3>
                    {stringTime}
                </h3> {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}

            </div>
            <div style={{height:'30px'}}>
                {show && (
                    <div className={css.date} >
                        {stringDate}:{date.toDateString()}
                    </div>
                )}
            </div>


            <SuperButton title={'start'} onClick={start}/>
            <SuperButton title={'stop'} onClick={stop}/>


        </div>
    );
}

