INSERT INTO
    users (id, name, password, email)
VALUES
    (
        9361,
        'Ketlin P. Nunes',
        'ket123',
        'kpecharka@gmail.com'
    );

INSERT INTO tasks (
    id,
    title,
    description,
    due_at,
    created_at,
    completed_at,
    deleted_at,
    user_id
) VALUES (
    1,
    'Primeira task',
    'Essa e a primeira task do meu site, e eu estou muuuito feliz :) <3',
    '2025-01-20T10:10',
    '2025-01-01T10:10',
    NULL,
    NULL,
    9361
);