import React, { useState } from "react"
import { AddNewTaskButton } from "./styles"
import { NewTaskForm } from "./NewTaskForm"

interface AddNewTaskProps {
    onAdd(text: string) : void,
    toggleButtonText : string,
    dark: boolean
}

// 88 moving items to add

export const AddNewTask = (props: AddNewTaskProps) => {
    const [showForm, setShowForm] = useState(false);
    const { onAdd, toggleButtonText, dark} = props;

    if(showForm)
    {
        return(
            <NewTaskForm
                onAdd={
                    text => {
                        onAdd(text)
                        setShowForm(false)
                    }
                }
            />
        );
    }

    return (
        <AddNewTaskButton dark={dark} onClick={ () => setShowForm(true)}>
            {toggleButtonText}
        </AddNewTaskButton>
    );
}