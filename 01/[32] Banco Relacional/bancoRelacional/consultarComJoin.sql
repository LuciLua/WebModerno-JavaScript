-- todas as linhas da tabela estado estarão 
-- relacionadas com todas as linhas da tabela cidades

SELECT * FROM estados e, cidades c
WHERE e.id = c.estado_id;

SELECT e.nome AS Estado,
       c.nome AS Cidade,
       e.regioes AS Regiao
FROM estados e, cidades c
WHERE e.id = c.estado_id;

SELECT 
    c.nome AS Cidade,
    e.nome AS Estado,
    regioes AS Região
FROM estados e
INNER JOIN cidades c ON e.id = c.estado_id
