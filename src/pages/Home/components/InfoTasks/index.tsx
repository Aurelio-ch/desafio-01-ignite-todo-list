import { InfoContainerTasks, InfoTasksContent} from "./styles";

export function InfoTasks() {

  return (
    <>    
    <InfoContainerTasks>
    <div>
      <InfoTasksContent variant='blue'>Tarefas Criadas <span>0</span></InfoTasksContent>
    </div>
    <div>
    <InfoTasksContent variant='purple'>Concluído <span>0</span></InfoTasksContent>
    </div>
  </InfoContainerTasks>


  </>
  )
}