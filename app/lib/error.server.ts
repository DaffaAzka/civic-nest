export class AppError extends Error {
  constructor(
    public message: string,
    public status: number = 400,
  ) {
    super(message);
  }
}

export function toFormError(error: unknown): string {
  if (error instanceof AppError) return error.message;
  return "Something went wrong. Please try again.";
}
