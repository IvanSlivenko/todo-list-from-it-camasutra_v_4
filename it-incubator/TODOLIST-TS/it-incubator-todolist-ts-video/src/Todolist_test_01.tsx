import React, {KeyboardEvent, ChangeEvent, useState, useEffect} from "react";
import {FilterValuesType} from "./App-trening";
import './Todolist_test.css'

export type TaskType = {
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

export type TodolistType = {
    id: string,
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, newTaskPeriod: string, newTaskUser: string,
              newTaskSumm: number, quantity: number, prise: number,
              unit: string, todolistId: string) => void,
    changeTaskStatus: (taskId: string, isDone: boolean,
                       todolistId: string) => void,
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void

}

export function Todolist_test(props: TodolistType) {

    const getTodayDate = () => {
        return new Date().toISOString().split("T")[0];
    };

    let [isHidden, setIsHidden] = useState(true)

    let [title, settitle] = useState("")
    let [newTaskPeriod, setNewTaskPeriod] = useState(getTodayDate)
    let [newTaskUser, setNewTaskUser] = useState("")
    let [newTaskUnit, setNewTaskUnit] = useState("шт.")
    let [newTaskSumm, setNewTaskSumm] = useState(0)
    let [newTaskQuantity, setNewTaskQuantity] = useState<number>(1)
    let [newTaskPrise, setNewTaskPrise] = useState<number>(0.01)
    let [error, setError] = useState<string | null>(null)
    let [errorPeriod, setErrorPeriod] = useState<string | null>(null)
    let [errorUser, setErrorUser] = useState<string | null>(null)
    let [errorTitle, setErrorTitle] = useState<string | null>(null)
    let [errorUnit, setErrorUnit] = useState<string | null>(null)
    let [errorQuantity, setErrorQuantity] = useState<string | null>(null)
    let [errorPrise, setErrorPrise] = useState<string | null>(null)
    let [errorSumm, setErrorSumm] = useState<string | null>(null)


    useEffect(() => {
        setNewTaskSumm(parseFloat((newTaskPrise * newTaskQuantity).toFixed(2)))
    }, [newTaskPrise, newTaskQuantity])


    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        settitle(e.currentTarget.value)
    }
    const onNewPeriodChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskPeriod(e.currentTarget.value)
    }
    const onNewUserChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskUser(e.currentTarget.value)
    }
    const onNewUnitChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskUnit(e.currentTarget.value)
    }
    const onNewSummChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length !== 0) {
            const summ = parseFloat(e.currentTarget.value);
            setNewTaskQuantity(parseFloat(summ.toFixed(2)));
        } else {
            setNewTaskSumm(0); // У випадку, якщо введено 0, ми можемо встановити значення в 0
        }

        setNewTaskSumm(parseFloat(parseFloat(e.currentTarget.value).toFixed(2)))
    }
    const onNewQuantityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.currentTarget.value.length !== 0) {

            let quantity = parseFloat(e.currentTarget.value);

            setNewTaskQuantity(parseFloat(quantity.toFixed(2)));
        } else {
            setNewTaskQuantity(0); // У випадку, якщо введено 0, ми можемо встановити значення в 0
        }
    }
    const onNewPriseChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length !== 0) {
            const prise = parseFloat(e.currentTarget.value);
            setNewTaskPrise(parseFloat(prise.toFixed(2)));

        } else {
            // Якщо поле порожнє, встановіть значення в 0
            setNewTaskPrise(0);
        }
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.ctrlKey && e.key === "Enter") {
            if (title.trim() !== ""
                && newTaskPeriod.trim() !== ""
                && newTaskUser.trim() !== ""
                && newTaskUnit.trim() !== ""
                && newTaskQuantity !== 0
                && newTaskPrise !== 0) {
                onAddTaskHandler();
            }
        }
    };
    const onKeyDownPeriodHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (newTaskPeriod.trim() !== "") {
            setErrorPeriod(null)
        } else {
            setErrorPeriod("!!!")
        }

    };
    const onKeyDownUserHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (newTaskUser.trim() !== "") {
            setErrorUser(null)
        } else {
            setErrorUser("!!!")
        }

    };
    const onKeyDownTitleHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (newTaskUser.trim() !== "") {
            setErrorTitle(null)
        } else {
            setErrorTitle("!!!")
        }

    };
    const onKeyDownUnitHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (newTaskUser.trim() !== "") {
            setErrorUnit(null)
        } else {
            setErrorUnit("!!!")
        }
    };
    const onKeyDownGuantityHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (newTaskQuantity < 0.01) {
            setErrorQuantity(null)
        } else {
            setErrorQuantity("!!!")
        }
    };
    const onKeyDownPriseHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (newTaskPrise < 0.01) {
            setErrorPrise(null)
        } else {
            setErrorPrise("!!!")
        }
    };

    const onKeyDownSummHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (newTaskSumm < 0.01) {
            setErrorSumm(null)
        } else {
            setErrorSumm("!!!")
        }
    };

    const onAddTaskHandler = () => {
        if (title.trim() !== ""
            && newTaskPeriod.trim() !== ""
            && newTaskUser.trim() !== ""
            && newTaskUnit.trim() !== ""
            && newTaskQuantity !== 0
            && newTaskPrise !== 0
            && newTaskSumm !== 0) {
            props.addTask(title.trim(), newTaskPeriod, newTaskUser,
                newTaskSumm, newTaskQuantity, newTaskPrise, newTaskUnit, props.id);

            settitle("");
            setNewTaskPeriod("");
            setNewTaskUser("");
            setNewTaskUnit("")
            setNewTaskQuantity(0);
            setNewTaskPrise(0);
            setNewTaskSumm(0);

            setError(null);
            setErrorPeriod(null);
            setErrorUser(null)
            setErrorTitle(null);
            setErrorUnit(null);
            setErrorQuantity(null);
            setErrorPrise(null);
            setErrorSumm(null);
        } else {
            setError("!!!")

            if (newTaskPeriod.trim() === "") {
                setErrorPeriod("!!!")
            }
            if (newTaskUser.trim() === "") {
                setErrorUser("!!!")
            }
            if (title.trim() === "") {
                setErrorTitle('!!!')
            }
            if (newTaskUnit.trim() === "") {
                setErrorUnit('!!!')
            }
            if (newTaskQuantity < 0.01) {
                setErrorQuantity('!!!')
            }
            if (newTaskPrise < 0.01) {
                setErrorPrise('!!!')
            }
            if (newTaskSumm < 0.01) {
                setErrorPrise('!!!')
            }

        }
    };

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

    const onChangeIsHidentInputGroup = (isHidden: boolean) => {
        setIsHidden(!isHidden);
    }

    const removeTodolist = () => {
        props.removeTodolist(props.id)

    }

    return <div className={"container"}>
        <div className="title-group">
            <h3>{props.title}
                <button onClick={removeTodolist}>x</button>
            </h3>
            {/*-----------------------------------------------------------------addItemForm---*/}
            {
                isHidden ?
                    <button
                        className="btn-data-group-view"
                        onClick={() => onChangeIsHidentInputGroup(true)}>Відобразити...
                    </button>
                    :
                    <button
                        className="btn-data-group-hidden"
                        onClick={() => onChangeIsHidentInputGroup(false)}>Сховати...
                    </button>
            }

        </div>

        <div className={isHidden ? "data-group-hidden" : "data-group-view"}>

            <div className='input-Mit-Label-Right'>
                <input
                    className={errorPeriod ? "error-custome" : "title-group-input-date"}
                    id="taskPeriod"
                    type="date"
                    value={newTaskPeriod}
                    onChange={onNewPeriodChangeHandler}
                    // onKeyDown={onKeyDownHandler}
                    onKeyDown={onKeyDownPeriodHandler}
                />
                <label
                    className="title-group-lable-right"
                    htmlFor="taskPeriod">Період
                </label>
            </div>

            <div className='input-Mit-Label-Right'>
                <label
                    className="title-group-lable-right"
                    htmlFor="User">Покупець</label>
                <input
                    className={errorUser ? "error-custome" : "title-group-input"}
                    id="User"
                    value={newTaskUser}
                    onChange={onNewUserChangeHandler}
                    onKeyDown={onKeyDownUserHandler}
                />
            </div>

            <div className='input-Mit-Label-Right'>

                <input
                    className={errorTitle ? "error-custome" : "title-group-input"}
                    id="taskTitle"
                    value={title}
                    onChange={onNewTitleChangeHandler}
                    onKeyDown={onKeyDownTitleHandler}
                />
                <label
                    className="title-group-lable-right"
                    htmlFor="taskTitle">Товар
                </label>
            </div>

            <div className='input-Mit-Label-Midle'>
                <label
                    className="title-group-lable-right"
                    htmlFor="unit">Одиниця
                </label>
                <input
                    // className="title-group-input-short"
                    className={errorUnit ? "error-custome" : "title-group-input-short"}
                    id="unit"
                    value={newTaskUnit}
                    onChange={onNewUnitChangeHandler}
                    onKeyDown={onKeyDownUnitHandler}
                />

                <label
                    className="title-group-lable-right"
                    htmlFor="quantity">Кількість
                </label>
                <input
                    className={errorQuantity ? "error-custome" : "title-group-input-short"}
                    id="quantity"
                    type="number"
                    step="0.01"
                    value={newTaskQuantity}
                    onChange={onNewQuantityChangeHandler}
                    onKeyDown={onKeyDownGuantityHandler}
                />

                <label
                    className="title-group-lable-right"
                    htmlFor="prise">Ціна
                </label>
                <input
                    className={errorPrise ? "error-custome" : "title-group-input-short"}
                    id="prise"
                    type="number"
                    // step="0.01"
                    value={newTaskPrise}
                    onChange={onNewPriseChangeHandler}
                    onKeyDown={onKeyDownPriseHandler}
                />
            </div>

            <div className='input-Mit-Label-Right'>
                <label
                    className="title-group-lable-left"
                    htmlFor="Summ">Cума
                </label>
                <input
                    className={errorSumm ? "error-custome" : "title-group-input-short"}
                    id="Summ"
                    type="number"
                    // step="0."
                    value={newTaskSumm}
                    onChange={onNewSummChangeHandler}
                    onKeyDown={onKeyDownSummHandler}
                />
                <button
                    className={'button-add-task'}
                    onClick={onAddTaskHandler}
                >Додати замовлення
                </button>


            </div>

            {
                error &&
                <div className='input-Mit-Label-Midle-Midle'>
                        <span
                            className="error-message-custome">
                            Усі поля обов'язкові
                        </span>
                </div>
            }

        </div>
        {/*----------------------------------------------------------addItemForm---*/}

        <AddItemForm id={props.id} addTask={props.addTask}/>

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
        <div className="table-body">
            <ul>
                {
                    props.tasks.map((t) => {
                        const onRemoveTaskHandler = (id: string) => {
                            props.removeTasks(id, props.id)
                        }
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            // console.log(t.title + e.currentTarget.checked)
                            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)
                        }
                        return <li
                            className={t.isDone === true
                                ?
                                "table-string" && "is-done"
                                :
                                "table-string"
                            }
                            key={t.id}>
                            <input
                                className="span-cheked"
                                type="checkbox"
                                checked={t.isDone}
                                onChange={onChangeHandler}
                            />
                            <span className="span-title">{t.title}</span>
                            <span className="span-unit">{t.unit}</span>
                            <span className="span-period">{t.period}</span>
                            <span className="span-quantity">{t.quantity}</span>
                            <span className="span-prise">{t.prise}</span>
                            <span className="span-summ">{t.summ}</span>
                            <span className="span-user">{t.user}</span>
                            <div className="span-change">
                                <button onClick={() => onChangeTask(t.id)}>...</button>
                                <button onClick={() => onRemoveTaskHandler(t.id)}>x</button>
                            </div>

                        </li>
                    })
                }
            </ul>
        </div>


        <button
            className={props.filter === "all" ? "active-filter" : ""}
            onClick={onAllClickHandler}
        >All
        </button>
        <button
            className={props.filter === "active" ? "active-filter" : ""}
            onClick={onActiveClickHandler}
        >Active
        </button>
        <button
            className={props.filter === "completed" ? "active-filter" : ""}
            onClick={onCompletedClickHandler}
        >Completed
        </button>
    </div>
}

type AddItemFormPropsType = {
    id: string,
    addTask: (title: string, newTaskPeriod: string, newTaskUser: string,
              newTaskSumm: number, newTaskQuantity: number, newTaskPrise: number, newTaskUnit: string, todolistId: string) => void
}

function AddItemForm(props: AddItemFormPropsType) {

    const getTodayDate = () => {
        return new Date().toISOString().split("T")[0];
    };

    let [isHidden, setIsHidden] = useState(true)

    let [title, setTitle] = useState("")
    let [newTaskPeriod, setNewTaskPeriod] = useState(getTodayDate)
    let [newTaskUser, setNewTaskUser] = useState("")
    let [newTaskUnit, setNewTaskUnit] = useState("шт.")
    let [newTaskSumm, setNewTaskSumm] = useState(0)
    let [newTaskQuantity, setNewTaskQuantity] = useState<number>(1)
    let [newTaskPrise, setNewTaskPrise] = useState<number>(0.01)
    let [error, setError] = useState<string | null>(null)
    let [errorPeriod, setErrorPeriod] = useState<string | null>(null)
    let [errorUser, setErrorUser] = useState<string | null>(null)
    let [errorTitle, setErrorTitle] = useState<string | null>(null)
    let [errorUnit, setErrorUnit] = useState<string | null>(null)
    let [errorQuantity, setErrorQuantity] = useState<string | null>(null)
    let [errorPrise, setErrorPrise] = useState<string | null>(null)
    let [errorSumm, setErrorSumm] = useState<string | null>(null)


    useEffect(() => {
        setNewTaskSumm(parseFloat((newTaskPrise * newTaskQuantity).toFixed(2)))
    }, [newTaskPrise, newTaskQuantity])

    const onNewPeriodChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskPeriod(e.currentTarget.value)
    }

    const onKeyDownPeriodHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (newTaskPeriod.trim() !== "") {
            setErrorPeriod(null)
        } else {
            setErrorPeriod("!!!")
        }

    };

    const onNewUserChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskUser(e.currentTarget.value)
    }

    const onKeyDownUserHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (newTaskUser.trim() !== "") {
            setErrorUser(null)
        } else {
            setErrorUser("!!!")
        }

    };

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyDownTitleHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (newTaskUser.trim() !== "") {
            setErrorTitle(null)
        } else {
            setErrorTitle("!!!")
        }

    };

    const onNewUnitChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskUnit(e.currentTarget.value)
    }

    const onKeyDownUnitHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (newTaskUser.trim() !== "") {
            setErrorUnit(null)
        } else {
            setErrorUnit("!!!")
        }
    };

    const onNewQuantityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.currentTarget.value.length !== 0) {

            let quantity = parseFloat(e.currentTarget.value);

            setNewTaskQuantity(parseFloat(quantity.toFixed(2)));
        } else {
            setNewTaskQuantity(0); // У випадку, якщо введено 0, ми можемо встановити значення в 0
        }
    }

    const onKeyDownGuantityHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (newTaskQuantity < 0.01) {
            setErrorQuantity(null)
        } else {
            setErrorQuantity("!!!")
        }
    };

    const onNewPriseChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length !== 0) {
            const prise = parseFloat(e.currentTarget.value);
            setNewTaskPrise(parseFloat(prise.toFixed(2)));

        } else {
            // Якщо поле порожнє, встановіть значення в 0
            setNewTaskPrise(0);
        }
    }

    const onKeyDownPriseHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (newTaskPrise < 0.01) {
            setErrorPrise(null)
        } else {
            setErrorPrise("!!!")
        }
    };

    const onNewSummChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length !== 0) {
            const summ = parseFloat(e.currentTarget.value);
            setNewTaskQuantity(parseFloat(summ.toFixed(2)));
        } else {
            setNewTaskSumm(0); // У випадку, якщо введено 0, ми можемо встановити значення в 0
        }

        setNewTaskSumm(parseFloat(parseFloat(e.currentTarget.value).toFixed(2)))
    }

    const onKeyDownSummHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (newTaskSumm < 0.01) {
            setErrorSumm(null)
        } else {
            setErrorSumm("!!!")
        }
    };

    const onAddTaskHandler = () => {
        if (title.trim() !== ""
            && newTaskPeriod.trim() !== ""
            && newTaskUser.trim() !== ""
            && newTaskUnit.trim() !== ""
            && newTaskQuantity !== 0
            && newTaskPrise !== 0
            && newTaskSumm !== 0) {
            props.addTask(title.trim(), newTaskPeriod, newTaskUser,
                newTaskSumm, newTaskQuantity, newTaskPrise, newTaskUnit, props.id);

            setTitle("");
            setNewTaskPeriod("");
            setNewTaskUser("");
            setNewTaskUnit("")
            setNewTaskQuantity(0);
            setNewTaskPrise(0);
            setNewTaskSumm(0);

            setError(null);
            setErrorPeriod(null);
            setErrorUser(null)
            setErrorTitle(null);
            setErrorUnit(null);
            setErrorQuantity(null);
            setErrorPrise(null);
            setErrorSumm(null);
        } else {
            setError("!!!")

            if (newTaskPeriod.trim() === "") {
                setErrorPeriod("!!!")
            }
            if (newTaskUser.trim() === "") {
                setErrorUser("!!!")
            }
            if (title.trim() === "") {
                setErrorTitle('!!!')
            }
            if (newTaskUnit.trim() === "") {
                setErrorUnit('!!!')
            }
            if (newTaskQuantity < 0.01) {
                setErrorQuantity('!!!')
            }
            if (newTaskPrise < 0.01) {
                setErrorPrise('!!!')
            }
            if (newTaskSumm < 0.01) {
                setErrorPrise('!!!')
            }

        }
    };

    const onChangeIsHidentInputGroup = (isHidden: boolean) => {
        setIsHidden(!isHidden);
    };

    return <div>
        <div>
            {
                isHidden ?
                    <button
                        className="btn-data-group-view"
                        onClick={() => onChangeIsHidentInputGroup(true)}>Відобразити...
                    </button>
                    :
                    <button
                        className="btn-data-group-hidden"
                        onClick={() => onChangeIsHidentInputGroup(false)}>Сховати...
                    </button>
            }
        </div>
        <div className={isHidden ? "data-group-hidden" : "data-group-view"}>
            <div className='input-Mit-Label-Right'>
                <input
                    className={errorPeriod ? "error-custome" : "title-group-input-date"}
                    id="taskPeriod"
                    type="date"
                    value={newTaskPeriod}
                    onChange={onNewPeriodChangeHandler}
                    // onKeyDown={onKeyDownHandler}
                    onKeyDown={onKeyDownPeriodHandler}
                />
                <label
                    className="title-group-lable-right"
                    htmlFor="taskPeriod">Період
                </label>
            </div>

            <div className='input-Mit-Label-Right'>
                <label
                    className="title-group-lable-right"
                    htmlFor="User">Покупець</label>
                <input
                    className={errorUser ? "error-custome" : "title-group-input"}
                    id="User"
                    value={newTaskUser}
                    onChange={onNewUserChangeHandler}
                    onKeyDown={onKeyDownUserHandler}
                />
            </div>

            <div className='input-Mit-Label-Right'>

                <input
                    className={errorTitle ? "error-custome" : "title-group-input"}
                    id="taskTitle"
                    value={title}
                    onChange={onNewTitleChangeHandler}
                    onKeyDown={onKeyDownTitleHandler}
                />
                <label
                    className="title-group-lable-right"
                    htmlFor="taskTitle">Товар
                </label>
            </div>

            <div className='input-Mit-Label-Midle'>
                <label
                    className="title-group-lable-right"
                    htmlFor="unit">Одиниця
                </label>
                <input
                    // className="title-group-input-short"
                    className={errorUnit ? "error-custome" : "title-group-input-short"}
                    id="unit"
                    value={newTaskUnit}
                    onChange={onNewUnitChangeHandler}
                    onKeyDown={onKeyDownUnitHandler}
                />

                <label
                    className="title-group-lable-right"
                    htmlFor="quantity">Кількість
                </label>
                <input
                    className={errorQuantity ? "error-custome" : "title-group-input-short"}
                    id="quantity"
                    type="number"
                    step="0.01"
                    value={newTaskQuantity}
                    onChange={onNewQuantityChangeHandler}
                    onKeyDown={onKeyDownGuantityHandler}
                />

                <label
                    className="title-group-lable-right"
                    htmlFor="prise">Ціна
                </label>
                <input
                    className={errorPrise ? "error-custome" : "title-group-input-short"}
                    id="prise"
                    type="number"
                    // step="0.01"
                    value={newTaskPrise}
                    onChange={onNewPriseChangeHandler}
                    onKeyDown={onKeyDownPriseHandler}
                />
            </div>

            <div className='input-Mit-Label-Right'>
                <label
                    className="title-group-lable-left"
                    htmlFor="Summ">Cума
                </label>
                <input
                    className={errorSumm ? "error-custome" : "title-group-input-short"}
                    id="Summ"
                    type="number"
                    // step="0."
                    value={newTaskSumm}
                    onChange={onNewSummChangeHandler}
                    onKeyDown={onKeyDownSummHandler}
                />
                <button
                    className={'button-add-task'}
                    onClick={onAddTaskHandler}
                >Додати замовлення
                </button>


            </div>

            {
                error &&
                <div className='input-Mit-Label-Midle-Midle'>
                        <span
                            className="error-message-custome">
                            Усі поля обов'язкові
                        </span>
                </div>
            }
        </div>
    </div>
}