import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from "@mui/icons-material/Settings";
import {Button} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean

}

export type TodolistType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (id: string, newTitle: string, todolistId: string) => void

    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void


}

export function Todolist(props: TodolistType){



    const onAllClickHandler = () => {
        props.changeFilter("all", props.id)
    }
    const onActiveClickHandler = () => {
        props.changeFilter("active", props.id)
    }
    const onCompletedClickHandler = () => {
        props.changeFilter("completed", props.id)
    }

    const removeTodolist = () => {
        props.removeTodolist(props.id)

    }

    const changeTodolistTitle = (newTitle: string) => {
        props.changeTodolistTitle(props.id, newTitle)
    }

    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }

    return <div className="todolist-box">
        <h3>
            {/*{props.title}*/}
            <EditableSpan title={props.title} onChange={changeTodolistTitle}/>
            {/*<button onClick={removeTodolist}>x</button>*/}
            <IconButton
                // aria-label="delete"
                onClick={removeTodolist}
            >
                <DeleteIcon/>
            </IconButton>

        </h3>

        <div>

            <AddItemForm addItem={addTask}/>
            <div>
                {
                    props.tasks.map((t) => {

                        const onRemoveHandler = () => {
                            props.removeTask(t.id, props.id)
                        }

                        const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)
                        }

                        const onChangeTitleHandler = (newValue: string) => {
                            props.changeTaskTitle(t.id, newValue, props.id)
                        }
                        return <div
                            key={t.id}
                            className={t.isDone === true ? "is-done" : ""}
                        >
                            {/*<input*/}
                            {/*    type="checkbox"*/}
                            {/*    checked={t.isDone}*/}
                            {/*    onChange={onChangeStatusHandler}*/}
                            {/*/>*/}

                            <Checkbox
                                checked={t.isDone}
                                onChange={onChangeStatusHandler}
                                icon={<FavoriteBorder/>}
                                checkedIcon={<Favorite/>}
                            />
                            <EditableSpan title={t.title} onChange={onChangeTitleHandler}/>
                            {/*<button onClick={onRemoveHandler}>x</button>*/}
                            <IconButton
                                // aria-label="delete"
                                onClick={onRemoveHandler}
                            >
                                <DeleteIcon color="inherit"/>
                            </IconButton>

                        </div>
                    })

                }
            </div>
            <Button
                variant={props.filter === "all" ? "contained" : "text"}
                color={"success"}
                className={props.filter === "all" ? "active-filter" : ""}
                onClick={onAllClickHandler}
            >All
            </Button>
            <Button
                variant={props.filter === "active" ? "contained" : "text"}
                color={"primary"}
                className={props.filter === "active" ? "active-filter" : ""}
                onClick={onActiveClickHandler}
            >Active
            </Button>
            <Button
                variant={props.filter === "completed" ? "contained" : "text"}
                color={"secondary"}
                className={props.filter === "completed" ? "active-filter" : ""}
                onClick={onCompletedClickHandler}
            >Completed
            </Button>
        </div>

    </div>
}



