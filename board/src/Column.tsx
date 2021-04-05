import React from "react"
import { AddNewTask } from "./AddNewTask";
import { useAppState } from "./AppStateContext";
import { Card } from "./Card";
import { AddNewTaskButton, ColumnContainer, ColumnTitle } from "./styles";


interface ColumnProps {
    text : string
    index: number
}

export const Column = ({
    text, 
    index
} : ColumnProps) => {
    const {state} = useAppState()
    return (
        <ColumnContainer>
           <ColumnTitle>{text}</ColumnTitle>
           {state.lists[index].tasks.map(task => (
               <Card text={task.text} key={task.id}/>
           ))}
           <AddNewTask
            toggleButtonText="+ Add another task"
            onAdd={console.log}
            dark
           />
        </ColumnContainer>
    ); 
}