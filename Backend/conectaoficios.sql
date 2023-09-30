-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-09-2023 a las 05:01:46
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
(1, 'Plomero'),
(2, 'Electricista'),
(3, 'Pintor'),
(4, 'Jardinero'),
(5, 'Gasista'),
(6, 'Tecnologías');

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
(12, 32, 1),
(13, 33, 5),
(14, 34, 2),
(15, 35, 4),
(16, 36, 3),
(17, 37, 6),
(18, 39, 5),
(19, 40, 2);

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
  `path` varchar(255) NOT NULL,
  `path_portada` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `password`, `nombre`, `apellido`, `contacto`, `descripcion`, `destacado`, `especialista`, `direccion`, `token`, `path`, `path_portada`) VALUES
(1, 'pepito@hotmail.com', '12345', 'Pepe', 'Peposo', '+54 1234 56-7890', 'este es el espacio de la descripcion de mi buen amigo el trabajador Pepe. A Pepe le da vergüenza subir una foto asi que deja la default', 1, 1, 'San Lorenzo 321', NULL, '/Frontend/img/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png'),
(2, 'adriel@hotmail', '202cb962ac59075b964b07152d234b70', 'adriel', 'sanzone', '1234567', NULL, 0, 0, '6620', '002c9249101b3fb331b76125e2cb91a1', '/Frontend/img/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png'),
(32, 'martin.gonzalez@email.com', '202cb962ac59075b964b07152d234b70', 'Martín', 'González', '+54 1234 56-7890', 'Plomero de confianza en Chivilcoy. Soluciono tus problemas de fontanería de manera rápida y eficiente. ¡Llámame para un servicio de alta calidad!', 0, 1, '9 de Julio 123', '46b5cf792f067940918889f2c09a6145', '/Frontend/uploads/1695109538550.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(33, 'laura.rodriguez@email.com', '202cb962ac59075b964b07152d234b70', 'Laura', 'Rodríguez', '+54 1234 56-7890', 'Especialista en instalación y reparación de gas. Tu seguridad es mi prioridad. Contáctame para trabajos profesionales y seguros', 1, 1, 'Belgrano 456', 'fc4004be96e11dc804b95e866a54e61e', '/Frontend/uploads/1695109619338.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(34, 'juan.perez@email.com', '202cb962ac59075b964b07152d234b70', 'Juan', 'Pérez', '+54 1234 56-7890', 'Electricista con amplia experiencia en Chivilcoy. Hago que tu hogar brille con luz. ¡Confía en mí para tus necesidades eléctricas', 0, 1, 'San Martín 789', '282ca9f5cc5f2cb18421370eeba98556', '/Frontend/uploads/1695109737901.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(35, 'maria.lopez@email.com', '202cb962ac59075b964b07152d234b70', 'María', 'López', '+54 1234 56-7890', 'Transformo jardines en paraísos verdes. Cuida la belleza de tu espacio exterior. ¡Contáctame para un jardín de ensueño!', 1, 1, 'Rivadavia 234', '0a7e98ffd60b77dffa50db7c68858a0c', '/Frontend/uploads/1695109952599.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(36, 'pablo.fernandez@email.com', '202cb962ac59075b964b07152d234b70', 'Pablo', 'Fernández', '+54 1234 56-7890', 'Pintor artístico en Chivilcoy. Doy vida a tus ideas en colores. Transforma tu hogar u oficina con mi creatividad y precisión.', 0, 1, 'Sarmiento 567', 'd96212d643b23b4dfba3856b8040f1f9', '/Frontend/uploads/1695110028824.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(37, 'diego.martinez@email.com', '202cb962ac59075b964b07152d234b70', 'Diego', 'Martínez', '+54 1234 56-7890', 'Reparación rápida y confiable de dispositivos móviles. Vuelve a conectarte con tus seres queridos. ¡Estoy aquí para ayudarte con tus problemas de celular!', 1, 1, 'Mitre 890', '919909307311af824cf5b5dd1ca2c894', '/Frontend/uploads/1695110119612.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(38, 'carolina.silva@email.com', '202cb962ac59075b964b07152d234b70', 'Carolina', 'Silva', '', '', 0, 0, '', '1a81179de59a412ce878aefc63e7f5d5', '/Frontend/uploads/1695110204520.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(39, 'andres.torres@email.com', '202cb962ac59075b964b07152d234b70', 'Andrés', 'Torres', '+54 1234 56-7890', 'Gasista matriculado. Garantizo instalaciones seguras y eficientes. Tu tranquilidad es mi prioridad.', 1, 1, 'Moreno 678', 'fefa221db590c2b0efd4c683a79d1f7d', '/Frontend/uploads/1695110283985.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(40, 'valentina.garcia@email.com', '202cb962ac59075b964b07152d234b70', 'Valentina', 'García', '+54 1234 56-7890', 'Electricista profesional en Chivilcoy. Soluciono tus problemas eléctricos con rapidez y calidad. ¡Confía en mí para un servicio de primera!', 0, 1, 'Urquiza 456', 'de87ac959a9094705cf1aece501c95ad', '/Frontend/uploads/1695110392657.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(41, 'sebastian.ramos@email.com', '202cb962ac59075b964b07152d234b70', 'Sebastián', 'Ramos', '', '', 0, 0, '', '5958a34223bb53b9e193b7d340e2d612', '/Frontend/img/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png'),
(45, 'aaa', '202cb962ac59075b964b07152d234b70', 'aaaaaa', 'aaaaaa', '', '', 0, 0, '', '95654cf20bb9ab1cdb6c65664cb0f666', '/Frontend/img/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `especializacion_usuario`
--
ALTER TABLE `especializacion_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

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
