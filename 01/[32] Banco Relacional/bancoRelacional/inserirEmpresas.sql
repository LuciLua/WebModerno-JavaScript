ALTER TABLE empresas MODIFY cnpj VARCHAR(14)

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 12345678911111),
    ('Vale', 12345678911112),
    ('Cielo', 12345678911113);


-- descricao de cada campo da tabela
DESC empresas;
DESC prefeitos;

SELECT * FROM  empresas;
SELECT * FROM  cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);