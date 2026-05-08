import { createContext, redirect } from "react-router";
import type { Route } from "../+types/root";
import { getSession } from "@/services/auth.service.server";

export const userContext = createContext<{ id: string; email: string } | null>(
  null,
);

export const requireGuest: Route.MiddlewareFunction = async ({
  request,
  context,
}) => {
  const session = await getSession(request);
  if (session?.user) throw redirect("/dashboard");
};

export const requireAuth: Route.MiddlewareFunction = async ({
  request,
  context,
}) => {
  const session = await getSession(request);
  if (!session?.user) throw redirect("/sign-in");
  context.set(userContext, session.user);
};
