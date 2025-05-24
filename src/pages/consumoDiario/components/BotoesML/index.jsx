import React from 'react';
import { Botao } from './styles.ts';

function OpcaoBotaoML({ opcoes, onClicked }) {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {opcoes.map((opcao, index) => (
        <Botao key={index} value={opcao.value} onClick={onClicked}>{opcao.label}</Botao>
      ))}
    </div>
  );
}

export default OpcaoBotaoML;
