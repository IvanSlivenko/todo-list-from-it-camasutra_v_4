import { createStore, combineReducers } from 'redux';
import {tasksReducerTrening} from "./tasks-reduser-trening";
import {todolistsReducerTrening} from "../state_trening/todolists-reduser-trening";
import {TasksStateTypeTrening, TodolistTypeTrening} from "../AppWithReduxTrening";

const rootReducerTrening = combineReducers({
    todolists: todolistsReducerTrening,
    tasks: tasksReducerTrening
})

// type AppRooteStateTrening = {
//     todolists: Array<TodolistTypeTrening> ,
//     tasks: TasksStateTypeTrening
// }

type AppRooteStateTrening = ReturnType<typeof rootReducerTrening>


export const storeTrening = createStore(rootReducerTrening)

// @ts-ignore
window.store = storeTrening;

