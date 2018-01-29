DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS contacts;
DROP TABLE IF EXISTS user_contacts;
DROP TABLE IF EXISTS channels;
DROP TABLE IF EXISTS messages;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  phone_number VARCHAR(20),
  password VARCHAR (20)
);

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR (255),
  phone_number VARCHAR(20)
);

CREATE TABLE user_contacts(
    id SERIAL,
    user_id SERIAL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    contact_id SERIAL,
    FOREIGN KEY (contact_id) REFERENCES contacts(id)
);

CREATE TABLE channels (
    id SERIAL,
    user_id SERIAL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    contact_id SERIAL,
    FOREIGN KEY (contact_id) REFERENCES contacts(id),
    messages_id SERIAL,
    FOREIGN KEY (messages_id) REFERENCES messages(id)
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  body VARCHAR (255),
  user_id SERIAL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  contact_id SERIAL,
  FOREIGN KEY (contact_id) REFERENCES contacts(id)
);



