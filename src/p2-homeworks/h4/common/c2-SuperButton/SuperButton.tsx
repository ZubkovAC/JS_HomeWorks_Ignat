import React, {ButtonHTMLAttributes, MouseEvent, DetailedHTMLProps} from "react";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    boolean?: boolean
    title?:string
    onClickButon?: () => void
    onChange?:any
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        boolean, className,title,onChange,onClickButon,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    //const finalClassName = `${red ? s.red : s.default} ${className}`;
    //const finalClassName={ props.error? s.buttonErrorTrue : s.buttonErrorFalse}

    const onClick = () =>{
        onClickButon && onClickButon()
    }


    return (
        <button
            className={boolean? s.buttonErrorFalse :  s.buttonErrorTrue  }
            //className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
            onClick={onClick}
        ><span>{title}</span></button>
    );
}

export default SuperButton;
