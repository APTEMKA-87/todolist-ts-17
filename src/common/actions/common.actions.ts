import {createAction} from "@reduxjs/toolkit";
import {TasksStateType} from "../../features/TodolistsList/tasks-reducer";
import {
    TodolistDomainType
} from "../../features/TodolistsList/todolists-reducer";

export type ClearTasksTodolistsType = {
    tasks: TasksStateType,
    todolists: TodolistDomainType[]
}

export const clearTasksTodolists = createAction<ClearTasksTodolistsType>('common/clear-task-todolist')