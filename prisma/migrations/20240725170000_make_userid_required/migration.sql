/*
  Warnings:

  - Made the column `userId` on table `huntlog` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `huntlog` DROP FOREIGN KEY `HuntLog_userId_fkey`;

-- AlterTable
ALTER TABLE `huntlog` MODIFY `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `HuntLog` ADD CONSTRAINT `HuntLog_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
