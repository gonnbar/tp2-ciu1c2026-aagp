import NavBar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router";
import Register from '../src/pages/Register'
import './App.css'
import Home from './pages/Home';

function App() {
  return (  
      <>
      <Routes>
        <Route path="/"element={
            <>
            <NavBar />
            <Home/>
          </>
    }
  />
  {/* dentro de una ruta distinta para que NO este el navBar */}
    <Route path="/registro" element={<Register />}
  />
</Routes>
    </>
  )
}

export default App
