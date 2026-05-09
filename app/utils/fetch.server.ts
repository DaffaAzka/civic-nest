import { AppError } from "@/lib/error.server";

export async function fetchWithTimeout(url: string, timeout: number = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok)
      throw new AppError(`Request failed: ${res.status}`, res.status);
    return res.json();
  } finally {
    clearTimeout(id);
  }
}
