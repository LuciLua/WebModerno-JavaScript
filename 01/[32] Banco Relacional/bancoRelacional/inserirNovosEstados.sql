INSERT INTO 
    estados (id, nome, sigla, regioes, populacao)
VALUES
    (1000, 'Novo', 'NV', 'Sul', 2.54)


SELECT * FROM estados

-- usa id automaticamente por causa do auto increment 
INSERT INTO estados 
    (nome, sigla, regioes, populacao)
VALUES  
    ('Mais Novo', 'MN', 'Norte', 2.51)

SELECT * FROM estados