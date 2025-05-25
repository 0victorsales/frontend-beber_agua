import styled from "styled-components";

export const ContainerTituloPagina = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .icone-container {
    background-color: #dbeafe;  
    border-radius: 50%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

 
    svg {
      color: #2563eb;  
    }
  }

  h1 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    color: #000;
  }

  p {
    margin: 0;
    font-size: 0.85rem;
    color: #666;
  }
`;
