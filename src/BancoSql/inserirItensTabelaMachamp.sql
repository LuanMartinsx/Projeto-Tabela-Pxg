-- INSERINDO ITENS NA TABELA DE ITENS

INSERT INTO Itens(nome, preco)
VALUES('Corruted Champion Belt', 4500)

INSERT INTO Itens(nome, preco)
VALUES('Injections', 50)

INSERT INTO Itens(nome, preco)
VALUES('Champion Belt', 1000)

INSERT INTO Itens(nome, preco)
VALUES('Shard', 150000)

INSERT INTO Itens(nome, preco)
VALUES('Punch Stone', 5000)

INSERT INTO Itens(nome, preco)
VALUES('Cyan Gem', 3000)

INSERT INTO Itens(nome, preco)
VALUES('Black Gem', 2000000)

INSERT INTO Itens(nome, preco)
VALUES('Compressed Gem', 21600)

INSERT INTO Itens(nome, preco)
VALUES('Nightmare Stone', 5000)

INSERT INTO Itens(nome, preco)
VALUES('Black Wool Ball', 3500)


-- INSERINDO MONSTROS NA TABELA DE MONSTROS

INSERT INTO Monstro(nome)
VALUES('Machamp')
INSERT INTO Monstro(nome)
VALUES('Persian')
INSERT INTO Monstro(nome)
VALUES('Gallade')
INSERT INTO Monstro(nome)
VALUES('Dragonite')
INSERT INTO Monstro(nome)
VALUES('Garchomp')

-- INSERINDO AS HUNTS NA TABELA DE HUNTS

INSERT INTO Hunt(nome)
VALUES('Machamp')
INSERT INTO Hunt(nome)
VALUES('Persian')
INSERT INTO Hunt(nome)
VALUES('Gallade')
INSERT INTO Hunt(nome)
VALUES('Mixed Dragon')


-- FAZENDO A RELAÇÃO ITENS COM MONSTRO


INSERT INTO Monstros_Itens(monstro_id, item_id)
VALUES 
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(1,6),
(1,7),
(1,8),
(1,9)

INSERT INTO Monstros_Itens(monstro_id, item_id)
VALUES (3,2)

INSERT INTO Monstros_Itens(monstro_id, item_id)
VALUES (2,10)


-- FAZENDO A RELAÇÃO DE MONSTROS COM AS HUNTS

INSERT INTO Monstros_Hunts(monstro_id,hunt_id)
VALUES(1,1),
(2,2),
(3,3),
(4,4),
(5,4)
