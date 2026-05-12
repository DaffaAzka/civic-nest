import type { Route } from "./+types";
import { useLoaderData } from "react-router";
import ModalCreate from "@/features/master/rw/modal-create";
import { getProvinces, getRegencies } from "@/services/rw.service.server";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const provinceCode = url.searchParams.get("provinceCode");

  if (provinceCode) {
    const regencies = await getRegencies(provinceCode);
    return { regencies, provinces: null };
  }

  const provinces = await getProvinces();
  return { provinces, regencies: null };
}

export default function RwPage() {
  const { provinces } = useLoaderData<typeof loader>();

  return <ModalCreate provinces={provinces ?? []} />;
}
