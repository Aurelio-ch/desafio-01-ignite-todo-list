import { useContext, useState } from "react";
import { Header } from "../../components/Header";
import { TasksContext } from "../../contexts/TasksContext";
import { CreateForm } from "./components/CreateForm";
import { InfoTasks } from "./components/InfoTasks";
import { TasksContainer, TasksContent } from "./styles";
import { CheckCircle, Circle, Trash } from 'phosphor-react'


export function Home() {
  const {tasks} = useContext(TasksContext)

  function handleDeleteComment() {

  }
  return (
    <>
      <Header />
      <CreateForm />
      <InfoTasks />

      <TasksContainer>
    {tasks.map(task =>{
      return (
        <TasksContent key={task.id}>
          <input type="checkbox" 
          name={(task.id).toString()} 
          id={(task.id).toString()} 
          />
          <label htmlFor={(task.id).toString()}>
          { task.status != 'concluido' ? (
          <button className="checkTask">
            <Circle 
              size={24} 
              color='#4EA8DE'
            />
          </button>) : (
            <button className="checkTask">
            <CheckCircle 
            size={24} 
            color='#5E60CE' 
            weight="fill"/>
          </button>
          )}
          </label>
          { task.status != 'concluido' ? (
            <p>{task.description} </p>
          ) : (
            <p className="concluded">{task.description} </p>
          )}

          <button className="trash" onClick={handleDeleteComment} title="Deletar comentário">
          <Trash size={24} />
            </button>

        </TasksContent>
      )
    })}
  </TasksContainer>

    </>
  )
}

