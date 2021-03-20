import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {colorAC} from "../h10/bll/loadingReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType,string>(state => state.color.theme)
    const dispatch = useDispatch()

    const onChangeOption = (color:string) => {
        dispatch(colorAC(color))
    }


    // const [value, onChangeOption] = useState(theme);
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect
                value={theme}
                onChangeOption={onChangeOption}
                options={themes}
            />
            <SuperRadio
                value={theme}
                onChangeOption={onChangeOption}
                options={themes
                }/>
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
