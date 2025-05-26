import axios from "axios";

const URL_BACKEND = "http://127.0.0.1:8000";  

export const inserirConsumo = async (nome_usuario, consumo_ml) => {
  try {
    const response = await axios.post(`${URL_BACKEND}/inserir-consumo`, {
      nome_usuario,
      consumo_ml
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar consumo:", error.response?.data || error.message);
    throw error;
  }
};


export const listarConsumosDia = async (nome_usuario) => {
  try {
    const response = await axios.get(`${URL_BACKEND}/consumos-dia`, {
      params: { nome_usuario }
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar registros:", error.response?.data || error.message);
    throw error;
  }
};


export const obterProgressoHoje = async (nome_usuario) => {
  const response = await axios.get(`${URL_BACKEND}/progresso-hoje`, {
    params: { nome_usuario }
  });
  return response.data;
};

export const obterHistoricoDia = async (nome_usuario, data) => {
  const dataFormatada = data.toISOString().split("T")[0]; 
  const response = await axios.get(`${URL_BACKEND}/historico-dia`, {
    params: { nome_usuario, data: dataFormatada },
  });
  return response.data;
};

export const obterDiasComRegistros = async (nome_usuario) => {
  const response = await axios.get(`${URL_BACKEND}/dias-com-registros`, {
    params: { nome_usuario }
  });
  return response.data;
};


export const registrarMeta = async (nome_usuario, peso_kg) => {
  try {
    const response = await axios.post(`${URL_BACKEND}/meta`, {
      nome_usuario,
      peso_kg
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar meta:", error.response?.data || error.message);
    throw error;
  }
};