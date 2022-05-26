-- Só cria tabela se nao existir outra com o mesmo nome, evita erro
CREATE TABLE IF NOT EXISTS cidades (
    -- UNSIGNED: Sem sinal
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id INT UNSIGNED NOT NULL,
    -- decimal de 10 digitos com 2 pontos flutuantes
    area DECIMAL(10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados (id)
);



CREATE TABLE IF NOT EXISTS teste (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

-- So faz sentido dropar uma tabela que existe (dropar => excluir)
DROP TABLE IF EXISTS teste;

