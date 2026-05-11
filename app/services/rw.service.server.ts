import type { Province } from "@/types/map.types";
import { fetchWithTimeout } from "@/utils/fetch.server";

const MAP_LOCATOR_URL: string = process.env.MAP_LOCATOR_URL ?? "";

export async function getProvinces() {
  return fetchWithTimeout<Province[]>(`${MAP_LOCATOR_URL}/provinces?limit=100`);
}
