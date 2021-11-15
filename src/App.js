import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import EntUserScreen from './screens/EntUserScreen/EntUserScreen';
import EstUserScreen from './screens/EstUserScreen/EstUserScreen';
import AdmUserScreen from './screens/AdmUserScreen/AdmUserScreen';


/*/perfilentidade
  /cadastrarvaga
  /listarvagas
  /listarinscricoes

  /resetarsenha
  
  /pesquisarvagas
  /inscricoes
  /listarinscricoes

  /listarcadastros
  /listarvagas
  /listarusuarios"
  
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
          <Route path="estudante" element={<EstUserScreen />} />
          <Route path="admin" element={<AdmUserScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
