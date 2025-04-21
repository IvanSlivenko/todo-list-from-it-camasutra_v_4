import {FilterValuesType, TasksStateType, TodolistType} from "../App";
import {v1} from 'uuid'
import {AddTodolistActionType, RemoveTodolistActionType, todolistId1, todolistId2} from "./todolists-reduser"
import {useReducer} from "react";

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

export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    taskId: string
    todolistId: string
    isDone: boolean
}

export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    taskId: string
    todolistId: string
    title: string
}

export type ActionsType = RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType
    | AddTodolistActionType
    | RemoveTodolistActionType

const initialState: TasksStateType = {

    count: []
    // [todolistId1]: [
    //     {id: v1(), title: "CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "React", isDone: false}
    // ],
    // [todolistId2]: [
    //     {id: v1(), title: "nodeJs", isDone: true},
    //     {id: v1(), title: "MatirialUA", isDone: true},
    //     {id: v1(), title: "Redux", isDone: false}
    // ]
}



export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {

    switch (action.type) {
        case  'REMOVE-TASK': {
            const stateCopy = {...state};
            const tasks = state[action.todolistId];
            if (!tasks) return state;
            const filteredTasks = tasks.filter(t => t.id !== action.taskId)
            stateCopy[action.todolistId] = filteredTasks;
            return stateCopy;
        }
        case  'ADD-TASK': {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todolistId]
            if (!tasks) return state;
            const newTask = {
                id: v1(),
                title: action.title,
                isDone: false
            };
            const newTasks = [newTask, ...tasks];
            stateCopy[action.todolistId] = newTasks;
            return stateCopy;

        }
        case 'CHANGE-TASK-STATUS': {
            const stateCopy = {...state};
            const todolistTasks = stateCopy[action.todolistId]

            stateCopy[action.todolistId] = todolistTasks.map(t => t.id === action.taskId
                ? {...t, isDone: action.isDone} : t );

            // if (!todolistTasks) return state;
            // let task = todolistTasks.find(t => t.id === action.taskId)
            // if (task) {
            //     let newTask = {...task, isDone: action.isDone}
            //     // task.isDone = action.isDone;
            //
            // }
            // stateCopy[action.todolistId] = [...todolistTasks]
            return stateCopy
        }
        case 'CHANGE-TASK-TITLE': {
            const stateCopy = {...state};
            const todolistTasks = stateCopy[action.todolistId]

            stateCopy[action.todolistId] = todolistTasks.map(t => t.id === action.taskId
                ? {...t, title: action.title} : t );

            // if (!todolistTasks) return state;
            // let task = todolistTasks.find(t => t.id === action.taskId)
            // if (task) {
            //     task.title = action.title;
            //
            // }
            // stateCopy[action.todolistId] = [...todolistTasks]
            return stateCopy
        }
        case 'ADD-TODOLIST': {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todolistId]=[];

            return stateCopy
        }

        case 'REMOVE-TODOLIST': {
            const stateCopy = {...state};
            delete stateCopy[action.id];
            return stateCopy;
        }

        default:
            // throw new Error("I don't understand this action type")
            return state;
    }

}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', todolistId, taskId}
}

export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return {type: 'ADD-TASK', title, todolistId}
}

export const changeTaskStatusAC = (taskId: string,
                                   isDone: boolean,
                                   todolistId: string): ChangeTaskStatusActionType => {
    return {type: 'CHANGE-TASK-STATUS', isDone, todolistId, taskId}
}

export const changeTaskTitleAC = (taskId: string,
                                  title: string,
                                  todolistId: string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', title, todolistId, taskId}
}





