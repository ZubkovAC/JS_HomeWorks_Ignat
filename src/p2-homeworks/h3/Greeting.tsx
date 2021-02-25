import React, {ChangeEvent, MouseEvent} from "react";
import css from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (event: MouseEvent<HTMLButtonElement>) => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? `${css.error1}` : `${css.error2}`
    const inputButton = error ? `${css.button1}` : `${css.button2}`
    const inputError = error ? css.error_message : ''
    return (
        <div >
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
            />
            <span>{error}</span>
            <button className={inputButton} onClick={addUser}>add</button>
            {error && <div className={inputError}>Title is required</div>}
            <div className={css.number}>{totalUsers}</div>
        </div>
    );
}

export default Greeting;
