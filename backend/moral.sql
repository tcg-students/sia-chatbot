CREATE TABLE node (
  id int serial NOT NULL PRIMARY KEY,
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

CREATE TABLE tree (
  tree_id NOT NULL PRIMARY KEY,
  text text NOT NULL
) 
