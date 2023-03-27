import { CreateFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { PlusCircle } from 'phosphor-react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TasksContext } from '../../../../contexts/TasksContext'
import { useContext } from 'react'

const createFormSchema = z.object({
  description: z.string(),
})

type CreateFormInputs = z.infer<typeof createFormSchema>


export function CreateForm() {

  const {createTasks} = useContext(TasksContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<CreateFormInputs>({
    resolver: zodResolver(createFormSchema),
  })

  async function handleCreateTasks(data: CreateFormInputs) {
    const { description } = data
    await createTasks({
      description,
    })

    reset()
  }

  return (
  <CreateFormContainer onSubmit={handleSubmit(handleCreateTasks)}>
    <input 
      type="text" 
      placeholder="Adicione uma nova tarefa"
      {...register('description')}
    />

    <button type="submit" disabled={isSubmitting}>
      Criar
      <PlusCircle size={24} />
    </button>
  </CreateFormContainer>
  )
}