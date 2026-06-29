import type { SessionOptions } from "iron-session";

export type AdminSession = {
  isLoggedIn: boolean;
};

export const defaultAdminSession: AdminSession = {
  isLoggedIn: false,
};

export function getSessionOptions(): SessionOptions {
  const password = process.env.SESSION_SECRET;

  if (!password && process.env.NODE_ENV === "production") {
    throw new Error("SESSION_SECRET é obrigatório em produção.");
  }

  return {
    password: password ?? "development-only-secret-with-32-chars-min!!",
    cookieName: "njcell_admin_session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "lax",
      path: "/admin",
    },
  };
}

export function isAdminPasswordValid(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected) {
    return false;
  }

  if (password.length !== expected.length) {
    return false;
  }

  let mismatch = 0;
  for (let index = 0; index < password.length; index += 1) {
    mismatch |= password.charCodeAt(index) ^ expected.charCodeAt(index);
  }

  return mismatch === 0;
}
