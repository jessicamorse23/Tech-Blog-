DROP DATABASE IF EXISTS techblog_db;
CREATE DATABASE techblog_db;
USE techblog_db;

SET FOREIGN_KEY_CHECKS = 0;
drop table if exists posts;
drop table if exists comments;
drop table if exists users;
SET FOREIGN_KEY_CHECKS = 1;