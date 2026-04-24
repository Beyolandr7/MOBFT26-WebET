CREATE TABLE `question_flags` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`users_id` bigint NOT NULL,
	`question_id` bigint NOT NULL,
	`created_at` datetime,
	CONSTRAINT `question_flags_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `quiz_access_config` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`code` varchar(191) NOT NULL,
	CONSTRAINT `quiz_access_config_id` PRIMARY KEY(`id`),
	CONSTRAINT `quiz_access_config_code_unique` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `user_access` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`users_id` bigint NOT NULL,
	`created_at` datetime,
	`updated_at` datetime,
	CONSTRAINT `user_access_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
DROP TABLE `qrcodes`;--> statement-breakpoint
DROP TABLE `scanned_qrcodes`;--> statement-breakpoint
ALTER TABLE `question_orders` MODIFY COLUMN `created_at` datetime;--> statement-breakpoint
ALTER TABLE `question_orders` MODIFY COLUMN `updated_at` datetime;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `created_at` datetime;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `updated_at` datetime;--> statement-breakpoint
ALTER TABLE `question_flags` ADD CONSTRAINT `question_flags_users_id_users_id_fk` FOREIGN KEY (`users_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `question_flags` ADD CONSTRAINT `question_flags_question_id_questions_id_fk` FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `user_access` ADD CONSTRAINT `user_access_users_id_users_id_fk` FOREIGN KEY (`users_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
CREATE INDEX `question_flags_users_id_foreign` ON `question_flags` (`users_id`);--> statement-breakpoint
CREATE INDEX `question_flags_question_id_foreign` ON `question_flags` (`question_id`);--> statement-breakpoint
CREATE INDEX `user_access_users_id_foreign` ON `user_access` (`users_id`);