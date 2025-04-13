import {FilterValuesType, TasksStateTypeTrening, TodolistTypeTrening} from "../App-trening";

import {v1} from 'uuid'
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reduser-trening"



export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    todolistId: string
    taskId: string
}

export type AddTaskActionType = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}

export type AddTaskActionTreningType = {
    type: 'ADD-TASK-TRENING'
    title: string
    isDone: boolean
    period: string
    user: string
    summ: number
    quantity: number
    prise: number
    unit: string
    todolistId: string
}

export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    isDone: boolean
    todolistId: string
    taskId: string

}

export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    taskId: string
    todolistId: string
    title: string
}
export type ChangeTaskUnitActionType = {
    type: 'CHANGE-TASK-UNIT'
    taskId: string
    todolistId: string
    unit: string
}
export type ChangeTaskPeriodActionType = {
    type: 'CHANGE-TASK-PERIOD'
    taskId: string
    todolistId: string
    period: string
}
export type ChangeTaskQuantityActionType = {
    type: 'CHANGE-TASK-QUANTITY'
    taskId: string
    todolistId: string
    quantity: number
}
export type ChangeTaskPriceActionType = {
    type: 'CHANGE-TASK-PRICE'
    taskId: string
    todolistId: string
    price: number
}


export type ChangeTaskSummActionType = {
    type: 'CHANGE-TASK-SUMM'
    taskId: string
    todolistId: string
    summ: number
}
export type ChangeTaskUserActionType = {
    type: 'CHANGE-TASK-USER'
    taskId: string
    todolistId: string
    user: string
}


export type ActionsTypeTrening = RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType
    | AddTodolistActionType
    | AddTaskActionTreningType
    | RemoveTodolistActionType
    | ChangeTaskUnitActionType
    | ChangeTaskPeriodActionType
    | ChangeTaskQuantityActionType
    | ChangeTaskPriceActionType
    | ChangeTaskSummActionType
    | ChangeTaskUserActionType


export const tasksReducerTrening = (state: TasksStateTypeTrening, action: ActionsTypeTrening): TasksStateTypeTrening => {

    switch (action.type) {
        case  'REMOVE-TASK': {
            const stateCopy = {...state};
            const tasks = state[action.todolistId];
            const filteredTasks = tasks.filter(t => t.id !== action.taskId)
            stateCopy[action.todolistId] = filteredTasks;
            return stateCopy;
        }
        case  'ADD-TASK-TRENING': {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todolistId]
            if(!tasks) return state;
            const newTask = {
                id: v1(),
                title: action.title,
                isDone: false,
                period: action.period,
                user: action.user,
                summ: action.summ,
                quantity: action.quantity,
                prise: action.prise,
                unit: action.unit
            };
            const newTasks = [newTask, ...tasks];
            stateCopy[action.todolistId] = newTasks;
            return stateCopy;

        }
        case 'CHANGE-TASK-STATUS': {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todolistId]
            let task = tasks.find(t => t.id === action.taskId)
            if (task) {
                task.isDone = action.isDone;

            }
            return stateCopy
        }
        case 'CHANGE-TASK-TITLE': {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todolistId]
            let task = tasks.find(t => t.id === action.taskId)
            if (task) {
                task.title = action.title;

            }
            return stateCopy
        }
        case 'CHANGE-TASK-UNIT': {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todolistId]
            let task = tasks.find(t => t.id === action.taskId)
            if (task) {
                task.unit = action.unit;

            }
            return stateCopy
        }
        case 'CHANGE-TASK-PERIOD': {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todolistId]
            let task = tasks.find(t => t.id === action.taskId)
            if (task) {
                task.period = action.period;

            }
            return stateCopy
        }
        case 'CHANGE-TASK-QUANTITY': {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todolistId]
            let task = tasks.find(t => t.id === action.taskId)
            if (task) {
                task.quantity = action.quantity;
                task.summ=task.quantity*task.prise

            }
            return stateCopy
        }
        case 'CHANGE-TASK-PRICE': {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todolistId]
            let task = tasks.find(t => t.id === action.taskId)
            if (task) {
                task.prise = action.price;
                task.summ=task.quantity*task.prise

            }
            return stateCopy
        }
        case 'CHANGE-TASK-SUMM': {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todolistId]
            let task = tasks.find(t => t.id === action.taskId)
            if (task) {
                task.summ = action.summ;

            }
            return stateCopy
        }
        case 'CHANGE-TASK-USER': {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todolistId]
            let task = tasks.find(t => t.id === action.taskId)
            if (task) {
                task.user = action.user;

            }
            return stateCopy
        }


        case 'ADD-TODOLIST': {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todolistId]=[];
            if (!tasks) return state;

            return stateCopy
        }
        case 'REMOVE-TODOLIST': {
            const stateCopy = {...state};
            delete stateCopy[action.id];
            return stateCopy;
        }

        default:
            throw new Error("I don't understand this action type")
    }
}

export const removeTaskTreningAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId, todolistId, }
}

export const addTaskTreningCustAC = (
    title: string,
    isDone: boolean,
    period: string,
    user: string,
    summ: number,
    quantity: number,
    prise: number,
    unit: string,
    todolistId: string,
): AddTaskActionTreningType => {
    return {
        type: 'ADD-TASK-TRENING',
        title,
        isDone,
        period,
        user,
        summ,
        quantity,
        prise,
        unit,
        todolistId,
    }
}

export const changeTaskStatusTreningsAC = (taskId: string,
                                           isDone: boolean,
                                           todolistId: string): ChangeTaskStatusActionType => {
    return {type: 'CHANGE-TASK-STATUS', isDone, todolistId, taskId}
}
export const changeTaskTitleTreningAC = (taskId: string,
                                         title: string,
                                         todolistId: string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', title, todolistId, taskId}
}
export const changeTaskUnitTreningAC = (taskId: string,
                                        unit: string,
                                        todolistId: string): ChangeTaskUnitActionType => {
    return {type: 'CHANGE-TASK-UNIT', unit, todolistId, taskId}
}
export const changeTaskPeriodTreningAC = (taskId: string,
                                          period: string,
                                          todolistId: string): ChangeTaskPeriodActionType => {
    return {type: 'CHANGE-TASK-PERIOD', period, todolistId, taskId}
}
export const changeTaskQuantityTreningAC = (taskId: string,
                                            quantity: number,
                                            todolistId: string): ChangeTaskQuantityActionType => {
    return {type: 'CHANGE-TASK-QUANTITY', quantity, todolistId, taskId}
}
export const changeTaskPriceTreningAC = (taskId: string,
                                         price: number,
                                         todolistId: string): ChangeTaskPriceActionType => {
    return {type: 'CHANGE-TASK-PRICE', price: price, todolistId, taskId}
}
export const changeTaskSummTreningAC = (taskId: string,
                                        summ: number,
                                        todolistId: string): ChangeTaskSummActionType => {
    return {type: 'CHANGE-TASK-SUMM', summ, todolistId, taskId}
}
export const changeTaskUserTreningAC = (taskId: string,
                                        user: string,
                                        todolistId: string): ChangeTaskUserActionType => {
    return {type: 'CHANGE-TASK-USER', user, todolistId, taskId}
}



