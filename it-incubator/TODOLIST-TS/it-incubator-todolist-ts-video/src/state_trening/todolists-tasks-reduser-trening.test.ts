import {TasksStateType, TodolistType} from "../App";
import {addTodolistAC, todolistsReducerTrening} from "./todolists-reduser-trening";
import {tasksReducer} from "./tasks-reduser-trening";

test('ids should be eguals',()=> {

    const startTasksState: TasksStateType={};
    const startTodolistState: Array<TodolistType>=[];

    const action = addTodolistAC("new todolist")

    const endTasksState = tasksReducer(startTasksState, action)
    const endTodolistState = todolistsReducerTrening(startTodolistState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistState[0].id;

    expect(idFromTasks).toBe(action.todolistId);
    expect(idFromTodolists).toBe(action.todolistId);
});