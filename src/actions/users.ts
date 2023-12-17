'use server';
import { db } from "@/libs/drizzle";
import { users } from "@/libs/drizzle/schema";

export const createUser = async (name: string, email: string) => {
    await db.insert(users).values({
        name,
        email,
    })
}
