import React from 'react';
import { Column } from "./Column"
import { Card } from "./Card"
import { AppContainer } from "./styles"
import { AddNewTask } from './AddNewTask';
import { useAppState } from './AppStateContext';
function App() {
  const {state}=useAppState()
  return (
    <AppContainer>
      { state.lists.map((list,i) => (
            <Column text={list.text} key={list.id} index={i}/>
          )
        )
      }
      <AddNewTask dark toggleButtonText=" + Add Another list " onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
