import {TasksStateType, TodolistType} from "../App";
import {addTodolistAC, todolistsReducer} from "./todolists-reduser";
import {tasksReducer} from "./tasks-reduser";
import {v1} from 'uuid'

test('ids should be eguals',()=> {

    const startTasksState: TasksStateType={};
    const startTodolistState: Array<TodolistType>=[];

    const newTodolistId = v1();
    const action = addTodolistAC("new todolist", newTodolistId)

    const endTasksState = tasksReducer(startTasksState, action)
    const endTodolistState = todolistsReducer(startTodolistState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistState[0].id;

    expect(idFromTasks).toBe(action.todolistId);
    expect(idFromTodolists).toBe(action.todolistId);
});