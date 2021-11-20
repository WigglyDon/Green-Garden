DROP TABLE IF EXISTS notifications CASCADE;

CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    garden_id INTEGER REFERENCES gardens(id) ON DELETE CASCADE,
    day VARCHAR(255),
    time TIME,
    body VARCHAR(255)
);
