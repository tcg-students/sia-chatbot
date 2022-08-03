CREATE DATABASE chatbot;

DROP TABLE IF EXISTS `tree`;

CREATE TABLE `tree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ;

INSERT INTO tree (text) VALUES ('Hi! My name is Sia. I was created by The Coding Ground class of 2021. How can I help you today?.');
INSERT INTO `tree` (text) VALUES ('1. I\'d like to support TCG.');
INSERT INTO `tree` (text) VALUES ('2. I\'d like to place TCG interns.');
INSERT INTO `tree` (text) VALUES ('3. I\'d like to get more information about how the TCG program works.');
INSERT INTO `tree` (text) VALUES ('4. I\'d like to apply to TCG.');



DROP TABLE IF EXISTS `node`;

CREATE TABLE `node` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` longtext DEFAULT NULL,
  `option` text DEFAULT NULL,
  `image` longtext DEFAULT NULL,
  `tree_id` int(11) DEFAULT NULL,
  `node_id` int(11) DEFAULT NULL,
  `application` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`application`)),
  PRIMARY KEY (`id`)
);

ALTER TABLE node AUTO_INCREMENT = 1;


INSERT INTO node (option) VALUES ('1. I\'d like to support TCG.');
INSERT INTO node (option) VALUES ('2. I\'d like to place TCG interns.');
INSERT INTO node (option) VALUES ('3. I\'d like to get more information about how the TCG program works.');
INSERT INTO node (option) VALUES ('4. I\'d like to apply to TCG.');

INSERT INTO node (image) VALUES ('data:image/png;base64,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');

INSERT INTO node (text) VALUES ('1. I\'d like to support TCG.');

INSERT INTO node (text) VALUES ('Thank you! What kind of support are you interested in offering?');

INSERT INTO node (option) VALUES ('1. Mentorship or training');

INSERT INTO node (text) VALUES ('1. Mentorship or training');

INSERT INTO node (text) VALUES ('The kind of training or mentorship you’re able to offer');

INSERT INTO node (option) VALUES ('1. Traditional one-one mentorship/training');

INSERT INTO node (text) VALUES ('1. Traditional one-one mentorship/training');

INSERT INTO node (text) VALUES ('Please add your details below so that we can get in touch!');

INSERT INTO node (application) VALUES ('{\n    \"mentorship\": {\n        \"name\":\"text\",\n        \"businessName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"message\":\"text\"\n    }\n}');

INSERT INTO node (text) VALUES ('Your details were submitted successfully. We’ll be in contact soon!');

INSERT INTO node (option) VALUES ('2. Distance/virtual mentorship/training');

INSERT INTO node (text) VALUES ('1. Distance/virtual mentorship/training');

INSERT INTO node (text) VALUES ('Please add your details below so that we can get in touch!');

INSERT INTO node (application) VALUES ('{\n    \"mentorship\": {\n        \"name\":\"text\",\n        \"businessName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"message\":\"text\"\n    }\n}');

INSERT INTO node (text) VALUES ('Your details were submitted successfully. We’ll be in contact soon!');

INSERT INTO node (option) VALUES ('3. Group training');

INSERT INTO node (text) VALUES ('1. Group training');

INSERT INTO node (text) VALUES ('Please add your details below so that we can get in touch!');

INSERT INTO node (application) VALUES ('{\n    \"mentorship\": {\n        \"name\":\"text\",\n        \"businessName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"message\":\"text\"\n    }\n}');

INSERT INTO node (text) VALUES ('Your details were submitted successfully. We’ll be in contact soon!');

INSERT INTO node (option) VALUES ('2. Financial Support');

INSERT INTO node (text) VALUES ('1. Financial Support');

INSERT INTO node (text) VALUES ('Financial support: Would you like to sponsor TCG or would you like to sponsor a student?');

INSERT INTO node (option) VALUES ('1. Sponsor TCG');

INSERT INTO node (text) VALUES ('1. Sponsor TCG');

INSERT INTO node (text) VALUES ('We appreciate all donations and funding as it helps us to reach more students who in turn change their own lives as well as the circumstances of their families. Please email tanille@thecodingground.com or add your details below so that we can get in contact.');

INSERT INTO node (text) VALUES ('Your Details'); 

INSERT INTO node (application) VALUES ('{\n    \"sponsors\": {\n        \"name\":\"text\",\n        \"businessName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"message\":\"text\"\n    }\n}');

INSERT INTO node (text) VALUES ('You are applying with the following infomation:');

INSERT INTO node (text) VALUES ('Would you like to edit?');

INSERT INTO node (option) VALUES ('1. Yes');

INSERT INTO node (text) VALUES ('1. Yes');

INSERT INTO node (option) VALUES ('1. No');

INSERT INTO node (text) VALUES ('1. No');

INSERT INTO node (text) VALUES ('Your details were submitted successfully. We’ll be in contact soon!');

INSERT INTO node (option) VALUES ('1. Sponsor Student');

INSERT INTO node (text) VALUES ('1. Sponsor Student');

INSERT INTO node (text) VALUES ('Thanks so much for your interest. Please have a look at our students page here if there is a particular student you’d like to support! You can get in contact with us by emailing tanille@thecodingground.com or add your details below so that we can get in touch.');

INSERT INTO node (text) VALUES ('Your Details'); 

INSERT INTO node (application) VALUES ('{\n    \"sponsors\": {\n        \"name\":\"text\",\n        \"businessName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"message\":\"text\"\n    }\n}');

INSERT INTO node (text) VALUES ('You are applying with the following infomation:');

INSERT INTO node (text) VALUES ('Would you like to edit?');

INSERT INTO node (option) VALUES ('1. Yes');

INSERT INTO node (text) VALUES ('1. Yes');

INSERT INTO node (option) VALUES ('1. No');

INSERT INTO node (text) VALUES ('1. No');

INSERT INTO node (text) VALUES ('Your details were submitted successfully. We’ll be in contact soon!');


-- //////////////////////////////////////////


INSERT INTO node (option) VALUES ('3. Other');

INSERT INTO node (text) VALUES ('1. Other');

INSERT INTO node (text) VALUES ('Thank you for your interest! Please email tanille@thecodingground.com or add your details below so that we can get in contact.');

INSERT INTO node (text) VALUES ('Your Details');

INSERT INTO node (application) VALUES ('{\n    \"other\": {\n        \"name\":\"text\",\n        \"businessName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"message\":\"text\"\n    }\n}');

INSERT INTO node (text) VALUES ('Your details were submitted successfully. We’ll be in contact soon!');

-- ///////////////////////////////////////////////

INSERT INTO node (option) VALUES ('1. I’d like to place TCG interns.');

INSERT INTO node (text) VALUES ('1. I’d like to place TCG interns.');

INSERT INTO node (text) VALUES ('Thank you! Our internships generally begin in August each year and run for 18 months. In order to discuss your requirements please email tanille@thecodingground.com or click on the button below to add your details so we can contact you');

INSERT INTO node (option) VALUES ('1. Click to enter your contact details.');

INSERT INTO node (option) VALUES ('1. Click to enter your contact details.');


INSERT INTO node (text) VALUES ('1. Click to enter your contact details.');

INSERT INTO node (text) VALUES ('Your Details');

INSERT INTO node (application) VALUES ('{\n    \"tcgInterns\": {\n        \"name\":\"text\",\n        \"businessName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"message\":\"text\"\n    }\n}');

INSERT INTO node (text) VALUES 'Your details were submitted successfully. We’ll be in contact soon!');

INSERT INTO node (option) VALUES ('2. Back to top');

INSERT INTO node (text) VALUES ('1. I\'d like to get more information about how the TCG program works.');

INSERT INTO node (text) VALUES ('1. Choose one of the option below on how the TCG program works.');

INSERT INTO node (option) VALUES ('1. What is TCG');

INSERT INTO node (text) VALUES ('1. What is TCG?');

INSERT INTO node (text) VALUES ('The Coding Ground is a software craftsmanship academy that focuses on the science and art of developing software engineers with in-demand technical, leadership, and interpersonal abilities. Our intensive 18-month program teaches students the key skills they’ll need to advance in their professions in information technology while also changing the course of ther life.');

INSERT INTO node (option) VALUES ('Back to top');

INSERT INTO node (option) VALUES ('2. How does the program work?');

INSERT INTO node (text) VALUES ('1. How does the program work?');

INSERT INTO node (text) VALUES ('Students train for 12 months, full time, using a free online curriculum while receiving the support of graduates and mentors. The last  months of training is spent on a practical project, run in a scrum format. Students receive the training, food and a transport stipend for free and at the end of their training, if successful, are placed in a ‘pay it back’ internship in which 60% of their salary goes back into TCG to fund the training of the next year’s students.');

INSERT INTO node (option) VALUES ('Back to top');

INSERT INTO node (option) VALUES ('3. How do students qualify?');

INSERT INTO node (text) VALUES ('1. How do students qualify?');

INSERT INTO node (text) VALUES ('TCG accepts students from previously disadvantaged backgrounds between the ages of 18 - 25. Students are required to have South African citizenship and pass a series of assessments and interviews during the application process. Students are not required to have a matric qualification.');

INSERT INTO node (option) VALUES ('Back to top');

INSERT INTO node (option) VALUES ('4. Where is TCG');

INSERT INTO node (text) VALUES ('1. Where is TCG');

INSERT INTO node (image) VALUES ('');

INSERT INTO node (text) VALUES ('The Coding Ground is located in Riversands Incubation Hub \nFourways \nJohannesburg \nSouth Africa');

INSERT INTO node (option) VALUES ('Back to top');

INSERT INTO node (option) VALUES ('5. What tech stack do the students learn?');

INSERT INTO node (text) VALUES ('1. What tech stack do the students learn?');

INSERT INTO node (text) VALUES ('Javascript, Python, Java & C#');

INSERT INTO node (option) VALUES ('Back to top');


INSERT INTO node (option) VALUES ('How does TCG fund itself?');

INSERT INTO node (text) VALUES ('6. How does TCG fund itself?');

INSERT INTO node (text) VALUES ('TCG has funded itself through the placement of students in internships, personal founder investment as well as funding through our business partners. We are currently seeking more funding in order to grow the program and reach more students.');

INSERT INTO node (option) VALUES ('Back to top');

-- ////////////////////////////////////////////////////

INSERT INTO node (text) VALUES ('1. I’d like to apply to TCG.');


INSERT INTO node (text) VALUES ('2022 applications have already closed unfortunately. Would you like to be notified when our 2023 applications open at the end of the year?');

INSERT INTO node (option) VALUES ('1. Yes');

INSERT INTO node (text) VALUES ('1. Yes');

INSERT INTO node (text) VALUES ('Read FAQs');


INSERT INTO node (option) VALUES ('1. Have you read our student FAQs? If not, please read them here before you apply.');

INSERT INTO node (text) VALUES ('1. Have you read our student FAQs? If not, please read them here before you apply.');

INSERT INTO node (option) VALUES ('1. Yes I have');

INSERT INTO node (text) VALUES ('1. Yes I have');

INSERT INTO node (text) VALUES ('Please provide the following credentials');

INSERT INTO node (application) VALUES ('{\n    \"studentApplication\": {\n        \"fullName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"whatsappNumber\":\"number\",\n        \"gender\":\"text\",\n        \"dateOfBirth\":\"date\",\n        \"physicalAddress\":\"text\",\n        \"province\":\"text\"\n    }\n}');

INSERT INTO node (text) VALUES ('You are applying with the following infomation:');

INSERT INTO node (text) VALUES ('Would you like to edit?');

INSERT INTO node (option) VALUES ('1. Yes');

INSERT INTO node (text) VALUES ('1. Yes');


INSERT INTO node (option) VALUES ('2. No');

INSERT INTO node (text) VALUES ('1. No');

INSERT INTO node (text) VALUES ('Thanks! your data was submitted successfully! We’ll notify you when 2023 applications have opened.');

INSERT INTO node (option) VALUES ('No, I haven’t');

INSERT INTO node (text) VALUES ('1. No, I haven’t');

INSERT INTO node (text) VALUES ('');

INSERT INTO node (option) VALUES ('2. No');



DELETE FROM node WHERE id >  95

