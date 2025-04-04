import {v1} from 'uuid'

import {TodolistType, FilterValuesType} from '../App_test'
import {
    removeTodolistAC,
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    todolistsReducerTrening} from "../state_trening/todolists-reduser-trening";



test('correct todolist should be removed', ()=> {
    let todolistId1=v1();
    let todolistId2=v1();

    const startState: Array<TodolistType> =[
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    // const endState = todolistsReducerTrening(startState, {
    //     type: 'REMOVE-TODOLIST',
    //     id: todolistId1})

    const endState = todolistsReducerTrening(startState, removeTodolistAC(todolistId1))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
})

test('correct todolist should be added', ()=> {
    let todolistId1=v1();
    let todolistId2=v1();

    let newTodolistTitle= "New Todolist";

    const startState: Array<TodolistType> =[
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    // const endState = todolistsReducerTrening(startState, {
    //     type: 'ADD-TODOLIST',
    //     title: newTodolistTitle})

    const endState = todolistsReducerTrening(startState, addTodolistAC(newTodolistTitle))

    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodolistTitle);
    expect(endState[2].filter).toBe("all");

})

test('correct todolist should change its name', ()=> {
    let todolistId1=v1();
    let todolistId2=v1();

    let newTodolistTitle= "New Todolist";

    const startState: Array<TodolistType> =[
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    //  = {
    //     type: 'CHANGE-TODOLIST-TITLE' as const,
    //     id: todolistId2,
    //     title: newTodolistTitle}
    //
    // const endState = todolistsReducerTrening(startState, action )

    const action = changeTodolistTitleAC(newTodolistTitle, todolistId2);


    const endState = todolistsReducerTrening(startState, action )


    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
})

test('correct filter of todolist should be changed', ()=> {
    let todolistId1=v1();
    let todolistId2=v1();


    let newFilter  : FilterValuesType = "completed";

    const startState: Array<TodolistType> =[
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const action = changeTodolistFilterAC(newFilter, todolistId2)
        // {
        //
        // type: 'CHANGE-TODOLIST-FILTER' as const,
        // id: todolistId2,
        // filter: newFilter}

    const endState = todolistsReducerTrening(startState, action )

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
})



