CREATE TABLE parents(
    id SERIAL PRIMARY KEY,
    name TEXT,
    kills INT DEFAULT 0
    child_id INT FOREIGN KEY REFERENCES children(id)
    -- kills INT NOT NULL
);

CREATE TABLE children(
    id SERIAL PRIMARY KEY,
    name TEXT,
    title TEXT,
    parent_id INT,
    FOREIGN KEY (parent_id) REFERENCES parents(id)-- for one-to-many (many children to one parent)
);

--adding information
INSERT INTO parents (name) VALUES ('Anakin');

INSERT INTO children
    (name, title, parent_id)
VALUES
    ('Luke', 'New Hope', 1),
    ('Leia', 'Princess of Alderaan', 1);

--grab brand-new data
SELECT * FROM parents p INNER JOIN children c ON p.id = c.parent_id;
--SELECT * FROM parents INNER JOIN children ON parents.id = children.parent_id;






--many-to-many (many child to many parents )
-- CREATE TABLE child_parent(
--     child_id INT FOREIGN KEY REFERENCES children(id),
--     parent_id INT FOREIGN KEY REFERENCES parents(id)
-- );