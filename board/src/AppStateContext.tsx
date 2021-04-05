import React, { createContext,useReducer,useContext } from 'react'

interface Task {
    id : string,
    text : string
}

interface List {
    id: string,
    text: string,
    tasks: Task[]
}

interface AppStateContextProps {
    state: AppState
}

export interface AppState {
    lists: List[]
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)
const appData : AppState = {
    lists : [
        {
            id:"0",
            text:"To Do",
            tasks:[{id:"c0",text:"Generate app scaffold"}]
        },
        {
            id:"2",
            text:"In Progress",
            tasks:[{id:"c2",text:"Build Logic"}]
        },
        {
            id:"0",
            text:"To Do",
            tasks:[{id:"c3",text:"Use static typing"}]
        },
    ]
}

export const useAppState = () => {
    return useContext(AppStateContext)
}

export const AppStateProvider = ({ children } : React.PropsWithChildren<{}>) => {
    return (
        <AppStateContext.Provider value={{ state : appData }}>
            {children}
        </AppStateContext.Provider>
    );
}