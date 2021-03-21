ALTER TABLE business ADD CONSTRAINT fk_business_owners_owner_id FOREIGN KEY (owner_id) REFERENCES owners (id)
ALTER TABLE owners ADD CONSTRAINT fk_owners_business_business_id FOREIGN KEY (business_id) REFERENCES business (id)
ALTER TABLE master_business_type ADD CONSTRAINT fk_master_business_type_owners_business_type FOREIGN KEY (business_type) REFERENCES owners (business_type)
