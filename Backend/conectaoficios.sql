-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-09-2023 a las 05:14:25
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `conectaoficios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especializaciones`
--

CREATE TABLE `especializaciones` (
  `id` int(11) NOT NULL,
  `especializacion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `especializaciones`
--

INSERT INTO `especializaciones` (`id`, `especializacion`) VALUES
(1, 'plomeria'),
(2, 'electricista'),
(3, 'pintor'),
(4, 'jardinero');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especializacion_usuario`
--

CREATE TABLE `especializacion_usuario` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_especializacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `especializacion_usuario`
--

INSERT INTO `especializacion_usuario` (`id`, `id_usuario`, `id_especializacion`) VALUES
(1, 1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `contacto` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `destacado` tinyint(1) NOT NULL DEFAULT 0,
  `especialista` tinyint(1) NOT NULL DEFAULT 0,
  `direccion` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `password`, `nombre`, `apellido`, `contacto`, `descripcion`, `destacado`, `especialista`, `direccion`, `token`, `path`) VALUES
(1, 'pepito@hotmail.com', '12345', 'Pepe', 'Peposo', '+54 1234 56-7890', 'este es el espacio de la descripcion de mi buen amigo el trabajador Pepe', 1, 1, 'San Lorenzo 321', NULL, ''),
(2, 'adriel@hotmail', '202cb962ac59075b964b07152d234b70', 'adriel', '', '1234567', NULL, 0, 0, '6620', '444b8ce35b6f0cd905c9f68152a655ef', '/uploads/1694400825857.gatofino.jpg'),
(3, 'dasd', '1cfe70df284a018d4ba63e20c72e0fd5', 'dasda', '', 'dasd', NULL, 0, 0, '0', NULL, ''),
(4, 'dsadsadasd', '4473e588b35568687564de38ed134d0b', 'Ramon', 'Gomez', '+54 9876 54-3210', 'este es el espacio de la descripcion de mi buen amigo el trabajador Ramon', 0, 1, 'Colon 123', NULL, ''),
(5, 'holasebas@hotmail', '15de21c670ae7c3f6f3f1f37029303c9', 'El', '', '+55 5555 55-5555', NULL, 0, 1, 'Rosario', '7224a442b67b8248329bceb09e558fd1', ''),
(6, 'asdasd', 'adbf5a778175ee757c34d0eba4e932bc', 'El', '', 'dasdad', NULL, 0, 1, 'dsada', '510b57837943cc161dd08c76ab9b082a', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `especializaciones`
--
ALTER TABLE `especializaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `especializacion_usuario`
--
ALTER TABLE `especializacion_usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_especializacion` (`id_especializacion`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `especializaciones`
--
ALTER TABLE `especializaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `especializacion_usuario`
--
ALTER TABLE `especializacion_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `especializacion_usuario`
--
ALTER TABLE `especializacion_usuario`
  ADD CONSTRAINT `especializacion_usuario_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `especializacion_usuario_ibfk_2` FOREIGN KEY (`id_especializacion`) REFERENCES `especializaciones` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
