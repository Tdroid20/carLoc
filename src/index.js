import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './global.css';
import { Login } from './pages/JSX/auth/login';
import { Home } from './pages/JSX/home';
import { Perfil } from "./pages/JSX/register/page6"
import { Reservation } from "./pages/JSX/reservation/index"
import { Locadora } from './pages/JSX/locadora/page7';
import { Cars } from "./pages/JSX/Cars/cars"

const root = ReactDOM.createRoot(document.getElementById('root'));

function RoutersApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path='/home' element={ <Home /> }/>
                <Route path='/login' element={ <Login /> } />
                <Route path='/profile' element={ < Perfil/> } />
                <Route path='/reservations' element={ < Reservation/> } />
                <Route path='/rental' element={ < Locadora/> } />
                <Route path='/cars' element={ <Cars /> } />
            </Routes>
        </BrowserRouter>
    )
}

root.render(
    <React.StrictMode>
        <RoutersApp />
    </React.StrictMode>
);
