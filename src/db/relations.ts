import { relations } from "drizzle-orm/relations";
import {
  users,
  questions,
  options,
  questionOrders,
  qrcodes,
  scannedQrcodes,
  userAnswers,
} from "./schema";

export const usersRelations = relations(users, ({ many }) => ({
  questionOrders: many(questionOrders),
  scannedQrcodes: many(scannedQrcodes),
  userAnswers: many(userAnswers),
}));

export const questionsRelations = relations(questions, ({ many }) => ({
  options: many(options),
  questionOrders: many(questionOrders),
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

export const qrcodesRelations = relations(qrcodes, ({ many }) => ({
  scannedQrcodes: many(scannedQrcodes),
}));

export const scannedQrcodesRelations = relations(scannedQrcodes, ({ one }) => ({
  qrcode: one(qrcodes, {
    fields: [scannedQrcodes.qrcodesId],
    references: [qrcodes.id],
  }),
  user: one(users, {
    fields: [scannedQrcodes.usersId],
    references: [users.id],
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
