import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import Home from './pages/Home/home';
import Perfil from './pages/Login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Rotas = () => {

  return(
      <BrowserRouter>
          <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Perfil/>} path='/perfil'/>
          </Routes>
      </BrowserRouter>
  );
}

root.render(
  <React.StrictMode>
      <Rotas/>
  </React.StrictMode>
);  