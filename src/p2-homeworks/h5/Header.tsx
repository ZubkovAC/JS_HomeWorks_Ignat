import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import css from './Header.module.css';
import {PATH} from "./Routes";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Header() {

    const [accordion, setAccordion] = useState(true)
    const menu = () => {
        setAccordion(!accordion)
    }

    return (
        <div className={css.wrapper}>
            <div className={css.class}>
                <div className={accordion ? css.menu : css.menu_active}>
                    <a href="#" className={css.menu_btm} onClick={menu}> </a>
                    <nav className={css.menu_list}>
                        <NavLink to={PATH.PRE_JUNIOR} className={css.header}
                                 activeClassName={css.active}> PRE_JUNIOR</NavLink>
                        <NavLink to={PATH.JUNIOR} className={css.header}
                                 activeClassName={css.active}> JUNIOR</NavLink>
                        <NavLink to={PATH.JUNIOR_PLUS} className={css.header}
                                 activeClassName={css.active}>JUNIOR_PLUS</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;


