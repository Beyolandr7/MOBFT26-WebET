import { relations } from "drizzle-orm/relations";
import {
  users,
  questions,
  options,
  questionOrders,
  quizAccessConfig,
  userAccess,
  questionFlags,
  userAnswers,
} from "./schema";

export const usersRelations = relations(users, ({ many }) => ({
  questionOrders: many(questionOrders),
  userAccess: many(userAccess),
  questionFlags: many(questionFlags),
  userAnswers: many(userAnswers),
}));

export const questionsRelations = relations(questions, ({ many }) => ({
  options: many(options),
  questionOrders: many(questionOrders),
  questionFlags: many(questionFlags),
  userAnswers: many(userAnswers),
}));

export const optionsRelations = relations(options, ({ one, many }) => ({
  question: one(questions, {
    fields: [options.questionsId],
    references: [questions.id],
  }),
  userAnswers: many(userAnswers),
}));

export const questionOrdersRelations = relations(questionOrders, ({ one }) => ({
  user: one(users, {
    fields: [questionOrders.userId],
    references: [users.id],
  }),
  question: one(questions, {
    fields: [questionOrders.questionId],
    references: [questions.id],
  }),
}));

export const quizAccessConfigRelations = relations(
  quizAccessConfig,
  () => ({})
);

export const userAccessRelations = relations(userAccess, ({ one }) => ({
  user: one(users, {
    fields: [userAccess.usersId],
    references: [users.id],
  }),
}));

export const questionFlagsRelations = relations(questionFlags, ({ one }) => ({
  user: one(users, {
    fields: [questionFlags.usersId],
    references: [users.id],
  }),
  question: one(questions, {
    fields: [questionFlags.questionId],
    references: [questions.id],
  }),
}));

export const userAnswersRelations = relations(userAnswers, ({ one }) => ({
  user: one(users, {
    fields: [userAnswers.usersId],
    references: [users.id],
  }),
  question: one(questions, {
    fields: [userAnswers.questionId],
    references: [questions.id],
  }),
  option: one(options, {
    fields: [userAnswers.optionsId],
    references: [options.id],
  }),
}));
