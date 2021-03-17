const initState = {
    loading: false
};

export type InitialLoadingStateType = typeof initState

export const loadingReducer = (state = initState, action: ActionType): InitialLoadingStateType => {
    switch (action.type) {

        case "SET_LOADING": {
            debugger
            return {...state, loading: action.SET}              //true
        }
        case "COMPLETED": {
            return {...state, loading: action.COMPLETED}               //false
        }
        default: return state;
    }
};

export type ActionType =
      LoadingAC
    | CompletedAC

export const loadingAC = (SET:boolean) => ({type:'SET_LOADING',SET} as const );
export type LoadingAC = ReturnType<typeof loadingAC>

export const completedAC = (COMPLETED:boolean)  => ({type:'COMPLETED',COMPLETED} as const );
export type CompletedAC = ReturnType<typeof completedAC>


