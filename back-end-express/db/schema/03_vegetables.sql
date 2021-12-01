DROP TABLE IF EXISTS vegetables CASCADE;
CREATE TABLE vegetables (
    id SERIAL PRIMARY KEY,
    name VARCHAR(500),
    image_url VARCHAR(500),
    description VARCHAR(500),
    native_region VARCHAR(500),
    growing_days INTEGER,
    row_spacing INTEGER,
    spread INTEGER,
    sowing_method VARCHAR(500),
    tags VARCHAR(500),
    water_amount INTEGER,
    sun_level INTEGER,
    season VARCHAR(500),
    height INTEGER
);