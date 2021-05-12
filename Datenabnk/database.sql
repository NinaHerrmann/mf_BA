-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: db
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `eint_krit`
--

DROP TABLE IF EXISTS `eint_krit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eint_krit` (
  `e_id` int NOT NULL,
  `krit_id` int NOT NULL,
  PRIMARY KEY (`e_id`,`krit_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eint_krit`
--

LOCK TABLES `eint_krit` WRITE;
/*!40000 ALTER TABLE `eint_krit` DISABLE KEYS */;
INSERT INTO `eint_krit` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,8),(1,10),(1,12),(2,1),(2,3),(2,5),(2,6),(2,8),(2,12),(3,1),(3,4),(3,5),(3,6),(3,8);
/*!40000 ALTER TABLE `eint_krit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eintrag`
--

DROP TABLE IF EXISTS `eintrag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eintrag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `kategorie` varchar(150) NOT NULL,
  `strasse` varchar(150) DEFAULT NULL,
  `plz` int DEFAULT NULL,
  `beschreibung` varchar(1000) DEFAULT NULL,
  `link` varchar(150) DEFAULT NULL,
  `latitude` decimal(18,16) DEFAULT NULL,
  `longitude` decimal(17,16) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `hausnummer` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eintrag`
--

LOCK TABLES `eintrag` WRITE;
/*!40000 ALTER TABLE `eintrag` DISABLE KEYS */;
INSERT INTO `eintrag` VALUES (1,'Arte Bio','cafe','Hörsterstraße 38',48143,NULL,NULL,51.9649385052524500,7.6323898822147320,NULL,NULL),(2,'beetschwester','cafe','Tibusplatz 6',48143,NULL,NULL,51.9654858191672600,7.6270098571287660,NULL,NULL),(3,'Benami','cafe','Hafenstraße 43',48153,NULL,NULL,51.9539943327402650,7.6320938982328180,NULL,NULL),(4,'Café Lockvogel','cafe','Neubrückenstraße 52',48143,NULL,NULL,51.9666593402914360,7.6301722160243575,NULL,NULL),(5,'Áro','restaurant','Wolbecker Straße 20',48145,NULL,NULL,51.9581363325901600,7.6387272098895100,NULL,NULL),(6,'Bantu Bowl','restaurant','Wolbecker Straße 27',48145,NULL,NULL,51.9583685590139500,7.6389416749196130,NULL,NULL),(7,'elbén','restaurant','Scharnhorstraße 25',48151,NULL,NULL,51.9539055857528600,7.6167006158132780,NULL,NULL),(8,'fok food','restaurant','Hansaring 37',48155,NULL,NULL,51.9533439257038340,7.6414792515159190,NULL,NULL);
/*!40000 ALTER TABLE `eintrag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kriterien`
--

DROP TABLE IF EXISTS `kriterien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kriterien` (
  `id` int NOT NULL AUTO_INCREMENT,
  `krit_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kriterien`
--

LOCK TABLES `kriterien` WRITE;
/*!40000 ALTER TABLE `kriterien` DISABLE KEYS */;
INSERT INTO `kriterien` VALUES (1,'vegan'),(2,'bio'),(3,'Saisonal'),(4,'Regional'),(5,'Vegetarisch'),(6,'Fairer Handel'),(7,'Nachhaltige Rohstoffe'),(8,'Recycle-Produkte'),(9,'Fair Fashion'),(10,'Soziales Engagement'),(11,'Barrierefreiheit'),(12,'Female Empowerment'),(13,'Diversity');
/*!40000 ALTER TABLE `kriterien` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-12 14:42:19
