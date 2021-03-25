import React, { useState } from "react"
import { AddNewTaskButton } from "./styles"

interface AddNewTaskProps {
    onAdd(text: string) : void,
    toggleButtonText : string,
    dark: boolean
}

//pg 49