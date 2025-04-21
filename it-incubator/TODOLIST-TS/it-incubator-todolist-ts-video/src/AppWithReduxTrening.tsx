import React, {useCallback, useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {TodolistTrening, TaskTypeTrening} from "./TodolistTrening";
import {AddItemForm} from "./AddItemForm";
import {AddItemFormTrening} from "./AddItemFormTrening";

import {tasks_test1, tasks_test2} from "./tasks_test";
import {v1} from "uuid";

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
    addTodolistTreningAC,
    changeTodolistFilterTreningAC, changeTodolistTitleTreningAC,
    removeTodolistTreningAC,
    todolistsReducerTrening
} from "./state_trening/todolists-reduser-trening";
import {
    addTaskTreningCustAC, removeTaskTreningAC, tasksReducerTrening,
    changeTaskStatusTreningsAC, changeTaskTitleTreningAC, changeTaskUnitTreningAC,
    changeTaskPeriodTreningAC, changeTaskQuantityTreningAC, changeTaskPriceTreningAC,
    changeTaskSummTreningAC, changeTaskUserTreningAC

} from "./state_trening/tasks-reduser-trening";
import {useDispatch, useSelector} from "react-redux";
import {AppRooteStateTrening} from "./state_trening/storeTrening";


export type FilterValuesType = "all" | "completed" | "active"

export type TodolistTypeTrening = {
    id: string,
    title: string,
    filter: FilterValuesType
}


export type TasksStateTypeTrening = {
    [key: string]: Array<TaskTypeTrening>
}

function AppWithReduxTrening() {
//--------------------------------------------------------- Data -----------

    // let todolistId1 = v1();
    // let todolistId2 = v1();

    const dispatchTrening = useDispatch()
    const todolistsTrening = useSelector<AppRooteStateTrening, Array<TodolistTypeTrening>>(state=>state.todolists)
    const tasksObjTrening = useSelector<AppRooteStateTrening, TasksStateTypeTrening>(state=>state.tasks)

    // let [todolists] = useReducer(todolistsReducerTrening,
    //
    //     [
    //         {id: todolistId1, title: "What to learn", filter: "active"},
    //         {id: todolistId2, title: "What to bay", filter: "completed"}
    //     ]
    // )
    // let [tasksObj] = useReducer(tasksReducerTrening, {
    //     [todolistId1]: tasks_test1,
    //     [todolistId2]: tasks_test2
    // })

    const removeTasks = useCallback( (id: string, todolistId: string) => {
        const action = removeTaskTreningAC(id, todolistId)
        dispatchTrening(action);
    },[dispatchTrening]);
    const addTaskTrening = useCallback( (title: string, isDone: boolean, newTaskPeriod: string,
                         newTaskUser: string, summ: number,
                         quantity: number, prise: number, unit: string, todolistId: string)=> {

        const action = addTaskTreningCustAC(
            title, isDone, newTaskPeriod, newTaskUser, summ,
            quantity, prise, unit, todolistId)
        dispatchTrening(action);
    },[]);

    const changeStatus = useCallback((taskId: string, isDone: boolean, todolistId: string) => {
        const action = changeTaskStatusTreningsAC(taskId, isDone, todolistId);
        dispatchTrening(action);
    },[dispatchTrening]);
    const changeTaskTitle = useCallback((id: string, newTitle: string, todolistId: string) => {
        const action = changeTaskTitleTreningAC(id, newTitle, todolistId)
        dispatchTrening(action);
    },[dispatchTrening]);
    const changeTaskUnit = useCallback((id: string, newUnit: string, todolistId: string)=> {
        const action = changeTaskUnitTreningAC(id, newUnit, todolistId);
        dispatchTrening(action);
    },[dispatchTrening]);

    const changeTaskPeriod = useCallback((id: string, newPeriod: string, todolistId: string)=> {
        const action = changeTaskPeriodTreningAC(id, newPeriod, todolistId);
        dispatchTrening(action);
    },[dispatchTrening]);
    const changeTaskQuantity= useCallback( (id: string, newQuantity: number, todolistId: string) => {
        const action = changeTaskQuantityTreningAC(id, newQuantity, todolistId)
        dispatchTrening(action);
    },[dispatchTrening]);

    const changeTaskPrise = useCallback((id: string, newPrise: number, todolistId: string)=> {
        const action = changeTaskPriceTreningAC(id, newPrise, todolistId)
        dispatchTrening(action);
    },[dispatchTrening]);
    const changeTaskSumm = useCallback((id: string, newSumm: number, todolistId: string) => {
        const action = changeTaskSummTreningAC(id, newSumm, todolistId)
        dispatchTrening(action);
    },[dispatchTrening]);
    const changeTaskUser= useCallback((id: string, newUser: string, todolistId: string) => {
        const action = changeTaskUserTreningAC(id, newUser, todolistId)
        dispatchTrening(action);

    },[dispatchTrening]);
    const changeFilter = useCallback((value: FilterValuesType, todolistId: string) => {
        dispatchTrening(changeTodolistFilterTreningAC(value, todolistId));
    },[dispatchTrening]);
    let removeTodolist = useCallback( (todolistId: string) => {
        dispatchTrening(removeTodolistTreningAC(todolistId));
    },[dispatchTrening]);
    let changeTodolistTitle = useCallback( (id: string, newTitle: string) => {
        dispatchTrening(changeTodolistTitleTreningAC(id, newTitle));
    },[dispatchTrening]);
    const addTodolist = useCallback((title: string)=> {
        const newTodolistId = v1();
        dispatchTrening(addTodolistTreningAC(title, newTodolistId));


    },[dispatchTrening]);

    return (
        <div className="App_custome">


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

            <Container maxWidth="xl">
                <Grid container style={{padding: '10px'}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={1}>
                    {
                        todolistsTrening?.map((tl: TodolistTypeTrening) => {
                            let taskForTodolist = tasksObjTrening[tl.id];

                            return <Grid item
                                         key={tl.id}

                            >
                                <Paper elevation={3}>
                                    <TodolistTrening
                                        // key={tl.id}
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={taskForTodolist}
                                        removeTasks={removeTasks}
                                        changeFilter={changeFilter}
                                        // addTask={addTaskTrening}
                                        addTaskTrening={addTaskTrening}
                                        changeTaskStatus={changeStatus}
                                        changeTaskTitle={changeTaskTitle}
                                        changeTaskUnit={changeTaskUnit}
                                        changeTaskPeriod={changeTaskPeriod}
                                        changeTaskQuantity={changeTaskQuantity}
                                        changeTaskPrise={changeTaskPrise}
                                        changeTaskSumm={changeTaskSumm}
                                        changeTaskUser={changeTaskUser}

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

export default AppWithReduxTrening;
