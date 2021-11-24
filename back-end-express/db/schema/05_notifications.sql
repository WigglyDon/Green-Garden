DROP TABLE IF EXISTS notifications CASCADE;

CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    garden_id INTEGER REFERENCES gardens(id) ON DELETE CASCADE,
    day INTEGER ARRAY,
    hour INTEGER,
    minute INTEGER,
    body VARCHAR(255)
);




