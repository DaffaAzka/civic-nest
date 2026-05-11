import { AppError } from "@/lib/error.server";

type ApiResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
};

export async function fetchWithTimeout<T>(
  url: string,
  timeout: number = 5000,
): Promise<T> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, { signal: controller.signal });

    if (!res.ok) {
      throw new AppError(`Request failed: ${res.status}`, res.status);
    }

    const json: ApiResponse<T> = await res.json();

    return json.data;
  } finally {
    clearTimeout(id);
  }
}
