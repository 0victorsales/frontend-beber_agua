import styled from "styled-components";

export const BotaoPersonalizado = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #fff;   
  color: #000;             
  border: 1px solid #ccc;  
  padding: 6px 12px;        
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;        
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;   
  }

  span {
    font-size: 0.9rem;
    font-weight: bold;
    color: #000;  
  }

  svg {
    color: #000;  
    flex-shrink: 0;
  }
`;
