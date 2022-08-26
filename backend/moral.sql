
CREATE TABLE tree (
  id serial NOT NULL PRIMARY KEY,
  text VARCHAR NULL
);
INSERT INTO tree VALUES (1,'Hi! My name is Sia. I was created by The Coding Ground class of 2021. How can I help you today?');


CREATE TABLE node (
  id serial NOT NULL PRIMARY KEY,
  text VARCHAR NULL,
  option VARCHAR NULL,
  image VARCHAR NULL,
  tree_id int NULL,
  node_id int NULL,
  application jsonb NULL
);


-- //////////Support///////////////////////////////////////
INSERT INTO node (option , tree_id) VALUES ('1. Id like to support TCG.',1);
INSERT INTO node (text , node_id) VALUES ('1. Id like to support TCG.',2);
INSERT INTO node (text , node_id) VALUES('Thank you! What kind of support are you interested in offering?',2);
-- ///////Metorship///////
INSERT INTO node (option , node_id) VALUES('1. Mentorship or training',2);

INSERT INTO node (text , node_id) VALUES('1. Mentorship or training',11);
INSERT INTO node (text , node_id) VALUES('The kind of training or mentorship you’re able to offer',11);
-- INSERT INTO node (text , node_id) VALUES('Please add your details below so that we can get in touch!',14);

INSERT INTO node (text , node_id) VALUES('1. Traditional one-one mentorship/training',14);
INSERT INTO node (node_id , application) VALUES(14,'{"name":"text",        "businessName":"text","emailAddress":"email","contactNumber":"number","Traditional one-one mentorship/training":"textarea"}');




INSERT INTO node (option , node_id) VALUES('2. Distance/virtual mentorship/training',11);
INSERT INTO node (text , node_id) VALUES('2. Distance/virtual mentorship/training',19);
INSERT INTO node (text , node_id) VALUES('Please add your details below so that we can get in touch!',19);
INSERT INTO node (node_id , application) VALUES(19,'{"name":"text","businessName":"text","emailAddress":"email","contactNumber":"number", "Distance/virtual mentorship/training":"textarea"}');



INSERT INTO node (option , node_id) VALUES('3. Group training',11);
INSERT INTO node (text , node_id) VALUES('3. Group training',24);
INSERT INTO node (text , node_id) VALUES('Please add your details below so that we can get in touch!',24);
INSERT INTO node (node_id , application) VALUES(24,'{"name":"text","businessName":"text","emailAddress":"email",   "contactNumber":"number", "Group training":"textarea"}');


-- ///////Financial///////
INSERT INTO node (option , node_id) VALUES('2. Financial Support',2);


-- ///////Other///////
INSERT INTO node (option , node_id) VALUES ('3. Other',2);

-- //////////Interns////////////////////////////////////////////
INSERT INTO node (option , tree_id) VALUES ('2. Id like to place TCG interns.',1);
INSERT INTO node (text , node_id) VALUES ('2. Id like to place TCG interns.',4);



-- ///////////Info////////////////////////////////////////////
INSERT INTO node (option , tree_id) VALUES ('3. Id like to get more information about how the TCG program works.',1);
INSERT INTO node (text , node_id) VALUES ('3. Id like to get more information about how the TCG program works.',6);


-- ///////Apply//////////////////////////////////////////////
INSERT INTO node (option , tree_id) VALUES ('4. Id like to apply to TCG.',1);
INSERT INTO node (text , node_id) VALUES('4. Id like to apply to TCG.',8);