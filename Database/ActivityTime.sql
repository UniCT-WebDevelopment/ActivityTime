-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Creato il: Set 27, 2022 alle 17:48
-- Versione del server: 10.4.21-MariaDB
-- Versione PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ActivityTime`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `Activities`
--

CREATE TABLE `Activities` (
  `id` int(6) UNSIGNED NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `date` date NOT NULL,
  `time_start` time DEFAULT NULL,
  `time_end` time DEFAULT NULL,
  `city` varchar(30) NOT NULL,
  `address` varchar(30) NOT NULL,
  `cod_founder` varchar(50) NOT NULL,
  `type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `Activities`
--

INSERT INTO `Activities` (`id`, `title`, `description`, `date`, `time_start`, `time_end`, `city`, `address`, `cod_founder`, `type`) VALUES
(128, 'Consegna Progetto Web', '', '2022-08-17', '09:00:00', '23:59:00', 'Catania', 'Su Teams', 'dinatalealessio10@gmail.com', 'PR'),
(129, 'Palestra', '', '2022-08-22', '11:00:00', '12:30:00', 'Catania', 'Via Della Palestra 40', 'dinatalealessio10@gmail.com', 'PR'),
(130, 'Corsa sul lungomare ', 'Corsa sul lungomare per rigenerarsi dopo ferragosto ', '2022-08-18', '17:30:00', '18:30:00', 'Catania', 'Lungomare di Catania', 'marcoprivitera@gmail.com', 'P'),
(131, 'Studio', '', '2022-08-22', '09:00:00', '13:00:00', 'Catania', 'Casa Mia', 'dinatalealessio10@gmail.com', 'PR'),
(132, 'Mythic World of Warcraft', 'Istance mitica su wow per gear', '2022-08-18', '11:00:00', '12:45:00', 'World of warcraft', 'World of warcraft', 'dinatalealessio10@gmail.com', 'PR'),
(133, 'Sushi Tattico', '', '2022-08-27', '11:00:00', '12:30:00', 'Tremestieri Etneo', 'Centro commerciale \'I Portali\'', 'dinatalealessio10@gmail.com', 'P'),
(134, 'Giocata a carte', '', '2022-08-26', '15:00:00', '19:00:00', 'Catania', 'Via Treviso 44', 'dinatalealessio10@gmail.com', 'R'),
(135, 'Partita Calcio a 7', '', '2022-08-22', '18:00:00', '19:00:00', 'Catania', 'Via Nuovaluce 57', 'marcoprivitera@gmail.com', 'P'),
(136, 'Aula Studio', 'Studiamo insieme alla cittadella per l\'esame di web?', '2022-08-19', '15:00:00', '19:00:00', 'Catania', 'Via Santa Sofia 140', 'marcoprivitera@gmail.com', 'R'),
(137, 'Attività solo per fillare', '', '2022-08-25', '15:30:00', '19:30:00', 'Catania', 'Via Roma 105', 'dinatalealessio10@gmail.com', 'PR'),
(150, 'Attività solo per fillare', '', '2022-08-23', '15:30:00', '19:30:00', 'Catania', 'Via Roma 105', 'dinatalealessio10@gmail.com', 'PR'),
(151, 'Attività solo per fillare', '', '2022-08-21', '15:30:00', '19:30:00', 'Catania', 'Via Roma 105', 'dinatalealessio10@gmail.com', 'PR'),
(152, 'Attività solo per fillare', '', '2022-08-19', '15:30:00', '19:30:00', 'Catania', 'Via Roma 105', 'dinatalealessio10@gmail.com', 'R'),
(155, 'Attività solo per fillare', '', '2022-08-19', '17:30:00', '19:30:00', 'Catania', 'Via Roma 105', 'dinatalealessio10@gmail.com', 'PR'),
(156, 'Evento spiaggia party', '', '2022-08-23', '09:00:00', '12:30:00', 'Catania', 'Via della playa 33', 'marcoprivitera@gmail.com', 'P'),
(157, 'nuova attività etnaland', 'tutti in acqua', '2022-08-25', '10:00:00', '18:00:00', 'Catania', 'Via feudo grande 40', 'dinatalealessio10@gmail.com', 'R'),
(158, 'afaf', 'afsa', '2022-08-19', '10:00:00', '18:00:00', 'fasfas', 'fasfs', 'dinatalealessio10@gmail.com', 'PR'),
(159, 'dasdsa', 'sdadas', '2022-08-19', '13:10:00', '15:10:00', 'adsasd', 'dasads', 'dinatalealessio10@gmail.com', 'PR'),
(160, 'fafas', 'fasfas', '2022-08-19', '10:10:00', '20:20:00', 'fasfas', 'fasfas', 'dinatalealessio10@gmail.com', 'PR'),
(161, 'dasdas', '', '2022-08-17', '12:13:00', '13:15:00', 'dasd', 'asdaddas', 'dinatalealessio10@gmail.com', 'PR'),
(162, 'Scopata con A', '', '2022-08-24', '21:30:00', '23:59:00', 'Catania', 'Viale Giuseppe Laino', 'aldofiorito@gmail.com', 'P'),
(163, 'ciao', '', '2022-08-26', '13:30:00', '19:20:00', 'catania', 'vaiodas', 'dinatalealessio10@gmail.com', 'PR'),
(164, 'dasd', '', '2022-08-26', '10:00:00', '12:00:00', 'das', 'dasddas', 'dinatalealessio10@gmail.com', 'R'),
(165, 'dasd', '', '2022-08-25', '21:30:00', '22:50:00', 'Catania', 'fafasfas', 'aldofiorito@gmail.com', 'P'),
(166, 'Prova', 'siamo toranti', '2022-09-22', '13:14:00', '20:20:00', 'Catania', 'Via feudo grande 40', 'dinatalealessio10@gmail.com', 'R'),
(167, 'A casa di renato', '', '2022-09-23', '12:30:00', '19:30:00', 'Catania', 'Via Gioacchino Rossini', 'dinatalealessio10@gmail.com', 'PR'),
(168, 'Casa Gio', '', '2022-09-28', '12:44:00', '20:10:00', 'Tremestieri Etneo', 'Via dei giardini 4', 'dinatalealessio10@gmail.com', 'PR'),
(169, 'Pasticcini', '', '2022-09-26', '10:10:00', '21:44:00', 'Catania', 'Via Napoli', 'dinatalealessio10@gmail.com', 'PR'),
(170, 'palestra', 'pesi', '2022-10-21', '11:00:00', '11:15:00', 'catania', 'via etnea 590', 'juventus102008@gmail.com', 'P'),
(171, 'Giocata a carte', 'Giocata a carte da Marco ', '2022-09-28', '13:50:00', '20:00:00', 'San Giovanni La Punta', 'Via della regione', 'dinatalealessio10@gmail.com', 'PR'),
(172, 'Corsa sul lungomare', '', '2022-09-30', '10:00:00', '11:30:00', 'Catania', 'Lungo mare', 'dinatalealessio10@gmail.com', 'P'),
(173, 'Corsa lungo mare', '', '2022-09-27', '10:15:00', '11:40:00', 'Catania', 'Via Zoccolanti 31', 'dinatalealessio10@gmail.com', 'R'),
(174, 'Corsa lungomare ', '', '2022-09-28', '12:30:00', '13:30:00', 'Catania', 'Via zoccolanti 31', 'prova@gmail.com', 'R');

-- --------------------------------------------------------

--
-- Struttura della tabella `Friendlist`
--

CREATE TABLE `Friendlist` (
  `id` int(6) UNSIGNED NOT NULL,
  `cod_usr` varchar(50) NOT NULL,
  `cod_friend` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `Friendlist`
--

INSERT INTO `Friendlist` (`id`, `cod_usr`, `cod_friend`) VALUES
(50, 'dinatalealessio10@gmail.com', 'marcoprivitera@gmail.com'),
(51, 'marcoprivitera@gmail.com', 'dinatalealessio10@gmail.com'),
(52, 'dinatalealessio10@gmail.com', 'aldofiorito@gmail.com'),
(53, 'aldofiorito@gmail.com', 'dinatalealessio10@gmail.com'),
(54, 'dinatalealessio10@gmail.com', 'juventus102008@gmail.com'),
(55, 'juventus102008@gmail.com', 'dinatalealessio10@gmail.com'),
(56, 'dinatalealessio10@gmail.com', 'prova@gmail.com'),
(57, 'prova@gmail.com', 'dinatalealessio10@gmail.com'),
(58, 'dinatalealessio10@gmail.com', 'matteoleonardi@gmail.com'),
(59, 'matteoleonardi@gmail.com', 'dinatalealessio10@gmail.com');

-- --------------------------------------------------------

--
-- Struttura della tabella `Notifications`
--

CREATE TABLE `Notifications` (
  `id` int(6) UNSIGNED NOT NULL,
  `type` varchar(20) NOT NULL,
  `cod_usr` varchar(50) NOT NULL,
  `cod_sender` varchar(50) NOT NULL,
  `cod_activity` int(6) UNSIGNED NOT NULL,
  `status_notification` varchar(10) NOT NULL,
  `activity_title` varchar(40) NOT NULL,
  `date` date NOT NULL DEFAULT '0000-00-00',
  `time_start` varchar(30) NOT NULL DEFAULT '00-00',
  `time_end` varchar(30) NOT NULL DEFAULT '00-00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `Notifications`
--

INSERT INTO `Notifications` (`id`, `type`, `cod_usr`, `cod_sender`, `cod_activity`, `status_notification`, `activity_title`, `date`, `time_start`, `time_end`) VALUES
(97, 'invite_request', 'marcoprivitera@gmail.com', 'dinatalealessio10@gmail.com', 157, 'N', 'nuova attività etnaland', '2022-08-25', '10:00', '18:00'),
(102, 'invite_request', 'marcoprivitera@gmail.com', 'dinatalealessio10@gmail.com', 166, 'N', 'Prova', '2022-09-22', '13:14', '20:20'),
(103, 'invite_request', 'aldofiorito@gmail.com', 'dinatalealessio10@gmail.com', 166, 'N', 'Prova', '2022-09-22', '13:14', '20:20'),
(108, 'invite_request', 'prova@gmail.com', 'dinatalealessio10@gmail.com', 173, 'N', 'Corsa lungo mare', '2022-09-27', '10:15', '11:40'),
(109, 'invite_request', 'dinatalealessio10@gmail.com', 'prova@gmail.com', 174, 'N', 'Corsa lungomare ', '2022-09-28', '12:30', '13:30'),
(111, 'join_request', 'dinatalealessio10@gmail.com', 'matteoleonardi@gmail.com', 172, 'N', 'Corsa sul lungomare', '2022-09-30', '10:00', '11:30');

-- --------------------------------------------------------

--
-- Struttura della tabella `Users`
--

CREATE TABLE `Users` (
  `email` varchar(50) NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `url_photo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `Users`
--

INSERT INTO `Users` (`email`, `name`, `surname`, `password`, `url_photo`) VALUES
('aldofiorito@gmail.com', 'aldo', 'fiorito', 'password', 'none'),
('dinatalealessio10@gmail.com', 'Alessio', 'Dinatale', 'password', 'none'),
('juventus102008@gmail.com', 'federico', 'cristaldi', 'ciaociao', 'none'),
('marcoprivitera@gmail.com', 'Marco ', 'Privitera', 'marcoprivitera', 'none'),
('matteoleonardi@gmail.com', 'Matteo', 'Leonardi', 'password', 'none'),
('prova2@gmail.com', 'ProvaDue', 'ProvaDue', 'provaprova', 'none'),
('prova@gmail.com', 'prova', 'prova', 'provaprova', 'none'),
('salvomusumeci@gmail.com', 'Salvo ', 'Musumeci', 'salvomusumeci', 'none'),
('utentenuovo@gmail.com', 'utente', 'nuovo', 'password', 'none');

-- --------------------------------------------------------

--
-- Struttura della tabella `usrXact`
--

CREATE TABLE `usrXact` (
  `cod_usr` varchar(50) NOT NULL,
  `cod_act` int(6) UNSIGNED NOT NULL,
  `status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `usrXact`
--

INSERT INTO `usrXact` (`cod_usr`, `cod_act`, `status`) VALUES
('aldofiorito@gmail.com', 164, 'N'),
('dinatalealessio10@gmail.com', 130, 'N'),
('dinatalealessio10@gmail.com', 135, 'N'),
('dinatalealessio10@gmail.com', 136, 'N'),
('dinatalealessio10@gmail.com', 165, 'N'),
('dinatalealessio10@gmail.com', 170, 'N'),
('marcoprivitera@gmail.com', 133, 'N'),
('prova@gmail.com', 172, 'N');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `Activities`
--
ALTER TABLE `Activities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cod_founder` (`cod_founder`);

--
-- Indici per le tabelle `Friendlist`
--
ALTER TABLE `Friendlist`
  ADD PRIMARY KEY (`id`,`cod_usr`,`cod_friend`);

--
-- Indici per le tabelle `Notifications`
--
ALTER TABLE `Notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cod_usr` (`cod_usr`);

--
-- Indici per le tabelle `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`email`) USING BTREE;

--
-- Indici per le tabelle `usrXact`
--
ALTER TABLE `usrXact`
  ADD PRIMARY KEY (`cod_usr`,`cod_act`),
  ADD KEY `cod_act` (`cod_act`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `Activities`
--
ALTER TABLE `Activities`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=175;

--
-- AUTO_INCREMENT per la tabella `Friendlist`
--
ALTER TABLE `Friendlist`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT per la tabella `Notifications`
--
ALTER TABLE `Notifications`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `Activities`
--
ALTER TABLE `Activities`
  ADD CONSTRAINT `activities_ibfk_1` FOREIGN KEY (`cod_founder`) REFERENCES `Users` (`email`);

--
-- Limiti per la tabella `Notifications`
--
ALTER TABLE `Notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`cod_usr`) REFERENCES `Users` (`email`);

--
-- Limiti per la tabella `usrXact`
--
ALTER TABLE `usrXact`
  ADD CONSTRAINT `usrxact_ibfk_1` FOREIGN KEY (`cod_act`) REFERENCES `Activities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usrxact_ibfk_2` FOREIGN KEY (`cod_usr`) REFERENCES `Users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
