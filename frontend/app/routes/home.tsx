import type { Route } from "./+types/home";
import { useState } from "react";

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

const testimonials = [
  {
    name: "Y.N.",
    status: "Patient",
    rating: 5,
    text: "Very good service, convenient and very professional. I am lucky to have found you"
  },
  {
    name: "M.J.",
    status: "Patient",
    rating: 5,
    text: "The telehealth consultation was seamless. The practitioner took time to understand my concerns and provided holistic advice that complemented my existing treatment."
  },
  {
    name: "A.K.",
    status: "Patient", 
    rating: 5,
    text: "LENA Leaf made it so easy to access natural health support from home. The booking process was simple and the video call worked perfectly."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="home-hero bg-gray-100">
        <div className="px-6 pt-10 pb-16 mx-auto max-w-7xl lg:pt-14 lg:pb-20">
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
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-full bg-white shadow-sm transition-all duration-150 hover:bg-orange-50 hover:scale-[1.02] cursor-pointer"
                  style={{
                    borderWidth: "2px",
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
                  <span>Affordable telehealth consultations</span>
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
              {/* Enhanced animated background elements */}
              <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full blur-3xl opacity-40 animate-pulse" style={{ backgroundColor: "#19b4bc66" }} />
              <div className="absolute -bottom-16 -left-20 h-60 w-60 rounded-full blur-3xl opacity-40 animate-pulse" style={{ backgroundColor: "#e9762b66", animationDelay: "1s" }} />
              <div className="absolute top-20 -right-8 h-32 w-32 rounded-full blur-2xl opacity-30" style={{ backgroundColor: "#19b4bc44" }} />
              
              {/* Floating card with enhanced styling */}
              <div className="relative w-full max-w-md transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2">
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#19b4bc] via-[#19b4bc80] to-[#e9762b] p-[2px] shadow-2xl">
                  <div className="h-full w-full rounded-[38px] bg-white" />
                </div>
                
                {/* Modern video container with glassmorphism */}
                <div className="relative overflow-hidden rounded-[38px] bg-white/95 backdrop-blur-xl shadow-2xl ring-1 ring-white/30 border border-white/20">
                  {/* Modern gradient overlay */}
                  <div className="absolute inset-0 rounded-[38px] bg-gradient-to-br from-white/60 via-white/20 to-transparent pointer-events-none" />
                  
                  {/* Video container with modern frame */}
                  <div className="relative p-3">
                    <div className="aspect-[4/5] overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-50 to-white shadow-inner">
                      {/* Video element */}
                      <video
                        className="h-full w-full object-cover transition-all duration-700 hover:scale-105 rounded-[32px]"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false}
                        src="/vid/home-hero.mp4"
                      />
                      
                      {/* Modern video overlay effects */}
                      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-black/5 via-transparent to-white/10 pointer-events-none" />
                    </div>
                  </div>
                  
                  {/* Modern floating UI elements */}
                  <div className="absolute top-6 right-6 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: "#19b4bc" }} />
                    <div className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#e9762b", animationDelay: "0.5s" }} />
                  </div>
                  
                  {/* Bottom modern accent */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-1.5">
                    <div className="h-1 w-6 rounded-full bg-gradient-to-r from-[#19b4bc] to-[#e9762b] opacity-60" />
                    <div className="h-1.5 w-1.5 rounded-full animate-bounce" style={{ backgroundColor: "#19b4bc", animationDelay: "1s" }} />
                  </div>
                  
                  {/* Modern corner accents */}
                  <div className="absolute top-0 right-0 h-8 w-8 bg-gradient-to-bl from-[#19b4bc]/20 to-transparent rounded-bl-2xl rounded-tr-[38px]" />
                  <div className="absolute bottom-0 left-0 h-6 w-6 bg-gradient-to-tr from-[#e9762b]/20 to-transparent rounded-tr-2xl rounded-bl-[38px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-lena-leaf px-6 pb-20 mx-auto mt-12 max-w-7xl">
        <div className="space-y-3 max-w-xl">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
            Why choose
            <span className="ml-1" style={{ color: "#e9762b" }}>
              LENA Leaf
            </span>
          </p>
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ color: "#19b4bc" }}
          >
            Telehealth designed around natural health
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            This dedicated experience makes it easier for patients to understand what LENA
            Leaf offers, check whether they&apos;re eligible, and book the right appointment
            without getting lost in a general medical website.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#19b4bc]/10 via-white to-[#e9762b]/10 p-7 shadow-xl ring-2 ring-[#19b4bc]/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-[#e9762b]/30">
            <div className="absolute inset-0 bg-gradient-to-br from-[#19b4bc]/20 via-transparent to-[#e9762b]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#19b4bc] to-[#15a2aa] shadow-lg" style={{ boxShadow: "0 4px 20px rgba(25, 180, 188, 0.25)" }}>
                <span className="material-symbols-outlined text-white text-xl">
                  volunteer_activism
                </span>
              </div>
              <h3 className="mb-3 text-lg font-bold bg-gradient-to-r from-[#19b4bc] to-[#e9762b] bg-clip-text text-transparent">
                Built for online care
              </h3>
              <p className="text-sm leading-relaxed text-slate-700 font-medium">
                Clear, mobile-friendly flows for learning about LENA Leaf and booking telehealth
                consults from any device.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r rounded-full" style={{ backgroundImage: "linear-gradient(90deg, #19b4bc, #e9762b)" }} />
          </article>

          <article className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-sm p-7 shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-slate-300/70">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#19b4bc] to-[#15a2aa] shadow-lg" style={{ boxShadow: "0 4px 20px rgba(25, 180, 188, 0.25)" }}>
                <img 
                  src="/icon/apple-touch-icon.png" 
                  alt="Lena Medical icon" 
                  className="h-8 w-8 object-contain filter brightness-0 invert"
                />
              </div>
              <h3 className="mb-3 text-base font-semibold" style={{ color: "#e9762b" }}>
                Clearly linked to Lena Medical
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Shares the same branding, tone and trust as Lena Medical, while focusing the
                content purely on LENA Leaf services.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r rounded-full" style={{ backgroundImage: "linear-gradient(90deg, #e9762b, #19b4bc)" }} />
          </article>

          <article className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-sm p-7 shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-slate-300/70">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#19b4bc] to-[#15a2aa] shadow-lg" style={{ boxShadow: "0 4px 20px rgba(25, 180, 188, 0.25)" }}>
                <span className="material-symbols-outlined text-white text-xl">
                  cardiology
                </span>
              </div>
              <h3 className="mb-3 text-base font-semibold" style={{ color: "#e9762b" }}>
                Holistic Health Approach
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Integrates natural and complementary therapies with conventional medical care for comprehensive wellness support.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r rounded-full" style={{ backgroundImage: "linear-gradient(90deg, #19b4bc, #e9762b)" }} />
          </article>
        </div>
      </section>

      <section
        className="how-lenaleaf-works w-full py-16"
        style={{ backgroundColor: "#edf8f9" }}
      >
        <div className="px-6 mx-auto max-w-7xl">
          <div className="space-y-3 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
            How
            <span className="mx-1" style={{ color: "#e9762b" }}>
              LENA Leaf
            </span>
            works
          </p>
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ color: "#19b4bc" }}
          >
            A simple path to natural telehealth support
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            From checking eligibility through to your online consult, LENA Leaf is designed to
            guide you step-by-step so you know what to expect at every stage.
          </p>
          </div>

          <ol className="mt-10 grid gap-8 md:gap-12 md:grid-cols-4">
          {["Check eligibility", "Choose your time", "Join your consult", "Follow-up & next steps"].map((title, index) => (
            <li
              key={title}
              className="group relative flex h-full flex-col overflow-visible rounded-3xl bg-white/95 p-5 shadow-sm ring-1 ring-slate-100 transition-transform duration-150 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="absolute inset-x-4 top-0 h-1 rounded-b-full" style={{ backgroundImage: "linear-gradient(90deg, #19b4bc, #e9762b)" }} />

              <div className="mb-4 flex items-center justify-between gap-3 pt-1">
                <div className="inline-flex flex-col text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  <span>Step {index + 1}</span>
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white shadow-sm"
                  style={{ backgroundColor: "#e9762b" }}
                >
                  {index + 1}
                </div>
              </div>
              {index < 3 && (
                <>
                  {/* Desktop / tablet horizontal connector */}
                  <div className="pointer-events-none absolute right-[-40px] top-1/2 hidden -translate-y-1/2 items-center md:flex z-20">
                    <div
                      className="h-px w-12 rounded-full"
                      style={{ backgroundColor: "rgba(25,180,188,0.3)" }}
                    />
                    <div
                      className="ml-1 flex h-7 w-7 items-center justify-center rounded-full border shadow-sm"
                      style={{ backgroundColor: "#19b4bc", borderColor: "#ffffff" }}
                    >
                      <span className="text-sm font-semibold text-white">›</span>
                    </div>
                  </div>

                  {/* Mobile vertical connector */}
                  <div className="pointer-events-none absolute inset-x-0 -bottom-7 flex flex-col items-center justify-center md:hidden z-20">
                    <div
                      className="h-6 w-px rounded-full"
                      style={{ backgroundColor: "rgba(25,180,188,0.3)" }}
                    />
                    <div
                      className="-mb-3 mt-1 flex h-7 w-7 items-center justify-center rounded-full border shadow-sm bg-white"
                      style={{ borderColor: "#19b4bc" }}
                    >
                      <span className="text-base font-semibold" style={{ color: "#19b4bc" }}>
                        ↓
                      </span>
                    </div>
                  </div>
                </>
              )}
              <h3 className="mb-2 text-sm font-semibold" style={{ color: "#e9762b" }}>
                {title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                {index === 0 &&
                  "Answer a few quick questions to confirm that LENA Leaf telehealth is suitable for you."}
                {index === 1 &&
                  "Select a telehealth appointment time that works for you, from the comfort of your home."}
                {index === 2 &&
                  "Join your secure video consult on your phone, tablet or computer and speak with a clinician."}
                {index === 3 &&
                  "Receive guidance on next steps, including any follow-up appointments or recommendations."}
              </p>
            </li>
          ))}
          </ol>
        </div>
      </section>

      <section className="faq px-6 pb-20 mx-auto mt-12 max-w-7xl">
        <div className="space-y-3 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
            <span></span>
            <span className="mx-1" style={{ color: "#e9762b" }}>
              LENA Leaf
            </span>
            FAQ
          </p>
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ color: "#19b4bc" }}
          >
            Questions about LENA Leaf
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            Here are some quick answers about how the service works. This content can be updated
            later with more detailed FAQs from the main site.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {[ 
            {
              q: "Do I need to be an existing Lena Medical patient?",
              a: "You don&apos;t necessarily need to be an existing patient, but eligibility and availability may depend on your location and the type of support you&apos;re seeking."
            },
            {
              q: "Is LENA Leaf bulk-billed?",
              a: "Bulk-billing and fees depend on your eligibility and the type of consult. The booking journey will clearly show any costs before you confirm your appointment."
            },
            {
              q: "What do I need for my telehealth appointment?",
              a: "You&apos;ll need a quiet, private space, a reliable internet connection and a device with a camera and microphone, such as a smartphone, tablet or computer."
            }
          ].map((item, idx) => (
            <details
              key={item.q}
              className="group relative overflow-hidden rounded-3xl bg-white/95 p-4 pl-5 shadow-sm ring-1 ring-slate-100 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md open:bg-white"
            >
              <div
                className="pointer-events-none absolute inset-x-4 top-0 h-[3px] rounded-b-full"
                style={{ backgroundImage: "linear-gradient(90deg, #19b4bc, #e9762b)" }}
              />

              <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-[rgb(12,122,136)]">
                <span
                  className="pr-4 leading-snug"
                  style={idx === 1 ? { color: "#e9762b" } : undefined}
                >
                  {item.q}
                </span>
                <span
                  className="ml-auto inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold text-white shadow-sm transition-transform duration-150 group-open:rotate-45"
                  style={{
                    backgroundColor: idx === 1 ? "#e9762b" : "#19b4bc",
                    borderColor: "#ffffff",
                  }}
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-xs leading-relaxed text-slate-700 sm:text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* MODERN TESTIMONIAL SECTION - 3 CARDS */}
      <section className="px-6 pb-24 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500 mb-3">
            <span style={{ color: "#e9762b" }}>LENA LEAF</span> Patient Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4" style={{ color: "#19b4bc" }}>
            What Our Patients Say
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg mt-3 max-w-3xl mx-auto">
            Real experiences from patients who have used LENA Leaf's telehealth services
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {/* Testimonial 1 */}
          <div className="group relative h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#19b4bc] to-[#e9762b] rounded-3xl opacity-0 group-hover:opacity-20 transition duration-300"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full flex flex-col">
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 text-lg" style={{ color: "#19b4bc" }}>Y.N.</h4>
                <p className="text-sm text-slate-500">Patient</p>
              </div>
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <span key={star} className="text-xl" style={{ color: "#e9762b" }}>★</span>
                ))}
              </div>
              <blockquote className="text-slate-700 leading-relaxed italic flex-grow">
                "Very good service, convenient and very professional. I am lucky to have found you"
              </blockquote>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="group relative h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#19b4bc] to-[#e9762b] rounded-3xl opacity-0 group-hover:opacity-20 transition duration-300"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full flex flex-col">
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 text-lg" style={{ color: "#19b4bc" }}>M.J.</h4>
                <p className="text-sm text-slate-500">Patient</p>
              </div>
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <span key={star} className="text-xl" style={{ color: "#e9762b" }}>★</span>
                ))}
              </div>
              <blockquote className="text-slate-700 leading-relaxed italic flex-grow">
                "The telehealth consultation was seamless. The practitioner took time to understand my concerns and provided holistic advice that complemented my existing treatment."
              </blockquote>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="group relative h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#19b4bc] to-[#e9762b] rounded-3xl opacity-0 group-hover:opacity-20 transition duration-300"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full flex flex-col">
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 text-lg" style={{ color: "#19b4bc" }}>A.K.</h4>
                <p className="text-sm text-slate-500">Patient</p>
              </div>
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <span key={star} className="text-xl" style={{ color: "#e9762b" }}>★</span>
                ))}
              </div>
              <blockquote className="text-slate-700 leading-relaxed italic flex-grow">
                "LENA Leaf made it so easy to access natural health support from home. The booking process was simple and the video call worked perfectly."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
