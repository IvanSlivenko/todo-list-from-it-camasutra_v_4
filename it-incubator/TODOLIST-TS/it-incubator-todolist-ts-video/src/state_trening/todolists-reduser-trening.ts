import {FilterValuesType, TodolistType} from "../App-trening";
import {v1} from "uuid";


// type ActionType = {
//     type: string
//     [key: string]: any
// }

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}

export type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
    todolistId: string
}

export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}

export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: FilterValuesType
}

export type ActionsType = RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType


export const todolistsReducerTrening = (state: Array<TodolistType>, action: ActionsType): Array<TodolistType> => {

    switch (action.type) {
        case "REMOVE-TODOLIST":
            return state.filter(tl=>tl.id != action.id)

        case  'ADD-TODOLIST': {
            return [...state, {
                id : action.todolistId,
                title: action.title,
                filter: "all"
            }]
        }

        case "CHANGE-TODOLIST-TITLE" : {
            const todolist = state.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.title = action.title

            }
            return [...state]

        }
        case "CHANGE-TODOLIST-FILTER": {
            const todolist = state.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.filter = action.filter

            }
            return [...state]
        }

        default:
            throw new Error("I don't understand this action type")
    }
}

export const removeTodolistTreningAC = (todolistId: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', id: todolistId}
}

export const addTodolistTreningAC = (newTodolistTitle: string): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', title: newTodolistTitle, todolistId: v1() }
}

export const changeTodolistTitleTreningAC = (title: string, todolistId: string): ChangeTodolistTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', title: title, id: todolistId}
}

export const changeTodolistFilterTreningAC = (filter: FilterValuesType, id: string): ChangeTodolistFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER', filter: filter, id: id}
}