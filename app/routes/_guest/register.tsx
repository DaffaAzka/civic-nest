import RegisterForm from "@/features/register/form";
import type { Route } from "./+types/register";
import { register } from "@/services/auth.service.server";
import { redirect } from "react-router";

export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();

  try {
    const response = await register(
      form.get("email")!.toString(),
      form.get("password")!.toString(),
      form.get("name")!.toString(),
      request,
    );

    const sessionCookie = response.headers.get("set-cookie");
    return redirect("/");
  } catch (error) {
    return { error: error };
  }
}

export default function Register() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <RegisterForm />
    </div>
  );
}
