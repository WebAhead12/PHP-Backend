BEGIN;
DROP TABLE IF EXISTS users, modules;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(36) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE modules (
    id SERIAL PRIMARY KEY,
    module json NOT NULL,
    user_id INTEGER REFERENCES users(id)
);
INSERT INTO users (username, password) VALUES
('juan','1234567890'),
('julio','17032003')
;

INSERT INTO modules (module,user_id) VALUES
('{"image":"base64","text":"hello","position":[5,10],"size":[50,50]}',1),
('{"image":"base64","text":"world","position":[10,20],"size":[30,10]}',1),
('{"image":"base64","text":"hell","position":[50,30],"size":[24,42]}',2)
;
COMMIT;