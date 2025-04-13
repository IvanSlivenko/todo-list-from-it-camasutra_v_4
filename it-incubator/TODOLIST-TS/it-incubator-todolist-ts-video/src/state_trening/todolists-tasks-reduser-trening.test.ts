import {TasksStateTypeTrening, TodolistTypeTrening} from "../App-trening";
import {addTodolistTreningAC, todolistsReducerTrening} from "./todolists-reduser-trening";
import {tasksReducerTrening} from "./tasks-reduser-trening";
import {v1} from 'uuid'

test('ids should be eguals',()=> {

    const startTasksState: TasksStateTypeTrening={};
    const startTodolistState: Array<TodolistTypeTrening>=[];
    const newTodolistId = v1();
    const action = addTodolistTreningAC("new todolist", newTodolistId)

    const endTasksState = tasksReducerTrening(startTasksState, action)
    const endTodolistState = todolistsReducerTrening(startTodolistState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistState[0].id;

    expect(idFromTasks).toBe(action.todolistId);
    expect(idFromTodolists).toBe(action.todolistId);
});