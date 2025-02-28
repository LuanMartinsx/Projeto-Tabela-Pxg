-- MySQL dump 10.13  Distrib 8.0.37, for Win64 (x86_64)
--
-- Host: localhost    Database: pokemon
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('17176652-dbfe-4c58-8da7-772b9a895454','ac1dcda0365d3eaf9aa6bdd7982319d8b35636e7b1cfdde17e1f58799bf6f096','2024-07-15 13:48:55.881','20240715134855_fix_relations',NULL,NULL,'2024-07-15 13:48:55.624',1),('181b0d67-75b8-450d-b175-6f6d59b1ec71','add6857de5fd7a730e6d418ef81fcb82256fd59f23daa3fb3b9d7db443d6cca7','2024-07-15 13:46:10.647','20240715134112_init',NULL,NULL,'2024-07-15 13:46:10.627',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hunt`
--

DROP TABLE IF EXISTS `hunt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hunt` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hunt`
--

LOCK TABLES `hunt` WRITE;
/*!40000 ALTER TABLE `hunt` DISABLE KEYS */;
INSERT INTO `hunt` VALUES (1,'Machamp'),(2,'Persian'),(3,'Gallade'),(4,'Mixed Dragon');
/*!40000 ALTER TABLE `hunt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `huntlog`
--

DROP TABLE IF EXISTS `huntlog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `huntlog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `hunt_id` int NOT NULL,
  `hunt_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_lucro` double NOT NULL,
  `data` datetime(3) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `huntlog`
--

LOCK TABLES `huntlog` WRITE;
/*!40000 ALTER TABLE `huntlog` DISABLE KEYS */;
INSERT INTO `huntlog` VALUES (50,1,'Machamp',1670000,'2024-07-23 11:53:48.306','2024-07-23 11:53:48.395'),(51,1,'Machamp',2011300,'2024-07-24 13:08:17.655','2024-07-24 13:08:17.868');
/*!40000 ALTER TABLE `huntlog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `preco` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'Corruted Champion Belt',4500),(2,'Injections',50),(3,'Champion Belt',1000),(4,'Shard',150000),(5,'Punch Stone',5000),(6,'Cyan Gem',3000),(7,'Black Gem',2000000),(8,'Compressed Gem',21600),(9,'Nightmare Stone',5000),(10,'Black Wool Ball',3500),(11,'Solid Dark Gem',50),(12,'Darkness Stone',5000),(14,'Nail',10),(19,'Blade Horn',180000),(20,'Enigma Stone',5000),(21,'Big Enchanted Gem',50),(22,'Corrupted Dragon Tooth',2500),(23,'Crystal Stone',50000),(24,'Dragon Scale Collection',50),(25,'Dragon Tooth',610),(26,'Dragon Tail',450),(27,'Mach Nail',53000),(28,'Mach Nail',53000);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monstro`
--

DROP TABLE IF EXISTS `monstro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monstro` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monstro`
--

LOCK TABLES `monstro` WRITE;
/*!40000 ALTER TABLE `monstro` DISABLE KEYS */;
INSERT INTO `monstro` VALUES (1,'Machamp'),(2,'Persian'),(3,'Gallade'),(4,'Dragonite'),(5,'Garchomp');
/*!40000 ALTER TABLE `monstro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monstrohunt`
--

DROP TABLE IF EXISTS `monstrohunt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monstrohunt` (
  `monstro_id` int NOT NULL,
  `hunt_id` int NOT NULL,
  PRIMARY KEY (`monstro_id`,`hunt_id`),
  KEY `MonstroHunt_hunt_id_fkey` (`hunt_id`),
  CONSTRAINT `MonstroHunt_hunt_id_fkey` FOREIGN KEY (`hunt_id`) REFERENCES `hunt` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `MonstroHunt_monstro_id_fkey` FOREIGN KEY (`monstro_id`) REFERENCES `monstro` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monstrohunt`
--

LOCK TABLES `monstrohunt` WRITE;
/*!40000 ALTER TABLE `monstrohunt` DISABLE KEYS */;
INSERT INTO `monstrohunt` VALUES (1,1),(2,2),(3,3),(4,4),(5,4);
/*!40000 ALTER TABLE `monstrohunt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monstroitem`
--

DROP TABLE IF EXISTS `monstroitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monstroitem` (
  `monstro_id` int NOT NULL,
  `item_id` int NOT NULL,
  PRIMARY KEY (`monstro_id`,`item_id`),
  KEY `MonstroItem_item_id_fkey` (`item_id`),
  CONSTRAINT `MonstroItem_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `item` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `MonstroItem_monstro_id_fkey` FOREIGN KEY (`monstro_id`) REFERENCES `monstro` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monstroitem`
--

LOCK TABLES `monstroitem` WRITE;
/*!40000 ALTER TABLE `monstroitem` DISABLE KEYS */;
INSERT INTO `monstroitem` VALUES (1,1),(1,2),(3,2),(1,3),(1,4),(2,4),(3,4),(4,4),(1,5),(3,5),(1,6),(2,6),(3,6),(4,6),(1,7),(2,7),(3,7),(4,7),(1,8),(2,8),(3,8),(4,8),(1,9),(2,9),(3,9),(4,9),(2,10),(2,11),(2,12),(2,14),(3,19),(3,20),(3,21),(4,22),(4,23),(4,24),(4,25),(4,26),(5,27);
/*!40000 ALTER TABLE `monstroitem` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-25 13:33:02
