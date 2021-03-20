import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';

import SuperRadio from "../../h7/common/c6-SuperRadio/SuperRadio";
import {ReduxStoreProviderDecorator,} from "./ReduxStoreProviderDecorator";
import s from "../HW12.module.css";

export default {
    title: 'HW 12 / SuperRadio',
    component: SuperRadio,
    decorators: [ReduxStoreProviderDecorator],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;


const theme = 'some'
const themes = ['dark', 'red', 'some'];
const Template: Story = (args) => {

    const [color, setColor] = useState<string>(theme)

    const onChangeOption = (color: string) => {
        setColor(color)
    }
    return  <div className={s[color]}>
        <SuperRadio {...args} value={color} onChangeOption={onChangeOption} />;
    </div>
}

export const SRadio = Template.bind({});

SRadio.args = {
    options: themes

};
