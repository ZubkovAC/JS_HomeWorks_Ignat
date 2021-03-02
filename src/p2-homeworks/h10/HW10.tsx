import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function HW10() {
    // useSelector, useDispatch
    const loading = false;

    const setLoading = () => {
        // dispatch
        // setTimeout
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton title={'set loading...'} onClick={setLoading}/>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
