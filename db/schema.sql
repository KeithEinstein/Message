DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  phone_number VARCHAR(12)
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  body VARCHAR (255),
  contact_id SERIAL,
  FOREIGN KEY contact_id REFERENCES contacts(id)
)


