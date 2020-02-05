-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 05, 2020 at 03:28 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webNmobileApp`
--

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `path` varchar(256) NOT NULL,
  `product_id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `path`, `product_id`, `date`) VALUES
(5, 'uploads/lap.jpg', 21, '2019-01-01 00:04:20'),
(6, 'uploads/lap.jpg', 21, '2020-01-28 15:16:40'),
(7, 'uploads/Rectangle 24-2.png', 23, '2020-01-28 15:04:55'),
(8, 'uploads/Rectangle 24.png', 23, '2020-01-28 15:04:55'),
(9, 'uploads/big4.jpg', 25, '2020-01-28 15:12:12'),
(11, 'uploads/u_10180991 (1).jpg', 26, '2020-01-28 15:13:18'),
(12, 'uploads/u_10180991.jpg', 26, '2020-01-28 15:13:18'),
(13, 'uploads/u_10180991.jpg', 34, '2020-01-28 16:16:57'),
(14, 'uploads/u_10180991.jpg', 35, '2020-01-28 16:33:41'),
(17, 'uploads/big4 (1).jpg', 37, '2020-01-28 20:18:18'),
(18, 'uploads/u_10180991.jpg', 37, '2020-01-28 20:18:18'),
(19, 'uploads/big4 copy.jpg', 37, '2020-01-28 20:18:18'),
(20, 'uploads/u_10180991 (1).jpg', 37, '2020-01-28 20:18:18'),
(21, 'uploads/big4.jpg', 37, '2020-01-28 20:18:18'),
(26, 'uploads/61Cc2vR3OpL._SL1500_.jpg', 38, '2020-02-03 22:18:24'),
(27, 'uploads/61g28-WMXYL._SL1500_.jpg', 38, '2020-02-03 22:18:24'),
(28, 'uploads/61vaMN815iL._SL1500_.jpg', 38, '2020-02-03 22:18:24'),
(29, 'uploads/71MVVJfWNVL._SL1500_.jpg', 38, '2020-02-03 22:18:24'),
(30, 'uploads/61g28-WMXYL._SL1500_.jpg', 39, '2020-02-04 11:38:19'),
(31, 'uploads/71MVVJfWNVL._SL1500_.jpg', 39, '2020-02-04 11:38:19'),
(32, 'uploads/61Cc2vR3OpL._SL1500_.jpg', 39, '2020-02-04 11:38:19'),
(33, 'uploads/61vaMN815iL._SL1500_.jpg', 39, '2020-02-04 11:38:19');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `product_id`, `message`, `sender_id`, `receiver_id`, `timestamp`) VALUES
(1, 21, 'test', 7, 8, '2020-01-26 22:13:19'),
(2, 21, 'i want to ', 8, 7, '2020-01-26 22:13:32'),
(3, 21, 'testing', 7, 7, '2020-01-26 23:02:23'),
(4, 21, 'testing', 7, 7, '2020-01-26 23:05:20'),
(5, 21, 'test', 7, 7, '2020-01-26 23:06:41'),
(6, 21, 'testing messages', 7, 7, '2020-01-28 10:10:38'),
(7, 21, '\ntest@gmail.com\n233202009791\ntest', 7, 7, '2020-01-28 12:35:18'),
(8, 21, '\nexesdavis@gmail.com\n233202009791\ni want to buy this', 7, 7, '2020-01-28 12:37:47'),
(12, 21, 'i need a reply for the messages i have sent you', 7, 7, '2020-01-28 13:07:14'),
(13, 21, 'test', 7, 7, '2020-01-28 13:15:02'),
(14, 21, 'testing the messages refresh', 7, 7, '2020-01-28 13:15:14'),
(15, 21, 'test new', 7, 7, '2019-01-01 00:09:19'),
(16, 21, 'test', 7, 7, '2020-01-28 15:55:56'),
(17, 21, 'test all', 7, 7, '2020-01-28 15:56:09'),
(21, 35, '<br/>exesdavis@gmail.com<br/>+4915211632805<br/>I want to buy this item', 7, 7, '2020-01-28 16:45:10'),
(22, 35, 'i have changed by my mind about this', 7, 7, '2020-01-28 16:45:41'),
(23, 35, 'sorry i already have someone to buy this item', 1, 7, '2020-01-28 16:47:25'),
(25, 36, 'thomas<br/>exesdavis@gmail.com<br/>0202009791<br/>i am interested in buying this', 7, 8, '2020-01-28 17:17:42'),
(26, 39, 'Mike<br/>thomas.b.n.davis@outlook.com<br/>+4915211632805<br/>i want to buy this', 8, 9, '2020-02-04 12:30:02'),
(33, 39, 'The seller has accepted your request to buy this item', 9, 8, '2020-02-05 12:13:30'),
(34, 39, 'The seller has accepted your request to buy this item', 9, 8, '2020-02-05 12:24:53'),
(35, 39, 'The seller has accepted your request to buy this item', 9, 8, '2020-02-05 12:26:23'),
(36, 39, 'The seller has accepted your request to buy this item', 9, 8, '2020-02-05 12:32:48'),
(37, 39, 'The seller has accepted your request to buy this item', 9, 8, '2020-02-05 12:34:37'),
(38, 39, 'Sorry the user has cancelled your purchase order', 9, 8, '2020-02-05 12:34:55'),
(39, 39, 'The seller has accepted your request to buy this item', 9, 8, '2020-02-05 12:37:20'),
(40, 39, 'Sorry the user has cancelled your purchase order', 9, 8, '2020-02-05 12:37:49'),
(41, 39, 'The seller has accepted your request to buy this item', 9, 8, '2020-02-05 12:38:19');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `product_id`, `user_id`, `timestamp`, `status`) VALUES
(4, 21, 8, '2020-02-05 12:57:32', 0),
(23, 39, 8, '2020-02-05 12:38:19', 0);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `price` int(11) NOT NULL,
  `description` text NOT NULL,
  `date_uploaded` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `user_id`, `name`, `price`, `description`, `date_uploaded`, `status`) VALUES
(35, 7, 'Used Laptop', 10, 'Acer Aspire 5 A515-43-R19L comes with these high level specs: AMD Ryzen 3 3200U Dual-Core Processor 2.6GHz with Precision Boost up to 3.5GHz (Up to 4MB L3 Cache), Windows 10 in S mode, 15.6" Full HD (1920 x 1080) widescreen LED-backlit IPS Display, AMD Radeon Vega 3 Mobile Graphics, 4GB DDR4 Memory, 128GB PCIe NVMe SSD, True Harmony Technology, Two Built-in Stereo Speakers, Acer Purified.Voice Technology with Two Built-in Microphones, 802.11ac WiFi featuring 2x2 MIMO technology (Dual-Band 2.4GHz and 5GHz), 10/100/1000 Gigabit Ethernet LAN (RJ-45 port), Bluetooth 4.0, Back-lit Keyboard, HD Webcam (1280 x 720), 1 - USB 3.1 Gen 1 Port, 2 - USB 2.0 Ports, 1 - HDMI Port with HDCP support, Lithium-Ion Battery, Up to 7.5-hours Battery Life, 3.97 lbs. | 1.8 kg (system unit only) (NX.HG8AA.001)', '2020-01-28 16:33:41', 0),
(37, 9, 'Used Lenovo', 89, 'Acer Aspire 5 A515-43-R19L comes with these high level specs: AMD Ryzen 3 3200U Dual-Core Processor 2.6GHz with Precision Boost up to 3.5GHz (Up to 4MB L3 Cache), Windows 10 in S mode, 15.6" Full HD (1920 x 1080) widescreen LED-backlit IPS Display, AMD Radeon Vega 3 Mobile Graphics, 4GB DDR4 Memory, 128GB PCIe NVMe SSD, True Harmony Technology, Two Built-in Stereo Speakers, Acer Purified.Voice Technology with Two Built-in Microphones, 802.11ac WiFi featuring 2x2 MIMO technology (Dual-Band 2.4GHz and 5GHz), 10/100/1000 Gigabit Ethernet LAN (RJ-45 port), Bluetooth 4.0, Back-lit Keyboard, HD Webcam (1280 x 720), 1 - USB 3.1 Gen 1 Port, 2 - USB 2.0 Ports, 1 - HDMI Port with HDCP support, Lithium-Ion Battery, Up to 7.5-hours Battery Life, 3.97 lbs. | 1.8 kg (system unit only) (NX.HG8AA.001)', '2020-01-28 20:18:18', 0),
(39, 9, 'HP - 21.5 Inch - Silver / Black', 150, 'Built from lightweight, high-strength metal with a matte finish and high-polished resin, this ultra-slim display brings home a contemporary look and feel without the premium price tag\nWith its vivid IPS panel, this micro-edge display delivers ultra-wide viewing angles and crisp, clear picture quality; it''s an expansive viewing experience, ideal for dual display setups\nExperience the sharp, clear difference FHD resolution brings to all your content and thanks to AMD Free Sync, PC gaming is free of blur and lag; Scan range: Horizontal: 30 to 86 KHz, Vertical: 48 to 75 Hz\nNo matter where you stand, an HP IPS monitor delivers clear, vivid images; IPS technology ensures image accuracy and consistency across the ultra-wide viewing;Mounting_type:No vesa mounting\n2 years warranty', '2020-02-05 14:23:51', 3);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `review` text NOT NULL,
  `seller_id` int(11) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `product_id`, `user_id`, `review`, `seller_id`, `timestamp`) VALUES
(13, 39, 8, 'test', 9, '2020-02-05 14:23:51');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `telephone` varchar(15) NOT NULL,
  `password` varchar(256) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `telephone`, `password`, `status`) VALUES
(7, 'thomas', 'exesdavis@gmail.com', '0202009791', 'timmyses', 0),
(8, 'Mike', 'thomas.b.n.davis@outlook.com', '+4915211632805', 'timmyses', 0),
(9, 'Thomas Davis', 'exesdavis@hotmail.com', '+4915211632805', 'd2dc0d6d284b862883777c1c3dd6f1b5b98534d72b0a88b2c0a44dd93a8771be', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`,`date`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `product_id` (`product_id`,`sender_id`,`receiver_id`,`timestamp`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `product_id` (`product_id`,`user_id`,`timestamp`,`status`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `user_id` (`user_id`,`price`,`date_uploaded`,`status`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `name` (`name`,`email`,`status`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
