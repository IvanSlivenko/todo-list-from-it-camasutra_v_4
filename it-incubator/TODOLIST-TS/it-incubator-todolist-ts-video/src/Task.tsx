import React, {ChangeEvent, useCallback} from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import {EditableSpan} from "./EditableSpan";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {TaskType} from "./Todolist";

type TaksPropsType = {
    removeTask: (id: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (id: string, newTitle: string, todolistId: string) => void
    task: TaskType
    todolistId: string
}
export const Task = React.memo((props: TaksPropsType) => {
    const onRemoveHandler = () => {
        props.removeTask(props.task.id, props.todolistId)
    }

    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(props.task.id, e.currentTarget.checked, props.todolistId)
    }

    const onTitleChangeHandler = useCallback( (newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue, props.todolistId)
    },[props.task.id, props.changeTaskTitle, props.todolistId]);
    return <div
        key={props.task.id}
        className={props.task.isDone === true ? "is-done" : ""}
    >
        <Checkbox
            checked={props.task.isDone}
            onChange={onChangeStatusHandler}
            icon={<FavoriteBorder/>}
            checkedIcon={<Favorite/>}
        />
        <EditableSpan title={props.task.title} onChange={onTitleChangeHandler}/>
        {/*<button onClick={onRemoveHandler}>x</button>*/}
        <IconButton
            // aria-label="delete"
            onClick={onRemoveHandler}
        >
            <DeleteIcon color="inherit"/>
        </IconButton>

    </div>
});