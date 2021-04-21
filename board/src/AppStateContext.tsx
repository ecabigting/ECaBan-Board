import React, { createContext,useReducer,useContext } from 'react'
import { nanoid } from 'nanoid'
import { findItemIndexById,overrideItemAtIndex,moveItem} from './utils/arrayUtils'
import { DragItem } from './DragItem'

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
    dispatch: React.Dispatch<Action>
}

export interface AppState {
    lists: List[],
    draggedItem : DragItem | undefined
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
            id:"3",
            text:"For QA",
            tasks:[{id:"c3",text:"Use static typing"}]
        },
    ],
    draggedItem : undefined
}

export const useAppState = () => {
    return useContext(AppStateContext)
}

export const AppStateProvider = ({ children } : React.PropsWithChildren<{}>) => {
    const [state,dispatch] = useReducer(appStateReducer,appData);
    return (
        <AppStateContext.Provider value={{ state,dispatch }}>
            {children}
        </AppStateContext.Provider>
    );
}

const appStateReducer = (state:AppState, action:Action): AppState =>{
    switch(action.type)
    {
        case "ADD_LIST" : {
            return {...state,
            lists: [
                ...state.lists,
                { id : nanoid(), text: action.payload, tasks: []}
            ]}
        }
        case "ADD_TASK" : {
            const targetLaneIndex = findItemIndexById(
                state.lists,
                action.payload.listId
            )
            const targetListIndex = findItemIndexById(
                state.lists,
                action.payload.listId
            )
            const targetList = state.lists[targetLaneIndex]

            const updateTargetList = {
                ...targetList,
                tasks: [
                    ...targetList.tasks,
                    { id: nanoid(),text : action.payload.text }
                ]
            }

            return {...state,
            lists: overrideItemAtIndex(
                state.lists,
                updateTargetList,
                targetListIndex
                )
            }
        }
        case "MOVE_LIST" : {
            const { dragIndex , hoverIndex} = action.payload
            return {
                ...state,
                lists: moveItem(state.lists,dragIndex,hoverIndex)
            }
        }
        case "SET_DRAGGED_ITEM" : {
            return { ...state, draggedItem: action.payload}
        }
        default: {
            return {...state}
        }
    }
}

type Action = 
| {
    type : "ADD_LIST"
    payload: string
    }
| {
    type : "ADD_TASK"
    payload: { text: string, listId:string}
    }
| {
    type : "MOVE_LIST"
    payload: { dragIndex : number, hoverIndex : number }
    } 
| {
    type : "SET_DRAGGED_ITEM"
    payload : DragItem | undefined
    }