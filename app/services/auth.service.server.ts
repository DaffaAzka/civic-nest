import { email } from "./../../node_modules/zod/src/v4/core/regexes";
import { auth } from "@/lib/auth.server";
import { AppError } from "@/lib/error.server";

export async function register(
  email: string,
  password: string,
  name: string,
  request: Request,
) {
  const result = await auth.api.signUpEmail({
    body: {
      name: name,
      email: email,
      password: password,
    },
    headers: request.headers,
    asResponse: true,
  });

  if (!result.ok) {
    const body = await result.json();
    throw new AppError(body?.message ?? "Registration failed", 400);
  }

  return result;
}

export async function signIn(
  email: string,
  password: string,
  request: Request,
) {
  const result = await auth.api.signInEmail({
    body: {
      email: email,
      password: password,
    },
    headers: request.headers,
    asResponse: true,
  });

  if (!result.ok) {
    const body = await result.json();
    throw new AppError(body?.message ?? "Authentucation failed", 400);
  }

  return result;
}

export async function getSession(request: Request) {
  return auth.api.getSession({ headers: request.headers });
}
