import React, {ChangeEvent, KeyboardEvent, useState} from "react";

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
            setError("!!!!!")
        }
    }

    return <div>
        <input
            className={error ? "error" : ""}
            value={title}
            onChange={onNewTitleChangeHandler}
            onKeyDown={onKeyPressHandler}
        />
        {
            error
                ?
                <div className={error ? "error-message" : ""}> Field is requared </div>
                :
                null

        }

        <button onClick={addTask}>+</button>
    </div>
}