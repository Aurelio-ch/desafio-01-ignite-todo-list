import { useContext } from "react";
import { Header } from "../../components/Header";
import { TasksContext } from "../../contexts/TasksContext";
import { CreateForm } from "./components/CreateForm";
import { InfoTasks } from "./components/InfoTasks";
import { TasksContainer, TasksContent } from "./styles";
import { Circle, Trash } from 'phosphor-react'


export function Home() {
  const {tasks} = useContext(TasksContext)
  return (
    <>
      <Header />
      <CreateForm />
      <InfoTasks />

      <TasksContainer>
    {tasks.map(task =>{
      return (
        <TasksContent key={task.id}>
          <Circle size={24} color='#4EA8DE'/>
          <p>{task.description}</p>
          <Trash size={24} color='#808080'/>

        </TasksContent>
      )
    })}
  </TasksContainer>

    </>
  )
}

