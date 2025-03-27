import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';



type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (title.trim() !== "" && e.ctrlKey && e.key === "Enter") {
            addTask();
        }
    }

    const addTask = () => {
        if (title.trim() !== "") {
            // props.addItem(title, props.id)
            props.addItem(title)
            setTitle("")
        } else {
            setError("Поле обов'язкове")
        }
    }

    return <div>
        {/*<input*/}
        {/*    className={error ? "error" : ""}*/}
        {/*    value={title}*/}
        {/*    onChange={onNewTitleChangeHandler}*/}
        {/*    onKeyDown={onKeyPressHandler}*/}
        {/*/>*/}
        <TextField
            size={"small"}
            variant="outlined"
            // title={title}
            label={'title'}
            className={error ? "error" : ""}
            value={title}
            onChange={onNewTitleChangeHandler}
            onKeyDown={onKeyPressHandler}
            error={!!error}
            helperText={error}
        />
        {/*{*/}
        {/*    error*/}
        {/*        ?*/}
        {/*        <div className={error ? "error-message" : ""}> Field is requared </div>*/}
        {/*        :*/}
        {/*        null*/}

        {/*}*/}
        {/*<button onClick={addTask}>+</button>*/}
        {/*<Button*/}
        {/*    onClick={addTask}*/}
        {/*    variant="contained"*/}
        {/*    color="primary"*/}
        {/*>+</Button>*/}
        <IconButton
            onClick={addTask}
            color="inherit">
            <AddCircleOutlineIcon/>
        </IconButton>
    </div>
}