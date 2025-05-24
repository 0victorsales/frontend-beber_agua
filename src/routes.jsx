import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from './layouts/homeLayout';
import ConsumoDiario from './pages/consumoDiario';
import Cadastro from './pages/TelaCadastro';
import Historico from './pages/TelaHistorico';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
        { path: 'consumo-diario', element: <ConsumoDiario /> },
        { path: 'cadastro', element: <Cadastro /> },
        { path: 'historico', element: <Historico /> },
       
    ],
    
  },
]);

export default router;