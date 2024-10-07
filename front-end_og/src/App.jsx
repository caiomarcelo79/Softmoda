import { Outlet } from 'react-router-dom'
import './App.css'
import Menu from './componentes/Menu/Menu'
import Navbar from './componentes/Navbar'


function App() {

  return (
    <div>
      <Navbar/>
      <div className="row">
        <div className="col-3">
        <Menu/>
        </div>
        <div className="col-9">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default App
