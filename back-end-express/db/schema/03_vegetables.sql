DROP TABLE IF EXISTS vegetables CASCADE;

CREATE TABLE vegetables (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    image_url VARCHAR(255),
    description VARCHAR(255),
    native_region VARCHAR(255),
    growing_days INTEGER,
    row_spacing INTEGER,
    spread INTEGER,
    sowing_method VARCHAR(255),
    tags VARCHAR(255), 
    water_amount INTEGER,
    sun_level VARCHAR(255),
    season VARCHAR(255)   
);