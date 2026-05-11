import { Welcome } from "@/welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Civic Nest" },
    { name: "description", content: "An residence app!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
