import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact LENA Leaf | Lena Medical" },
    {
      name: "description",
      content:
        "Get in touch with the LENA Leaf telehealth team for questions about eligibility, appointments, or support.",
    },
  ];
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="px-6 pt-10 pb-12 mx-auto max-w-7xl lg:pt-14 lg:pb-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
              Contact
              <span className="ml-1" style={{ color: "#e9762b" }}>
                LENA Leaf
              </span>
            </p>

            <h1
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
              style={{ color: "#19b4bc" }}
            >
              Were here to help
            </h1>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Have questions about eligibility, appointments or how LENA Leaf alternative medicine
              might support you? Send us a message and our team will be in touch.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 text-sm text-slate-700">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-slate-500 mb-1">
                  General enquiries
                </p>
                <p className="font-medium text-[rgb(12,122,136)]">Lena Medical reception</p>
                <p className="mt-1 text-xs sm:text-[13px] text-slate-600">
                  For questions about bookings, telehealth or clinic information.
                </p>
                <div className="mt-3 space-y-1 text-xs sm:text-[13px]">
                  <p>
                    Email: {" "}
                    <a
                      href="mailto:reception@lenamedical.com.au"
                      className="text-[rgb(12,122,136)] underline-offset-2 hover:underline"
                    >
                      reception@lenamedical.com.au
                    </a>
                  </p>
                  <p>Phone: (03) 9999 9999</p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-slate-500 mb-1">
                  Appointments
                </p>
                <p className="font-medium text-[rgb(12,122,136)]">Book or manage consults</p>
                <p className="mt-1 text-xs sm:text-[13px] text-slate-600">
                  For new or existing patients looking to book a LENA Leaf telehealth consult.
                </p>
                <div className="mt-3">
                  <a
                    href="https://lenamedical.com.au/appointments/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs sm:text-[13px] font-semibold text-white shadow-sm transition-transform duration-150 hover:scale-[1.02]"
                    style={{ backgroundColor: "#e9762b" }}
                  >
                    Book appointment
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-40" style={{ backgroundColor: "#19b4bc55" }} />
            <div className="absolute -bottom-12 -left-16 h-52 w-52 rounded-full blur-3xl opacity-40" style={{ backgroundColor: "#e9762b55" }} />

            <div className="relative w-full rounded-3xl bg-white shadow-xl ring-1 ring-black/5 p-6 sm:p-7">
              <h2 className="text-lg font-semibold text-[rgb(12,122,136)]">Send us a message</h2>
              <p className="mt-1.5 text-xs sm:text-[13px] text-slate-600">
                Share a few details and well get back to you as soon as we can.
              </p>

              <form className="mt-5 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5 text-xs sm:text-[13px]">
                    <label className="block font-medium text-slate-700" htmlFor="name">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-xs sm:text-[13px] text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:#19b4bc] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1.5 text-xs sm:text-[13px]">
                    <label className="block font-medium text-slate-700" htmlFor="email">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-xs sm:text-[13px] text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:#19b4bc] focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5 text-xs sm:text-[13px]">
                    <label className="block font-medium text-slate-700" htmlFor="phone">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-xs sm:text-[13px] text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:#19b4bc] focus:border-transparent"
                      placeholder="Best contact number"
                    />
                  </div>
                  <div className="space-y-1.5 text-xs sm:text-[13px]">
                    <label className="block font-medium text-slate-700" htmlFor="topic">
                      What is your enquiry about?
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs sm:text-[13px] text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:#19b4bc] focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="eligibility">Eligibility</option>
                      <option value="appointments">Appointments</option>
                      <option value="treatment">Treatment questions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs sm:text-[13px]">
                  <label className="block font-medium text-slate-700" htmlFor="message">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-xs sm:text-[13px] text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:#19b4bc] focus:border-transparent"
                    placeholder="Share any details youre comfortable with. Please dont include urgent medical concerns  call 000 in an emergency."
                  />
                </div>

                <p className="text-[11px] text-slate-500">
                  LENA Leaf cannot provide emergency support. If you or someone else is in danger,
                  call 000 or go to your nearest emergency department.
                </p>

                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-xs sm:text-[13px] font-semibold text-white shadow-sm transition-transform duration-150 hover:scale-[1.02]"
                    style={{ backgroundColor: "#19b4bc" }}
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 text-xs sm:text-[13px] text-slate-700">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold tracking-[0.16em] uppercase text-slate-500">
              Telehealth availability
            </h2>
            <p>
              LENA Leaf telehealth consults are available Australia-wide for eligible patients. You
              will need a stable internet connection and a private space for your appointment.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-sm font-semibold tracking-[0.16em] uppercase text-slate-500">
              Medical advice
            </h2>
            <p>
              Information shared through this form is for general enquiries only and does not
              replace medical advice. Always follow the guidance of your treating clinician.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
