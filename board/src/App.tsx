import React from 'react';
import { Column } from "./Column"
import { Card } from "./Card"
import { AppContainer } from "./styles"
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
    </AppContainer>
  );
}

export default App;
