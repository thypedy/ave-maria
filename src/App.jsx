import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home.JSX";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login"
import TelaPrincipal from "./pages/TelaPrincipal"
import TelaMapas from "./pages/TelaMapas"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/telaPrincipal" element={<TelaPrincipal/>}/>
        <Route path="/telaMapas" element={<TelaMapas/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
