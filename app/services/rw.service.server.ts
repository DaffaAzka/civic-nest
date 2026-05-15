import type { Distric, Province, Regency, Village } from "@/types/map.types";
import { fetchWithTimeout } from "@/utils/fetch.server";

const MAP_LOCATOR_URL: string = process.env.MAP_LOCATOR_URL ?? "";

export async function getProvinces() {
  return fetchWithTimeout<Province[]>(`${MAP_LOCATOR_URL}/provinces?limit=100`);
}

export async function getRegencies(provinceCode: string) {
  return fetchWithTimeout<Regency[]>(
    `${MAP_LOCATOR_URL}/regencies?provinceCode=${provinceCode}`,
  );
}

export async function getDistricts(regencyCode: string) {
  return fetchWithTimeout<Distric[]>(
    `${MAP_LOCATOR_URL}/districts?regencyCode=${regencyCode}`,
  );
}

export async function getVillages(districtCode: string) {
  return fetchWithTimeout<Village[]>(
    `${MAP_LOCATOR_URL}/villages?districtCode=${districtCode}`,
  );
}
