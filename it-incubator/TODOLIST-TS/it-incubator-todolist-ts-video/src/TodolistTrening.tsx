import React, {useCallback, useMemo} from "react";
import {FilterValuesType} from "./AppWithReduxTrening";
import './Todolist_test.css'
// import {AddItemForm} from "./AddItemForm_test";
import {AddItemFormTrening} from "./AddItemFormTrening";
import {EditableSpanTrening} from "./EditableSpanTrening";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button} from "@mui/material";
import Paper from "@mui/material/Paper";
import {TaskTrening} from "./TaskTrening";


export type TaskTypeTrening = {
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
    tasks: Array<TaskTypeTrening>
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    // addTask: (title: string, todolistId: string) => void
    addTaskTrening: (title: string, isDone: boolean, newTaskPeriod: string, newTaskUser: string,
                     newTaskSumm: number, quantity: number, prise: number,
                     unit: string, todolistId: string) => void,

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

    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
    changeTodolistTitle: (todolistId: string, newTitle: string) => void

}

export const TodolistTrening = React.memo( (props: TodolistTypeTrening)=> {

    console.log("TodolistTrening is called ===============", props.title)

    const onAllClickHandler = useCallback(() => {
        props.changeFilter("all", props.id)
    }, [props.changeFilter, props.id]);

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

    }, [props.id, props.changeTodolistTitle]);

    const addTask = useCallback((title: string, isDone: boolean, period: string, user: string, summ: number, quantity: number, price: number, unit: string) => {
        props.addTaskTrening(title, isDone, period, user, summ, quantity, price, unit, props.id);
    }, [props.addTaskTrening, props.id]);

    // let tasksForTodolist = props.tasks;

    // if (props.filter === "active") {
    //     tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false)
    // }
    // if (props.filter === "completed") {
    //     tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true)
    // }

    const filteredTasks = useMemo(() => {
        switch (props.filter) {
            case "active":
                return props.tasks.filter(task => !task.isDone);
            case "completed":
                return props.tasks.filter(task => task.isDone);
            case "all":
            default:
                return props.tasks;
        }
    }, [props.filter, props.tasks]);

    return <div className={"container"}>

        <h3>
            <Paper elevation={3}>
                <EditableSpanTrening title={props.title} onChange={changeTodolistTitle}/>
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
            <AddItemFormTrening addItem={addTask} id={props.id}/>
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
                    // tasksForTodolist.map((t) => <TaskTrening
                        filteredTasks.map((t) => <TaskTrening
                        removeTasks={props.removeTasks}
                        changeTaskStatus={props.changeTaskStatus}
                        changeTaskTitle={props.changeTaskTitle}
                        changeTaskUnit={props.changeTaskUnit}
                        changeTaskPeriod={props.changeTaskPeriod}
                        changeTaskQuantity={props.changeTaskQuantity}
                        changeTaskPrise={props.changeTaskPrise}
                        changeTaskSumm={props.changeTaskSumm}
                        changeTaskUser={props.changeTaskUser}
                        task={t}
                        todolistId={props.id}
                        key={t.id}
                    />)
                    // {
                    //     const onRemoveTaskHandler = (id: string) => {
                    //         props.removeTasks(id, props.id)
                    //     }
                    //     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    //         props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)
                    //     }
                    //
                    //     const onChangeTitleHandler = (newValue: string) => {
                    //         props.changeTaskTitle(t.id, newValue, props.id)
                    //     }
                    //
                    //     const onChangeUnitHandler = (newUnit: string) => {
                    //         props.changeTaskUnit(t.id, newUnit, props.id)
                    //     }
                    //     const onChangePeriodHandler = (newPeriod: string) => {
                    //         props.changeTaskPeriod(t.id, newPeriod, props.id)
                    //     }
                    //     const onChangeQuantityHandler = (newQuantity: number) => {
                    //         props.changeTaskQuantity(t.id, newQuantity, props.id)
                    //     }
                    //     const onChangePriseHandler = (newPrise: number) => {
                    //         props.changeTaskPrise(t.id, newPrise, props.id)
                    //     }
                    //
                    //     const onChangeSummHandler = (newSumm: number) => {
                    //         props.changeTaskSumm(t.id, newSumm, props.id)
                    //     }
                    //
                    //     const onChangeUserHandler = (newUser: string) => {
                    //         props.changeTaskUser(t.id, newUser, props.id)
                    //     }
                    //
                    //     return <Paper elevation={3}
                    //                   style={{marginBottom: '5px'}}
                    //                   key={t.id}
                    //     >
                    //         <li
                    //             className={t.isDone === true
                    //                 ?
                    //                 "table-string" && "is-done"
                    //                 :
                    //                 "table-string"
                    //             }
                    //             key={t.id}>
                    //             <Checkbox
                    //                 checked={t.isDone}
                    //                 onChange={onChangeHandler}
                    //                 // icon={<FavoriteBorder/>}
                    //                 // checkedIcon={<Favorite/>}
                    //                 // icon={<BookmarkBorderIcon />}
                    //                 // checkedIcon={<BookmarkIcon />}
                    //                 // defaultChecked
                    //                 color="success"
                    //             />
                    //
                    //             <EditableSpanTrening title={t.title} onChange={onChangeTitleHandler}/>
                    //             <EditableSpanUnit unit={t.unit} onChange={onChangeUnitHandler}/>
                    //             <EditableSpanPeriod period={t.period} onChange={onChangePeriodHandler}/>
                    //             <EditableSpanCounter
                    //                 quantity={t.quantity}
                    //                 prise={t.prise}
                    //                 summ={t.summ}
                    //                 onChangeQuantity={onChangeQuantityHandler}
                    //                 onChangePrise={onChangePriseHandler}
                    //                 onChangeSumm={onChangeSummHandler}
                    //             />
                    //             <EditableSpanUser user={t.user} onChange={onChangeUserHandler}/>
                    //             <div className="span-change">
                    //                 {/*<button onClick={() => onRemoveTaskHandler(t.id)}>x</button>*/}
                    //                 <IconButton
                    //                     // aria-label="delete"
                    //                     onClick={() => onRemoveTaskHandler(t.id)}
                    //                 >
                    //                     <DeleteIcon color="inherit"/>
                    //                 </IconButton>
                    //             </div>
                    //
                    //         </li>
                    //     </Paper>
                    // })
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
})

