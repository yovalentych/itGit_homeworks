-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 08, 2023 at 08:46 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auto`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `vin` varchar(17) NOT NULL,
  `make` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  `year` smallint UNSIGNED NOT NULL,
  `cost` float NOT NULL,
  `mileage` int UNSIGNED NOT NULL,
  `color` varchar(100) NOT NULL,
  `fuel` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`vin`, `make`, `model`, `year`, `cost`, `mileage`, `color`, `fuel`) VALUES
('3FA6P0G75GR398265', 'ford', 'fusion', 2016, 8900, 140, 'blue', 'g'),
('JM3KFBDL9H0123385', 'mazda', 'cx-5', 2017, 23500, 102, 'grey', 'g'),
('JTEBU25J985120478', 'toyota', 'land cruiser prado', 2008, 19000, 280, 'black', 'b'),
('JTEBU3FJ70K195318', 'toyota', 'land cruiser prado', 2020, 58000, 23, 'black', 'd'),
('KNAKN813DB5066265', 'kia', 'mohave', 2011, 14500, 135, 'grey', 'd'),
('TMBJG7NExG0528972', 'skoda', 'octavia', 2015, 11950, 202, 'black', 'd'),
('VF1KZ140651723787', 'renault', 'megane', 2015, 8999, 300, 'black', 'd'),
('WAUA7GFFXG1099013', 'audi', 'a3', 2016, 18999, 122, 'white', 'g'),
('WAUZZZ4G7GN092887', 'audi', 'a6', 2015, 24850, 223, 'black', 'd'),
('WAUZZZ4L7DD027133', 'audi', 'q7', 2013, 27300, 105, 'black', 'd'),
('WBAKV610200W36718', 'bmw', 'x6', 2017, 60500, 50, 'white', 'd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`vin`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
