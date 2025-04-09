import {TasksStateType, TodolistType} from "../App";
import {addTodolistTreningAC, todolistsReducerTrening} from "./todolists-reduser-trening";
import {tasksReducerTrening} from "./tasks-reduser-trening";

test('ids should be eguals',()=> {

    const startTasksState: TasksStateType={};
    const startTodolistState: Array<TodolistType>=[];

    const action = addTodolistTreningAC("new todolist")

    const endTasksState = tasksReducerTrening(startTasksState, action)
    const endTodolistState = todolistsReducerTrening(startTodolistState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistState[0].id;

    expect(idFromTasks).toBe(action.todolistId);
    expect(idFromTodolists).toBe(action.todolistId);
});