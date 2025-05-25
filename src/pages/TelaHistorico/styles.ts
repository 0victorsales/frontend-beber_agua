import styled from 'styled-components';

export const Pagina = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #eff6ff 0%, #ecfeff 100%);
  padding: 1rem;
`;

export const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.5rem;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  .icone-container {
    width: 3rem;
    height: 3rem;
    background-color: #dbeafe;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: #2563eb;
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
    margin: 0;
  }

  p {
    margin: 0;
    color: #4b5563;
  }
`;




