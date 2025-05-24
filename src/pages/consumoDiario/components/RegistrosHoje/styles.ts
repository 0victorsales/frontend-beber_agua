import styled from "styled-components";

export const ListaRegistros = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;

  height: 180px;  
  overflow-y: auto;  
`;

export const RegistroHoje = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 1rem;
  cursor: default;

  span:first-child {
    font-weight: bold;
  }
`;
