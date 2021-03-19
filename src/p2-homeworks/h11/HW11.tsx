import React, {useCallback, useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import RangeSlider from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(500);

    const maxValue = 500

    const changeLeftRange = useCallback((value: number):void => {
        setValue1(value);
    }, [setValue1])

    const expense=useCallback((value:Array<number>)=>{
        setValue1(value[0])
        setValue2(value[1])
    },[setValue1,setValue2])


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>

                <SuperRange
                    max={maxValue}
                    value={value1}
                    onChangeRange={changeLeftRange}
                    // сделать так чтоб value1 изменялось
                />
                <div>{value1}</div>
            </div>

            <div style={{width:'300px'}}>

                <RangeSlider
                    expense={expense}
                    maxValue={maxValue}
                    value={[value1,value2]}
                />
                <span>{value1}</span>
                <span style={{float:'right'}}>{value2}</span>


                {/*<div>{value1}</div>
                <SuperDoubleRange
                    max={maxValue}
                    value={[value1,value2]}
                    onChangeRange={expense}

                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>*/}
            </div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}

        </div>
    );
}

export default HW11;

