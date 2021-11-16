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
import CadastrarVagaScreen from './screens/EntUserScreen/CadastrarVagaScreen/CadastrarVagaScreen';
import ListarVagasAdmin from './screens/AdmUserScreen/ListarVagasAdmin';
import ListarEntidadesAdmin from './screens/AdmUserScreen/ListarEntidadesAdmin';
import ListarVagasScreen from './screens/EntUserScreen/ListarVagasScreen/ListarVagasScreen';
import DetalheVagaScreen from './screens/EntUserScreen/DetalheVagaScreen/DetalheVagaScreen';
import VagasEstudanteScreen from './screens/EstUserScreen/VagasEstudanteScreen/VagasEstudanteScreen';
import VagasGeral from './screens/HomeScreen/VagasGeral';
import DetalheVagaEstudanteScreen from './screens/EstUserScreen/DetalheVagaEstudanteScreen/DetalheVagaEstudanteScreen';
import DetalheVaga from './screens/HomeScreen/DetalheVagaGeral/DetalheVaga';


/*
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
          <Route path="entidade/cadastrarvaga" element={<CadastrarVagaScreen />} />
          <Route path="entidade/vagas" element={<ListarVagasScreen />} />
          <Route path="entidade/vagas/detalhe" element={<DetalheVagaScreen />} />
          <Route path="admin/vagas" element={<ListarVagasAdmin />} />
          <Route path="admin/entidades" element={<ListarEntidadesAdmin />} />
          <Route path="estudante/vagas" element={<VagasEstudanteScreen/>} />
          <Route path="estudante/vagas/detalhe" element={<DetalheVagaEstudanteScreen />} />
          <Route path="vagas" element={<VagasGeral/>} />
          <Route path="vagas/detalhe" element={<DetalheVaga />}/>
        
         


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
