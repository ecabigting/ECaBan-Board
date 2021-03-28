import React, {useState} from 'react'
import { 
    NewTaskFormContainer, 
    NewTaskItemInput,
    NewTaskButton
} from './styles'
import { useFocus } from './utils/useFocus';

interface NewTaskFormProps {
    onAdd(text:string):void
}

export const NewTaskForm = ( { onAdd }  : NewTaskFormProps ) => {
    const [text, setText] = useState("");
    const inputRef = useFocus()
    const handleAddText = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if( event.key === "Enter" ) { onAdd(text) }
    }
 
    return(
        <NewTaskFormContainer>
            <NewTaskItemInput
                ref={inputRef}
                value={text}
                onChange={ (e) => { setText(e.target.value) }}
                onKeyPress={handleAddText}
            />
            <NewTaskButton onClick={()=>{onAdd(text)}}>
                Create
            </NewTaskButton>
        </NewTaskFormContainer>
    );
}