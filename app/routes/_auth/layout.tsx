import { requireAuth } from "@/middlewares/auth.server";
import { Outlet } from "react-router";

export const middleware = [requireAuth];

export default function AuthLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
