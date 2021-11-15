import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import EntUserScreen from './screens/EntUserScreen/EntUserScreen';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

/*/perfil_entidade
  /cadastrar_vaga
  /listar_vagas
  /listar_inscricoes
  */                                  

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="cadastro" element={<RegisterScreen />} />
          <Route path="entidade" element={<EntUserScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
