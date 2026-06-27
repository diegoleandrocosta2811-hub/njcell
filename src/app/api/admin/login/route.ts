import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import {
  getSessionOptions,
  isAdminPasswordValid,
  type AdminSession,
} from "@/lib/admin/session";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { password?: string };
    const password = body.password ?? "";

    if (!process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "ADMIN_PASSWORD não configurada no servidor." },
        { status: 500 },
      );
    }

    if (!isAdminPasswordValid(password)) {
      return NextResponse.json({ error: "Senha incorreta." }, { status: 401 });
    }

    const session = await getIronSession<AdminSession>(
      await cookies(),
      getSessionOptions(),
    );
    session.isLoggedIn = true;
    await session.save();

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro ao autenticar.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE() {
  const session = await getIronSession<AdminSession>(
    await cookies(),
    getSessionOptions(),
  );
  session.isLoggedIn = false;
  await session.save();

  return NextResponse.json({ ok: true });
}
