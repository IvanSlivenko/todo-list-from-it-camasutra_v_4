import React, {useState} from 'react';
import './App.css';
import {Todolist_test, TaskTypeTest} from "./Todolist_test";
import {AddItemForm} from "./AddItemForm";
import {AddItemForm_test} from "./AddItemForm_test";

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

export type FilterValuesType = "all" | "completed" | "active"

export type TodolistTypeTrening = {
    id: string,
    title: string,
    filter: FilterValuesType
}

export type TasksStateTypeTrening = {
    [key: string]: Array<TaskTypeTest>
}

function AppTrening() {
//--------------------------------------------------------- Data -----------

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistTypeTrening>>(
        [
            {id: todolistId1, title: "What to learn", filter: "active"},
            {id: todolistId2, title: "What to bay", filter: "completed"}

        ]
    )

    let [tasksObj, setTasks] = useState<TasksStateTypeTrening>({
        [todolistId1]: tasks_test1,
        [todolistId2]: tasks_test2
    })

    //--------------------------------------------------------- Data -----------

    const removeTasks = (id: string, todolistId: string) => {
        let tasks = tasksObj[todolistId];
        let filteredTasks = tasks.filter(t => t.id !== id);
        tasksObj[todolistId] = filteredTasks
        setTasks({...tasksObj});
    }

    function addTaskItem(title: string, isDone: boolean, newTaskPeriod: string,
                         newTaskUser: string, summ: number,
                         quantity: number, prise: number, unit: string, todolistId: string) {
        let task = {
            id: v1(),
            title: title,
            isDone: false,
            period: newTaskPeriod,
            user: newTaskUser,
            summ: summ,
            quantity: quantity,
            prise: prise,
            unit: unit

        }

        let tasks = tasksObj[todolistId];

        let newTasks = [task, ...tasks]
        tasksObj[todolistId] = newTasks;
        setTasks({...tasksObj})

    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let task = tasks.find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone;
            setTasks({...tasksObj})
        }
    }

    function changeTaskTitle(id: string, newTitle: string, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.title = newTitle;
            setTasks({...tasksObj})
        }
    }

    function changeTaskUnit(id: string, newUnit: string, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.unit = newUnit;
            setTasks({...tasksObj})
        }
    }

    function changeTaskPeriod(id: string, newPeriod: string, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.period = newPeriod;
            setTasks({...tasksObj})
        }
    }

    function changeTaskQuantity(id: string, newQuantity: number, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.quantity = newQuantity;
            task.summ = task.quantity * task.prise
            setTasks({...tasksObj})
        }
    }

    function changeTaskPrise(id: string, newPrise: number, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.prise = newPrise;
            task.summ = task.quantity * task.prise
            setTasks({...tasksObj})
        }
    }

    function changeTaskSumm(id: string, newSumm: number, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.summ = newSumm;
            setTasks({...tasksObj})
        }
    }

    function changeTaskUser(id: string, newUser: string, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.user = newUser;
            setTasks({...tasksObj})
        }
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        // setFilter(value);
        let todolist = todolists.find(t => t.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }

    }



    let removeTodolist = (todolistId: string) => {
        let filteredTodolist = todolists.filter(t => t.id !== todolistId)
        setTodolists(filteredTodolist)
        delete tasksObj[todolistId]
        setTasks({...tasksObj});
    }
    let changeTodolistTitle = (id: string, newTitle: string) => {
        const todolist = todolists.find(tl => tl.id === id)
        if (todolist) {
            todolist.title = newTitle
            setTodolists([...todolists]);
        }
    }

    function addTodolist(title: string) {
        let todolist: TodolistTypeTrening = {
            id: v1(),
            filter: 'all',
            title: title
        }
        setTodolists([todolist, ...todolists])
        setTasks({
            ...tasksObj,
            [todolist.id]: []
        })
    }

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
                <Grid container style={{padding:'10px'}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={1}>
                    {
                        todolists.map(tl => {
                            let taskForTodolist = tasksObj[tl.id];
                            // ---------------------------------------------- filtered script home
                            if (tl.filter === "active") {
                                taskForTodolist = taskForTodolist.filter(t => t.isDone === false)
                            }
                            if (tl.filter === "completed") {
                                taskForTodolist = taskForTodolist.filter(t => t.isDone === true)
                            }
                            return <Grid item>
                                <Paper elevation={3}>
                                    <Todolist_test
                                        key={tl.id}
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={taskForTodolist}
                                        removeTasks={removeTasks}
                                        changeFilter={changeFilter}
                                        addTask={() => {
                                        }}
                                        addTaskItem={addTaskItem}
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
}

export default AppTrening;
