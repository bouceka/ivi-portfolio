import { pgEnum, pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core';
import { InferModel, eq, relations } from 'drizzle-orm';
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';


// Start - User

export const roleEnum = pgEnum('role', ['super-admin', 'admin', 'user']);

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  password: text('password').notNull(),
  role: roleEnum('role'),
},
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.name),
    }
  });

export const usersRelations = relations(users, ({ many }) => ({
  projects: many(projects),
}));

export type User = InferModel<typeof users>;
export type NewUser = InferModel<typeof users, 'insert'>;

export const insertUser = async (user: NewUser): Promise<User[]> => {
  return db.insert(users).values(user).returning();
};

// export const getUser: User[] = await db.select().from(users);

// export const deleteUser = async (userId: string): Promise<User[]> => {
//   return db.delete(users).where(eq(users.id, userId)).returning();
// };

// End - User


// Start - Project

export const projects = pgTable('projects', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: text('slug').notNull(),
  title: text('title').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  excerpt: text('excerpt').notNull(),
  featuredImageUrl: text('featuredImageUrl').notNull(),
  markdown: text('markdown').notNull(),
  categories: text('categories').notNull(),
  userId: uuid('user_id').notNull().references(() => users.id),
});

export const projectsRelationsUser = relations(projects, ({ one }) => ({
  author: one(users, {
    fields: [projects.userId],
    references: [users.id],
  }),
}));

// export const projectsRelations = relations(projects, ({ many }) => ({
// 	categories: many(categories),
// }));

export type Project = InferModel<typeof projects>;
export type NewProject = InferModel<typeof projects, 'insert'>;


// export const deleteProject = async (userId: string): Promise<Project[]> => {
//   return db.delete(projects).where(eq(projects.id, userId)).returning();
// };

// End - Project


// Start - Category


// export const categories = pgTable('categories', {
//   id: uuid('id').defaultRandom().primaryKey(),
//   category: text('category').notNull(),
//   projectId: uuid('id').notNull().references(() => projects.id),
// });

// export const categoriesRelations = relations(categories, ({ one }) => ({
// 	author: one(projects, {
// 		fields: [categories.projectId],
// 		references: [projects.id],
// 	}),
// }));

// export type Category = InferModel<typeof categories>;
// export type NewCategory = InferModel<typeof categories, 'insert'>;


// export const insertCategory= async (user: NewCategory): Promise<Category[]> => {
//   return db.insert(categories).values(user).returning();
// };

// export const deleteCategory = async (userId: string): Promise<Category[]> => {
//   return db.delete(categories).where(eq(categories.id, userId)).returning();
// };
// Category

export const db = drizzle(sql);
