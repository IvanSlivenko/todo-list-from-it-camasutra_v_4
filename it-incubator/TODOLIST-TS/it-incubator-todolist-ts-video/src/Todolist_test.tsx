import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./App-trening";
import './Todolist_test.css'
// import {AddItemForm} from "./AddItemForm_test";
import {AddItemForm_test} from "./AddItemForm_test";
import {
    EditableSpan_test,
    EditableSpanPeriod,
    EditableSpanPrise,
    EditableSpanQuantity,
    EditableSpanSumm,
    EditableSpanUnit,
    EditableSpanUser,
    EditableSpanCounter
} from "./EditableSpan_test";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button} from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Paper from "@mui/material/Paper";


export type TaskTypeTest = {
    id: string,
    title: string,
    isDone: boolean,
    period: string,
    user: string,
    summ: number,
    quantity: number,
    prise: number
    unit: string
}

export type TodolistTypeTrening = {
    id: string,
    title: string
    tasks: Array<TaskTypeTest>
    removeTasks: (id: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    addTaskItem: (title: string, isDone: boolean, newTaskPeriod: string, newTaskUser: string,
                  newTaskSumm: number, quantity: number, prise: number,
                  unit: string, todolistId: string) => void,
    changeTaskStatus: (taskId: string, isDone: boolean,
                       todolistId: string) => void,
    changeTaskTitle: (id: string, newTitle: string,
                      todolistId: string) => void,
    changeTaskUnit: (id: string, newUnit: string,
                     todolistId: string) => void,

    changeTaskPeriod: (id: string, newPeriod: string,
                       todolistId: string) => void,

    changeTaskQuantity: (id: string, newQuantity: number,
                         todolistId: string) => void,

    changeTaskPrise: (id: string, newPrise: number,
                      todolistId: string) => void,

    changeTaskSumm: (id: string, newSumm: number,
                     todolistId: string) => void,

    changeTaskUser: (id: string, newUser: string,
                     todolistId: string) => void,

    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
    changeTodolistTitle: (todolistId: string, newTitle: string) => void

}

export function Todolist_test(props: TodolistTypeTrening) {

    const onChangeTask = (id: string) => {
        alert(`Ви намагаєтесь редагувати завдання з id : ${id}`)
    }

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

    const addTask = (title: string, isDone: boolean, period: string, user: string, summ: number, quantity: number, price: number, unit: string) => {
        props.addTaskItem(title, isDone, period, user, summ, quantity, price, unit, props.id);
    };


    return <div className={"container"}>

        <h3>
            {/*{props.title}*/}
            <Paper elevation={3}>
                <EditableSpan_test title={props.title} onChange={changeTodolistTitle}/>
            </Paper>
            {/*<button onClick={removeTodolist}>x</button>*/}
            <IconButton
                // aria-label="delete"
                onClick={removeTodolist}
            >
                <DeleteIcon/>
            </IconButton>

        </h3>
        <Paper elevation={3}
               style={{marginBottom: '5px'}}
        >
            <AddItemForm_test addItem={addTask} id={props.id}/>
        </Paper>
        <Paper elevation={3}
               style={{marginBottom: '5px'}}
        >
        <div className="headerTable">
            <span className="tableHeader-span-cheked">S</span>
            <span className="tableHeader-span-title">Товар</span>
            <span className="tableHeader-span-unit">Од. виміру</span>
            <span className="tableHeader-span-period">Період</span>
            <span className="tableHeader-span-quantity">Кількість</span>
            <span className="tableHeader-span-prise">Ціна</span>
            <span className="tableHeader-span-summ">Cума</span>
            <span className="tableHeader-span-user">Покупець</span>
            <span className="tableHeader-span-change">Дії</span>
        </div>
        </Paper>
        <div className="table-body">
            <div>
                {
                    props.tasks.map((t) => {
                        const onRemoveTaskHandler = (id: string) => {
                            props.removeTasks(id, props.id)
                        }
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            // console.log(t.title + e.currentTarget.checked)
                            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)
                        }

                        const onChangeTitleHandler = (newValue: string) => {
                            props.changeTaskTitle(t.id, newValue, props.id)
                        }

                        const onChangeUnitHandler = (newUnit: string) => {
                            props.changeTaskUnit(t.id, newUnit, props.id)
                        }
                        const onChangePeriodHandler = (newPeriod: string) => {
                            props.changeTaskPeriod(t.id, newPeriod, props.id)
                        }
                        const onChangeQuantityHandler = (newQuantity: number) => {
                            props.changeTaskQuantity(t.id, newQuantity, props.id)
                        }
                        const onChangePriseHandler = (newPrise: number) => {
                            props.changeTaskPrise(t.id, newPrise, props.id)
                        }

                        const onChangeSummHandler = (newSumm: number) => {
                            props.changeTaskSumm(t.id, newSumm, props.id)
                        }

                        const onChangeUserHandler = (newUser: string) => {
                            props.changeTaskUser(t.id, newUser, props.id)
                        }

                        return <Paper elevation={3}
                                      style={{marginBottom: '5px'}}
                        >
                            <li
                                className={t.isDone === true
                                    ?
                                    "table-string" && "is-done"
                                    :
                                    "table-string"
                                }
                                key={t.id}>
                                {/*<input*/}
                                {/*    className="span-cheked"*/}
                                {/*    type="checkbox"*/}
                                {/*    checked={t.isDone}*/}
                                {/*    onChange={onChangeHandler}*/}
                                {/*/>*/}
                                <Checkbox
                                    checked={t.isDone}
                                    onChange={onChangeHandler}
                                    // icon={<FavoriteBorder/>}
                                    // checkedIcon={<Favorite/>}
                                    // icon={<BookmarkBorderIcon />}
                                    // checkedIcon={<BookmarkIcon />}
                                    defaultChecked
                                    color="success"
                                />

                                <EditableSpan_test title={t.title} onChange={onChangeTitleHandler}/>
                                <EditableSpanUnit unit={t.unit} onChange={onChangeUnitHandler}/>
                                <EditableSpanPeriod period={t.period} onChange={onChangePeriodHandler}/>
                                <EditableSpanCounter
                                    quantity={t.quantity}
                                    prise={t.prise}
                                    summ={t.summ}
                                    onChangeQuantity={onChangeQuantityHandler}
                                    onChangePrise={onChangePriseHandler}
                                    onChangeSumm={onChangeSummHandler}
                                />
                                <EditableSpanUser user={t.user} onChange={onChangeUserHandler}/>
                                <div className="span-change">
                                    {/*<button onClick={() => onRemoveTaskHandler(t.id)}>x</button>*/}
                                    <IconButton
                                        // aria-label="delete"
                                        onClick={() => onRemoveTaskHandler(t.id)}
                                    >
                                        <DeleteIcon color="inherit"/>
                                    </IconButton>
                                </div>

                            </li>
                        </Paper>
                    })
                }
            </div>
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
}

