/*import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
}

export default Login;*/

import React, { useState, useEffect } from "react";
// import "./css/Prueba.css";
import "../components/css/Login.css";
//import {Link} from "react-router-dom";
//import CryptoJS from "crypto-js"; // Importa crypto-js

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertShown, setAlertShown] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    //const hashedPassword = CryptoJS.SHA256(password).toString();
    // Los valores de los campos de entrada están disponibles aquí
    console.log('Username:', username);
    console.log('Password:', password);
    //console.log('Cifrada', hashedPassword);

    /*localStorage.setItem("user", username);
    localStorage.setItem("isLogged", true);

    window.location.href = '/home';*/

  };



  return (
      <div className="fondo-container">
      <div style={{ display: 'flex', height: '100vh' }}>
        <div
    className="left-side"
    style={{
      /* Puedes agregar estilos adicionales según sea necesario */
    }}
    >
    <div id="title-text">Portal ML</div> {/* Agrega el texto en la parte superior */}
  </div>

      {/* Lado Derecho */}
      <div style={{ width: '50%', height: '100%' }}>
        <center>
          <div className="w-full max-w-xs" style={{ marginTop: '100px' }}>
          <div className="profile-image"></div> {/* Agrega el cuadro de imagen del perfil */}
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 glass"
              onSubmit={handleSubmit}
            >
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
                id="username-label"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
                id="password-label"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="flex items-center justify-center">
              <button className="loginEnviar text-xs" > Iniciar Sesion</button>
              </div>
            </form>
            <div className="text-center mt-4">
            <p style={{ color: 'white' }}>
            ¿No tienes una cuenta?{' '}
            {/*<Link to="/register" style={{ color: 'white' }}>
              Crear una cuenta
            </Link>/
            */}
            </p>
            </div>
          </div>
        </center>
      </div>
    </div>
    </div>
  );
};

export default Login;
