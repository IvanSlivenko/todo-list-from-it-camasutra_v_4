import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    // editMode: boolean
    onChange: (value: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState(props.title)
    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }

    const activateVievMode = () => {
        setEditMode(false)
        props.onChange(title);
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode ?
        <input
            value={title}
            onBlur={activateVievMode}
            autoFocus={true}
            onChange={onChangeTitleHandler}
        />
        :
        <span

            className="span-title"
            onDoubleClick={activateEditMode}

        >{props.title}
        </span>


}

