import { useContext } from "react";
import { TasksContext } from "../../../../contexts/TasksContext";
import { InfoContainerTasks, InfoTasksContent} from "./styles";

export function InfoTasks() {
  const {tasks} = useContext(TasksContext)

  const allTasks = tasks.length
  const tasksConcluidos = tasks.filter(task => task.status === "concluido");




  return (
    <>    
    <InfoContainerTasks>
    <div>
      <InfoTasksContent variant='blue'>Tarefas Criadas <span>{allTasks}</span></InfoTasksContent>
    </div>
    <div>
    <InfoTasksContent variant='purple'>Concluído <span>{tasksConcluidos.length} de {allTasks}</span></InfoTasksContent>
    </div>
  </InfoContainerTasks>


  </>
  )
}