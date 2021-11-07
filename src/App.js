import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <div>
      <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="Login" element={<LoginScreen />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
