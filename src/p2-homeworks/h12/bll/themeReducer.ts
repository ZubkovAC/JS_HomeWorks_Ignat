const initState = {

};

export const themeReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        case "": {
            return state;
        }
        default: return state;
    }
};

export const changeThemeC = (): any => {}; // fix any

// Сначала в 10 домашке сделал редюсер... через час увидел эту папку =)



const initilStateColor ={
    theme:'some'
}

export type InitialColorStateType = typeof initilStateColor

export const colorReducer = ( state = initilStateColor , action:ActionColorType): InitialColorStateType =>{
    switch (action.type) {
        case "CHANGE-COLOR":{
            return {...state,theme: action.color}
        }
        default:
            return state

    }
}

export const colorAC = (color:string) =>({type:'CHANGE-COLOR',color}as const )

export type ColorAC = ReturnType<typeof colorAC>

export type ActionColorType = ColorAC