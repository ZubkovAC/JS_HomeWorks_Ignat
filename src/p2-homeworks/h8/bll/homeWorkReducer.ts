type homeWorkReducerType = {
    _id: number
    name: string
    age: number
}

export const homeWorkReducer = (state: homeWorkReducerType[], action: ActionType): homeWorkReducerType[] => {
    switch (action.type) {
        case "sort": {
            let copy = [...state]
            if (action.payload === "up"){
                copy.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                });
                return  copy
            }else if (action.payload === "down"){
                copy.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                });
                return  copy.reverse()
            }
        }

        case "check": {
            return state.filter(t => t.age >= action.payload ? {...t} : '')
        }

        default:
            return state
    }
};

export const sortUp = (payload: string) => ({type: 'sort', payload} as const)
export const sortDown = (payload: string) => ({type: 'sort', payload} as const)
export const sortCheck = (payload: number) => ({type: 'check', payload} as const)


type ActionType =
    SortUp | SortDown | SortCheck


export type SortUp = ReturnType<typeof sortUp>
export type SortDown = ReturnType<typeof sortDown>
export type SortCheck = ReturnType<typeof sortCheck>