import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import {TextField} from "@mui/material";

type AddItemFormPropsType = {
    id: string,
    addItem: (title: string, isDone: boolean, newTaskPeriod: string, newTaskUser: string,
              newTaskSumm: number, newTaskQuantity: number,
              newTaskPrise: number, newTaskUnit: string, todolistId: string) => void
}

export function AddItemForm_test(props: AddItemFormPropsType) {
    let isDone = false;
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
            props.addItem(title.trim(), isDone, newTaskPeriod, newTaskUser,
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
        <div className="btn-data-group-box">
            {
                isHidden ?
                    <button
                        className="btn-data-group-view"
                        onClick={() => onChangeIsHidentInputGroup(true)}>Відобразити деталі...
                    </button>
                    :
                    <button
                        className="btn-data-group-hidden"
                        onClick={() => onChangeIsHidentInputGroup(false)}>Сховати деталі...
                    </button>
            }
        </div>
        <div className={isHidden ? "data-group-hidden" : "data-group-view"}>
            <div className='input-Mit-Label-Midle'>
                {/*<input*/}
                {/*    className={errorPeriod ? "error-custome" : "title-group-input-date"}*/}
                {/*    id="taskPeriod"*/}
                {/*    type="date"*/}
                {/*    value={newTaskPeriod}*/}
                {/*    onChange={onNewPeriodChangeHandler}*/}
                {/*    // onKeyDown={onKeyDownHandler}*/}
                {/*    onKeyDown={onKeyDownPeriodHandler}*/}
                {/*/>*/}
                {/*<label*/}
                {/*    className="title-group-lable-right"*/}
                {/*    htmlFor="taskPeriod">Період*/}
                {/*</label>*/}

                <TextField
                    type={"date"}
                    size="small"
                    variant="outlined"
                    // title={title}
                    // label={'Період'}
                    className={error ? "error" : ""}
                    value={newTaskPeriod}
                    onChange={onNewPeriodChangeHandler}
                    onKeyDown={onKeyDownPeriodHandler}
                />


            </div>
            <div className='input-Mit-Label-Midle'>
                {/*<label*/}
                {/*    className="title-group-lable-right"*/}
                {/*    htmlFor="User">Покупець</label>*/}
                {/*<input*/}
                {/*    className={errorUser ? "error-custome" : "title-group-input"}*/}
                {/*    id="User"*/}
                {/*    value={newTaskUser}*/}
                {/*    onChange={onNewUserChangeHandler}*/}
                {/*    onKeyDown={onKeyDownUserHandler}*/}
                {/*/>*/}
                <TextField
                    style={{paddingRight: '5px'}}
                    size="small"
                    variant="outlined"
                    // title={title}
                    label={'Покупець'}
                    className={error ? "error" : ""}
                    value={newTaskUser}
                    onChange={onNewUserChangeHandler}
                    onKeyDown={onKeyDownUserHandler}
                />
                <TextField
                    size="small"
                    variant="outlined"
                    // title={title}
                    label={'Товар'}
                    className={error ? "error" : ""}
                    value={title}
                    onChange={onNewTitleChangeHandler}
                    onKeyDown={onKeyDownTitleHandler}
                />
            </div>
            {/*<div className='input-Mit-Label-Midle'>*/}

                {/*<input*/}
                {/*    className={errorTitle ? "error-custome" : "title-group-input"}*/}
                {/*    id="taskTitle"*/}
                {/*    value={title}*/}
                {/*    onChange={onNewTitleChangeHandler}*/}
                {/*    onKeyDown={onKeyDownTitleHandler}*/}
                {/*/>*/}
                {/*<label*/}
                {/*    className="title-group-lable-right"*/}
                {/*    htmlFor="taskTitle">Товар*/}
                {/*</label>*/}

                {/*<TextField*/}
                {/*    size="small"*/}
                {/*    variant="outlined"*/}
                {/*    // title={title}*/}
                {/*    label={'Товар'}*/}
                {/*    className={error ? "error" : ""}*/}
                {/*    value={title}*/}
                {/*    onChange={onNewTitleChangeHandler}*/}
                {/*    onKeyDown={onKeyDownTitleHandler}*/}
                {/*/>*/}
            {/*</div>*/}
            <div className='input-Mit-Label-Midle'>
                {/*<label*/}
                {/*    className="title-group-lable-right"*/}
                {/*    htmlFor="unit">Одиниця*/}
                {/*</label>*/}
                {/*<input*/}
                {/*    // className="title-group-input-short"*/}
                {/*    className={errorUnit ? "error-custome" : "title-group-input-short"}*/}
                {/*    id="unit"*/}
                {/*    value={newTaskUnit}*/}
                {/*    onChange={onNewUnitChangeHandler}*/}
                {/*    onKeyDown={onKeyDownUnitHandler}*/}
                {/*/>*/}

                <TextField
                    style={{paddingRight: '5px'}}
                    size="small"
                    variant="outlined"
                    // title={title}
                    label={'Одиниця'}
                    className={error ? "error" : ""}
                    value={newTaskUnit}
                    onChange={onNewUnitChangeHandler}
                    onKeyDown={onKeyDownUnitHandler}
                />

                {/*<label*/}
                {/*    className="title-group-lable-right"*/}
                {/*    htmlFor="quantity">Кількість*/}
                {/*</label>*/}
                {/*<input*/}
                {/*    className={errorQuantity ? "error-custome" : "title-group-input-short"}*/}
                {/*    id="quantity"*/}
                {/*    type="number"*/}
                {/*    step="0.01"*/}
                {/*    value={newTaskQuantity}*/}
                {/*    onChange={onNewQuantityChangeHandler}*/}
                {/*    onKeyDown={onKeyDownGuantityHandler}*/}
                {/*/>*/}
                <TextField
                    type={"number"}
                    size="small"
                    variant="outlined"
                    // title={title}
                    label={'Кількість'}
                    className={error ? "error" : ""}
                    value={newTaskQuantity}
                    onChange={onNewQuantityChangeHandler}
                    onKeyDown={onKeyDownGuantityHandler}
                />

                {/*<label*/}
                {/*    className="title-group-lable-right"*/}
                {/*    htmlFor="prise">Ціна*/}
                {/*</label>*/}
                {/*<input*/}
                {/*    className={errorPrise ? "error-custome" : "title-group-input-short"}*/}
                {/*    id="prise"*/}
                {/*    type="number"*/}
                {/*    // step="0.01"*/}
                {/*    value={newTaskPrise}*/}
                {/*    onChange={onNewPriseChangeHandler}*/}
                {/*    onKeyDown={onKeyDownPriseHandler}*/}
                {/*/>*/}


            </div>
            <div className='input-Mit-Label-Midle'>
                <TextField
                    style={{paddingRight: '5px'}}
                    type={"number"}
                    size="small"
                    variant="outlined"
                    // title={title}
                    label={'Ціна'}
                    className={error ? "error" : ""}
                    value={newTaskPrise}
                    onChange={onNewPriseChangeHandler}
                    onKeyDown={onKeyDownPriseHandler}
                />
                <TextField
                    type={"number"}
                    size="small"
                    variant="outlined"
                    label={'Cума'}
                    className={error ? "error" : ""}
                    value={newTaskSumm}
                    onChange={onNewSummChangeHandler}
                    onKeyDown={onKeyDownSummHandler}
                />
            </div>
            <div className='input-Mit-Label-Midle'>

                <button
                    className={'button-add-task'}
                    onClick={onAddTaskHandler}
                >Додати замовлення
                </button>

            </div>
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
    // </div>
}