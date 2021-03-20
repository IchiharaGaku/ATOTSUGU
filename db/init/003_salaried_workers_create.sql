CREATE TABLE salaried_workers (
  id INT NOT NULL AUTO_INCREMENT,
  age TINYINT DEFAULT NULL,
  gender TINYINT DEFAULT NULL COMMENT '0:男性、1:女性、2:その他、3:未回答',
  work_experiences VARCHAR(256) DEFAULT NULL,
  educational_backgrounds VARCHAR(256) DEFAULT NULL,
  self_introduce TEXT DEFAULT NULL,
  interested_business_type VARCHAR(30) DEFAULT NULL,
  skill TEXT DEFAULT NULL,
  email TEXT NOT NULL COLLATE utf8mb4_unicode_ci,
  password TEXT NOT NULL COLLATE utf8mb4_unicode_ci,
  created_at DATETIME NOT NULL DEFAULT now(),
  updated_at DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY(id)
);
