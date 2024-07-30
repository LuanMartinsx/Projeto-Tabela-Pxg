/*
  Warnings:

  - You are about to drop the column `data` on the `hunt` table. All the data in the column will be lost.
  - You are about to drop the column `hunt_id` on the `hunt` table. All the data in the column will be lost.
  - You are about to drop the column `hunt_name` on the `hunt` table. All the data in the column will be lost.
  - You are about to drop the column `total_lucro` on the `hunt` table. All the data in the column will be lost.
  - Added the required column `nome` to the `Hunt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `hunt` DROP COLUMN `data`,
    DROP COLUMN `hunt_id`,
    DROP COLUMN `hunt_name`,
    DROP COLUMN `total_lucro`,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Monstro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `preco` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MonstroItem` (
    `monstro_id` INTEGER NOT NULL,
    `item_id` INTEGER NOT NULL,

    PRIMARY KEY (`monstro_id`, `item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MonstroHunt` (
    `monstro_id` INTEGER NOT NULL,
    `hunt_id` INTEGER NOT NULL,

    PRIMARY KEY (`monstro_id`, `hunt_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HuntLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hunt_id` INTEGER NOT NULL,
    `hunt_name` VARCHAR(191) NOT NULL,
    `total_lucro` DOUBLE NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MonstroItem` ADD CONSTRAINT `MonstroItem_monstro_id_fkey` FOREIGN KEY (`monstro_id`) REFERENCES `Monstro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MonstroItem` ADD CONSTRAINT `MonstroItem_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MonstroHunt` ADD CONSTRAINT `MonstroHunt_monstro_id_fkey` FOREIGN KEY (`monstro_id`) REFERENCES `Monstro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MonstroHunt` ADD CONSTRAINT `MonstroHunt_hunt_id_fkey` FOREIGN KEY (`hunt_id`) REFERENCES `Hunt`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
