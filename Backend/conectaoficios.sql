-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-10-2023 a las 04:15:01
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
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `categoria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `categoria`) VALUES
(1, 'Agua'),
(2, 'Gas'),
(3, 'Electricidad'),
(4, 'Tecnología'),
(5, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especializaciones`
--

CREATE TABLE `especializaciones` (
  `id` int(11) NOT NULL,
  `especializacion` varchar(100) NOT NULL,
  `id_categoria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `especializaciones`
--

INSERT INTO `especializaciones` (`id`, `especializacion`, `id_categoria`) VALUES
(1, 'Plomero', 1),
(2, 'Electricista', 3),
(3, 'Pintor', 5),
(4, 'Jardinero', 5),
(5, 'Gasista', 2),
(6, 'Tecnologías', 4);

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
(19, 40, 2),
(42, 60, 2),
(46, 60, 6),
(48, 62, 1),
(49, 63, 2),
(50, 63, 5),
(51, 64, 1),
(53, 65, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id`, `id_usuario`, `titulo`, `descripcion`, `path`) VALUES
(3, 32, 'dasdad', 'asdsadad', '/Frontend/uploads/1697013514319.bigsale logo.jpg'),
(4, 32, 'dsadadaddadsadadadadad', 'dddddddddddddddddddddddd', '/Frontend/uploads/1697013529658.gatofino.jpg'),
(5, 33, 'dasdad', 'asdadasdas', '/Frontend/uploads/proyecto-default.jpg'),
(6, 32, 'test', 'undefined', '/Frontend/uploads/1697183061784.bigsale logo.jpg'),
(7, 32, 'dsadadas', 'undefined', '/Frontend/uploads/proyecto-default.jpg'),
(8, 60, 'mitituloooo', 'aaaaaaaaaaaaaaaa', '/Frontend/uploads/1697918185294.1697897020268.iphone.webp'),
(9, 60, 'dsad', 'dsadasd', '/Frontend/uploads/proyecto-default.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reseñas`
--

CREATE TABLE `reseñas` (
  `id` int(11) NOT NULL,
  `id_reseñador` int(11) NOT NULL,
  `id_reseñado` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `puntuacion` int(11) NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `reseñas`
--

INSERT INTO `reseñas` (`id`, `id_reseñador`, `id_reseñado`, `fecha`, `puntuacion`, `descripcion`) VALUES
(1, 60, 39, '2023-10-24', 2, '0'),
(2, 60, 37, '2023-10-24', 4, 'muy bueno'),
(3, 60, 35, '2023-10-24', 1, 'pesimo servicio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reseña_habilitada`
--

CREATE TABLE `reseña_habilitada` (
  `id` int(11) NOT NULL,
  `id_reseñador` int(11) DEFAULT NULL,
  `id_reseñado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_general_ci;

--
-- Volcado de datos para la tabla `reseña_habilitada`
--

INSERT INTO `reseña_habilitada` (`id`, `id_reseñador`, `id_reseñado`) VALUES
(3, 60, 39),
(4, 60, 37),
(5, 60, 35);

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
(2, 'adriel@hotmail', '202cb962ac59075b964b07152d234b70', 'adriel', 'sanzone', '1234567', NULL, 0, 0, '6620', '7c5a2d857c7e1d996911860b6436fd84', '/Frontend/img/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png'),
(32, 'martin.gonzalez@email.com', '202cb962ac59075b964b07152d234b70', 'Martín', 'González', '+54 1234 56-7890', '', 0, 1, '9 de Julio 123', '5fb74977d7ee749d0afabded29be765f', '/Frontend/uploads/1695109538550.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(33, 'laura.rodriguez@email.com', '202cb962ac59075b964b07152d234b70', 'Laura', 'Rodríguez', '+54 1234 56-7890', 'Gasista matriculado. Garantizo instalaciones seguras y eficientes. Tu tranquilidad es mi prioridad.', 1, 1, 'Belgrano 456', 'af0eba0056fa78d56d21f23ea7b2eb3f', '/Frontend/uploads/1695109619338.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(34, 'juan.perez@email.com', '202cb962ac59075b964b07152d234b70', 'Juan', 'Pérez', '+54 1234 56-7890', 'Electricista con amplia experiencia en Chivilcoy. Hago que tu hogar brille con luz. ¡Confía en mí para tus necesidades eléctricas', 0, 1, 'San Martín 789', 'f6c9ed68403fa1ad847f1e2f039f769a', '/Frontend/uploads/1695109737901.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(35, 'maria.lopez@email.com', '202cb962ac59075b964b07152d234b70', 'María', 'López', '+54 1234 56-7890', 'Transformo jardines en paraísos verdes. Cuida la belleza de tu espacio exterior. ¡Contáctame para un jardín de ensueño!', 1, 1, 'Rivadavia 234', '0a7e98ffd60b77dffa50db7c68858a0c', '/Frontend/uploads/1695109952599.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(36, 'pablo.fernandez@email.com', '202cb962ac59075b964b07152d234b70', 'Pablo', 'Fernández', '+54 1234 56-7890', 'Pintor artístico en Chivilcoy. Doy vida a tus ideas en colores. Transforma tu hogar u oficina con mi creatividad y precisión.', 0, 1, 'Sarmiento 567', '85fae73c6d041e7e3f293ee28965a177', '/Frontend/uploads/1695110028824.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(37, 'diego.martinez@email.com', '202cb962ac59075b964b07152d234b70', 'Diego', 'Martínez', '+54 1234 56-7890', 'Reparación rápida y confiable de dispositivos móviles. Vuelve a conectarte con tus seres queridos. ¡Estoy aquí para ayudarte con tus problemas de celular!', 1, 1, 'Mitre 890', '920a65b45afad49096052a884d7b2ac5', '/Frontend/uploads/1695110119612.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(38, 'carolina.silva@email.com', '202cb962ac59075b964b07152d234b70', 'Carolina', 'Silva', '', '', 0, 0, '', '1a81179de59a412ce878aefc63e7f5d5', '/Frontend/uploads/1695110204520.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(39, 'andres.torres@email.com', '202cb962ac59075b964b07152d234b70', 'Andrés', 'Torres', '+54 1234 56-7890', 'Gasista matriculado. Garantizo instalaciones seguras y eficientes. Tu tranquilidad es mi prioridad.', 1, 1, 'Moreno 678', 'fefa221db590c2b0efd4c683a79d1f7d', '/Frontend/uploads/1695110283985.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(40, 'valentina.garcia@email.com', '202cb962ac59075b964b07152d234b70', 'Valentina', 'García', '+54 1234 56-7890', 'Electricista profesional en Chivilcoy. Soluciono tus problemas eléctricos con rapidez y calidad. ¡Confía en mí para un servicio de primera!', 0, 1, 'Urquiza 456', 'de87ac959a9094705cf1aece501c95ad', '/Frontend/uploads/1695110392657.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(41, 'sebastian.ramos@email.com', '202cb962ac59075b964b07152d234b70', 'Sebastián', 'Ramos', '', '', 0, 0, '', '5958a34223bb53b9e193b7d340e2d612', '/Frontend/img/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png'),
(58, 'dasdasd', '7815696ecbf1c96e6894b779456d330e', 'asd', 'asda', '', '', 0, 0, '', '94cef2bb9a2116c8940eaacff86cb93f', '/Frontend/uploads/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png'),
(59, 'asdasd', 'ec02c59dee6faaca3189bace969c22d3', 'dsadasd', 'asdasd', '', '', 0, 0, '', '90cf07de174e021e8eef01f8d46fdc87', '/Frontend/uploads/1697010468014.gatofino.jpg', '/Frontend/uploads/1697010468025.bigsale logo.jpg'),
(60, 'aaa', '202cb962ac59075b964b07152d234b70', 'aaa', 'aaa', 'aaa', 'aaaaaa', 0, 1, 'aaa', 'ff2a46c64b3ba3d65cd3b0a85d7a4d72', '/Frontend/uploads/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png'),
(61, 'bbbb', 'd3b61ce9e1533f7849ece871723aa5a3', 'bbb', 'bbbb', '', '', 0, 0, '', '0d9cbe7a8314660ec8776cb9ae3d9588', '/Frontend/uploads/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png'),
(62, 'ccc', '202cb962ac59075b964b07152d234b70', 'cc', 'ccc', '', '', 0, 0, '', '1da3062db8cbccea261dee3d9319fc87', '/Frontend/uploads/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png'),
(63, 'ddd', '202cb962ac59075b964b07152d234b70', 'ddd', 'ddd', '', '', 0, 0, '', '767dc733c9fac126af9c8d4cb4ad7d40', '/Frontend/uploads/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png'),
(64, 'eee', '202cb962ac59075b964b07152d234b70', 'eee', 'eee', '000', '', 0, 1, 'f', 'e1cf9c97a5ca52370d515c9795d9f288', '/Frontend/uploads/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png'),
(65, 'fff', '202cb962ac59075b964b07152d234b70', 'fff', 'fff', 'd', '', 0, 1, 'd', '2f0b295b86e39a6c2b73a3ec3df891cc', '/Frontend/uploads/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `especializaciones`
--
ALTER TABLE `especializaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_categoria` (`id_categoria`);

--
-- Indices de la tabla `especializacion_usuario`
--
ALTER TABLE `especializacion_usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_especializacion` (`id_especializacion`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reseñas`
--
ALTER TABLE `reseñas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reseña_habilitada`
--
ALTER TABLE `reseña_habilitada`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_reseñador` (`id_reseñador`),
  ADD KEY `id_reseñado` (`id_reseñado`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `especializacion_usuario`
--
ALTER TABLE `especializacion_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `reseñas`
--
ALTER TABLE `reseñas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `reseña_habilitada`
--
ALTER TABLE `reseña_habilitada`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `especializaciones`
--
ALTER TABLE `especializaciones`
  ADD CONSTRAINT `fk_id_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`);

--
-- Filtros para la tabla `especializacion_usuario`
--
ALTER TABLE `especializacion_usuario`
  ADD CONSTRAINT `especializacion_usuario_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `especializacion_usuario_ibfk_2` FOREIGN KEY (`id_especializacion`) REFERENCES `especializaciones` (`id`);

--
-- Filtros para la tabla `reseña_habilitada`
--
ALTER TABLE `reseña_habilitada`
  ADD CONSTRAINT `reseña_habilitada_ibfk_1` FOREIGN KEY (`id_reseñador`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `reseña_habilitada_ibfk_2` FOREIGN KEY (`id_reseñado`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
