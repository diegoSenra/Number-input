CREATE DATABASE numberDb;

USE numberDb;

CREATE TABLE `numberSubmits` (

  `id` int(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `numberInput` int(255) DEFAULT '0',
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL
);
