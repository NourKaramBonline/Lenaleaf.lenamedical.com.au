import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

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
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
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
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/icon/logo-transparent.png"
              alt="LENA Leaf logo"
              className="h-10 w-auto object-contain md:h-12 transform scale-150"
            />
          </a>

          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-3 text-[15px] font-medium md:flex">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative px-4 py-2 text-[15px] text-[rgb(12,122,136)] transition-colors duration-150 hover:text-[color:#19b4bc]"
                >
                  <span className="relative z-10 inline-block transition-transform duration-150 group-hover:-translate-y-0.5">
                    {link.label}
                  </span>
                  <span
                    className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-[2px] origin-center scale-x-0 rounded-full bg-[color:#19b4bc] transition-transform duration-200 ease-out group-hover:scale-x-100"
                  />
                </a>
              ))}
            </div>

            <a
              href="https://lenamedical.com.au/appointments/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform duration-150 hover:scale-[1.02]"
              style={{ backgroundColor: "#e9762b" }}
            >
              Book Appointment
            </a>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="border-t border-slate-100 bg-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src="/icon/logo-transparent.png"
                alt="LENA Leaf logo"
                className="h-14 w-auto object-contain md:h-16"
              />
              
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              LENA Leaf is a dedicated telehealth service by Lena Medical, helping eligible
              patients access natural and holistic health support online.
            </p>
          </div>

          <div className="grid flex-1 gap-8 text-sm text-[rgb(12,122,136)] sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-xs font-semibold tracking-[0.16em] uppercase" style={{ color: "#e97625" }}>
                Site
              </h3>
              <ul className="space-y-1.5">
                <li>
                  <a href="/" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="footer-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="footer-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold tracking-[0.16em] uppercase" style={{ color: "#e97625" }}>
                Lena Medical
              </h3>
              <ul className="space-y-1.5">
                <li>
                  <a
                    href="https://lenamedical.com.au/"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                  >
                    Main website
                  </a>
                </li>
                <li>
                  <a
                    href="https://lenamedical.com.au/appointments/"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                  >
                    Book appointment
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold tracking-[0.16em] uppercase" style={{ color: "#e97625" }}>
                Support
              </h3>
              <ul className="space-y-1.5 text-xs">
                <li>Available Australia-wide via telehealth.</li>
                <li>Always follow medical advice from your clinician.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 bg-slate-100">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 text-[11px] text-[rgb(12,122,136)] sm:flex-row">
            <span>
              © {new Date().getFullYear()} Lena Medical. All rights reserved.
            </span>
            <span className="flex gap-4">
              <a
                href="https://lenamedical.com.au/privacy-policy/"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Privacy
              </a>
              <a
                href="https://lenamedical.com.au/terms-and-conditions/"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Terms
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
