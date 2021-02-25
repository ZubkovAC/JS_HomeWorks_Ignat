import React from "react";
import css from './Message.module.css'


type MessageDataProps ={
    avatar:string
    name:string
    message:string
    time:string
}



function Message(props: MessageDataProps) {
    return (
        <div className={css.post}>
            <div className={css.block1}>
                <div className={css.avatar}>
                    <img src={props.avatar} alt='avatar-photo'/>
                </div>
            </div>
            <div className={css.block2}>
                <div className={css.user}>
                    {props.name}
                </div>
                <div className={css.message}>
                    {props.message}

                    <span className={css.time}>  {props.time}</span>
                </div>

            </div>
        </div>
    );
}

export default Message;
