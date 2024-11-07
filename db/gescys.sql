
CREATE DATABASE IF NOT EXISTS gescys;
USE gescys;

-- Table: Tipo de Usuario
CREATE TABLE tipo_usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL
);

-- Table: Usuario
CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    carnet VARCHAR(20) NOT NULL UNIQUE,
    correo VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    id_tipo_usuario INT,
    FOREIGN KEY (id_tipo_usuario) REFERENCES tipo_usuario(id)
);

-- Table: Curso
CREATE TABLE curso (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    codigo VARCHAR(20) NOT NULL,
    crd_clar INT NOT NULL
);

-- Table: Asignacion
CREATE TABLE asignacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_curso INT,
    semestre VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (id_curso) REFERENCES curso(id)
);

-- Table: Tipo de Actividad
CREATE TABLE tipo_actividad (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descipcion VARCHAR(50) NOT NULL
);

-- Table: Actividad_Academica
CREATE TABLE actividad_academica (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_asignacion INT,
    id_tipo_actividad INT,
    ponderacion FLOAT NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_entrega DATE NOT NULL,
    descripcion TEXT NOT NULL,
    tiempo_estimado FLOAT,
    FOREIGN KEY (id_asignacion) REFERENCES asignacion(id),
    FOREIGN KEY (id_tipo_actividad) REFERENCES tipo_actividad(id)
);

