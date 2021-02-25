import React, {ChangeEvent, MouseEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (newName: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("xylio"); // need to fix any
    const [error, setError] = useState<string | null>(null); // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setName(e.currentTarget.value);

    };
    const addUser = (e: MouseEvent<HTMLButtonElement>) => {
        let nameT = name.trim()
        if (nameT !== '') {
            addUserCallback(name)
            alert(`Hello ${nameT} !`) // need to fix
        } else {
            setError(" ")
        }
        setName('')
    }

    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
