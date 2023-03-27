import styled from "styled-components";

export const TasksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 2rem;
`

export const TasksContent = styled.div`
display: flex;
height: 4.69rem;
padding: 1rem;
gap: 0.75rem;
width: 100%;
align-items: center;
justify-content: space-between;
background-color: ${(props) => props.theme['gray-500']};
border: 1px solid ${(props) => props.theme['gray-400']};
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
border-radius: 8px;

p{
  width: 59rem ;
}


`