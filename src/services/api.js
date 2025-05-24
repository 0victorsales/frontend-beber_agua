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