-- Script para agregar secuencias y habilitar auto-increment en las tablas

-- Para la tabla comments
CREATE SEQUENCE IF NOT EXISTS comments_id_seq;
ALTER TABLE "comments" ALTER COLUMN id SET DEFAULT nextval('comments_id_seq');
ALTER SEQUENCE comments_id_seq OWNED BY comments.id;

-- Para la tabla likes
CREATE SEQUENCE IF NOT EXISTS likes_id_seq;
ALTER TABLE "likes" ALTER COLUMN id SET DEFAULT nextval('likes_id_seq');
ALTER SEQUENCE likes_id_seq OWNED BY likes.id;

-- Habilitar auto-increment
SELECT setval('comments_id_seq', COALESCE((SELECT MAX(id) FROM comments), 0) + 1, false);
SELECT setval('likes_id_seq', COALESCE((SELECT MAX(id) FROM likes), 0) + 1, false);

