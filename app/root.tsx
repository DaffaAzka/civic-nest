import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
  useRouteError,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { TooltipProvider } from "./components/ui/tooltip";
import { AlertTriangle, ArrowLeft, Frown, RefreshCw } from "lucide-react";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <TooltipProvider>{children}</TooltipProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="flex flex-col justify-center items-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-destructive">
            {error.status} {error.statusText}
          </p>
          <h2 className="mb-2 text-xl font-medium">Service unavailable</h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {error.data ??
              "The server couldn't be reached. This is usually temporary."}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm hover:bg-muted">
            <RefreshCw className="h-4 w-4" />
            Try again
          </button>
        </div>
      </div>
    );
  }

  const message =
    error instanceof Error ? error.message : "An unexpected error occurred.";

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="flex flex-col justify-center items-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-warning/10">
          <Frown className="h-6 w-6 text-warning" />
        </div>
        <p className="mb-1 text-xs font-medium uppercase tracking-widest text-warning">
          Unexpected error
        </p>
        <h2 className="mb-2 text-xl font-medium">Something went wrong</h2>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          {message}
        </p>
        <div className="flex justify-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm hover:bg-muted">
            <ArrowLeft className="h-4 w-4" />
            Go back
          </button>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm hover:bg-muted">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}