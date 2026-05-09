import type { Route } from "./+types/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "An residence app!" },
  ];
}

export const handle = {
  pageTitle: "Dashboard",
};

export default function DashboardPage() {
  return (
    <>
      <h1>Testing Dashboard Auth</h1>
    </>
  );
}
