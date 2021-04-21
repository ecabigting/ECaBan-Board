import React from 'react';
import { Column } from "./Column"
import { AppContainer } from "./styles"
import { AddNewTask } from './AddNewTask';
import { useAppState } from './AppStateContext';

function App() {
  const {state,dispatch}=useAppState()
  return (
    <AppContainer>
      { state.lists.map((list,i) => (
            <Column
            id={list.id} 
            text={list.text} 
            key={list.id} 
            index={i}/>
          )
        )
      }
      <AddNewTask 
        dark 
        toggleButtonText=" + Add Another list " 
        onAdd={
          text => dispatch({ type:"ADD_LIST",payload:text})
        } />
    </AppContainer>
  );
}

export default App;
