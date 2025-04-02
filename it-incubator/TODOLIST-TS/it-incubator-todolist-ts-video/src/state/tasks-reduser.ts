import {FilterValuesType, TasksStateType, TodolistType} from "../App";
import {v1} from 'uuid'

export type Action1Type = {
    type: '1',
    id: string
}

export type Action2Type = {
    type: '2',
    title: string
}



export type ActionsType = Action1Type
    | Action2Type


export const tasksReducer = (state: TasksStateType, action: ActionsType): Array<TodolistType> => {

    switch (action.type) {

        case  '1': {
            return state.filter(tl => tl.id != action.id)
        }

        case  '2': {
            return [...state, {
                id: v1(),
                title: action.title,
                filter: "all"
            }]
        }


        default:
            throw new Error("I don't understand this action type")
    }
}

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', id: todolistId}
}

export const addTodolistAC = (title: string): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', title: title}
}

export const changeTodolistTitleAC = (title: string, id: string): ChangeTodolistTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', title: title, id: id}
}
export const changeTodolistFilterAC = (filter: FilterValuesType, id: string): ChangeTodolistFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER', filter: filter, id: id}
}