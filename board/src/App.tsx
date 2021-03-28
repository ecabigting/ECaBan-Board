import React from 'react';
import { Column } from "./Column"
import { Card } from "./Card"
import { AppContainer } from "./styles"
import { AddNewTask } from './AddNewTask';
function App() {
  return (
    <AppContainer>
      <Column text="New Task">
        <Card text="Generate app scaffold"></Card>
      </Column>
      <Column text="In Progress Task">
        <Card text="Learn Typescript"/>
      </Column>
      <Column text="Done Task">
        <Card text="Begin to use Static typing"/>
      </Column>
      <AddNewTask dark toggleButtonText=" + Add Another list " onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
