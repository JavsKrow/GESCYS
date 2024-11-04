import React, { useState } from 'react';
//import {Link} from "react-router-dom";
import "../components/css/Register.css";
//import CryptoJS from "crypto-js"; // Importa crypto-js

const Register = () => {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [fotoUsuario, setFotoUsuario] = useState(null);
  const [imagenCargada, setImagenCargada] = useState(false); // Estado para verificar si se ha cargado una imagen
  const [fotoUsuarioBase64, setFotoUsuarioBase64] = useState(''); // Almacena la representación en base64 de la imagen
 
  


  const handleSubmit = async (e) => {
    e.preventDefault();

if (contrasena !== confirmarContrasena) {
  alert("La contraseña y la confirmación de contraseña no coinciden.");
  return; // Detén el proceso si las contraseñas no coinciden
}
  
    
    try {
    console.log("Prueba de registro")
        /*
      const host = `lb-ss1-290611648.us-east-2.elb.amazonaws.com`;
      const port = `5000`;
      const apiUrl = `http://${host}:${port}/api/v1/register`;
       //Envía los datos a tu API utilizando fetch u otra librería
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
  
       //Procesa la respuesta de tu API aquí
      if (response.status === 200) {
         //Éxito, el registro se realizó correctamente
         const responseData = await response.json(); // Convierte la respuesta a JSON
         alert("Registro exitoso");
         window.location.href = "/register";
         console.log('Respuesta de la API:', responseData);
      } else {
         //Error, maneja los errores de la API
      }*/
    } catch (error) {
      console.error('Error al enviar los datos a la API', error);
    }
  };
  

  return (
    <div className="fondo-container" >
    <div className="registro-container">
      <h2>Registro de Usuario</h2>
      <form
        onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={nombres}
            placeholder="Ejemplo: Luis"
            onChange={(e) => setNombres(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Apellido</label>
          <input
            type="text"
            value={apellidos}
            placeholder="Ejemlo: Perez"
            onChange={(e) => setApellidos(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Correo Electrónico</label>
          <input
            type="email"
            value={correo}
            placeholder="prueba@example.com"
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={contrasena}
            placeholder="********"
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            value={confirmarContrasena}
            placeholder="********"
            onChange={(e) => setConfirmarContrasena(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fecha de Nacimiento</label>
          <input
            type="date"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Registrar</button>
        </div>
      </form>
      <div className="text-center mt-4">
            <p style={{ color: 'black' }}>
            ¿Ya tienes una cuenta?{' '}
            {/*<Link to="/" style={{ color: 'black' }}>*/}
             Iniciar Sesión
            {/*</Link>*/}
            </p>
            </div>
    </div>
    </div>
  );
};

export default Register;