import React, {ChangeEvent, KeyboardEvent, useState, useEffect} from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import {TextField} from "@mui/material";

type EditableSpanPropsType = {
    title: string
    // editMode: boolean
    onChange: (value: string) => void
}

export function EditableSpan_test(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState(props.title)
    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }

    const activateVievMode = () => {
        setEditMode(false)
        props.onChange(title)
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode ?
        <span>
            {/*<input*/}
            {/*    value={title}*/}
            {/*    onBlur={activateVievMode}*/}
            {/*    autoFocus={true}*/}
            {/*    onChange={onChangeTitleHandler}*/}

            {/*/>*/}
            <TextField
                label={'Товар'}
                value={title}
                onBlur={activateVievMode}
                autoFocus={true}
                onChange={onChangeTitleHandler}
            />
            <IconButton
                // aria-label="delete"
                onClick={activateVievMode}
            >
                <CheckCircleOutlineIcon color="disabled"/>
            </IconButton>
            {/*<button onClick={activateVievMode}>=</button>*/}
        </span>

        :
        <span className="span-title">{props.title}
            <IconButton
                // aria-label="delete"
                size={"small"}
                onClick={activateEditMode}
            >
                {/*<SettingsIcon color="disabled"/>*/}
                <EditIcon color="disabled"/>

            </IconButton>
            {/*<button onClick={activateEditMode}>...</button>*/}

        </span>
}

type EditableSpanUnitPropsType = {
    unit: string
    // editMode: boolean
    onChange: (value: string) => void
}

export function EditableSpanUnit(props: EditableSpanUnitPropsType) {
    let [editModeUnit, setEditModeUnit] = useState(false)
    let [unit, setUnit] = useState(props.unit)
    const activateEditModeUnit = () => {
        setEditModeUnit(true)
        setUnit(props.unit)
    }
    const activateVievModeUnit = () => {
        setEditModeUnit(false)
        props.onChange(unit)
    }
    const onChangeUnitHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUnit(e.currentTarget.value)
    }
    return editModeUnit ?
        <span>
            {/*<input*/}
            {/*    value={unit}*/}
            {/*    autoFocus={true}*/}
            {/*    onChange={onChangeUnitHandler}/>*/}
            <TextField
                label={'Од.виміру'}
                value={unit}
                autoFocus={true}
                onChange={onChangeUnitHandler}
            />

            <IconButton
                // aria-label="delete"
                onClick={activateVievModeUnit}
            >
                <CheckCircleOutlineIcon color="disabled"/>
            </IconButton>
            {/*<button onClick={activateVievModeUnit}>=</button>*/}
        </span>

        :
        <span className="span-unit">{props.unit}
            <IconButton
                // aria-label="delete"
                size={"small"}
                onClick={activateEditModeUnit}
            >
                {/*<SettingsIcon color="disabled"/>*/}
                <EditIcon color="disabled"/>
            </IconButton>
            {/*/!*<button onClick={activateEditModeUnit}>...</button>*/}
            </span>
}

type EditableSpanPeriodPropsType = {
    period: string
    // editMode: boolean
    onChange: (value: string) => void
}

export function EditableSpanPeriod(props: EditableSpanPeriodPropsType) {
    let [editModePeriod, setEditModePeriod] = useState(false)
    let [period, setPeriod] = useState(props.period)
    const activateEditModePeriod = () => {
        setEditModePeriod(true)
    }
    const activateVievModePeriod = () => {
        setEditModePeriod(false)
        props.onChange(period)
    }
    const onChangePeriodHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPeriod(e.currentTarget.value)
    }

    return editModePeriod ?
        <span>
            {/*<input*/}
            {/*    type="date"*/}
            {/*    value={period}*/}
            {/*    autoFocus={true}*/}
            {/*    onChange={onChangePeriodHandler}*/}
            {/*/>*/}
            <TextField
                label={'Період'}
                type="date"
                value={period}
                autoFocus={true}
                onChange={onChangePeriodHandler}
            />
            <IconButton
                // aria-label="delete"
                onClick={activateVievModePeriod}
            >
                <CheckCircleOutlineIcon color="disabled"/>
            </IconButton>
            {/*<button onClick={activateVievModePeriod}>=</button>*/}
        </span>

        :
        <span
            onDoubleClick={activateEditModePeriod}
            className="span-unit"
        >
            {props.period}
            <IconButton
                // aria-label="delete"
                onClick={activateEditModePeriod}
                size={"small"}
            >
                <EditIcon color="disabled"/>
            </IconButton>
        </span>
}

type EditableSpanQuantityPropsType = {
    quantity: number
    // editMode: boolean
    onChange: (value: number) => void
}

export function EditableSpanQuantity(props: EditableSpanQuantityPropsType) {
    let [editModeQuantity, setEditModeQuantity] = useState(false)
    let [quantity, setQuantity] = useState(props.quantity)
    const activateEditModeQuantity = () => {
        setEditModeQuantity(true)
    }
    const activateVievModeQuantity = () => {
        setEditModeQuantity(false)
        props.onChange(quantity)
    }

    const onChangeQuantityHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.currentTarget.value))
    }
    return editModeQuantity ?
        <span>
            <input
                type="number"
                value={quantity}
                autoFocus={true}
                onChange={onChangeQuantityHandler}
            />

            <IconButton
                // aria-label="delete"
                onClick={activateVievModeQuantity}
            >
                <CheckCircleOutlineIcon color="disabled"/>
            </IconButton>
            {/*<button onClick={activateVievModeQuantity}>=</button>*/}
        </span>

        :
        <span
            onDoubleClick={activateEditModeQuantity}
            className="span-unit">{props.quantity}
            <IconButton
                // aria-label="delete"
                onClick={activateEditModeQuantity}
            >
                <SettingsIcon color="disabled"/>
            </IconButton>
            {/*<button onClick={activateEditModeQuantity}>...</button>*/}
        </span>

}

type EditableSpanPrisePropsType = {
    prise: number
    // editMode: boolean
    onChange: (value: number) => void
}

export function EditableSpanPrise(props: EditableSpanPrisePropsType) {
    let [editModePrise, setEditModePrise] = useState(false)
    let [prise, setPrise] = useState(props.prise)
    const activateEditModePrise = () => {
        setEditModePrise(true)
    }
    const activateVievModePrise = () => {
        setEditModePrise(false)
        props.onChange(prise)
    }
    const onChangePriseHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPrise(Number(e.currentTarget.value))
    }
    return editModePrise ?
        <span>
            <input
                type="number"
                value={prise}
                autoFocus={true}
                onChange={onChangePriseHandler}
            />

            <button onClick={activateVievModePrise}>=</button>
        </span>

        :
        <span
            onDoubleClick={activateEditModePrise}
            className="span-unit">{props.prise}
            <button onClick={activateEditModePrise}>...</button>
        </span>

}

type EditableSpanSummPropsType = {
    summ: number
    // editMode: boolean
    onChange: (value: number) => void
}

export function EditableSpanSumm(props: EditableSpanSummPropsType) {
    let [editModeSumm, setEditModeSumm] = useState(false)
    let [summ, setSumm] = useState(props.summ || 0)
    const activateEditModeSumm = () => {
        setEditModeSumm(true)
    }
    const activateVievModeSumm = () => {
        setEditModeSumm(false)
        props.onChange(summ)
    }

    const onChangeSummHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSumm(Number(e.currentTarget.value))
    }

    return editModeSumm ?
        <span>
            <input
                type="number"
                value={props.summ}
                autoFocus={true}
                onChange={onChangeSummHandler}

            />
            <button onClick={activateVievModeSumm}>=</button>
        </span>

        :
        <span
            onDoubleClick={activateEditModeSumm}
            className="span-unit">{props.summ}
            <button onClick={activateEditModeSumm}>...</button>
        </span>
}

type EditableSpanUserPropsType = {
    user: string
    // editMode: boolean
    onChange: (value: string) => void
}

export function EditableSpanUser(props: EditableSpanUserPropsType) {
    let [editModeUser, setEditModeUser] = useState(false)
    let [user, setUser] = useState(props.user)
    const activateEditModeUser = () => {
        setEditModeUser(true)
        setUser(props.user)
    }
    const activateVievModeUser = () => {
        setEditModeUser(false)
        props.onChange(user)
    }
    const onChangeUserHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.currentTarget.value)
    }
    return editModeUser ?
        <span>
            {/*<input*/}
            {/*    type="text"*/}
            {/*    value={user}*/}
            {/*    autoFocus={true}*/}
            {/*    onChange={onChangeUserHandler}*/}
            {/*/>*/}
            <TextField
                label={'Користувач'}
                value={user}
                autoFocus={true}
                onChange={onChangeUserHandler}
            />
            <IconButton
                // aria-label="delete"
                onClick={activateVievModeUser}
            >
                <CheckCircleOutlineIcon color="disabled"/>
            </IconButton>
            {/*<button onClick={activateVievModeUser}>=</button>*/}
        </span>

        :
        <span
            onDoubleClick={activateEditModeUser}
            className="span-unit">{props.user}
            <IconButton
                // aria-label="delete"
                size={"small"}
                onClick={activateEditModeUser}
            >
                <EditIcon color="disabled"/>
            </IconButton>
            {/*<button onClick={activateEditModeUser}>...</button>*/}
        </span>

}

type EditableSpanCounterPropsType = {
    quantity: number
    prise: number
    summ: number
    // editMode: boolean
    onChangeQuantity: (value: number) => void
    onChangePrise: (value: number) => void
    onChangeSumm: (value: number) => void
}


export function EditableSpanCounter(props: EditableSpanCounterPropsType) {
    let [editModeSumm, setEditModeSumm] = useState(false);
    let [summ, setSumm] = useState(props.summ || 0);

    let [editModeQuantity, setEditModeQuantity] = useState(false);
    let [quantity, setQuantity] = useState(props.quantity);

    let [editModePrise, setEditModePrise] = useState(false);
    let [prise, setPrise] = useState(props.prise);

    useEffect(() => {
        setSumm(quantity * prise);
    }, [quantity, prise]);


    const activateEditModeSumm = () => setEditModeSumm(true);
    const activateVievModeSumm = () => {
        setEditModeSumm(false);
        props.onChangeSumm(summ);
    };
    const onChangeSummHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSumm(Number(e.currentTarget.value));
    };

    const activateEditModeQuantity = () => setEditModeQuantity(true);
    const activateVievModeQuantity = () => {
        setEditModeQuantity(false);
        props.onChangeQuantity(quantity);
    };
    const onChangeQuantityHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.currentTarget.value));
    };

    const activateEditModePrise = () => setEditModePrise(true);
    const activateVievModePrise = () => {
        setEditModePrise(false);
        props.onChangePrise(prise);
    };
    const onChangePriseHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPrise(Number(e.currentTarget.value));
    };

    return (
        <>
            {editModeQuantity ? (
                <span>
                    {/*<input type="number" value={quantity} autoFocus onChange={onChangeQuantityHandler} />*/}
                    <TextField
                        label={'Кількість'}
                        type="number"
                        value={quantity}
                        autoFocus={true}
                        onChange={onChangeQuantityHandler}
                    />
                    {/*<button onClick={activateVievModeQuantity}>=</button>*/}
                    <IconButton
                        // aria-label="delete"
                        onClick={activateVievModeQuantity}
                    >
                <CheckCircleOutlineIcon color="disabled"/>


            </IconButton>
                </span>
            ) : (
                <span onDoubleClick={activateEditModeQuantity} className="span-unit">
                    {props.quantity}
                    {/*<button onClick={activateEditModeQuantity}>...</button>*/}
                    <IconButton
                        // aria-label="delete"
                        size={"small"}
                        onClick={activateEditModeQuantity}
                    >
                {/*<SettingsIcon color="disabled"/>*/}
                        <EditIcon color="disabled"/>
            </IconButton>

                </span>
            )}

            {editModePrise ? (
                <span>
                    {/*<input type="number" value={prise} autoFocus onChange={onChangePriseHandler} />*/}
                    <TextField
                        label={'Ціна'}
                        type="number"
                        value={prise}
                        autoFocus={true}
                        onChange={onChangePriseHandler}
                    />
                    {/*<button onClick={activateVievModePrise}>=</button>*/}
                    <IconButton
                        // aria-label="delete"
                        onClick={activateVievModePrise}
                    >
                <CheckCircleOutlineIcon color="disabled"/>
            </IconButton>
                </span>
            ) : (
                <span onDoubleClick={activateEditModePrise} className="span-unit">
                    {props.prise}
                    {/*<button onClick={activateEditModePrise}>...</button>*/}
                    <IconButton
                        // aria-label="delete"
                        size={"small"}
                        onClick={activateEditModePrise}
                    >
                {/*<SettingsIcon color="disabled"/>*/}
                        <EditIcon color="disabled"/>
            </IconButton>
                </span>
            )}

            {editModeSumm ? (
                <span>
                    <input
                        type="number"
                        value={summ}
                        autoFocus
                        onBlur={activateVievModeSumm}
                    />
                </span>
            ) : (
                <span className="span-unit">
                    {props.summ}
                    {/*<button onClick={activateEditModeSumm}>=</button>*/}
                </span>
            )}
        </>
    );
}