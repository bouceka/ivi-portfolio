import { eq } from "drizzle-orm";
import { NewUser, User, db, users } from "../_db/schema";

export const getUsers: User[] = await db.select().from(users);

export const insertUser = async (user: NewUser): Promise<User[]> => {
    return db.insert(users).values(user).returning();
  };

  export const getUser: User[] = await db.select().from(users);

export const deleteUser = async (userId: string): Promise<User[]> => {
  return db.delete(users).where(eq(users.id, userId)).returning();
};

  