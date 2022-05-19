SELECT * FROM estados

SELECT Sigla, nome as 'Nome do Estado' FROM estados
WHERE regioes = 'Sul'

SELECT 
    nome,
    regioes,
    populacao 
FROM 
    estados

WHERE
    populacao >= 10
ORDER BY
    populacao DESC