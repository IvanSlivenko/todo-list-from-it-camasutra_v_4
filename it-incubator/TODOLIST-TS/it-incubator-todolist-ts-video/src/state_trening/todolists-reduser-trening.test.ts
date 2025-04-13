import {v1} from 'uuid'

import {TodolistTypeTrening, FilterValuesType} from '../App-trening'
import {
    removeTodolistTreningAC,
    addTodolistTreningAC,
    changeTodolistFilterTreningAC,
    changeTodolistTitleTreningAC,
    todolistsReducerTrening} from "../state_trening/todolists-reduser-trening";



test('correct todolist should be removed', ()=> {
    let todolistId1=v1();
    let todolistId2=v1();

    const startState: Array<TodolistTypeTrening> =[
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    // const endState = todolistsReducerTrening(startState, {
    //     type: 'REMOVE-TODOLIST',
    //     id: todolistId1})

    const endState = todolistsReducerTrening(startState, removeTodolistTreningAC(todolistId1))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
})

test('correct todolist should be added', ()=> {
    let todolistId1=v1();
    let todolistId2=v1();

    let newTodolistTitle= "New Todolist";

    const startState: Array<TodolistTypeTrening> =[
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    // const endState = todolistsReducerTrening(startState, {
    //     type: 'ADD-TODOLIST',
    //     title: newTodolistTitle})
    const newTodolistId = v1();
    const endState = todolistsReducerTrening(startState, addTodolistTreningAC(newTodolistTitle, newTodolistId))

    expect(endState.length).toBe(3);
    expect(endState[0].title).toBe(newTodolistTitle);
    expect(endState[2].filter).toBe("all");

})

test('correct todolist should change its name', ()=> {
    let todolistId1=v1();
    let todolistId2=v1();

    let newTodolistTitle= "New Todolist";

    const startState: Array<TodolistTypeTrening> =[
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]



    const action = changeTodolistTitleTreningAC(todolistId2, newTodolistTitle);


    const endState = todolistsReducerTrening(startState, action )


    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
})

test('correct filter of todolist should be changed', ()=> {
    let todolistId1=v1();
    let todolistId2=v1();


    let newFilter  : FilterValuesType = "completed";

    const startState: Array<TodolistTypeTrening> =[
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const action = changeTodolistFilterTreningAC(newFilter, todolistId2)


    const endState = todolistsReducerTrening(startState, action )

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
})



