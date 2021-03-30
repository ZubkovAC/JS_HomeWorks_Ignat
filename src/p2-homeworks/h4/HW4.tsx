import React, {ChangeEvent, useState} from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";

function HW4() {
    const [text, setText] = useState<string>("");
    const [error,setError] = useState<string | null>('')

    const buttonCallBack = () => {
        if (text.trim() !==''){
            if (error)
                alert(text); // если нет ошибки показать текст
            setError(null)
            setText('')
        }else {
            setError('Error')
            alert("введите текст...");
        }
    }


    const showAlert = () => {
        if (text.trim() !==''){
            if (error)
                alert(text); // если нет ошибки показать текст
                setError(null)
                setText('')
        }else {
            setError('Error')
            alert("введите текст...");
        }
    }
    const onChangeText = (e:any) =>{
        if (setText){
            setText(e)
            setError(null)
        }
    }

    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (a:any) => setChecked(a);

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                {/*should work (должно работать)*/}
                <SuperInputText
                    value={text}
                    onChangeText={onChangeText}
                    onEnter={showAlert}
                    buttonCallback={buttonCallBack}
                    error={error}
                    className={error === '' ? s.buttonErrorFalse : s.buttonErrorTrue }

                    // проверьте, рабоет ли смешивание классов
                />
                <SuperInputText

                    // проверьте, рабоет ли смешивание классов
                />

                {/*should work (должно работать)*/}


                <SuperButton   title={'delete'} red  onClick={showAlert}  >
                </SuperButton>


                <SuperButton  red={false}
                    onClick={showAlert}  title={'delete'}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>


                <SuperButton title={'disabled'}
                    disabled={true}
                    red
                >
                   disabled {/*// название кнопки попадёт в children*/}
                </SuperButton>

                {/*should work (должно работать)*/}
                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                    title={'some text'}
                >
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChangeChecked={setChecked}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    );
}

export default HW4;
