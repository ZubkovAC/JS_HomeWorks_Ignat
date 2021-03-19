/*
import React, {ChangeEvent} from "react";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    max:number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
    max,
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e); // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value);
    }

    return (
        <> <input
            type="range"
            value={value[0]}
            max={max}

            onChange={onChangeCallback}



        />
            DoubleRange
        </>
    );
}

export default SuperDoubleRange;

*/


import React, {ChangeEvent, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value: number) {
    return `${value}°C`;
}

export default function RangeSlider(props:any) {
    const classes = useStyles();
    const [value, setValue] = React.useState<number[]>(props.value);      // зачем?

    /*const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };*/
    const handleChange = useCallback((event: any, value: any) => {
        props.expense && props.expense(value);
    }, [props.expense]);

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                Temperature range
            </Typography>
            <Slider
                max={props.maxValue}
                value={props.value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}