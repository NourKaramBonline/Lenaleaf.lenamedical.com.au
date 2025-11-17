import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lena Leaf | Lena Medical" },
    {
      name: "description",
      content:
        "Lena Leaf is Lena Medical's dedicated telehealth service, providing accessible, patient-centred care through secure online consultations.",
    },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="home-hero bg-gray-100">
        <div className="px-6 py-16 mx-auto max-w-7xl lg:py-24 grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: "#e9762b" }}>
              Lena Medical
            </p>
            <h1
              className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: "#19b4bc" }}
            >
              LENA Leaf
            </h1>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              LENA Leaf is a dedicated service from Lena Medical, designed to make high-quality
              telehealth more accessible, convenient, and patient-centred. Connect with
              qualified clinicians online, from the comfort of your home.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white rounded-full transition-colors"
                style={{ backgroundColor: "#19b4bc" }}
              >
                Book a LENA Leaf consult
              </button>
              <button
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border rounded-full transition-colors"
                style={{
                  borderColor: "#19b4bc",
                  color: "#19b4bc",
                }}
              >
                Learn more
              </button>
            </div>
            <p className="text-xs text-slate-500">
              * Final copy, colours, and animations will be aligned exactly with the main Lena
              Medical site.
            </p>
          </div>

          <div
            className="relative h-64 overflow-hidden rounded-3xl lg:h-80"
            style={{
              background: "linear-gradient(135deg, #19b4bc1a, #e9762b1a)",
            }}
          >
            <div className="absolute inset-0" aria-hidden="true">
              <div
                className="absolute w-40 h-40 rounded-full blur-3xl opacity-60 -top-10 -left-6"
                style={{ backgroundColor: "#19b4bc" }}
              />
              <div
                className="absolute w-52 h-52 rounded-full blur-3xl opacity-50 -bottom-10 -right-10"
                style={{ backgroundColor: "#e9762b" }}
              />
            </div>
            <div className="relative flex items-center justify-center h-full px-6">
              <p className="text-sm font-medium leading-relaxed text-center text-emerald-900 sm:text-base">
                This area will be replaced with the official Lena Leaf artwork, logo and
                illustration, matching the main site design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-lena-leaf px-6 pb-16 mx-auto max-w-7xl space-y-10">
        <div className="space-y-4">
          <h2
            className="text-2xl font-semibold tracking-tight"
            style={{ color: "#e9762b" }}
          >
            Why LENA Leaf?
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            This new subdomain focuses exclusively on LENA Leaf, giving patients a clear,
            streamlined way to understand the service, explore eligibility, and book online
            appointments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="p-5 border rounded-2xl border-slate-100 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold" style={{ color: "#19b4bc" }}>
              Telehealth-first experience
            </h3>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              Crafted for online consultations from the ground up, with clear pathways for
              booking and follow-up.
            </p>
          </article>
          <article className="p-5 border rounded-2xl border-slate-100 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold" style={{ color: "#19b4bc" }}>
              Integrated with Lena Medical
            </h3>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              Built as an extension of the main Lena Medical site while focusing solely on
              Lena Leaf services.
            </p>
          </article>
          <article className="p-5 border rounded-2xl border-slate-100 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold" style={{ color: "#19b4bc" }}>
              Future-ready design
            </h3>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              Structured to reuse logos, colours, fonts, and animations from the existing Next.js
              implementation without depending on Next-specific APIs.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
