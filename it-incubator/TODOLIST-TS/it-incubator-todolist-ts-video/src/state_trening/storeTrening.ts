import { createStore, combineReducers } from 'redux';
import {tasksReducerTrening} from "./tasks-reduser-trening";
import {todolistsReducerTrening} from "../state_trening/todolists-reduser-trening";


const rootReducerTrening = combineReducers({
    todolists: todolistsReducerTrening,
    tasks: tasksReducerTrening
})



export type AppRooteStateTrening = ReturnType<typeof rootReducerTrening>


export const storeTrening = createStore(rootReducerTrening)

// @ts-ignore
window.store = storeTrening;

