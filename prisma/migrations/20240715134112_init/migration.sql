-- CreateTable
CREATE TABLE `Hunt` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hunt_id` INTEGER NOT NULL,
    `hunt_name` VARCHAR(191) NOT NULL,
    `total_lucro` INTEGER NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
