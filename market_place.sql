-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 06, 2017 at 03:53 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `market_place`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE IF NOT EXISTS `admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `address` text,
  `phone_no` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `avator` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `first_name`, `last_name`, `address`, `phone_no`, `email`, `password`, `avator`, `createdAt`, `updatedAt`) VALUES
(1, 'Partho', 'Sen', 'J-1/12 Block EP-GP, 2nd Floor, Saltlake, Kolkata, West Bengal 700091', '9933093520', 'admin@wrctechnologies.com', '25d55ad283aa400af464c76d713c07ad', '1-1504787803339.jpg', '0000-00-00 00:00:00', '2017-09-07 12:36:43');

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE IF NOT EXISTS `banners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `header_1` varchar(255) DEFAULT NULL,
  `header_2` varchar(255) DEFAULT NULL,
  `description` text,
  `banner_image` varchar(150) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `header_1`, `header_2`, `description`, `banner_image`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Heading-1', 'Headin-2', 'Test Description', '1-1503905245530.jpg', 1, '2017-08-28 07:27:25', '2017-08-28 07:33:31'),
(2, 'Heading-2', 'Headin-2', 'Test description', '1-1504160493431.jpg', 1, '2017-08-31 06:21:33', '2017-08-31 06:21:33'),
(3, 'Heading-3', 'Headin-3', 'Testing description', '1-1504160522844.jpg', 1, '2017-08-31 06:22:02', '2017-08-31 06:22:02');

-- --------------------------------------------------------

--
-- Table structure for table `blogcategories`
--

CREATE TABLE IF NOT EXISTS `blogcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `blogcategories`
--

INSERT INTO `blogcategories` (`id`, `name`, `status`, `createdAt`, `updatedAt`) VALUES
(3, 'Design', 1, '2017-09-07 10:04:38', '2017-09-07 10:04:38'),
(4, 'Art', 1, '2017-09-07 10:04:46', '2017-09-07 10:04:46'),
(5, 'Media', 1, '2017-09-07 10:04:52', '2017-09-07 10:04:52'),
(6, 'Sports', 1, '2017-09-07 10:04:59', '2017-09-07 10:04:59');

-- --------------------------------------------------------

--
-- Table structure for table `blogcomments`
--

CREATE TABLE IF NOT EXISTS `blogcomments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `blog_id` int(11) NOT NULL,
  `blog_comment` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

--
-- Dumping data for table `blogcomments`
--

INSERT INTO `blogcomments` (`id`, `user_id`, `blog_id`, `blog_comment`, `createdAt`, `updatedAt`) VALUES
(2, 2, 5, 'Test Msg by Sayan', '2017-09-14 05:37:45', '2017-09-14 05:37:45'),
(3, 28, 5, 'hello i am atanu', '2017-09-14 05:49:59', '2017-09-14 05:49:59'),
(10, 28, 5, 'Good Blog Post', '2017-09-14 12:28:45', '2017-09-14 12:28:45'),
(14, 2, 5, 'Amazing post', '2017-09-14 12:31:47', '2017-09-14 12:31:47'),
(15, 2, 5, 'Hello Sayan', '2017-09-15 05:25:59', '2017-09-15 05:25:59'),
(20, 2, 5, 'test wwwww', '2017-09-15 05:32:00', '2017-09-15 05:32:00'),
(21, 2, 5, 'test wwwww', '2017-09-15 05:32:08', '2017-09-15 05:32:08'),
(22, 2, 5, 'eeeeeee', '2017-09-15 05:34:26', '2017-09-15 05:34:26'),
(23, 2, 5, 'eeeeeee', '2017-09-15 05:34:37', '2017-09-15 05:34:37'),
(24, 2, 5, 'ggggggg', '2017-09-15 05:35:15', '2017-09-15 05:35:15'),
(25, 2, 5, 'ggggggg', '2017-09-15 05:35:25', '2017-09-15 05:35:25');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE IF NOT EXISTS `blogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `blog_name` varchar(255) DEFAULT NULL,
  `blog_category_id` int(11) DEFAULT NULL,
  `short_description` text,
  `long_description` text,
  `blog_image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `blog_name`, `blog_category_id`, `short_description`, `long_description`, `blog_image`, `createdAt`, `updatedAt`) VALUES
(4, 'Another Blog', 2, 'Another test description', 'Odio laoreet vivendum ex vis. At mentitum assueverit nam, mel ex dolorem tacimates praesent. Saepe nemore duo te, no nec cetero eligendi mnesarchum. Ne congue similique eloquentiam has. Wisi omittantur definitiones vis in. Pro munere assueverit id, debitis scaevola omittantur vim ex, qui meis tantas et. Vivendo ponderum id pro. Vidit offendit quaerendum est et, no eos prima tamquam, eu duo ludus noster praesent. Sea cu quod illum. Affert munere ut vis, ponderum gubergren sit ne. Nam at magna homero feugait.', '1-1503565052548.jpg', '2017-08-24 08:57:32', '2017-08-24 08:57:32'),
(5, 'Designing for the reader experience.', 3, '<p>Lorem ipsum dolor sit amet, lorem quaestio similique has at, possit vivendum ne nam. Unum saepe ea vim, ius sensibus volutpat et, eum legere nostrum explicari ei. Sed ex legere hendrerit. Ei saperet officiis has, eu usu prompta mandamus. Vix dicat electram ei, ne sea aeterno ornatus perpetua, ne cum omnis voluptua iracundia.</p>\r\n', '<p>Pro munere assueverit id, debitis scaevola omittantur vim ex, qui meis tantas et. Vivendo ponderum id pro. Vidit offendit quaerendum est et, no eos prima tamquam, eu duo ludus noster praesent. Sea cu quod illum. Affert munere ut vis, ponderum gubergren sit ne. Nam at magna homero feugait.</p>\r\n\r\n<p>Odio laoreet vivendum ex vis. At mentitum assueverit nam, mel ex dolorem tacimates praesent. Saepe nemore duo te, no nec cetero eligendi mnesarchum. Ne congue similique eloquentiam has. Wisi omittantur definitiones vis in. Pro munere assueverit id, debitis scaevola omittantur vim ex, qui meis tantas et. Vivendo ponderum id pro. Vidit offendit quaerendum est et, no eos prima tamquam, eu duo ludus noster praesent. Sea cu quod illum. Affert munere ut vis, ponderum gubergren sit ne. Nam at magna homero feugait.</p>\r\n\r\n<p>Odio laoreet vivendum ex vis. At mentitum assueverit nam, mel ex dolorem tacimates praesent. Saepe nemore duo te, no nec cetero eligendi mnesarchum. Ne congue similique eloquentiam has. Wisi omittantur definitiones vis in.</p>\r\n\r\n<p>Pertinacia neglegentur vix ne. Illum accusata id quo, vis ex mucius iisque aliquid. Eos meliore interesset id. Ne has fabellas elaboraret.</p>\r\n\r\n<p>Ne iriure reprimique vel. Ex alii pericula pri, idque veritus ius id. Etiam doctus aperiam cu mea, vel cibo dicunt ad, vim luptatum delicatissimi eu. Diam mentitum explicari no vim, tantas nominavi eos in. Ei pri omnis verterem antiopam.</p>\r\n\r\n<p>Lorem ipsum</p>\r\n\r\n<ul>\r\n	<li>Lorem ipsum dolor sit amet, lorem quaestio similique has at, possit vivendum ne nam.</li>\r\n	<li>Pro munere assueverit id, debitis scaevola omittantur vim ex, qui meis tantas et.</li>\r\n	<li>Pertinacia neglegentur vix ne. Illum accusata id quo, vis ex mucius iisque aliquid.</li>\r\n	<li>Pertinacia neglegentur vix ne. Illum accusata id quo, vis ex mucius iisque aliquid.</li>\r\n</ul>\r\n\r\n<p>Lorem ipsum</p>\r\n\r\n<ul>\r\n	<li>Lorem ipsum dolor sit amet, lorem quaestio similique has at, possit vivendum ne nam.</li>\r\n	<li>Pro munere assueverit id, debitis scaevola omittantur vim ex, qui meis tantas et.</li>\r\n	<li>Pertinacia neglegentur vix ne. Illum accusata id quo, vis ex mucius iisque aliquid.</li>\r\n	<li>Pertinacia neglegentur vix ne. Illum accusata id quo, vis ex mucius iisque aliquid.</li>\r\n</ul>\r\n', '1-1505368958296.jpg', '2017-08-24 09:47:55', '2017-09-14 06:02:38'),
(6, 'Another Blog 2', 2, 'dfds', 'dsfdsf', '1-1503565052548.jpg', '2017-08-24 10:40:20', '2017-08-24 10:40:20'),
(7, 'Another Blog 3', 5, 'Another test description', NULL, '1-1503564643635.jpg', '2017-08-24 10:40:20', '2017-08-24 10:40:20'),
(8, 'Test', 6, 'Lorem ipsum dolor sit amet, lorem quaestio similique has at, possit vivendum ne nam. Unum saepe ea vim, ius sensibus volutpat et, eum legere nostrum explicari ei. Sed ex legere hendrerit. Ei saperet officiis has, eu usu prompta mandamus. Vix dicat electram ei, ne sea aeterno ornatus perpetua, ne cum omnis voluptua iracundia.', 'Pro munere assueverit id, debitis scaevola omittantur vim ex, qui meis tantas et. Vivendo ponderum id pro. Vidit offendit quaerendum est et, no eos prima tamquam, eu duo ludus noster praesent. Sea cu quod illum. Affert munere ut vis, ponderum gubergren sit ne. Nam at magna homero feugait.\n\nOdio laoreet vivendum ex vis. At mentitum assueverit nam, mel ex dolorem tacimates praesent. Saepe nemore duo te, no nec cetero eligendi mnesarchum. Ne congue similique eloquentiam has. Wisi omittantur definitiones vis in. Pro munere assueverit id, debitis scaevola omittantur vim ex, qui meis tantas et. Vivendo ponderum id pro. Vidit offendit quaerendum est et, no eos prima tamquam, eu duo ludus noster praesent. Sea cu quod illum. Affert munere ut vis, ponderum gubergren sit ne. Nam at magna homero feugait.', '1-1503564643635.jpg', '2017-09-08 13:03:25', '2017-09-11 05:40:44');

-- --------------------------------------------------------

--
-- Table structure for table `cms`
--

CREATE TABLE IF NOT EXISTS `cms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slag` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `short_description` text,
  `full_description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `cms`
--

INSERT INTO `cms` (`id`, `slag`, `title`, `short_description`, `full_description`, `createdAt`, `updatedAt`) VALUES
(3, 'about', 'About Us', '<p>The Kafe. Template is the Ultimate Freelance Marketplace Template for employers and freelancers to connect, collaborate, and get work done.</p>\n		 <p>We work hard to build a great product that is beautifully designed, simple to use, user friendly with great focus on user experience and customer service.</p>', '<h3>Sasa. (Hello There.)</h3>\r\n\r\n<p>The Kafe. Template is the Ultimate Freelance Marketplace Template for employers and freelancers to connect, collaborate, and get work done.</p>\r\n\r\n<h3>Our Why?</h3>\r\n\r\n<p>The core of this template is to build a great product that is beautifully designed, simple to use, user friendly with great focus on user experience and customer service.</p>\r\n\r\n<h3>Our How?</h3>\r\n\r\n<p>We have built The Kafe. Template to be a great product &amp; service that is beautifully designed, simple to use, user friendly with great focus on user experience and customer service and included code snippets for developers and designers to jump start their development process.</p>\r\n\r\n<h3>Our What?</h3>\r\n\r\n<p>This Template should inspire clients to build their own Freelance Marketplaces and help developers plus designers to jump start their development process. Simple as that.</p>\r\n', '2017-09-01 06:43:22', '2017-09-01 06:43:22');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `comment` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `phone_no`, `comment`, `createdAt`, `updatedAt`) VALUES
(1, 'Sayan Sadhu', 'sayan@wrctechnologies.com', '8420024200', 'Test Message', '2017-09-15 10:05:44', '2017-09-15 10:05:44'),
(2, 'Atanu Ray', 'atanu@gmail.com', '1111144444', 'sefesdgsdg', '2017-09-15 11:12:32', '2017-09-15 11:12:32'),
(3, 'Manomit Mitra', 'info@wrctechnologies.com', '45345634', 'Test Message', '2017-09-15 12:27:46', '2017-09-15 12:27:46');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE IF NOT EXISTS `countries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=247 ;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `code`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'AF', 'Afghanistan', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'AX', 'Aland Islands', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'AL', 'Albania', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'DZ', 'Algeria', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'AS', 'American Samoa', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'AD', 'Andorra', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'AO', 'Angola', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'AI', 'Anguilla', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'AQ', 'Antarctica\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'AG', 'Antigua and Barbuda', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'AR', 'Argentina\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'AM', 'Armenia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'AW', 'Aruba\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'AU', 'Australia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'AT', 'Austria\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'AZ', 'Azerbaijan\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'BS', 'Bahamas\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'BH', 'Bahrain\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'BD', 'Bangladesh\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'BB', 'Barbados\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'BY', 'Belarus\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'BE', 'Belgium\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'BZ', 'Belize\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 'BJ', 'Benin\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 'BM', 'Bermuda\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 'BT', 'Bhutan\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 'BO', 'Bolivia\nBolivia, Plurinational state of', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 'BA', 'Bosnia and Herzegovina\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 'BW', 'Botswana\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 'BV', 'Bouvet Island\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 'BR', 'Brazil\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 'IO', 'British Indian Ocean Territory\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 'BN', 'Brunei Darussalam\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 'BG', 'Bulgaria\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, 'BF', 'Burkina Faso\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, 'BI', 'Burundi\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, 'KH', 'Cambodia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, 'CM', 'Cameroon\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 'CA', 'Canada\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, 'CV', 'Cape Verde\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, 'KY', 'Cayman Islands\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, 'CI', 'CÃ´te d''Ivoire', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(43, 'CF', 'Central African Republic\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(44, 'TD', 'Chad', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(45, 'CL', 'Chile', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(46, 'CN', 'China\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(47, 'CX', 'Christmas Island\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(48, 'CC', 'Cocos (Keeling) Islands\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(49, 'CO', 'Colombia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(50, 'KM', 'Comoros\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(51, 'CG', 'Congo\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(52, 'CD', 'Congo, The Democratic Republic of the\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(53, 'CK', 'Cook Islands\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(54, 'CR', 'Costa Rica\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(55, 'HR', 'Croatia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(56, 'CU', 'Cuba\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(57, 'CY', 'Cyprus\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(58, 'CZ', 'Czech Republic\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(59, 'DK', 'Denmark\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(60, 'DJ', 'Djibouti\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(61, 'DM', 'Dominica\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(62, 'DO', 'Dominican Republic\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(63, 'EC', 'Ecuador\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(64, 'EG', 'Egypt\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(65, 'SV', 'El Salvador\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(66, 'GQ', 'Equatorial Guinea\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(67, 'ER', 'Eritrea\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(68, 'EE', 'Estonia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(69, 'ET', 'Ethiopia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(70, 'FK', 'Falkland Islands (Malvinas)\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(71, 'FO', 'Faroe Islands\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(72, 'FJ', 'Fiji\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(73, 'FI', 'Finland\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(74, 'FR', 'France\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(75, 'GF', 'French Guiana', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(76, 'PF', 'French Polynesia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(77, 'TF', 'French Southern Territories', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(78, 'GA', 'Gabon', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(79, 'GM', 'Gambia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(80, 'GE', 'Georgia', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(81, 'DE', 'Germany\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(82, 'GH', 'Ghana\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(83, 'GI', 'Gibraltar\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(84, 'GR', 'Greece\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(85, 'GL', 'Greenland\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(86, 'GD', 'Grenada', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(87, 'GP', 'Guadeloupe\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(88, 'GU', 'Guam\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(89, 'GT', 'Guatemala\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(90, 'GG', 'Guernsey', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(91, 'GN', 'Guinea\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(92, 'GW', 'Guinea-Bissau\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(93, 'GY', 'Guyana\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(94, 'HT', 'Haiti\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(95, 'HM', 'Heard Island and McDonald Islands\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(96, 'VA', 'Holy See (Vatican City State)\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(97, 'HN', 'Honduras\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(98, 'HK', 'Hong Kong\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(99, 'HU', 'Hungary\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(100, 'IS', 'Iceland\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(101, 'IN', 'India\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(102, 'ID', 'Indonesia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(103, 'IR', 'Iran, Islamic Republic of\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(104, 'IQ', 'Iraq\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(105, 'IE', 'Ireland\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(106, 'IM', 'Isle of Man\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(107, 'IL', 'Israel\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(108, 'IT', 'Italy', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(109, 'JM', 'Jamaica\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(110, 'JP', 'Japan\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(111, 'JE', 'Jersey\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(112, 'JO', 'Jordan\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(113, 'KZ', 'Kazakhstan\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(114, 'KE', 'Kenya\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(115, 'KI', 'Kiribati\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(116, 'KP', 'Korea, Democratic People&#39;s Republic of\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(117, 'KR', 'Korea, Republic of\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(118, 'KW', 'Kuwait\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(119, 'KG', 'Kyrgyzstan\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(120, 'LA', 'Lao People&#39;s Democratic Republic\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(121, 'LV', 'Latvia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(122, 'LB', 'Lebanon\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(123, 'LS', 'Lesotho\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(124, 'LR', 'Liberia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(125, 'LY', 'Libyan Arab Jamahiriya\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(126, 'LI', 'Liechtenstein\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(127, 'LT', 'Lithuania\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(128, 'LU', 'Luxembourg\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(129, 'MO', 'Macao\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(130, 'MK', 'Macedonia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(131, 'MG', 'Madagascar\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(132, 'MW', 'Malawi\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(133, 'MY', 'Malaysia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(134, 'MV', 'Maldives\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(135, 'ML', 'Mali\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(136, 'MT', 'Malta\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(137, 'MH', 'Marshall Islands\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(138, 'MQ', 'Martinique\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(139, 'MR', 'Mauritania\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(140, 'MU', 'Mauritius\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(141, 'YT', 'Mayotte\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(142, 'MX', 'Mexico\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(143, 'FM', 'Micronesia, Federated States of\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(144, 'MD', 'Moldova, Republic of\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(145, 'MC', 'Monaco\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(146, 'MN', 'Mongolia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(147, 'ME', 'Montenegro\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(148, 'MS', 'Montserrat\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(149, 'MA', 'Morocco\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(150, 'MZ', 'Mozambique\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(151, 'MM', 'Myanmar\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(152, 'NA', 'Namibia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(153, 'NR', 'Nauru\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(154, 'NP', 'Nepal\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(155, 'NL', 'Netherlands\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(156, 'AN', 'Netherlands Antilles\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(157, 'NC', 'New Caledonia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(158, 'NZ', 'New Zealand\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(159, 'NI', 'Nicaragua\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(160, 'NE', 'Niger\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(161, 'NG', 'Nigeria\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(162, 'NU', 'Niue\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(163, 'NF', 'Norfolk Island\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(164, 'MP', 'Northern Mariana Islands\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(165, 'NO', 'Norway', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(166, 'OM', 'Oman\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(167, 'PK', 'Pakistan\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(168, 'PW', 'Palau\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(169, 'PS', 'Palestinian Territory, Occupied', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(170, 'PA', 'Panama\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(171, 'PG', 'Papua New Guinea\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(172, 'PY', 'Paraguay\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(173, 'PE', 'Peru\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(174, 'PH', 'Philippines\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(175, 'PN', 'Pitcairn\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(176, 'PL', 'Poland\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(177, 'PT', 'Portugal\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(178, 'PR', 'Puerto Rico\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(179, 'QA', 'Qatar\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(180, 'RE', 'RÃ©union', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(181, 'RO', 'Romania\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(182, 'RU', 'Russian Federation\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(183, 'RW', 'Rwanda\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(184, 'BL', 'Saint Barthlemy', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(185, 'SH', 'Saint Helena\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(186, 'KN', 'Saint Kitts and Nevis\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(187, 'LC', 'Saint Lucia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(188, 'MF', 'Saint Martin', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(189, 'PM', 'Saint Pierre and Miquelon\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(190, 'VC', 'Saint Vincent and the Grenadines\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(191, 'WS', 'Samoa\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(192, 'SM', 'San Marino\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(193, 'ST', 'Sao Tome and Principe\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(194, 'SA', 'Saudi Arabia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(195, 'SN', 'Senegal\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(196, 'RS', 'Serbia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(197, 'SC', 'Seychelles\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(198, 'SL', 'Sierra Leone\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(199, 'SG', 'Singapore\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(200, 'SK', 'Slovakia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(201, 'SI', 'Slovenia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(202, 'SB', 'Solomon Islands\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(203, 'SO', 'Somalia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(204, 'ZA', 'South Africa\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(205, 'GS', 'South Georgia and the South Sandwich Islands\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(206, 'ES', 'Spain\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(207, 'LK', 'Sri Lanka\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(208, 'SD', 'Sudan\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(209, 'SR', 'Suriname\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(210, 'SJ', 'Svalbard and Jan Mayen\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(211, 'SZ', 'Swaziland\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(212, 'SE', 'Sweden\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(213, 'CH', 'Switzerland\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(214, 'SY', 'Syrian Arab Republic\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(215, 'TW', 'Taiwan\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(216, 'TJ', 'Tajikistan', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(217, 'TZ', 'Tanzania, United Republic of\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(218, 'TH', 'Thailand', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(219, 'TL', 'Timor-Leste', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(220, 'TG', 'Togo', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(221, 'TK', 'Tokelau', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(222, 'TO', 'Tonga\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(223, 'TT', 'Trinidad and Tobago\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(224, 'TN', 'Tunisia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(225, 'TR', 'Turkey', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(226, 'TM', 'Turkmenistan\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(227, 'TC', 'Turks and Caicos Islands\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(228, 'TV', 'Tuvalu\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(229, 'UG', 'Uganda\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(230, 'UA', 'Ukraine\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(231, 'AE', 'United Arab Emirates', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(232, 'GB', 'United Kingdom', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(233, 'US', 'United States\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(234, 'UM', 'United States Minor Outlying Islands\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(235, 'UY', 'Uruguay\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(236, 'UZ', 'Uzbekistan\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(237, 'VU', 'Vanuatu\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(238, 'VE', 'Venezuela, Bolivarian Republic of', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(239, 'VN', 'Viet Nam', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(240, 'VG', 'Virgin Islands, British\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(241, 'VI', 'Virgin Islands, U.S.\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(242, 'WF', 'Wallis and Futuna\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(243, 'EH', 'Western Sahara\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(244, 'YE', 'Yemen\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(245, 'ZM', 'Zambia\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(246, 'ZW', 'Zimbabwe', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `faqcategories`
--

CREATE TABLE IF NOT EXISTS `faqcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `faqcategories`
--

INSERT INTO `faqcategories` (`id`, `name`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Basic', 0, '2017-08-21 12:55:25', '2017-08-21 14:00:18'),
(3, 'Job', 1, '2017-08-21 13:06:07', '2017-08-21 13:06:07'),
(4, 'Payment', 1, '2017-08-21 13:06:13', '2017-08-21 13:06:13'),
(5, 'Account', 1, '2017-08-23 05:44:00', '2017-08-23 05:44:11'),
(6, 'Work', 1, '2017-09-04 10:08:59', '2017-09-06 11:54:02');

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE IF NOT EXISTS `faqs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `faq_category_id` int(11) DEFAULT NULL,
  `question` varchar(255) DEFAULT NULL,
  `answer` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `faq_category_id`, `question`, `answer`, `createdAt`, `updatedAt`) VALUES
(1, 3, 'How do I sign up?', 'Sed porta accumsan tellus nec facilisis. Mauris eget metus non tortor auctor viverra sed eu lorem. Nulla ultrices elit quis malesuada vestibulum. Fusce pulvinar consectetur lacus, vel dapibus eros mollis malesuada.', '2017-08-25 07:28:25', '2017-08-25 08:54:15'),
(2, 3, 'How do I post a Job?', 'Sed porta accumsan tellus nec facilisis. Mauris eget metus non tortor auctor viverra sed eu lorem. Nulla ultrices elit quis malesuada vestibulum. Fusce pulvinar consectetur lacus, vel dapibus eros mollis malesuada.', '2017-08-25 07:29:24', '2017-08-25 07:29:24'),
(3, 4, 'How do I change my password?', 'Sed porta accumsan tellus nec facilisis. Mauris eget metus non tortor auctor viverra sed eu lorem. Nulla ultrices elit quis malesuada vestibulum. Fusce pulvinar consectetur lacus, vel dapibus eros mollis malesuada.', '2017-08-25 07:31:10', '2017-08-25 07:31:10');

-- --------------------------------------------------------

--
-- Table structure for table `job-skills`
--

CREATE TABLE IF NOT EXISTS `job-skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_id` int(11) DEFAULT NULL,
  `skill_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `jobcategories`
--

CREATE TABLE IF NOT EXISTS `jobcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(150) DEFAULT NULL,
  `short_desc` varchar(150) DEFAULT NULL,
  `background_image` varchar(150) DEFAULT NULL,
  `status` varchar(255) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `jobcategories`
--

INSERT INTO `jobcategories` (`id`, `name`, `image`, `short_desc`, `background_image`, `status`, `createdAt`, `updatedAt`) VALUES
(2, 'Design, Art & Multimedia', NULL, 'Designer, Developer, Project Management, Front-End Developer', '', '1', '2017-08-31 12:48:58', '2017-09-06 11:57:28'),
(3, 'Music', NULL, 'Designer, Developer, Project Management, Front-End Developer', '1-1504247357804.jpg', '1', '2017-08-31 12:49:33', '2017-09-01 06:29:17'),
(4, 'Education', NULL, 'Designer Developer Project Management Front-End Developer', '1-1504247347961.jpg', '1', '2017-08-31 12:49:50', '2017-09-01 06:29:07'),
(5, 'Star TV', NULL, 'Designer Developer Project Management Front-End Developer', '1-1504247366789.jpg', '1', '2017-08-31 12:50:48', '2017-09-01 06:29:26'),
(7, 'Web Development And IT', NULL, 'Designer, Developer, Project Management, Front-End Developer', '1-1504244413383.jpg', '1', '2017-09-01 05:40:13', '2017-09-01 05:40:13');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE IF NOT EXISTS `jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jobscategory_id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `budget` varchar(50) DEFAULT NULL,
  `no_of_applicant` int(100) DEFAULT NULL,
  `description` text,
  `user_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `jobscategory_id`, `title`, `budget`, `no_of_applicant`, `description`, `user_id`, `createdAt`, `updatedAt`) VALUES
(2, 2, 'Design', '65000', 2, 'Kolkata', 2, '2017-09-15 11:28:20', '2017-09-15 11:28:20'),
(4, 4, 'My first title', '10000', 5, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', 28, '2017-09-18 11:11:07', '2017-09-18 11:11:07'),
(5, 2, 'My second title', '15000', 6, 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', 28, '2017-09-19 05:26:51', '2017-09-19 05:26:51'),
(6, 2, 'my first title', '2000', 10, 'Where can I get some?\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don''t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn''t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 2, '2017-10-06 10:10:12', '2017-10-06 10:10:12');

-- --------------------------------------------------------

--
-- Table structure for table `job_skills`
--

CREATE TABLE IF NOT EXISTS `job_skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_id` int(11) DEFAULT NULL,
  `skill_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `job_skills`
--

INSERT INTO `job_skills` (`id`, `job_id`, `skill_id`, `createdAt`, `updatedAt`) VALUES
(2, 2, 2, '2017-09-15 11:28:20', '2017-09-15 11:28:20'),
(3, 2, 3, '2017-09-15 11:28:20', '2017-09-15 11:28:20'),
(4, 2, 4, '2017-09-15 11:28:20', '2017-09-15 11:28:20'),
(8, 4, 5, '2017-09-18 11:11:07', '2017-09-18 11:11:07'),
(9, 4, 6, '2017-09-18 11:11:07', '2017-09-18 11:11:07'),
(10, 4, 7, '2017-09-18 11:11:07', '2017-09-18 11:11:07'),
(11, 5, 4, '2017-09-19 05:26:51', '2017-09-19 05:26:51'),
(12, 5, 6, '2017-09-19 05:26:51', '2017-09-19 05:26:51'),
(13, 6, 4, '2017-10-06 10:10:13', '2017-10-06 10:10:13'),
(14, 6, 7, '2017-10-06 10:10:13', '2017-10-06 10:10:13');

-- --------------------------------------------------------

--
-- Table structure for table `organizations`
--

CREATE TABLE IF NOT EXISTS `organizations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `contact_no` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_description` varchar(255) DEFAULT NULL,
  `client` varchar(255) DEFAULT NULL,
  `freelancers` varchar(255) DEFAULT NULL,
  `jobs_completed` varchar(255) DEFAULT NULL,
  `payed_to_freelancers` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `organizations`
--

INSERT INTO `organizations` (`id`, `address`, `contact_no`, `email`, `facebook`, `twitter`, `linkedin`, `title`, `meta_key`, `meta_description`, `client`, `freelancers`, `jobs_completed`, `payed_to_freelancers`, `createdAt`, `updatedAt`) VALUES
(1, 'Indo Japan Building bidhannagar', 1234567890, 'info@wrctechnologies.com', 'http://www.facebook.com', 'http://www.twitter.com', 'http://www.linkedin.com', 'WRC Technologies Pvt. Ltd.', 'Market Place Meta Key', 'Market Place Meta Description', '1000', '600', '3500', '800', '2017-08-24 00:00:00', '2017-09-15 13:49:04');

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE IF NOT EXISTS `sections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `remarks` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`id`, `name`, `description`, `remarks`, `createdAt`, `updatedAt`) VALUES
(1, 'f', 'gfg', 'gf', '2017-08-22 12:54:10', '2017-08-22 12:54:10');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `SequelizeMeta_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20170816125906-create-admin.js'),
('20170821090408-create-section.js'),
('20170821122330-create-faq-category.js'),
('20170821141031-create-faq.js'),
('20170822052215-create-skill.js'),
('20170822060735-create-testimonial.js'),
('20170822070827-create-job-category.js'),
('20170822091033-create-cms.js'),
('20170823094904-create-blog-category.js'),
('20170823110110-create-blog.js'),
('20170824104121-create-organization.js'),
('20170828064629-create-banner.js'),
('20170828065027-add-banner_image-to-banners.js'),
('20170831095307-add-field-to-jobcategories.js'),
('20170831100307-add-field-to-jobcategories.js'),
('20170831102457-add-field-to-jobcategoriesTable.js'),
('20170831104043-add-field-to-organizationsTable.js'),
('20170831110220-create-story.js'),
('20170831113242-create-team.js'),
('20170901043147-add-designation-to-teams.js'),
('20170907061336-create-test.js'),
('20170907061810-unnamed-migration.js'),
('20170907063936-create-user.js'),
('20170907070233-create-work.js'),
('20170912061204-add_field_to_users.js'),
('20170913072150-create-blogcomment.js'),
('20170914132146-create-job.js'),
('20170914132335-create-job-skill.js'),
('20170915074332-create-contact.js'),
('20170918091113-create-country.js'),
('20170918095802-unnamed-migration.js');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE IF NOT EXISTS `skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `name`, `status`, `createdAt`, `updatedAt`) VALUES
(3, 'Codeigniter', '1', '2017-09-15 06:01:07', '2017-09-15 13:49:32'),
(4, 'Laravel', '1', '2017-09-15 06:01:20', '2017-09-15 13:49:40'),
(5, 'Angular JS', '1', '2017-09-15 06:01:29', '2017-09-15 06:01:29'),
(6, 'Node JS', '1', '2017-09-15 06:01:39', '2017-09-15 06:01:39'),
(7, 'React JS', '1', '2017-09-15 13:49:53', '2017-09-15 13:49:53');

-- --------------------------------------------------------

--
-- Table structure for table `stories`
--

CREATE TABLE IF NOT EXISTS `stories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `published_date` datetime DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `stories`
--

INSERT INTO `stories` (`id`, `published_date`, `description`, `createdAt`, `updatedAt`) VALUES
(1, '2017-08-30 18:30:00', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat nisi. Donec condimentum mi eget est auctor pellentesque. Donec ultrices consequat neque at consectetur. Nunc venenatis lorem quis auctor vulputate. Donec et sagittis nulla, mollis cursus leo.', '2017-08-31 13:06:28', '2017-08-31 13:06:28'),
(2, '2017-07-14 18:30:00', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat nisi. Donec condimentum mi eget est auctor pellentesque. Donec ultrices consequat neque at consectetur. Nunc venenatis lorem quis auctor vulputate. Donec et sagittis nulla, mollis cursus leo. Phasellus a ante ut neque consequat interdum. Aenean eget tortor elit. Morbi a magna vitae justo aliquet porta eu ut quam.', '2017-08-31 13:07:06', '2017-08-31 13:30:14'),
(3, '2017-04-19 18:30:00', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat nisi. Donec condimentum mi eget est auctor pellentesque. Donec ultrices consequat neque at consectetur. Nunc venenatis lorem quis auctor vulputate. Donec et sagittis nulla, mollis cursus leo. Phasellus a ante ut neque consequat interdum. Aenean eget tortor elit. Morbi a magna vitae justo aliquet porta eu ut quam.', '2017-08-31 13:07:41', '2017-08-31 13:07:41'),
(4, '2017-03-01 18:30:00', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat nisi. Donec condimentum mi eget est auctor pellentesque. Donec ultrices consequat neque at consectetur. Nunc venenatis lorem quis auctor vulputate. Donec et sagittis nulla, mollis cursus leo. Phasellus a ante ut neque consequat interdum. Aenean eget tortor elit. Morbi a magna vitae justo aliquet porta eu ut quam.', '2017-08-31 13:08:49', '2017-08-31 13:29:43'),
(5, '2017-03-11 18:30:00', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat nisi. Donec condimentum mi eget est auctor pellentesque. Donec ultrices consequat neque at consectetur. Nunc venenatis lorem quis auctor vulputate. Donec et sagittis nulla, mollis cursus leo. Phasellus a ante ut neque consequat interdum. Aenean eget tortor elit. Morbi a magna vitae justo aliquet porta eu ut quam.', '2017-08-31 13:09:07', '2017-08-31 13:09:07'),
(6, '2017-04-22 18:30:00', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat nisi. Donec condimentum mi eget est auctor pellentesque. Donec ultrices consequat neque at consectetur. Nunc venenatis lorem quis auctor vulputate. Donec et sagittis nulla, mollis cursus leo. Phasellus a ante ut neque consequat interdum. Aenean eget tortor elit. Morbi a magna vitae justo aliquet porta eu ut quam.', '2017-08-31 13:09:22', '2017-08-31 13:09:22');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE IF NOT EXISTS `teams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `designation` varchar(150) DEFAULT NULL,
  `description` text,
  `facebook` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `google_plus` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`, `image`, `designation`, `description`, `facebook`, `linkedin`, `twitter`, `google_plus`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'John Doe', '1-1504241447899.jpg', 'FOUNDER/CEO', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet, nulla mi ullamcorper metus, id hendrerit metus diam vitae est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', 'https://www.facebook.com/Geekroy', 'https://www.linkedin.com/Geekroy', '', '', 1, '2017-09-01 04:50:47', '2017-09-01 04:50:47'),
(2, 'Mary Doe', '1-1504241670347.jpg', 'Accountant', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at era hendrerit dictum. Praesent porta, purus eget sagittis imperdiet, nulla mi ullamcorper metus, id hendrerit metus diam vitae est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', 'https://www.facebook.com/Geekroy', 'https://www.linkedin.com/Geekroy', '', '', 1, '2017-09-01 04:54:30', '2017-09-01 04:54:30'),
(3, 'Richard Donga', '1-1504241727478.jpg', 'Lead Developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet, nulla mi ullamcorper metus, id hendrerit metus diam vitae est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', 'https://www.facebook.com/Geekroy', 'https://www.linkedin.com/Geekroy', '', '', 1, '2017-09-01 04:55:27', '2017-09-01 04:55:27');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE IF NOT EXISTS `testimonials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` text,
  `ClientName` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `description`, `ClientName`, `createdAt`, `updatedAt`) VALUES
(1, 'I m wondering why I never contacted these guys sooner! Seriously, they all have commendable talent in their respective field and knocked my concept out of the ballpark. Thanks for an amazing experience!', 'Partho Sen', '2017-08-22 09:04:50', '2017-08-31 07:23:24'),
(2, 'I m wondering why I never contacted these guys sooner! Seriously, they all have commendable talent in their respective field and knocked my concept out of the ballpark. Thanks for an amazing experience!', 'Segero, NoranicMeds', '2017-08-22 09:05:34', '2017-08-31 07:22:36'),
(11, 'The Kafe Template, is a powerful medium of expression and design in which its communications offers an infinite variety of perception, interpretation and execution.', 'John Doe', '2017-08-22 09:27:59', '2017-08-31 07:22:02');

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

CREATE TABLE IF NOT EXISTS `tests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `www` varchar(150) DEFAULT NULL,
  `short_desc` varchar(150) DEFAULT NULL,
  `description` text,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `mobile_no` varchar(255) DEFAULT NULL,
  `address` text,
  `country_id` int(11) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `pincode` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `type` varchar(11) DEFAULT NULL COMMENT 'f=''freelancer'',v=''vendor''',
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=29 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `password`, `mobile_no`, `address`, `country_id`, `state`, `city`, `pincode`, `image`, `type`, `status`, `createdAt`, `updatedAt`) VALUES
(2, 'Sayan', 'Sadhu 123', 'sayan@wrctechnologies.com', 'e10adc3949ba59abbe56e057f20f883e', '8420024200', 'Bose Para, Khardah', 9, 'West Bengal', 'Kolkata', '700116', '1-1504846171420.jpg', 'F', 1, '2017-09-07 13:17:07', '2017-10-06 10:26:26'),
(3, 'Sujoy', 'Das', 'sujoy@wrctechnologies.com', '3d2172418ce305c7d16d4b05597c6a59', '235235235', 'dhdbdf sfgdfhdgh', NULL, 'sdgsdsd', 'dfndcbndf', '543523', '1-1505114218190.jpg', 'F', 1, '2017-09-11 07:16:58', '2017-09-11 09:57:46'),
(28, 'Atanu', 'Ray', 'atanu@gmail.com', '25d55ad283aa400af464c76d713c07ad', '9748632804', 'Howrah', 8, 'West Bengal', 'Kolkata', '711302', NULL, 'V', 1, '2017-09-14 05:08:14', '2017-09-21 08:40:31');

-- --------------------------------------------------------

--
-- Table structure for table `works`
--

CREATE TABLE IF NOT EXISTS `works` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `works`
--

INSERT INTO `works` (`id`, `image`, `video`, `description`, `createdAt`, `updatedAt`) VALUES
(1, '1-1505118451516.jpeg', '1-1505125216755.mp4', 'Find the right person for the job here on The Kafe. With millions of talented experts from all around the world, you can get help with your business within minutes of posting your project!\r\nBelow is a video of how it works.', '2017-09-11 08:27:31', '2017-09-12 05:51:12'),
(2, '1-1505976921644.jpeg', '1-1505976921714.mp4', 'dfdfdfddfddfd', '2017-09-21 06:55:21', '2017-09-21 06:55:21'),
(3, '1-1505977092828.jpeg', '1-1505977092881.mp4', 'sdsdsdsds', '2017-09-21 06:58:12', '2017-09-21 06:58:12');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
