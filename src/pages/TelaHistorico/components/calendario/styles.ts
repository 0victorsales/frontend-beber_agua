import styled from "styled-components";

export const CalendarioContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
`;

export const CalendarioHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  .month-title {
    flex: 1;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
  }

  button {
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #f9fafb;
    }

    svg {
      width: 1rem;
      height: 1rem;
      color: #1f2937;
    }
  }
`;

export const CalendarioDiasSemana = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;

  .calendario-semana {
    text-align: center;
    font-size: 0.875rem;
    font-weight: 500;
    color: #4b5563;
    padding: 0.5rem 0;
  }
`;

export const CalendarioDias = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
 

  button {
    position: relative;
    aspect-ratio: 1;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
    border: none;
    cursor: pointer;
    background: transparent;

    &.text-gray-800 {
      color: #1f2937;
    }

    &.text-gray-400 {
      color: #9ca3af;
    }

    &.ring-2 {
      outline: 2px solid #3b82f6;
    }

    &.bg-blue-100 {
      background-color: #dbeafe;
    }

    &.text-blue-800 {
      color: #1e40af;
    }

    &.hover\\:bg-gray-50:hover {
      background-color: #f9fafb;
    }

    &.bg-green-50 {
      background-color: #dcfce7;
    }

    &.text-green-800 {
      color: #166534;
    }

    &.bg-blue-50 {
      background-color: #dbeafe;
    }

    &.text-blue-800 {
      color: #1e40af;
    }

    .indicator {
      position: absolute;
      top: 0.25rem;
      right: 0.25rem;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
    }

    .indicator.green {
      background-color: #22c55e;
    }

    .indicator.blue {
      background-color: #3b82f6;
    }

    .today-indicator {
      position: absolute;
      bottom: 0.25rem;
      left: 50%;
      transform: translateX(-50%);
      width: 0.25rem;
      height: 0.25rem;
      background-color: #3b82f6;
      border-radius: 50%;
    }
  }
`;
