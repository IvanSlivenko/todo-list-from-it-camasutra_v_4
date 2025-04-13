import { createStore, combineReducers } from 'redux';
import {tasksReducer} from './tasks-reduser'
import {todolistsReducer} from './todolists-reduser'
import {TasksStateType, TodolistType} from "../AppWithRedux";



const rootReducer = combineReducers({
  todolists: todolistsReducer,
  tasks: tasksReducer
})

// type AppRootState = {
//     todolists: Array<TodolistType>,
//     tasks: TasksStateType
// }

type AppRootState  = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store;