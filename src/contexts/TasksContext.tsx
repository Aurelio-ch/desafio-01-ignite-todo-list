import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface CreateTasksInput {
  id: number
  description: string
}

interface TasksContextType {
  tasks: Tasks[]
  fetchTasks: (tasks?: string) => Promise<void>
  createTasks: (tasks: CreateTasksInput) => Promise<void>
}

interface TasksDelete {
  id: number
}

interface Tasks {
  id: number
  description: string
  status: string
}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext( {} as TasksContextType ) 

export function TasksProvider({ children }: TasksProviderProps) {

  const [tasks, SetTasks] = useState<Tasks[]>([])

  const fetchTasks = useCallback(async (tasks?: string) => {
    const response = await api.get('tasks', {
      params: {
        _sort: 'id',
        _order: 'desc',
        q: tasks,
      },
    })    
    
    SetTasks(response.data)
    console.log(response.data)
  }, [])


  const createTasks = useCallback(
    async (data: CreateTasksInput) => {
      const { description } = data

      const response = await api.post('tasks', {
        description,
      })

      SetTasks((state) => [response.data, ...state])
    },
    [],
  )
  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])


  return (
    <TasksContext.Provider
      value={{
        tasks,
        fetchTasks,
        createTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}