/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './global.css';
import { Login } from './pages/JSX/auth/login';
import { Home } from './pages/JSX/home';
import { Perfil } from "./pages/JSX/register/page6"
import { Reservation } from "./pages/JSX/reservation/index"
import { Locadora } from './pages/JSX/locadora/page7';
import { Cars } from "./pages/JSX/Cars/cars"
import { CarrosUsuario } from './pages/JSX/CarrosUsuario/carrosUsuario';
import ReservasUsuario from './pages/JSX/ReservasUsuario/reservasusuario';
import PerfilUsuario from './pages/JSX/PerfilUsuario/perfilUsuario';
import { api } from './services/api';
import { BlockNullInput } from './components/Errors/BlockNullinput/BlockNullinput';
import { Forbidden } from './components/Errors/forbidden';

const root = ReactDOM.createRoot(document.getElementById('root'));
let Data = localStorage.getItem('token');


     function RoutersApp() {
         const [isAdmin, setAdmin] = useState(undefined);

         useEffect(() => {
            api.get('/admins').then(res => {
                if(Data) {
                    let admin = res.data
                    let user = JSON.parse(Data);


                    /* admin.map(x => {
                        console.log(user.email);
                        console.log(x.email);
                        console.log(user.email === x.email);
                        if(x.email === user.email) {
                            console.log('bah');
                            setAdmin(true)
                        }
                        return console.log(isAdmin);
                    }); */
                    const usuario = admin.find(usuario => usuario.email === user.email)
                    if(usuario !== undefined) {
                        setAdmin(true)
                    }
                        console.log(isAdmin);
                    }

                })
         }, [isAdmin])

                        return (
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<Navigate replace to="/home" />} />
                                    <Route path='/home' element={ <Home /> }/>
                                    <Route path='login' element={ <Login /> } />

                                    <Route path='/profile' element={isAdmin ? <Perfil/> : <PerfilUsuario />} />

                                    <Route path='/reservations' element={isAdmin ? <Reservation /> : <ReservasUsuario />} />

                                    <Route path='/rental' element={isAdmin ? <Locadora/> : <Forbidden Status={'Error'}  />} />

                                    <Route path='/cars' element={isAdmin ? <Cars /> : <CarrosUsuario />} />
                                </Routes>
                            </BrowserRouter>
                        )
                    }

    root.render(
        <React.StrictMode>
            <RoutersApp />
        </React.StrictMode>
    );