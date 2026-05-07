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
  ]),
] satisfies RouteConfig;
