import { useContext } from 'react'
import { Header } from '../../components/Header'
import { TasksContext } from '../../contexts/TasksContext'
import { CreateForm } from './components/CreateForm'
import { InfoTasks } from './components/InfoTasks'
import { NoTaskContainer, TasksContainer, TasksContent } from './styles'
import { CheckCircle, Circle, ClipboardText, Trash } from 'phosphor-react'

interface Tasks {
  id: number
  description: string
  status: string
}

export function Home() {
  const { tasks, removeTasks, updateStatusTasks } = useContext(TasksContext)

  function handleDeleteComment(task: Tasks) {
    removeTasks(task)
  }

  function handleCheckedUnChecked(task: Tasks) {
    updateStatusTasks(task)
  }
  return (
    <>
      <Header />
      <CreateForm />
      <InfoTasks />
      <>
        {tasks.length === 0 ? (
          <NoTaskContainer>
            <ClipboardText size={56} weight="thin" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </NoTaskContainer>
        ) : (
          <TasksContainer>
            {tasks.map((task) => {
              return (
                <TasksContent key={task.id}>
                  <input
                    type="checkbox"
                    name={task.id.toString()}
                    id={task.id.toString()}
                  />
                  <label htmlFor={task.id.toString()}>
                    {task.status !== 'concluido' ? (
                      <button
                        onClick={() => handleCheckedUnChecked(task)}
                        className="checkTask"
                      >
                        <Circle size={24} color="#4EA8DE" />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleCheckedUnChecked(task)}
                        className="checkTask"
                      >
                        <CheckCircle size={24} color="#5E60CE" weight="fill" />
                      </button>
                    )}
                  </label>
                  {task.status !== 'concluido' ? (
                    <p>{task.description} </p>
                  ) : (
                    <p className="concluded">{task.description} </p>
                  )}

                  <button
                    className="trash"
                    onClick={() => handleDeleteComment(task)}
                    title="Deletar comentário"
                  >
                    <Trash size={24} />
                  </button>
                </TasksContent>
              )
            })}
          </TasksContainer>
        )}
      </>
    </>
  )
}
