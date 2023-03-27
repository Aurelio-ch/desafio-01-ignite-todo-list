import styled from "styled-components";

export const CreateFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 1120px;
  margin: -1.5rem auto 0;
  padding: 0 2rem;
  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-100']};
    font-size: 1rem;
    padding: 1rem;
    &::placeholder {
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme['gray-300']};
    }
  }
  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background-color: ${(props) => props.theme['blue-dark']};
    color: ${(props) => props.theme['white']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:hover{
      background-color: ${(props) => props.theme['blue']};
    }
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`