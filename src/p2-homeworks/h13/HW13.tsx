import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {usersProfileAPI} from "./RequestsAPI";

export const HW13 = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}} >
            <Request/>
        </div>
    )
}


export const Request = () => {

    const [yes, no] = useState(false)

    const onChangeChecked = (checked: boolean) => {
        no(checked)
    }
    const [error, setError] = useState<null | string>(null)
    const Error = (message: string) => {
        setError(message)
    }

    const onPushButton = () => {
        usersProfileAPI.getRequest(yes)
            .then(res => {
                Error(res.data.errorText)
            })
            .catch(error => {
                console.log({...error})
                error.response ? Error(error.response.data.errorText) : Error(error.message)
            })
    }


    return (
        <div  >
                <SuperButton onClickButon={onPushButton} title={'API'}/>
                <SuperCheckbox checked={yes} onChangeChecked={onChangeChecked} title={'GO'}/>

                {error && <div style={{padding: '20px'}}>{error}</div>}

        </div>
    )
}