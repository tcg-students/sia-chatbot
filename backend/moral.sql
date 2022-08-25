CREATE TABLE node (
  id serial NOT NULL PRIMARY KEY,
  text VARCHAR NULL,
  option VARCHAR NULL,
  image VARCHAR NULL,
  tree_id int NULL,
  node_id int NULL,
  application jsonb NULL
);

CREATE TABLE nodes (
  id serial NOT NULL PRIMARY KEY,
  text VARCHAR NULL,
  option VARCHAR NULL,
  image VARCHAR NULL,
  tree_id int NULL,
  node_id int NULL,
  application json NULL
);

LOCK TABLES `tree` WRITE;
/*!40000 ALTER TABLE `tree` DISABLE KEYS */;
INSERT INTO `tree` VALUES (1,'Hi! My name is Sia. I was created by The Coding Ground class of 2021. How can I help you today?');
/*!40000 ALTER TABLE `tree` ENABLE KEYS */;
UNLOCK TABLES

CREATE TABLE `tree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
