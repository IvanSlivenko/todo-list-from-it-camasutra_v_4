import {
    ChangeTodolistFilterActionType,
    todolistsReducer,
    removeTodolistAC,
    addTodolistAC,
    changeTodolistTitleAC,
    changeTodolistFilterAC
} from "./todolists-reduser";
import {v1} from 'uuid'
import {TodolistType, FilterValuesType} from '../App'


test('correct todolist should be removed', ()=> {
    let todolistId1=v1();
    let todolistId2=v1();

    const startState: Array<TodolistType> =[
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    // const endState = todolistsReducer(startState, {
    //     type: 'REMOVE-TODOLIST',
    //     id: todolistId1})

    const endState = todolistsReducer(startState, removeTodolistAC(todolistId1))

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



    const newTodolistId = v1();
    const endState = todolistsReducer(startState, addTodolistAC(newTodolistTitle, newTodolistId))

    expect(endState.length).toBe(3);
    expect(endState[0].title).toBe(newTodolistTitle);
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


    const endState = todolistsReducer(startState, changeTodolistTitleAC(todolistId2, newTodolistTitle))

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



    const action = changeTodolistFilterAC(newFilter, todolistId2 )

    const endState = todolistsReducer(startState, action )

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].filter).toBe(newFilter);
})