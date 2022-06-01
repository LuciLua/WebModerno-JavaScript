INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Neves', 11),
    ('Raquel Lyra', 5),
    ('Zenaldo Coutinho', null);

SELECT * FROM cidades;

SELECT * FROM prefeitos;

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rafael Greca', null)


-- nao poder duplicar chave estrangeira
-- esse n da, pq n pode ter mais de 1 pref p cidade
INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Pinheiro', 3)