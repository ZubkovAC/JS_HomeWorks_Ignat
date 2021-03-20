import {loadingReducer} from "./loadingReducer";
import { combineReducers, createStore} from "redux";
import {colorReducer} from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    color:colorReducer,

});

const store = createStore(reducers);

export default store

export type AppStoreType = ReturnType<typeof reducers>
export type AppStateType = typeof store
// @ts-ignore
window.store = store; // for dev
