import styled from "styled-components";

export const ProgressoContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
`;

export const ValorTotal = styled.div`
  font-size: 2rem;
  color: #007bff;  
  font-weight: bold;
`;

export const SubInfo = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 4px 0 12px;
`;

export const BarraProgresso = styled.div`
  background-color: #e0e0e0;
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 12px;

  div {
    background-color: #007bff;
    height: 100%;
  }
`;

export const InfosExtras = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;

  div {
    background-color: #f0f4f8;
    border-radius: 8px;
    padding: 8px 16px;
  }

  strong {
    display: block;
    font-size: 1rem;
    font-weight: bold;
  }

  p {
    font-size: 0.8rem;
    color: #666;
  }
`;
