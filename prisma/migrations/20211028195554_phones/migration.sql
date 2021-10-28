-- CreateTable
CREATE TABLE `phones` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `phones_id_key`(`id`),
    UNIQUE INDEX `phones_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
