import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./routes/_guest/layout.tsx", [
    index("routes/home.tsx"),
    route("/register", "./routes/_guest/register.tsx"),
    route("/sign-in", "./routes/_guest/sign-in.tsx"),
  ]),

  layout("./routes/_auth/layout.tsx", [
    route("/dashboard", "./routes/_auth/dashboard.tsx"),
    route("/residents", "./routes/_auth/_residents/residents.tsx"),
    route("/residents/:id", "./routes/_auth/_residents/residents.$id.tsx"),
  ]),
] satisfies RouteConfig;
