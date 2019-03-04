CREATE DATABASE ecorpse_p2;
USE ecorpse_p2;

CREATE TABLE `elements` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `body` VARCHAR( 255) NOT NULL,
  `commit` BOOLEAN,
  `user_id` Int( 11 ) NOT NULL,
  `story_id` Int( 11 ) NOT NULL,
--   Created_at | Sequlized Will Populate these.
--   Updated_at | Sequalized Will Populate these.
  PRIMARY KEY ( `id` ) 
);

CREATE TABLE `users` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `first_name` VARCHAR( 255) NOT NULL,
  `last_name` VARCHAR( 255 ) NOT NULL,
  `email`VARCHAR( 255 ) NOT NULL,
--   Created_at | Sequlized Will Populate these.
--   Updated_at | Sequalized Will Populate these.

  PRIMARY KEY ( `id` ) 
);

CREATE TABLE `story_perms` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `story_id` Int( 11 ) NOT NULL,
  `user_id` Int( 11 ) NOT NULL,
--   Created_at | Sequlized Will Populate these.
--   Updated_at | Sequalized Will Populate these.

  PRIMARY KEY ( `id` ) 
);

CREATE TABLE `stories` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `story_id` Int( 11 ) NOT NULL,
  `story_name` VARCHAR( 255 ) NOT NULL,
--   Created_at | Sequlized Will Populate these.
--   Updated_at | Sequalized Will Populate these.

  PRIMARY KEY ( `id` ) 
);

