CREATE TABLE master_business_types (
  id INT NOT NULL AUTO_INCREMENT,
  type varchar(100) NOT NULL UNIQUE,
  created_at DATETIME NOT NULL DEFAULT now(),
  updated_at DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY(id)
);
