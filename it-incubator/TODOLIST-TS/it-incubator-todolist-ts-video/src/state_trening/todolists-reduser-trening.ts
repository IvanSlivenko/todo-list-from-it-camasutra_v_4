import {FilterValuesType, TodolistTypeTrening} from "../App-trening";
import {v1} from "uuid";




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

export let todolistId1Trening = v1();
export let todolistId2Trening = v1();

const initialStateTrening: Array<TodolistTypeTrening> = [
    {id: todolistId1Trening, title: "What to learn", filter: "active"},
    {id: todolistId2Trening, title: "What to bay", filter: "completed"}
]

export const todolistsReducerTrening = (state: Array<TodolistTypeTrening> = initialStateTrening, action: ActionsType): Array<TodolistTypeTrening> => {

    switch (action.type) {
        case "REMOVE-TODOLIST":
            return state.filter(tl=>tl.id != action.id)

        case  'ADD-TODOLIST': {
            return [{
                id : action.todolistId,
                title: action.title,
                filter: "all"
            }, ...state]
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
            // throw new Error("I don't understand this action type")
            return state;
    }
}

export const removeTodolistTreningAC = (todolistId: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', id: todolistId}
}

export const addTodolistTreningAC = (newTodolistTitle: string, todolistId: string): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', title: newTodolistTitle, todolistId}
}

export const changeTodolistTitleTreningAC = (todolistId: string, title: string): ChangeTodolistTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', id: todolistId, title: title}
}

export const changeTodolistFilterTreningAC = (filter: FilterValuesType, id: string): ChangeTodolistFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER', filter, id: id}
}