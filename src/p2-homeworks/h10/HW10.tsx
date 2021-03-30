import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {completedAC, loadingAC} from "./bll/loadingReducer";

// @ts-ignore
import { WindMillLoading } from 'react-loadingg'
// @ts-ignore
import { BoxLoading } from 'react-loadingg';

function HW10() {

    const dispatch = useDispatch()

    const loading = useSelector<AppStoreType>(state => state.loading.loading)

    const setLoading = () => {
        dispatch(loadingAC(true))

        const off =()=>{
            dispatch(completedAC(false))
        }

        setTimeout(off,5000)
        // dispatch - true
        // setTimeout -3000 false

    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <WindMillLoading color={'papayawhip'}/>
                        <p>отображение на верху</p>
                    </div>
                )
                : (
                    <div>
                        <SuperButton title={'set loading'} onClickButon={setLoading}/>
                    </div>
                )
            }


            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}

        </div>
    );
}

export default HW10;

/*

- initialState = {loading: false}
    - case "SET_LOADING": return {...state, loading: action.loading}
    - если loading === true - показывать компоненту-крутилку загрузки(сделать), иначе показывать ваш проект
- добавить на странице Junior кнопку, которая изменит loading на true и запустит setTimeout, который через 3 секунды изменит loading на false*/
