CREATE TABLE `tree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 6 DEFAULT CHARSET = utf8mb4;

ALTER TABLE tree AUTO_INCREMENT = 1;

INSERT INTO `tree` ()
VALUES (
    'Hi! My name is Sia. I was created by The Coding Ground class of 2021. How can I help you today?.'
  ),
  ('I\'d like to support TCG.'),
  (3, 'I\'d like to place TCG interns.'),
  (
    'I\'d like to get more information about how the TCG program works.'
  ),
  ('I\'d like to apply to TCG.');


CREATE TABLE `node` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` longtext DEFAULT NULL,
  `option` text DEFAULT NULL,
  `image` longblob DEFAULT NULL,
  `tree_id` int(11) DEFAULT NULL,
  `node_id` int(11) DEFAULT NULL,
  `application` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`application`)),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 50 DEFAULT CHARSET = utf8mb4;


ALTER TABLE node AUTO_INCREMENT = 1;


INSERT INTO `node` (image)
VALUES (
    'Tcg logo'
  );
  INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES (
    'Thank you! What kind of support are you interested in offering?'
  );
INSERT INTO `node` (option)
VALUES ('Mentorship or training');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (option)
VALUES ('Traditional one-one mentorship/training');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES (
    'Please add your details below so that we can get in touch!'
  );
INSERT INTO `node` (application)
VALUES (
    '{\n    \"mentorship\": {\n        \"name\":\"text\",\n        \"businessName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"message\":\"text\"\n    }\n}'
  );
INSERT INTO `node` (text)
VALUES (
    'Your details were submitted successfully. We’ll be in contact soon!'
  );
INSERT INTO `node` (option)
VALUES ('Distance/virtual mentorship/training');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES (
    'Please add your details below so that we can get in touch!'
  );
INSERT INTO `node` (application)
VALUES (
    '{\n    \"mentorship\": {\n        \"name\":\"text\",\n        \"businessName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"message\":\"text\"\n    }\n}'
  );
INSERT INTO `node` (text)
VALUES (
    'Your details were submitted successfully. We’ll be in contact soon!'
  );
INSERT INTO `node` (option)
VALUES ('Group training');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES (
    'Please add your details below so that we can get in touch!'
  );
INSERT INTO `node` (application)
VALUES (
    '{\n    \"mentorship\": {\n        \"name\":\"text\",\n        \"businessName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"message\":\"text\"\n    }\n}'
  );
INSERT INTO `node` (text)
VALUES (
    'Your details were submitted successfully. We’ll be in contact soon!'
  );
INSERT INTO `node` (option)
VALUES ('Financial Support');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (option)
VALUES ('Sponsor TCG');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES (
    'We appreciate all donations and funding as it helps us to reach more students who in turn change their own lives as well as the circumstances of their families. Please email tanille@thecodingground.com or add your details below so that we can get in contact.'
  );
INSERT INTO `node` (text)
VALUES ('Your Details');
INSERT INTO `node` (application)
VALUES (
    '{\n    \"sponsors\": {\n        \"name\":\"text\",\n        \"businessName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"message\":\"text\"\n    }\n}'
  );
INSERT INTO `node` (text)
VALUES (
    'Your details were submitted successfully. We’ll be in contact soon!'
  );
INSERT INTO `node` (option)
VALUES ('Sponsor a student');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES (
    'Thanks so much for your interest. Please have a look at our students page here if there is a particular student you’d like to support! You can get in contact with us by emailing tanille@thecodingground.com or add your details below so that we can get in touch.'
  );
INSERT INTO `node` (text)
VALUES ('Your Details');
INSERT INTO `node` (application)
VALUES (
    '{\n    \"sponsors\": {\n        \"name\":\"text\",\n        \"businessName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"message\":\"text\"\n    }\n}'
  );
INSERT INTO `node` (text)
VALUES (
    'Your details were submitted successfully. We’ll be in contact soon!'
  );
INSERT INTO `node` (option)
VALUES ('Other');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES (
    'Thank you for your interest! Please email tanille@thecodingground.com or add your details below so that we can get in contact.'
  );
INSERT INTO `node` (text)
VALUES ('Your Details');
INSERT INTO `node` (application)
VALUES (
    '{\n    \"other\": {\n        \"name\":\"text\",\n        \"businessName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"message\":\"text\"\n    }\n}'
  );
INSERT INTO `node` (text)
VALUES (
    'Your details were submitted successfully. We’ll be in contact soon!'
  );
  INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES (
    'Thank you! Our internships generally begin in August each year and run for 18 months. In order to discuss your requirements please email tanille@thecodingground.com or click on the button below to add your details so we can contact you'
  );
INSERT INTO `node` (option)
VALUES ('Click to enter your contact details');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (option)
VALUES ('Back to top');
INSERT INTO `node` (text)
VALUES ('Your Details');
INSERT INTO `node` (application)
VALUES (
    '{\n    \"tcgInterns\": {\n        \"name\":\"text\",\n        \"businessName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"message\":\"text\"\n    }\n}'
  );
INSERT INTO `node` (text)
VALUES (
    'Your details were submitted successfully. We’ll be in contact soon!'
  );
  INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (option)
VALUES ('What is TCG');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES (
    'The Coding Ground is a software craftsmanship academy that focuses on the science and art of developing software engineers with in-demand technical, leadership, and interpersonal abilities. Our intensive 18-month program teaches students the key skills they’ll need to advance in their professions in information technology while also changing the course of ther life.'
  );
INSERT INTO `node` (option)
VALUES ('Back to top');
INSERT INTO `node` (option)
VALUES ('How does the program work?');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES (
    'Students train for 12 months, full time, using a free online curriculum while receiving the support of graduates and mentors. The last 6 months of training is spent on a practical project, run in a scrum format. Students receive the training, food and a transport stipend for free and at the end of their training, if successful, are placed in a ‘pay it back’ internship in which 60% of their salary goes back into TCG to fund the training of the next year’s students.'
  );
INSERT INTO `node` (option)
VALUES ('Back to top');
INSERT INTO `node` (option)
VALUES ('How do students qualify?');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES (
    'TCG accepts students from previously disadvantaged backgrounds between the ages of 18 - 25. Students are required to have South African citizenship and pass a series of assessments and interviews during the application process. Students are not required to have a matric qualification.'
  );
INSERT INTO `node` (option)
VALUES ('Back to top');
INSERT INTO `node` (option)
VALUES ('Where is TCG');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (image)
VALUES ('image');
INSERT INTO `node` (text)
VALUES (
    'The Coding Ground is located in Riversands Incubation Hub \nFourways \nJohannesburg \nSouth Africa'
  );
INSERT INTO `node` (option)
VALUES ('Back to top');
INSERT INTO `node` (option)
VALUES ('What tech stack do the students learn?');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES ('Javascript, Python, Java & C#');
INSERT INTO `node` (option)
VALUES ('Back to top');
INSERT INTO `node` (option)
VALUES ('How does TCG fund itself?');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES (
    'TCG has funded itself through the placement of students in internships, personal founder investment as well as funding through our business partners. We are currently seeking more funding in order to grow the program and reach more students.'
  );
INSERT INTO `node` (option)
VALUES ('Back to top');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES (
    '2022 applications have already closed unfortunately. Would you like to be notified when our 2023 applications open at the end of the year?'
  );
INSERT INTO `node` (option)
VALUES ('Yes');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (option)
VALUES ('No');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES (
    'Have you read our student FAQs? If not, please read them here before you apply.'
  );
INSERT INTO `node` (option)
VALUES ('Yes I have');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES (
    'Please provide the following credentials'
  );
INSERT INTO `node` (application)
VALUES (
    '{\n    \"studentApplication\": {\n        \"fullName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"whatsappNumber\":\"number\",\n        \"gender\":\"text\",\n        \"dateOfBirth\":\"text\",\n        \"physicalAddress\":\"text\",\n        \"province\":\"text\"\n    }\n}'
  );
INSERT INTO `node` (option)
VALUES ('No, I haven’t');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES (
    'You are applying with the following infomation:'
  );
INSERT INTO `node` (text)
VALUES ('Would you like to edit or submit?');

INSERT INTO `node` (text)
VALUES ('Edit');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES ('Submit');
INSERT INTO `node` (text)
VALUES (
    'Tumisang Ramollo'
  );
INSERT INTO `node` (text)
VALUES ('Update:');
INSERT INTO `node` (application)
VALUES (
    '{\n    \"updateStudentApplication\": {\n        \"fullName\":\"text\",\n        \"emailAddress\":\"email\",\n        \"contactNumber\":\"number\",\n        \"whatsappNumber\":\"number\",\n        \"gender\":\"text\",\n        \"dateOfBirth\":\"text\",\n        \"physicalAddress\":\"text\",\n        \"province\":\"text\"\n    }\n}'
  );
  
INSERT INTO `node` (text)
VALUES (
    'Thanks! your data was submitted successfully! We’ll notify you when 2023 applications have opened.'
  );
INSERT INTO `node` (option)
VALUES ('Back to top');
