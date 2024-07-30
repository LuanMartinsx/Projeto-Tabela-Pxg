create table if not exists Monstros (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
)

create table if not exists Itens (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL, 
    preco INT NOT NULL, 
    PRIMARY KEY (id)
)

create table if not exists Hunt (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
)


create table if not exists Monstros_Itens(
    monstro_id INT UNSIGNED NOT NULL,
    item_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (monstro_id, item_id),
    FOREIGN KEY (monstro_id) REFERENCES Monstros (id),
    FOREIGN KEY (item_id) REFERENCES Itens (id)
);


create table if not exists Monstros_Hunts(
    monstro_id INT UNSIGNED NOT NULL,
    hunt_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (monstro_id, hunt_id)
    )

CREATE TABLE hunts_log (
  id SERIAL PRIMARY KEY,
  hunt_id INT NOT NULL,
  hunt_name VARCHAR(255) NOT NULL,
  total_lucro DECIMAL(10, 2) NOT NULL,
  data TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);    