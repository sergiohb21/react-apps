import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { NavbarComponent } from './components/NavBar'
import { Home } from './pages/Home'
import { Productos } from "./pages/Productos"
import { PruebaTecnica } from "./pages/PruebaTecnica"

import './App.css'

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Productos />} />
        <Route path='/prueba-tecnica' element={<PruebaTecnica />} />
      </Routes>
    </Router>
  )
}

export default App
