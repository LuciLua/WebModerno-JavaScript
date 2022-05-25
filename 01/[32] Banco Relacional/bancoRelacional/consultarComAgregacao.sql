SELECT 
    regioes AS 'Região',
    -- sum de somar
    sum(populacao) AS Total
FROM estados
GROUP BY regioes
ORDER BY Total DESC

-- Consultar total de populacao de todos os estados
SELECT 
    sum(populacao) AS Total
FROM estados


SELECT 
    -- avg é media, media de x habitantes por estado
    avg(populacao) AS Total
FROM estados