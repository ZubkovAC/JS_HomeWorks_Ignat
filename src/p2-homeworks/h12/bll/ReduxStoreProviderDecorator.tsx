import React from "react";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {loadingReducer} from "../../h10/bll/loadingReducer";
import {colorReducer} from "./themeReducer";


const ReducerStoryBook = combineReducers({
    loading: loadingReducer,
    color:colorReducer,

});
const initilStateColor ={
    theme:'some'
}
export const StoryBook = createStore(ReducerStoryBook)
export type StoryBookType = typeof StoryBook

export const ReduxStoreProviderDecorator = (storyFn:any)=>{
    return <Provider store={StoryBook}>{storyFn()}</Provider>
}