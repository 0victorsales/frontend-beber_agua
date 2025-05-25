import styled from 'styled-components';

export const Pagina = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #eff6ff 0%, #ecfeff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const FormularioContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #333;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #3b82f6;
  }
`;

export const Botao = styled.button`
  background-color: #2563eb;
  color: #ffffff;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e40af;
  }
`;
