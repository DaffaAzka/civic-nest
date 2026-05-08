import { requireGuest } from "@/middlewares/auth.server";
import { Outlet } from "react-router";

export const middleware = [requireGuest];

export default function GuestLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
