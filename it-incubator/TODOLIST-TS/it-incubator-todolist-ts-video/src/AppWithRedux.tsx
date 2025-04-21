import React, {ChangeEvent, useCallback, useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {AddItemForm} from "./AddItemForm";
import {v1} from 'uuid'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import {
    todolistsReducer,
    changeTodolistFilterAC,
    addTodolistAC,
    changeTodolistTitleAC, removeTodolistAC
} from "./state/todolists-reduser";
import {addTaskAC, changeTaskStatusAC, removeTaskAC, tasksReducer,
changeTaskTitleAC
} from './state/tasks-reduser';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./state/store";



export type FilterValuesType = "all" | "completed" | "active"

export type TodolistType = {
    id: string,
    title: string,
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

// const Fake = React.memo( () => {
//     console.log("FAKE")
//     const arr=  useSelector<AppRootState, Array<TaskType>>(state=> state.tasks.count)
//     return <h1>{arr.length}</h1>
// });

function AppWithRedux() {
    // console.log("----------------- AppWithRedux is called")
    // let todolistId1 = v1();
    // let todolistId2 = v1();

    const dispatch = useDispatch()
    const todolists=  useSelector<AppRootState, Array<TodolistType>>(state=> state.todolists)
    const tasksObj=  useSelector<AppRootState, TasksStateType>(state=> state.tasks)

    // let [todolists] = useReducer(todolistsReducer,
    //
    //     [
    //         {id: todolistId1, title: "What to learn", filter: "all"},
    //         {id: todolistId2, title: "What to bay", filter: "all"}
    //     ]
    // )
    // let [tasksObj] = useReducer(tasksReducer, {
    //     [todolistId1]: [
    //         {id: v1(), title: "CSS", isDone: true},
    //         {id: v1(), title: "JS", isDone: true},
    //         {id: v1(), title: "React", isDone: false}
    //     ],
    //     [todolistId2]: [
    //         {id: v1(), title: "nodeJs", isDone: true},
    //         {id: v1(), title: "MatirialUA", isDone: true},
    //         {id: v1(), title: "Redux", isDone: false}
    //     ]
    // })

    const removeTask=useCallback((id: string, todolistId: string)=> {
        const action = removeTaskAC(id, todolistId);
        dispatch(action);

    },[dispatch]);
    const addTask= useCallback((title: string, todolistId: string)=> {
        const action = addTaskAC(title, todolistId )
        dispatch(action)
    },[dispatch]);
    const changeStatus= useCallback((taskId: string, isDone: boolean, todolistId: string)=> {
        const action = changeTaskStatusAC(taskId, isDone, todolistId)
        dispatch(action);
    },[dispatch]);
    const changeTaskTitle = useCallback((id: string, newTitle: string, todolistId: string)=> {
        const action = changeTaskTitleAC(id, newTitle,todolistId);
        dispatch(action);
    },[dispatch]);

    const changeFilter=useCallback((value: FilterValuesType, todolistId: string)=> {
        dispatch(changeTodolistFilterAC(value, todolistId));
    },[dispatch]);
    let removeTodolist = useCallback((todolistId: string) => {
        dispatch(removeTodolistAC(todolistId));
    },[]);
    let changeTodolistTitle = useCallback((id: string, newTitle: string) => {
        dispatch(changeTodolistTitleAC(id, newTitle));
    },[dispatch]);

    const  addTodolist = useCallback((title: string)=> {
        const newTodolistId = v1();
        dispatch(addTodolistAC(title, newTodolistId));

    }, [dispatch]);

    return (
        <div className="App">

            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                <Grid container style={{padding: '10px'}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>

                <Grid container spacing={2}>
                    {
                        todolists?.map((tl: TodolistType) => {
                            let tasksForTodolist = tasksObj[tl.id];

                            return <Grid item
                                         key={tl.id} // Додаємо унікальний ключ
                                         style={{marginBottom: '10px'}}
                            >
                                <Paper
                                    elevation={3}
                                    style={{padding: '10px'}}
                                >
                                    <Todolist
                                        // key={tl.id} // Додаємо унікальний ключ
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasksForTodolist}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeTaskStatus={changeStatus}
                                        changeTaskTitle={changeTaskTitle}
                                        filter={tl.filter}
                                        removeTodolist={removeTodolist}
                                        changeTodolistTitle={changeTodolistTitle}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>

            </Container>


        </div>

    );
};

export default AppWithRedux;
