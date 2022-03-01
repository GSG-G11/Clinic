BEGIN;

drop table  if  exists patients , appointments cascade  ;

CREATE TABLE patients (id SERIAL  PRIMARY KEY , full_name VARCHAR(50
 ),phone_number VARCHAR(20), Address TEXT);

CREATE TABLE appointments (id serial PRIMARY KEY ,date VARCHAR(50),time VARCHAR(20),patient_id INT,FOREIGN KEY (patient_id) REFERENCES patients(id));

INSERT INTO patients (full_name,phone_number) VALUES ('wessal','0599');                                                                              
INSERT INTO appointments (date,time,patient_id) VALUES ('3-3','13:00'
 ,1) ;                                                                           


COMMIT;