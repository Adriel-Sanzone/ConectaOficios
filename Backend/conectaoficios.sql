-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2023 a las 07:11:18
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
(6, 'Arreglos tecnológicos', 4),
(13, 'Fontanero', 1),
(14, 'Sistemas de riego', 1),
(15, 'Tratamiento de aguas\n', 1),
(16, 'Paneles solares', 3),
(17, 'Electricista industrial', 3),
(18, 'Reparación de calderas', 2),
(19, 'Inspector de seguridad', 2),
(20, 'Desarrollador web', 4),
(21, 'Ingeniero de software', 4),
(22, 'Ciberseguridad', 4),
(23, 'Carpintero', 5),
(24, 'Albañil', 5);

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
(53, 65, 1),
(55, 66, 2),
(56, 67, 1),
(57, 69, 1),
(58, 70, 1),
(59, 71, 5),
(60, 72, 5),
(61, 73, 2),
(62, 74, 2),
(63, 75, 6),
(64, 76, 6),
(65, 77, 3),
(66, 78, 3),
(67, 79, 4),
(68, 80, 4);

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
(9, 60, 'dsad', 'dsadasd', '/Frontend/uploads/proyecto-default.jpg'),
(10, 66, 'a', 'a', '/Frontend/uploads/1698108513178.alberto-meme.jpg'),
(11, 67, 'ahdfh', 'adfsdf', '/Frontend/uploads/1700321673554.angelicadoll.jpg'),
(12, 67, 'e', 'e', '/Frontend/uploads/proyecto-default.jpg');

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
  `descripcion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `reseñas`
--

INSERT INTO `reseñas` (`id`, `id_reseñador`, `id_reseñado`, `fecha`, `puntuacion`, `descripcion`) VALUES
(1, 66, 1, '2023-11-03', 4, 0),
(2, 66, 32, '2023-11-03', 3, 0),
(3, 66, 35, '2023-11-03', 3, 0),
(4, 66, 37, '2023-11-15', 4, 0),
(5, 67, 33, '2023-11-18', 3, 0),
(6, 67, 1, '2023-11-18', 2, 0);

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
(5, 66, 1),
(6, 66, 32),
(7, 66, 35),
(8, 66, 34),
(9, 66, 33),
(10, 66, 37),
(11, 67, 39),
(12, 67, 1),
(13, 67, 33),
(14, 68, 33);

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
(1, 'adriel@hotmail', '202cb962ac59075b964b07152d234b70', 'Adriel', 'Sanzone', '', '', 0, 0, '', 'd3ef135b313f6e897e2594b2cbd703eb', '/Frontend/uploads/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png'),
(2, 'fede@hotmail', '202cb962ac59075b964b07152d234b70', 'Federico', 'Caggiano', '', '', 0, 0, '', '64ffe5cb1a9b121be817fca8c0691936', '/Frontend/uploads/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png'),
(3, 'abril@hotmail', '202cb962ac59075b964b07152d234b70', 'Abril', 'Sanchez', '', '', 0, 0, '', '98cca20cffe1a5d8c22bb0ca42ce9e9d', '/Frontend/uploads/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png'),
(4, 'kevin@hotmail', '202cb962ac59075b964b07152d234b70', 'Kevin', 'Ledesma', '', '', 0, 0, '', '8cd38a390759414dc96bad869f3b56cd', '/Frontend/uploads/usuario-sin-foto.png', '/Frontend/uploads/portada-sin-foto.png'),
(33, 'laura.rodriguez@email.com', '202cb962ac59075b964b07152d234b70', 'Laura', 'Rodríguez', '+54 1234 56-7890', 'Gasista matriculado. Garantizo instalaciones seguras y eficientes. Tu tranquilidad es mi prioridad.', 1, 1, 'Belgrano 456', 'af0eba0056fa78d56d21f23ea7b2eb3f', '/Frontend/uploads/1695109619338.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(34, 'juan.perez@email.com', '202cb962ac59075b964b07152d234b70', 'Juan', 'Pérez', '+54 1234 56-7890', 'Electricista con amplia experiencia en Chivilcoy. Hago que tu hogar brille con luz. ¡Confía en mí para tus necesidades eléctricas', 0, 1, 'San Martín 789', 'c05d38d076fcdb0b74e6772f54fa80d4', '/Frontend/uploads/1695109737901.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(35, 'maria.lopez@email.com', '202cb962ac59075b964b07152d234b70', 'María', 'López', '+54 1234 56-7890', 'Transformo jardines en paraísos verdes. Cuida la belleza de tu espacio exterior. ¡Contáctame para un jardín de ensueño!', 1, 1, 'Rivadavia 234', '0a7e98ffd60b77dffa50db7c68858a0c', '/Frontend/uploads/1695109952599.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(36, 'pablo.fernandez@email.com', '202cb962ac59075b964b07152d234b70', 'Pablo', 'Fernández', '+54 1234 56-7890', 'Pintor artístico en Chivilcoy. Doy vida a tus ideas en colores. Transforma tu hogar u oficina con mi creatividad y precisión.', 0, 1, 'Sarmiento 567', '85fae73c6d041e7e3f293ee28965a177', '/Frontend/uploads/1695110028824.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(37, 'diego.martinez@email.com', '202cb962ac59075b964b07152d234b70', 'Diego', 'Martínez', '+54 1234 56-7890', 'Reparación rápida y confiable de dispositivos móviles. Vuelve a conectarte con tus seres queridos. ¡Estoy aquí para ayudarte con tus problemas de celular!', 1, 1, 'Mitre 890', '920a65b45afad49096052a884d7b2ac5', '/Frontend/uploads/1695110119612.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(39, 'andres.torres@email.com', '202cb962ac59075b964b07152d234b70', 'Andrés', 'Torres', '+54 1234 56-7890', 'Gasista matriculado. Garantizo instalaciones seguras y eficientes. Tu tranquilidad es mi prioridad.', 1, 1, 'Moreno 678', 'fefa221db590c2b0efd4c683a79d1f7d', '/Frontend/uploads/1695110283985.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(40, 'valentina.garcia@email.com', '202cb962ac59075b964b07152d234b70', 'Valentina', 'García', '+54 1234 56-7890', 'Electricista profesional en Chivilcoy. Soluciono tus problemas eléctricos con rapidez y calidad. ¡Confía en mí para un servicio de primera!', 0, 1, 'Urquiza 456', 'de87ac959a9094705cf1aece501c95ad', '/Frontend/uploads/1695110392657.Sin tÃ­tulo.png', '/Frontend/uploads/portada-sin-foto.png'),
(69, '1@', 'c4ca4238a0b923820dcc509a6f75849b', 'Rodrigo', 'Perez', '2346576877', 'Desde la reparación de fugas y la instalación de tuberías hasta la resolución de problemas de drenaje, nuestro plomero ofrece servicios integrales con un enfoque meticuloso. Su compromiso con la calidad y la satisfacción del cliente se refleja en cada tarea que emprende. Además de su destreza técnica, su trato profesional y amable garantiza una experiencia positiva para cada cliente.', 0, 1, '143, 78', '0bef27455c73610d4e38e69d359c7e02', '/Frontend/uploads/1700322209072.hombre-arrodillado-tocando-fregadero-inspeccionando-tuberias_259150-58251.jpg', '/Frontend/uploads/1700322209096.hombre-arrodillado-tocando-fregadero-inspeccionando-tuberias_259150-58251.jpg'),
(70, '2@', 'c4ca4238a0b923820dcc509a6f75849b', 'Mariela', 'Rodriguez', '2346564532', 'Confíe en nuestro plomero para solucionar sus necesidades de fontanería de manera confiable y profesional.', 0, 1, 'Mitre, 45', '390757363429ba38e6dd2c533343d649', '/Frontend/uploads/1700322287732.vista-lateral-mujer-trabajando-como-fontanero_23-2150746367.jpg', '/Frontend/uploads/1700322287754.vista-lateral-mujer-trabajando-como-fontanero_23-2150746367.jpg'),
(71, '3@', 'c4ca4238a0b923820dcc509a6f75849b', 'Elio', 'Torres', '2346789043', 'Nuestro gasista certificado es un profesional dedicado a brindar servicios seguros y confiables relacionados con instalaciones de gas. Con una formación exhaustiva y un enfoque centrado en la seguridad, este experto se especializa en la instalación, mantenimiento y reparación de sistemas de gas para hogares y negocios.', 0, 1, 'Sarmiento 70', '6c4290ff4ca32be50823b11c8289ece1', '/Frontend/uploads/1700322399681.trabajador-reparando-calentador-agua_23-2149334230.jpg', '/Frontend/uploads/1700322399707.trabajador-reparando-calentador-agua_23-2149334230.jpg'),
(72, '4@', 'c4ca4238a0b923820dcc509a6f75849b', 'Romina', 'Paez', '2345776612', 'Este profesional altamente cualificado está equipado para abordar una variedad de tareas, desde la instalación de sistemas de calefacción hasta la detección y reparación de fugas. La prioridad principal de nuestro gasista es garantizar que todas las instalaciones cumplan con los estándares de seguridad más rigurosos, proporcionando tranquilidad a nuestros clientes.', 0, 1, 'Pelegrini 98', '185718ca050d94a69cb77e29e37857ce', '/Frontend/uploads/1700322509650.retrato-hermosa-mujer-mecanico-garaje_107420-95936.jpg', '/Frontend/uploads/portada-sin-foto.png'),
(73, '5@', 'c4ca4238a0b923820dcc509a6f75849b', 'Tomas', 'Caseros', '2346358699', 'Nuestro electricista altamente calificado es un profesional especializado en proporcionar soluciones eléctricas seguras y eficientes. Con una amplia experiencia en el campo, este experto se destaca en la instalación, mantenimiento y reparación de sistemas eléctricos para hogares y negocios.', 0, 1, '104, 67', '4d57ada3192dbbcaaca5553135cc6202', '/Frontend/uploads/1700322669910.hombre-casco-sentado-brazos-cruzados_23-2148923128.jpg', '/Frontend/uploads/portada-sin-foto.png'),
(74, '6l@', 'c4ca4238a0b923820dcc509a6f75849b', 'Estela', 'Mendoza', '2346132454', 'Desde la resolución de problemas eléctricos comunes hasta la planificación y ejecución de proyectos de cableado complejos, electricista ofrece un servicio integral.', 0, 1, 'Laprida 56', '7877d2d498915862412dcdb1b4cc5486', '/Frontend/uploads/1700322787093.tiro-medio-mujer-negocios-sonriente_23-2148692818.jpg', '/Frontend/uploads/portada-sin-foto.png'),
(75, '7@', 'c4ca4238a0b923820dcc509a6f75849b', 'Mario', 'Catelii', '2346893354', 'Nuestro especialista en arreglos tecnológicos es un profesional versátil y hábil dedicado a resolver una amplia gama de problemas y necesidades relacionadas con dispositivos y tecnología.', 0, 1, 'Castelli 567', '90eb4af46dc8f12193b7546ea6b85fd1', '/Frontend/uploads/1700322932513.retrato-empleado-feliz-volver-al-trabajo_23-2148727615 (1).jpg', '/Frontend/uploads/portada-sin-foto.png'),
(76, '7l@', 'c4ca4238a0b923820dcc509a6f75849b', 'Morena', 'Gomez', '2346788972', 'Con experiencia en la reparación y optimización de equipos electrónicos, este experto está listo para abordar desafíos tecnológicos con eficiencia y conocimiento.', 0, 1, 'Suipacha, 63', '71e3292b99e7d225ebf74f627225a728', '/Frontend/uploads/1700323058803.mujer-feliz-polo-gris-boton-pin-rosa_53876-102858 (1).jpg', '/Frontend/uploads/portada-sin-foto.png'),
(77, 'ab44l@', 'c4ca4238a0b923820dcc509a6f75849b', 'Lucas', 'Diaz', '2345123212', 'Nuestro pintor profesional es un artista en la transformación de espacios a través del color y la creatividad. Con una destreza excepcional en la aplicación de pintura y un ojo agudo para el diseño, este experto se especializa en embellecer y revitalizar hogares y negocios.', 0, 1, 'Indacochea 234', '366896fefcdc4c990c53833b63b5fa29', '/Frontend/uploads/1700323167239.retrato-sonriente-joven-encantador-camiseta-gris-pie-contra-fondo-liso_23-2148213406.jpg', '/Frontend/uploads/portada-sin-foto.png'),
(78, 'ab3333l@', 'c4ca4238a0b923820dcc509a6f75849b', 'Tatiana', 'Flores', '23465554477', 'Desde la preparación de superficies hasta la selección de colores y la aplicación precisa de capas de pintura, nuestro pintor aborda cada proyecto con precisión y dedicación. Su experiencia abarca una variedad de técnicas, desde acabados tradicionales hasta aplicaciones más modernas y creativas.', 0, 1, 'Alsina 777', 'ea8b55b3ac81ad8ae12d7f56d17fc239', '/Frontend/uploads/1700323238487.mujer-feliz-copas-pie-pared_23-2148071584.jpg', '/Frontend/uploads/portada-sin-foto.png'),
(79, 'ab22222222l@', 'c4ca4238a0b923820dcc509a6f75849b', 'Gabriel', 'Ruiz', '2346598767', 'Nuestro jardinero profesional es un apasionado de la naturaleza y un experto en transformar espacios exteriores en exuberantes oasis. Con una combinación de conocimientos botánicos y habilidades prácticas, este experto se especializa en el diseño, cuidado y mantenimiento de jardines que reflejan la belleza y armonía de la naturaleza.', 0, 1, 'Balcarce, 90', '2cb98a2f9b39fba0611697ce9161ba17', '/Frontend/uploads/1700323432128.loco-mirando-camara_23-2147808150.jpg', '/Frontend/uploads/portada-sin-foto.png'),
(80, '44444abl@', 'c4ca4238a0b923820dcc509a6f75849b', 'Paola', 'Vasquez', '2346233223', 'Desde la planificación de paisajes hasta la plantación de flores y la poda de arbustos, nuestro jardinero aborda cada tarea con un enfoque meticuloso. Además de crear espacios estéticamente agradables, también se preocupa por la salud y vitalidad de cada planta, utilizando prácticas de jardinería sostenibles y respetuosas con el medio ambiente.', 0, 1, '6, 79', '3131773c5a7e2e0979fd244f272a1a86', '/Frontend/uploads/1700323504032.vista-frontal-chica-casco-ingeniero_23-2148512378.jpg', '/Frontend/uploads/portada-sin-foto.png');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `especializacion_usuario`
--
ALTER TABLE `especializacion_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `reseñas`
--
ALTER TABLE `reseñas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `reseña_habilitada`
--
ALTER TABLE `reseña_habilitada`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `especializaciones`
--
ALTER TABLE `especializaciones`
  ADD CONSTRAINT `fk_id_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
