SELECT e.nome Empresa, c.nome AS `Cidade`
FROM empresas e, empresas_unidades eu, cidades c
WHERE e.id = eu.empresa_id
-- Nao aparece nada
AND c.id = eu.cidade_id
AND sede