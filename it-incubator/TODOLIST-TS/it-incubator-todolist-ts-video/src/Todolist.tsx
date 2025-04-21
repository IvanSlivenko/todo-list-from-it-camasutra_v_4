import React, {useCallback} from "react";
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button} from "@mui/material";
import {Task} from "./Task";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean

}

export type TodolistType = {
    id: string
    title: string
    tasks: Array<TaskType>
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void

    removeTask: (id: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (id: string, newTitle: string, todolistId: string) => void

    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
}

export const Todolist = React.memo(function (props: TodolistType) {


    console.log("Todolist is called ", props.title)
    const onAllClickHandler = useCallback(() => {
        props.changeFilter("all", props.id)
    }, [props.changeFilter, props.id])

    const onActiveClickHandler = useCallback(() => {
        props.changeFilter("active", props.id)
    }, [props.changeFilter, props.id]);

    const onCompletedClickHandler = useCallback(() => {
        props.changeFilter("completed", props.id)
    }, [props.changeFilter, props.id]);

    const removeTodolist = useCallback(() => {
        props.removeTodolist(props.id)
    }, [props.id]);

    const changeTodolistTitle = useCallback((newTitle: string) => {
        props.changeTodolistTitle(props.id, newTitle)
    }, []);

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id)
    }, [props.addTask, props.id])

    let tasksForTodolist = props.tasks;

    if (props.filter === "active") {
        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false)
    }
    if (props.filter === "completed") {
        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true)
    }

    return <div className="todolist-box">
        <h3>
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
                    tasksForTodolist.map((t) => <Task
                        removeTask={props.removeTask}
                        changeTaskStatus={props.changeTaskStatus}
                        changeTaskTitle={props.changeTaskTitle}
                        task={t}
                        todolistId={props.id}
                        key={t.id}
                    />)
                    // {
                    //
                    //     const onRemoveHandler = () => {
                    //         props.removeTask(t.id, props.id)
                    //     }
                    //
                    //     const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    //         props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)
                    //     }
                    //
                    //     const onChangeTitleHandler = (newValue: string) => {
                    //         props.changeTaskTitle(t.id, newValue, props.id)
                    //     }
                    //     return <div
                    //         key={t.id}
                    //         className={t.isDone === true ? "is-done" : ""}
                    //     >
                    //         <Checkbox
                    //             checked={t.isDone}
                    //             onChange={onChangeStatusHandler}
                    //             icon={<FavoriteBorder/>}
                    //             checkedIcon={<Favorite/>}
                    //         />
                    //         <EditableSpan title={t.title} onChange={onChangeTitleHandler}/>
                    //         {/*<button onClick={onRemoveHandler}>x</button>*/}
                    //         <IconButton
                    //             // aria-label="delete"
                    //             onClick={onRemoveHandler}
                    //         >
                    //             <DeleteIcon color="inherit"/>
                    //         </IconButton>
                    //
                    //     </div>
                    // }
                    // )
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
})



