CREATE TABLE produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,   -- chave primária, gera valor automático
    nome VARCHAR(100) NOT NULL,          -- texto obrigatório, até 100 caracteres
    EAN INT(13) UNIQUE,           -- não pode haver dois iguais
    idade INT,
    data_cadastro DATE DEFAULT CURRENT_DATE  -- se não informar, usa a data de hoje
);

INSERT INTO clientes (nome, email, idade)
VALUES ('João Silva', 'joao@email.com', 28);

SELECT nome, email FROM clientes;

SELECT * FROM clientes;

SELECT * FROM clientes

WHERE idade >= 18;

SELECT * FROM clientes

ORDER BY nome ASC;

SELECT * FROM clientes

LIMIT 10;

UPDATE clientes
SET idade = 29
WHERE id = 1;
DELETE FROM clientes
WHERE id = 1;
-- ===========================================
SELECT COUNT(*) FROM clientes;
SELECT AVG(idade) FROM clientes;
SELECT MAX(idade) FROM clientes;
SELECT MIN(idade) FROM clientes;
SELECT SUM(idade) FROM clientes;
SELECT idade, COUNT(*) 
FROM clientes
GROUP BY idade;

SELECT clientes.nome, pedidos.produto
FROM clientes
JOIN pedidos ON clientes.id = pedidos.cliente_id;