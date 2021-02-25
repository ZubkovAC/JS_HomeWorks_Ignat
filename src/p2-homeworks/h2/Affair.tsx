import React from "react";
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id:number)=>void // need to fix any
}

function Affair({affair,deleteAffairCallback}:AffairPropsType) {
    const deleteCallback = () => {
        return deleteAffairCallback(affair._id)
    }

    return (
        <div>
            {affair.name} - {affair.priority}

            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
