CREATE TABLE business (
  id INT NOT NULL AUTO_INCREMENT,
  owner_id INT NOT NULL,
  contents_what TEXT NOT NULL,
  contents_why TEXT NOT NULL,
  contents_how TEXT NOT NULL,
  contents_will TEXT NOT NULL,
  address VARCHAR(50) NOT NULL,
  number_of_employees INT DEFAULT NULL,
  facebook VARCHAR(200) DEFAULT NULL,
  created_at DATETIME NOT NULL DEFAULT now(),
  updated_at DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY(id)
);
