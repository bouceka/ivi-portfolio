import { insertUser } from "@/app/_actions/userActions";
import { db, users } from "@/app/_db/schema";
import { hashPassword } from "@/app/_utils/auth";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();
        const [user] = await db.select().from(users).where(eq(users.name, username)).limit(1);
        if (user) return NextResponse.json(
            { message: "User already exists" },
            { status: 400 }
        );
        const hashedPassword = await hashPassword(password);
        const [storedUser] = await insertUser({ name: username, password: hashedPassword })
        if (!storedUser) return NextResponse.json(
            { message: "User did not saved" },
            { status: 500 }
        );
        return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "An Error occurred while saving a user" },
            { status: 500 });
    }
}