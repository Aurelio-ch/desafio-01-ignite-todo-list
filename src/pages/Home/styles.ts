import styled from 'styled-components'

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
  margin-bottom: 3rem;
`

export const TasksContent = styled.div`
  display: flex;
  min-height: 4.69rem;
  padding: 1rem;
  gap: 0.75rem;
  width: 100%;
  justify-content: space-between;
  background-color: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  input {
    display: none;
  }

  label {
    svg {
      cursor: pointer;
    }
  }

  p {
    width: 59rem;
  }

  .concluded {
    text-decoration: line-through;
    color: ${(props) => props.theme['gray-300']};
  }

  .checkTask {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme['gray-300']};
    cursor: pointer;

    display: flex;
    align-items: center;

    border-radius: 4px;
  }

  .trash {
    background: transparent;
    border: 0;
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme['gray-300']};
    cursor: pointer;

    display: flex;
    align-items: center;

    border-radius: 4px;

    &:hover {
      color: ${(props) => props.theme.danger};
      background-color: ${(props) => props.theme['gray-400']};
    }

    svg {
      margin: 0.2rem;
    }
  }
`
export const NoTaskContainer = styled.div`
  display: flex;
  min-height: 4.69rem;
  gap: 0.75rem;
  margin: 1.5rem auto;
  max-width: 1050px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 1.5rem;
  border-top: 1px solid #333333;
  border-radius: 8px;

  svg {
    color: ${(props) => props.theme['gray-400']};
  }

  p {
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme['gray-300']};
  }

  span {
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme['gray-300']};
  }
`
