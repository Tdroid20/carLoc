import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './global.css';
import Login from './pages/JSX/auth/login';
import Home from './pages/JSX/home';

const root = ReactDOM.createRoot(document.getElementById('root'));

function RoutersApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path='/home' element={ <Home /> }/>
                <Route path='/login' element={ <Login /> } />
            </Routes>
        </BrowserRouter>
    )
}

root.render(
    <React.StrictMode>
        <RoutersApp />
    </React.StrictMode>
);
