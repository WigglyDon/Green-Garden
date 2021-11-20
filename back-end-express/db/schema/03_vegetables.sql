DROP TABLE IF EXISTS vegetables CASCADE;

CREATE TABLE vegetables (
    id SERIAL PRIMARY KEY,
    water_level VARCHAR(255),
    sun_level VARCHAR(255),
    season VARCHAR(255)   
);