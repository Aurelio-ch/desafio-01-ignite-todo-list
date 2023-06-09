import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface CreateTasks {
  description: string
}

interface Tasks {
  id?: number
  description: string
  status?: string
}

interface ArrayTasks {
  id: number
  description: string
  status: string
}

interface TasksProviderProps {
  children: ReactNode
}

interface TasksContextType {
  tasks: ArrayTasks[]
  removeTasks: (tasks: Tasks) => Promise<void>
  fetchTasks: (tasks?: string) => Promise<void>
  createTasks: (tasks: Tasks) => Promise<void>
  updateStatusTasks: (tasks: Tasks) => Promise<void>
}

export const TasksContext = createContext({} as TasksContextType)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, SetTasks] = useState<ArrayTasks[]>([])

  const fetchTasks = useCallback(async (tasks?: string) => {
    const response = await api.get('tasks', {
      params: {
        _sort: 'id',
        _order: 'desc',
        q: tasks,
      },
    })

    SetTasks(response.data)
  }, [])

  async function removeTasks(data: Tasks) {
    const { id } = data
    await api.delete(`tasks/${id}`)

    const newAllTasks = tasks.filter((task) => task.id !== id)

    SetTasks(newAllTasks)
  }

  async function updateStatusTasks(data: Tasks) {
    const { id, status } = data
    if (status !== 'em andamento') {
      await api.patch(`tasks/${id}`, { status: 'em andamento' })
      const upadeteTask = tasks.map((state) => {
        if (state.id === id) {
          return { ...state, status: 'em andamento' }
        }
        return state
      })
      SetTasks(upadeteTask)
    } else {
      await api.patch(`tasks/${id}`, { status: 'concluido' })
      const upadeteTask = tasks.map((state) => {
        if (state.id === id) {
          return { ...state, status: 'concluido' }
        }
        return state
      })
      SetTasks(upadeteTask)
    }
  }

  const createTasks = useCallback(async (data: CreateTasks) => {
    const { description } = data

    const response = await api.post('tasks', {
      description,
      status: 'em andamento',
    })

    SetTasks((state) => [response.data, ...state])
  }, [])

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
        updateStatusTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
