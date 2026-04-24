import {
  mysqlTable,
  varchar,
  text,
  int,
  mysqlEnum,
  datetime,
  index,
  bigint,
  uniqueIndex,
  boolean,
} from "drizzle-orm/mysql-core";

// 1. Batas Waktu
export const batas = mysqlTable("batas", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement().notNull(),
  buka: datetime("buka", { mode: "string" }).notNull(),
  tutup: datetime("tutup", { mode: "string" }).notNull(),
});

// 2. Users (ET Specific)
export const users = mysqlTable(
  "users",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement().notNull(),
    username: varchar("username", { length: 191 }).notNull(),
    password: varchar("password", { length: 191 }).notNull(),
    name: varchar("name", { length: 191 }).notNull(),
    group: varchar("group", { length: 191 }),
    role: varchar("role", { length: 191 }).notNull(),
    programme: varchar("programme", { length: 191 }),
    paket: mysqlEnum("paket", ["A", "B", "C"]),
    createdAt: datetime("created_at", { mode: "string" }),
    updatedAt: datetime("updated_at", { mode: "string" }),
  },
  (table) => ({
    usernameKey: uniqueIndex("users_username_unique").on(table.username),
  })
);

// 3. Questions
export const questions = mysqlTable("questions", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement().notNull(),
  question: text("question").notNull(),
  category: varchar("category", { length: 191 }).notNull(),
  paket: mysqlEnum("paket", ["A", "B", "C"]).notNull(),
  sesi: varchar("sesi", { length: 191 }),
});

// 4. Options
export const options = mysqlTable(
  "options",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement().notNull(),
    questionsId: bigint("questions_id", { mode: "number" })
      .notNull()
      .references(() => questions.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    optionText: text("option_text").notNull(),
    isCorrect: boolean("isCorrect").notNull(),
  },
  (table) => ({
    questionsIdx: index("options_questions_id_foreign").on(table.questionsId),
  })
);

// 5. Question Orders
export const questionOrders = mysqlTable(
  "question_orders",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement().notNull(),
    userId: bigint("user_id", { mode: "number" })
      .notNull()
      .references(() => users.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    questionId: bigint("question_id", { mode: "number" })
      .notNull()
      .references(() => questions.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    order: int("order").notNull(),
    createdAt: datetime("created_at", { mode: "string" }),
    updatedAt: datetime("updated_at", { mode: "string" }),
  },
  (table) => ({
    userIdx: index("question_orders_user_id_foreign").on(table.userId),
    questionIdx: index("question_orders_question_id_foreign").on(
      table.questionId
    ),
  })
);

// 6. Quiz Access Configuration (Unified code for all users)
export const quizAccessConfig = mysqlTable(
  "quiz_access_config",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement().notNull(),
    code: varchar("code", { length: 191 }).notNull(),
  },
  (table) => ({
    codeKey: uniqueIndex("quiz_access_config_code_unique").on(table.code),
  })
);

// 7. User Access (Tracks if a user has unlocked the quiz)
export const userAccess = mysqlTable(
  "user_access",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement().notNull(),
    usersId: bigint("users_id", { mode: "number" })
      .notNull()
      .references(() => users.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    createdAt: datetime("created_at", { mode: "string" }),
    updatedAt: datetime("updated_at", { mode: "string" }),
  },
  (table) => ({
    usersIdx: index("user_access_users_id_foreign").on(table.usersId),
  })
);

// 8. Question Flags (Max 3 per user)
export const questionFlags = mysqlTable(
  "question_flags",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement().notNull(),
    usersId: bigint("users_id", { mode: "number" })
      .notNull()
      .references(() => users.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    questionId: bigint("question_id", { mode: "number" })
      .notNull()
      .references(() => questions.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    createdAt: datetime("created_at", { mode: "string" }),
  },
  (table) => ({
    usersIdx: index("question_flags_users_id_foreign").on(table.usersId),
    questionIdx: index("question_flags_question_id_foreign").on(
      table.questionId
    ),
  })
);

// 9. User Answers
export const userAnswers = mysqlTable(
  "user_answers",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement().notNull(),
    usersId: bigint("users_id", { mode: "number" })
      .notNull()
      .references(() => users.id),
    questionId: bigint("question_id", { mode: "number" })
      .notNull()
      .references(() => questions.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    optionsId: bigint("options_id", { mode: "number" })
      .notNull()
      .references(() => options.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    userName: varchar("user_name", { length: 191 }).notNull(),
    userGroup: int("user_group").notNull(),
    userSelectedName: varchar("user_selected_name", { length: 191 })
      .default("")
      .notNull(),
    userSelectedGroup: int("user_selected_group").default(0).notNull(),
    userSelectedNrp: varchar("user_selected_nrp", { length: 191 })
      .default("")
      .notNull(),
    questionCategory: varchar("question_category", { length: 191 }).notNull(),
  },
  (table) => ({
    usersIdx: index("user_answers_users_id_foreign").on(table.usersId),
    questionIdx: index("user_answers_question_id_foreign").on(table.questionId),
    optionsIdx: index("user_answers_options_id_foreign").on(table.optionsId),
  })
);
