import React, { useRef } from "react"
import { AddNewTask } from "./AddNewTask";
import { useAppState } from "./AppStateContext";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useItemDrag } from "./useItemDrag";


interface ColumnProps {
    text : string
    index: number,
    id: string
}

export const Column = ({ text, index, id } : ColumnProps) => {
    const {state,dispatch} = useAppState()
    const ref = useRef<HTMLDivElement>(null)
    
    const { drag } = useItemDrag({ type: "COLUMN", id, index, text })
    
    drag(ref) 

    return (
        <ColumnContainer ref={ref}>
           <ColumnTitle>{text}</ColumnTitle>
           {state.lists[index].tasks.map(task => (
               <Card text={task.text} key={task.id}/>
           ))}
           <AddNewTask
            toggleButtonText="+ Add another task"
            onAdd={ text => 
                dispatch({type:"ADD_TASK",  payload : {text, listId:id }})    
            }
            dark
           />
        </ColumnContainer>
    ); 
}