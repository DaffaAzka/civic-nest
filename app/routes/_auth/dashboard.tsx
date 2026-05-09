import type { Route } from "./+types/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "An residence app!" },
  ];
}

export default function Dashboard() {
  return (
    <>
      <h1>Testing Dashboard Auth</h1>
    </>
  );
}
