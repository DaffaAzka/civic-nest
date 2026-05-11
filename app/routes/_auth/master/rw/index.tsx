import type { Route } from "./+types";
import { useLoaderData } from "react-router";
import ModalCreate from "@/features/master/rw/modal-create";

export async function loader({ request }: Route.LoaderArgs) {
  const { getProvinces } = await import("@/services/rw.service.server");

  const provinces = await getProvinces();

  return { provinces };
}

export default function RwPage() {
  const { provinces } = useLoaderData<typeof loader>();

  return <ModalCreate provinces={provinces} />;
}
