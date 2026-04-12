CREATE TABLE `batas` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`buka` datetime NOT NULL,
	`tutup` datetime NOT NULL,
	CONSTRAINT `batas_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `options` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`questions_id` bigint NOT NULL,
	`option_text` text NOT NULL,
	`isCorrect` boolean NOT NULL,
	CONSTRAINT `options_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `qrcodes` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`code` varchar(191) NOT NULL,
	`gedung` varchar(191) NOT NULL,
	CONSTRAINT `qrcodes_id` PRIMARY KEY(`id`),
	CONSTRAINT `qrcodes_code_unique` UNIQUE(`code`),
	CONSTRAINT `qrcodes_gedung_unique` UNIQUE(`gedung`)
);
--> statement-breakpoint
CREATE TABLE `question_orders` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`user_id` bigint NOT NULL,
	`question_id` bigint NOT NULL,
	`order` int NOT NULL,
	`created_at` timestamp,
	`updated_at` timestamp,
	CONSTRAINT `question_orders_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `questions` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`question` text NOT NULL,
	`category` varchar(191) NOT NULL,
	`paket` enum('A','B','C') NOT NULL,
	`sesi` varchar(191),
	CONSTRAINT `questions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `scanned_qrcodes` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`qrcodes_id` bigint NOT NULL,
	`users_id` bigint NOT NULL,
	`created_at` timestamp,
	`updated_at` timestamp,
	CONSTRAINT `scanned_qrcodes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_answers` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`users_id` bigint NOT NULL,
	`question_id` bigint NOT NULL,
	`options_id` bigint NOT NULL,
	`user_name` varchar(191) NOT NULL,
	`user_group` int NOT NULL,
	`user_selected_name` varchar(191) NOT NULL DEFAULT '',
	`user_selected_group` int NOT NULL DEFAULT 0,
	`user_selected_nrp` varchar(191) NOT NULL DEFAULT '',
	`question_category` varchar(191) NOT NULL,
	CONSTRAINT `user_answers_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`username` varchar(191) NOT NULL,
	`password` varchar(191) NOT NULL,
	`name` varchar(191) NOT NULL,
	`group` varchar(191),
	`role` varchar(191) NOT NULL,
	`programme` varchar(191),
	`paket` enum('A','B','C'),
	`created_at` timestamp,
	`updated_at` timestamp,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_username_unique` UNIQUE(`username`)
);
--> statement-breakpoint
ALTER TABLE `options` ADD CONSTRAINT `options_questions_id_questions_id_fk` FOREIGN KEY (`questions_id`) REFERENCES `questions`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `question_orders` ADD CONSTRAINT `question_orders_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `question_orders` ADD CONSTRAINT `question_orders_question_id_questions_id_fk` FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `scanned_qrcodes` ADD CONSTRAINT `scanned_qrcodes_qrcodes_id_qrcodes_id_fk` FOREIGN KEY (`qrcodes_id`) REFERENCES `qrcodes`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `scanned_qrcodes` ADD CONSTRAINT `scanned_qrcodes_users_id_users_id_fk` FOREIGN KEY (`users_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `user_answers` ADD CONSTRAINT `user_answers_users_id_users_id_fk` FOREIGN KEY (`users_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user_answers` ADD CONSTRAINT `user_answers_question_id_questions_id_fk` FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `user_answers` ADD CONSTRAINT `user_answers_options_id_options_id_fk` FOREIGN KEY (`options_id`) REFERENCES `options`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
CREATE INDEX `options_questions_id_foreign` ON `options` (`questions_id`);--> statement-breakpoint
CREATE INDEX `question_orders_user_id_foreign` ON `question_orders` (`user_id`);--> statement-breakpoint
CREATE INDEX `question_orders_question_id_foreign` ON `question_orders` (`question_id`);--> statement-breakpoint
CREATE INDEX `scanned_qrcodes_qrcodes_id_foreign` ON `scanned_qrcodes` (`qrcodes_id`);--> statement-breakpoint
CREATE INDEX `scanned_qrcodes_users_id_foreign` ON `scanned_qrcodes` (`users_id`);--> statement-breakpoint
CREATE INDEX `user_answers_users_id_foreign` ON `user_answers` (`users_id`);--> statement-breakpoint
CREATE INDEX `user_answers_question_id_foreign` ON `user_answers` (`question_id`);--> statement-breakpoint
CREATE INDEX `user_answers_options_id_foreign` ON `user_answers` (`options_id`);