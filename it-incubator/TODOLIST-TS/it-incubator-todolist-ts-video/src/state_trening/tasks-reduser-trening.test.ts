import {tasksReducerTrening,
    removeTaskTreningAC,
    addTaskTreningAC,
    changeTaskStatuTreningsAC,
    changeTaskTitleTreningAC
} from "./tasks-reduser-trening";
import {TasksStateType} from '../App'
import {addTodolistTreningAC, removeTodolistTreningAC} from "../state_trening/todolists-reduser-trening";




test('correct task should be deleted from correct array', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
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
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ]
    };

    const action = addTaskTreningAC("juce", "todolistId2");

    const endState = tasksReducerTrening(startState, action);

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(4);
    expect(endState["todolistId2"][0].id).toBeDefined();
    expect(endState["todolistId2"][0].title).toBe("juce");
    expect(endState["todolistId2"][0].isDone).toBe(false);

});

test('status specified task should be changed', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ]
    };


    const action = changeTaskStatuTreningsAC("2", false, "todolistId2");

    const endState = tasksReducerTrening(startState, action);

    expect(endState["todolistId2"][1].isDone).toBe(false);
    expect(endState["todolistId1"][1].isDone).toBe(true);


});

test('title specified task should be changed', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ]
    };

    const action = changeTaskTitleTreningAC("2", "Milkyway", "todolistId2");
    const endState = tasksReducerTrening(startState, action);

    expect(endState["todolistId2"][1].title).toBe("Milkyway");
    expect(endState["todolistId1"][1].title).toBe("JS");

});

test('new property with new array  should be added when new todolist is added', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ]
    };



    const action = addTodolistTreningAC("new todolist");

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
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ]
    };

    const action = removeTodolistTreningAC("todolistId2");
    const endState = tasksReducerTrening(startState, action)

    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).toBeUndefined();
})


