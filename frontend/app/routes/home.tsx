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
        <div className="px-6 py-16 mx-auto max-w-7xl lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-1.5 shadow-sm ring-1 ring-black/5">
                <span
                  className="text-[11px] font-semibold tracking-[0.16em] uppercase"
                  style={{ color: "#e9762b" }}
                >
                  Telehealth Service
                </span>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#19b4bc" }} />
                <span className="text-[11px] font-medium text-slate-600 uppercase tracking-[0.16em]">
                  LENA Leaf
                </span>
              </div>

              <div className="space-y-5">
                <h1
                  className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.2rem] lg:leading-tight"
                  style={{ color: "#19b4bc" }}
                >
                  Natural telehealth support
                  <span className="block" style={{ color: "#e9762b" }}>
                    with LENA Leaf
                  </span>
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
                  LENA Leaf brings Lena Medical&apos;s telehealth expertise together with natural
                  and holistic health solutions. Designed for eligible patients who want safe,
                  convenient care without leaving home.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white rounded-full shadow-sm transition-transform duration-150 hover:scale-[1.02] cursor-pointer"
                  style={{ backgroundColor: "#19b4bc" }}
                >
                  Book a LENA Leaf consult
                </button>
                <button
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-full bg-white shadow-sm ring-1 ring-inset transition-colors duration-150 hover:bg-orange-50 cursor-pointer"
                  style={{
                    borderColor: "#e9762b",
                    color: "#e9762b",
                  }}
                >
                  Learn more about eligibility
                </button>
              </div>

              <div className="flex flex-wrap gap-6 text-xs text-slate-600 sm:text-[13px]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-teal-50" style={{ borderColor: "#19b4bc" }}>
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#19b4bc" }} />
                  </span>
                  <span>Bulk-billed for eligible patients</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-50">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#e9762b" }} />
                  </span>
                  <span>Secure, online consultations</span>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-50" style={{ backgroundColor: "#19b4bc55" }} />
              <div className="absolute -bottom-12 -left-16 h-52 w-52 rounded-full blur-3xl opacity-50" style={{ backgroundColor: "#e9762b55" }} />

              <div className="relative w-full max-w-md overflow-hidden rounded-[32px] bg-white shadow-xl ring-1 ring-black/5">
                <div className="aspect-[4/5] overflow-hidden">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    src="/lena-medical/home-hero.mp4"
                  />
                </div>
              </div>
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
