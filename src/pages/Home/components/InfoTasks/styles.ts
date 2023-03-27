import styled from "styled-components";

export const InfoContainerTasks = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 2rem;
  justify-content: space-between;


`
interface InfoTasksProps {
  variant: 'blue' | 'purple'
}

export const InfoTasksContent = styled.p<InfoTasksProps>`
  color: ${(props) =>
      props.variant === 'blue'
        ? props.theme['blue']
        : props.theme['purple']};

  span{
    background-color: ${(props) => props.theme['gray-400']};
    border-radius: 99999px;
    padding: 0.2rem 0.7rem ;
    color: ${(props) => props.theme['white']};
  }
`
