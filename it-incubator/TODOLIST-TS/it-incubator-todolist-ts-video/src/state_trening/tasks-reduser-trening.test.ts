import {
    tasksReducerTrening,
    removeTaskTreningAC,
    changeTaskStatusTreningsAC,
    changeTaskTitleTreningAC, addTaskTreningCustAC
} from "./tasks-reduser-trening";
import {TasksStateTypeTrening} from '../App-trening'
import {addTodolistTreningAC, removeTodolistTreningAC} from "../state_trening/todolists-reduser-trening";
import {v1} from "uuid";




test('correct task should be deleted from correct array', () => {
    const startState: TasksStateTypeTrening = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "2", title: "JS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "3", title: "React", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."}
        ],
        "todolistId2": [
            {id: "1", title: "nodeJS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "2", title: "Matirial A", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "3", title: "Redux", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."}
        ]
    };


    const action = removeTaskTreningAC("2", "todolistId2");

    const endState = tasksReducerTrening(startState, action);

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(2);
    expect(endState["todolistId2"].every(t => t.id != "2")).toBeTruthy();
    expect(endState["todolistId2"][0].id).toBe("1");
    expect(endState["todolistId2"][1].id).toBe("3");
});

test('correct task should be add from correct array', () => {
    const startState: TasksStateTypeTrening = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "2", title: "JS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "3", title: "React", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."}
        ],
        "todolistId2": [
            {id: "1", title: "nodeJS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "2", title: "Matirial A", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "3", title: "Redux", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."}
        ]
    };

    const newTodolistId = v1();
    const action = addTaskTreningCustAC("juce",false,"07.09.2006","user",1,1,1,"шт",newTodolistId );

    const endState = tasksReducerTrening(startState, action);

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(4);
    expect(endState["todolistId2"][0].id).toBeDefined();
    expect(endState["todolistId2"][0].title).toBe("juce");
    expect(endState["todolistId2"][0].isDone).toBe(false);

});

test('status specified task should be changed', () => {
    const startState: TasksStateTypeTrening = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "2", title: "JS", isDone: true, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "3", title: "React", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."}
        ],
        "todolistId2": [
            {id: "1", title: "nodeJS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "2", title: "Matirial A", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "3", title: "Redux", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."}
        ]
    };


    const action = changeTaskStatusTreningsAC("2", false, "todolistId2");

    const endState = tasksReducerTrening(startState, action);

    expect(endState["todolistId2"][1].isDone).toBe(false);
    expect(endState["todolistId1"][1].isDone).toBe(true);


});

test('title specified task should be changed', () => {
    const startState: TasksStateTypeTrening = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "2", title: "JS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "3", title: "React", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."}
        ],
        "todolistId2": [
            {id: "1", title: "nodeJS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "2", title: "Matirial A", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "3", title: "Redux", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."}
        ]
    };

    const action = changeTaskTitleTreningAC("2", "Milkyway", "todolistId2");
    const endState = tasksReducerTrening(startState, action);

    expect(endState["todolistId2"][1].title).toBe("Milkyway");
    expect(endState["todolistId1"][1].title).toBe("JS");

});

test('new property with new array  should be added when new todolist is added', () => {
    const startState: TasksStateTypeTrening = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "2", title: "JS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "3", title: "React", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."}
        ],
        "todolistId2": [
            {id: "1", title: "nodeJS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "2", title: "Matirial A", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "3", title: "Redux", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."}
        ]
    };


    const newTodolistId = v1();
    const action = addTodolistTreningAC("new todolist", newTodolistId);

    const endState = tasksReducerTrening(startState, action);


    const keys = Object.keys(endState);
    const newKey = keys.find(k=> k != "todolistId1" && k != "todolistId2");
    if(!newKey){
        throw Error("new key should be added")
    }


    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);


});

test('property with todolist shoul be deleted',()=>{
    const startState: TasksStateTypeTrening = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "2", title: "JS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "3", title: "React", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."}
        ],
        "todolistId2": [
            {id: "1", title: "nodeJS", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "2", title: "Matirial A", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."},
            {id: "3", title: "Redux", isDone: false, period: "12-03-2025", user: "test", summ: 100, quantity: 1, prise: 100, unit: "шт."}
        ]
    };

    const action = removeTodolistTreningAC("todolistId2");
    const endState = tasksReducerTrening(startState, action)

    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).toBeUndefined();
})


