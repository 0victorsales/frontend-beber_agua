import styled from 'styled-components';


export const Pagina = styled.div`
  background: linear-gradient(to bottom right, #eff6ff, #ecfeff);
  color: white;
  width: 100%;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;


export const Header = styled.header`
  color: #333;
  padding: 20px;
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItensEsquerda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;



export const BemVindo = styled.div`
  color: black;
  font-weight: bold;     
  font-size: 24px;        
`;


export const Botao = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  padding: 10px 20px;
  width: 40%;
  background-color: #fff;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  margin-top: 10px
`;




 
