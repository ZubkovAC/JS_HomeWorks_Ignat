import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import SuperSelect from "../../h7/common/c5-SuperSelect/SuperSelect";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";
import {colorAC} from "./themeReducer";
import s from "../HW12.module.css";
import SuperRadio from "../../h7/common/c6-SuperRadio/SuperRadio";


export default {
    title: 'HW 12/SuperSelect',
    component: SuperSelect,
    decorators:[ReduxStoreProviderDecorator],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;


const theme = 'some'
const themes = ['dark', 'red', 'some'];


const Template: Story = (args) => {

    const [color, setColor] = useState<string>(theme)

    const onChangeOption = (color: string) => {
        setColor(color)
    }
    return <div className={s[color]}>
        <SuperSelect {...args} value={color} onChangeOption={onChangeOption}/>;
    </div>
}
export const SSelect = Template.bind({});
SSelect.args = {
    options:themes

};
