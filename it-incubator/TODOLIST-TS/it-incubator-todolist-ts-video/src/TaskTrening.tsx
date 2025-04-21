import React, {ChangeEvent, useCallback} from "react";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import {
    EditableSpanCounter,
    EditableSpanPeriod,
    EditableSpanTrening,
    EditableSpanUnit,
    EditableSpanUser
} from "./EditableSpanTrening";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {TaskTypeTrening} from "./TodolistTrening";

type TaksPropsTypeTrening = {
    removeTasks: (id: string, todolistId: string) => void
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

    task: TaskTypeTrening
    todolistId: string
}
export const TaskTrening =React.memo((props: TaksPropsTypeTrening) => {
    const onRemoveTaskHandler = (id: string) => {
        props.removeTasks(id, props.todolistId)
    }
    const onStatusChangeHandler = useCallback( (e: ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(props.task.id, e.currentTarget.checked, props.todolistId)
    },[props.task.id, props.changeTaskStatus, props.todolistId]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue, props.todolistId)
    },[props.task.id, props.changeTaskTitle, props.todolistId]);

    const onUnitChangeHandler = useCallback( (newUnit: string) => {
        props.changeTaskUnit(props.task.id, newUnit, props.todolistId)
    },[props.task.id, props.changeTaskUnit, props.todolistId]);

    const onPeriodChangeHandler = useCallback( (newPeriod: string) => {
        props.changeTaskPeriod(props.task.id, newPeriod, props.todolistId)
    },[props.task.id, props.changeTaskPeriod, props.todolistId]);

    const onQuantityChangeHandler = useCallback((newQuantity: number) => {
        props.changeTaskQuantity(props.task.id, newQuantity, props.todolistId)
    },[props.task.id, props.changeTaskQuantity, props.todolistId]);

    const onPriseChangeHandler = useCallback((newPrise: number) => {
        props.changeTaskPrise(props.task.id, newPrise, props.todolistId)
    },[props.task.id, props.changeTaskPrise, props.todolistId]);

    const onSummChangeHandler = useCallback( (newSumm: number) => {
        props.changeTaskSumm(props.task.id, newSumm, props.todolistId)
    },[props.task.id, props.changeTaskSumm, props.todolistId]);

    const onUserChangeHandler = useCallback( (newUser: string) => {
        props.changeTaskUser(props.task.id, newUser, props.todolistId)
    },[props.task.id, props.changeTaskUser, props.todolistId]);

    return <Paper elevation={3}
                  style={{marginBottom: '5px'}}
                  key={props.task.id}
    >
        <li
            className={props.task.isDone === true
                ?
                "table-string" && "is-done"
                :
                "table-string"
            }
            key={props.task.id}>
            <Checkbox
                checked={props.task.isDone}
                onChange={onStatusChangeHandler}
                // icon={<FavoriteBorder/>}
                // checkedIcon={<Favorite/>}
                // icon={<BookmarkBorderIcon />}
                // checkedIcon={<BookmarkIcon />}
                // defaultChecked
                color="success"
            />

            <EditableSpanTrening title={props.task.title} onChange={onTitleChangeHandler}/>
            <EditableSpanUnit unit={props.task.unit} onChange={onUnitChangeHandler}/>
            <EditableSpanPeriod period={props.task.period} onChange={onPeriodChangeHandler}/>
            <EditableSpanCounter
                quantity={props.task.quantity}
                prise={props.task.prise}
                summ={props.task.summ}
                onChangeQuantity={onQuantityChangeHandler}
                onChangePrise={onPriseChangeHandler}
                onChangeSumm={onSummChangeHandler}
            />
            <EditableSpanUser user={props.task.user} onChange={onUserChangeHandler}/>
            <div className="span-change">
                {/*<button onClick={() => onRemoveTaskHandler(t.id)}>x</button>*/}
                <IconButton
                    // aria-label="delete"
                    onClick={() => onRemoveTaskHandler(props.task.id)}
                >
                    <DeleteIcon color="inherit"/>
                </IconButton>
            </div>

        </li>
    </Paper>
});