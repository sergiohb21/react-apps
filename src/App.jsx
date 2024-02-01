import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { NavbarComponent } from './components/NavBar'
import { Home } from './pages/Home'
import { Productos } from "./pages/Productos"
import { Test } from "./pages/Test"
import { TicTacToe } from "./pages/Tic-Tac-Toe"
import './App.css'

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Productos />} />
        <Route path='/test' element={<Test />} />
        <Route path='/tic-tac-toe' element={<TicTacToe />} />
      </Routes>
    </Router>
  )
}

export default App
