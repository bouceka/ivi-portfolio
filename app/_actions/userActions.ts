import { NewUser, User, db, users } from "../_db/schema";

export const getUsers: User[] = await db.select().from(users);

export const insertUser = async (user: NewUser): Promise<User[]> => {
    return db.insert(users).values(user).returning();
  };
  