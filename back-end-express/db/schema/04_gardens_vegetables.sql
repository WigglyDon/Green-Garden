DROP TABLE IF EXISTS gardens_vegetables CASCADE;

CREATE TABLE gardens_vegetables (
    id SERIAL PRIMARY KEY,
    garden_id INTEGER REFERENCES gardens(id) ON DELETE CASCADE,
    vegetable_id INTEGER REFERENCES vegetables(id) ON DELETE CASCADE
);