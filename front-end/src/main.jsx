import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inventario from './componentes/Telas/Inventario.jsx'
import Vendas from './componentes/Telas/Vendas.jsx'
import Analise from './componentes/Telas/Analise.jsx'
import Promocoes from './componentes/Telas/Promocoes.jsx'
import Fornecedores from './componentes/Telas/Fornecedores.jsx'
import Marketing from './componentes/Telas/Marketing.jsx'
import Pessoal from './componentes/Telas/Pessoal.jsx'
import Relatorios from './componentes/Telas/Relatorios.jsx'
import Clientes from './componentes/Telas/Clientes.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "inventario",
        element: <Inventario/>
      },
      {
        path: "vendas",
        element: <Vendas/>
      },
      {
        path: "clientes",
        element: <Clientes/>
      },
      {
        path: "analise",
        element: <Analise/>
      },
      {
        path: "promocoes",
        element: <Promocoes/>
      },
      {
        path: "fornecedores",
        element: <Fornecedores/>
      },
      {
        path: "marketing",
        element: <Marketing/>
      },
      {
        path: "pessoal",
        element: <Pessoal/>
      },
      {
        path: "relatorios",
        element: <Relatorios/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
