-- Contratos de Credito - tablas del ejercicio de acceso a base de datos
-- Importar desde phpMyAdmin dentro de la base ya creada (local o Clever Cloud)

SET NAMES utf8mb4;

DROP TABLE IF EXISTS contratos;
DROP TABLE IF EXISTS planesDePago;
DROP TABLE IF EXISTS usuarios;

-- Tabla auxiliar para el campo parametrizable (desplegable)
CREATE TABLE planesDePago (
	codPlan VARCHAR(4) NOT NULL,
	descripcionPlan VARCHAR(50) NOT NULL,
	PRIMARY KEY (codPlan)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO planesDePago (codPlan, descripcionPlan) VALUES
('P12M', '12 cuotas mensuales'),
('P24M', '24 cuotas mensuales'),
('P36M', '36 cuotas mensuales'),
('P03A', '3 cuotas anuales');

-- Tabla principal
CREATE TABLE contratos (
	id INT NOT NULL AUTO_INCREMENT,
	idContrato VARCHAR(10) NOT NULL,
	dniDeudor VARCHAR(10) NOT NULL,
	apellidoNombres VARCHAR(100) NOT NULL,
	codPlan VARCHAR(4) NOT NULL,
	montoTotalFinanciado DOUBLE NOT NULL,
	fechaContrato DATE NOT NULL,
	pdfContrato LONGBLOB NULL,
	PRIMARY KEY (id),
	UNIQUE KEY uk_contratos_idContrato (idContrato),
	CONSTRAINT fk_contratos_planesDePago FOREIGN KEY (codPlan) REFERENCES planesDePago (codPlan)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO contratos (idContrato, dniDeudor, apellidoNombres, codPlan, montoTotalFinanciado, fechaContrato) VALUES
('CT0001', '24589937', 'Benitez, Paula', 'P24M', 536527, '2025-07-20'),
('CT0002', '23397061', 'Luna, Carlos', 'P36M', 970394, '2024-01-06'),
('CT0003', '35552414', 'Salazar, Miguel', 'P03A', 1902683, '2024-06-15'),
('CT0004', '26075274', 'Sanchez, Camila', 'P36M', 2106557, '2023-07-14'),
('CT0005', '22800748', 'Rodriguez, Gabriel', 'P36M', 1774992, '2024-02-17'),
('CT0006', '21817330', 'Morales, Martin', 'P36M', 163098, '2025-11-12'),
('CT0007', '31387877', 'Paez, Ana', 'P12M', 1347807, '2025-07-19'),
('CT0008', '32438597', 'Cabrera, Gabriel', 'P12M', 457351, '2025-05-25'),
('CT0009', '41009533', 'Vargas, Micaela', 'P24M', 1638987, '2023-10-12'),
('CT0010', '30411898', 'Rojas, Ricardo', 'P36M', 1238234, '2023-07-06'),
('CT0011', '24716382', 'Maidana, Maria', 'P12M', 494538, '2025-01-19'),
('CT0012', '20820023', 'Quiroga, Valentina', 'P24M', 1389099, '2023-03-23'),
('CT0013', '34772398', 'Morales, Francisco', 'P24M', 1908687, '2024-12-25'),
('CT0014', '25752822', 'Chavez, Sofia', 'P03A', 380424, '2023-09-09'),
('CT0015', '44760066', 'Sosa, Lucia', 'P03A', 958525, '2025-11-12'),
('CT0016', '36368160', 'Cortez, Gustavo', 'P24M', 961979, '2025-04-23'),
('CT0017', '44131297', 'Garcia, Pedro', 'P24M', 327742, '2025-11-23'),
('CT0018', '33877337', 'Medina, Francisco', 'P36M', 654913, '2025-06-18'),
('CT0019', '31845671', 'Vargas, Pedro', 'P03A', 400750, '2024-07-21'),
('CT0020', '39400684', 'Martinez, Martin', 'P36M', 1208459, '2024-10-05'),
('CT0021', '37865227', 'Suarez, Miguel', 'P36M', 1244458, '2025-06-14'),
('CT0022', '28922805', 'Aguirre, Gustavo', 'P03A', 747435, '2025-07-14'),
('CT0023', '34353152', 'Maidana, Maria', 'P03A', 194329, '2023-06-21'),
('CT0024', '44065091', 'Suarez, Pedro', 'P36M', 794222, '2023-09-13'),
('CT0025', '40262879', 'Peralta, Julieta', 'P36M', 1104850, '2024-11-02'),
('CT0026', '42600866', 'Salazar, Daniela', 'P03A', 281130, '2025-07-22'),
('CT0027', '25126525', 'Rios, Belen', 'P36M', 530864, '2023-09-27'),
('CT0028', '40151181', 'Fernandez, Miguel', 'P03A', 1218124, '2023-08-20'),
('CT0029', '21950573', 'Diaz, Gabriel', 'P12M', 590328, '2024-03-04'),
('CT0030', '29611588', 'Perez, Pablo', 'P03A', 322433, '2023-07-14'),
('CT0031', '26093842', 'Ledesma, Pedro', 'P12M', 543251, '2024-03-06'),
('CT0032', '25486582', 'Acosta, Miguel', 'P12M', 1065812, '2024-05-14'),
('CT0033', '39844710', 'Ramirez, Lucia', 'P12M', 446572, '2024-10-13'),
('CT0034', '44888113', 'Ruiz, Sofia', 'P12M', 1936894, '2025-06-12'),
('CT0035', '31679843', 'Vargas, Jose', 'P36M', 1630351, '2025-11-07'),
('CT0036', '20459201', 'Gonzalez, Francisco', 'P03A', 2479740, '2023-11-20'),
('CT0037', '26097305', 'Salazar, Sofia', 'P12M', 478912, '2025-07-06'),
('CT0038', '29841418', 'Medina, Lucia', 'P24M', 1454790, '2024-02-25'),
('CT0039', '43095986', 'Alvarez, Agustina', 'P36M', 603758, '2024-10-01'),
('CT0040', '22644402', 'Ledesma, Lucia', 'P12M', 402451, '2023-05-02'),
('CT0041', '30784617', 'Cabrera, Ana', 'P24M', 73300, '2025-06-19'),
('CT0042', '40853618', 'Ibarra, Francisco', 'P24M', 1635645, '2023-08-11'),
('CT0043', '42195275', 'Castro, Alejandro', 'P24M', 497308, '2025-02-20'),
('CT0044', '39133109', 'Gonzalez, Ana', 'P03A', 1488714, '2024-06-08'),
('CT0045', '30741701', 'Chavez, Paula', 'P12M', 2078381, '2023-11-27'),
('CT0046', '36766766', 'Duarte, Agustina', 'P03A', 331691, '2025-09-20'),
('CT0047', '27209705', 'Silva, Gabriel', 'P03A', 1943706, '2024-11-10'),
('CT0048', '34112795', 'Ramirez, Diego', 'P03A', 2080768, '2024-06-07'),
('CT0049', '28641188', 'Cabrera, Laura', 'P03A', 1205129, '2023-06-15'),
('CT0050', '29939783', 'Castro, Miguel', 'P03A', 1958525, '2024-04-01');

-- Tabla de usuarios
CREATE TABLE usuarios (
	idUsuario INT NOT NULL AUTO_INCREMENT,
	login VARCHAR(30) NOT NULL,
	apellido VARCHAR(50) NOT NULL,
	nombres VARCHAR(50) NOT NULL,
	password VARCHAR(64) NOT NULL,
	contadorSesiones INT(5) NOT NULL DEFAULT 0,
	PRIMARY KEY (idUsuario),
	UNIQUE KEY uk_usuarios_login (login)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO usuarios (login, apellido, nombres, password, contadorSesiones) VALUES
('mgomez', 'Gomez Paratcha', 'Matias', SHA2('1234', 256), 0);
