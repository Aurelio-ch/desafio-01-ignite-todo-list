import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";



interface TasksContextType {
  tasks: Tasks[]
  removeTasks: (tasks: Tasks) => Promise<void>
  fetchTasks: (tasks?: string) => Promise<void>
  createTasks: (tasks: Tasks) => Promise<void>
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

  async function removeTasks(data: Tasks) {
    const {id} = data
    await api.delete(`tasks/${id}`)

    const newAllTasks = tasks.filter((task) => task.id !== id)

    SetTasks(newAllTasks)
  }


  async function updateStatusTasks(data: Tasks){

  }


  const createTasks = useCallback(
    async (data: Tasks) => {
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
        removeTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}