-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-09-2023 a las 00:58:07
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
(1, 1, 3),
(8, 21, 1),
(9, 23, 2);

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
(2, 'adriel@hotmail', '202cb962ac59075b964b07152d234b70', 'adriel', '', '1234567', NULL, 0, 0, '6620', '444b8ce35b6f0cd905c9f68152a655ef', ''),
(20, 'asdasd', '7815696ecbf1c96e6894b779456d330e', 'dsad', 'dasd', 'dasd', NULL, 0, 0, '', '39cd87ea4735d72cc8b2635cedd60fe5', 'Frontend/uploads/1694903606867.gatofino.jpg'),
(21, 'DASD', '89320dbd4e0a792bc1676fde2d5bccfc', 'aA', 'DSAD', 'DSA', NULL, 0, 1, 'DSAD', 'c2851a22f969b3711f35ad8adee9baaa', 'Frontend/uploads/1694903636424.gatofino.jpg'),
(22, 'sdasdas', 'eb36521207f3437aa363010bb17dd708', 'ADRIEL', 'dsada', 'sdasda', NULL, 0, 1, '', '1567e6e91ea104b1f65f618bb5d4d9f4', 'Frontend/uploads/1694904520446.bigsale logo.jpg'),
(23, 'asdasdasd', 'ec02c59dee6faaca3189bace969c22d3', 'MATEO', 'MORI', 'dsadasd', 'juega che eche 2', 0, 1, 'rosario', '86aff00feace7ca8e6836102a98da861', 'Frontend/uploads/1694904755703.wallpaper2.png');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

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
