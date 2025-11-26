import type { Route } from "./+types/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services | Lena Leaf" },
    {
      name: "description",
      content:
        "Explore LENA Leaf telehealth services including herbal medicine, sleep support, chronic illness care, stress and anxiety, digestive health and nutritional therapy.",
    },
  ];
}

const benefits = [
  {
    title: "Root Cause Focus",
    description:
      "Address underlying health issues rather than just managing symptoms for lasting wellness.",
  },
  {
    title: "Personalised Care",
    description:
      "Individualised treatment plans tailored to your unique health profile and lifestyle.",
  },
  {
    title: "Minimal Side Effects",
    description:
      "Natural therapies with fewer adverse effects compared to conventional medications.",
  },
  {
    title: "Holistic Approach",
    description:
      "Treat mind, body and spirit as interconnected parts of your overall health.",
  },
  {
    title: "Prevention Focused",
    description:
      "Proactive strategies to prevent illness and maintain optimal health long-term.",
  },
  {
    title: "Evidence-Based",
    description:
      "Traditional wisdom backed by modern research and clinical experience.",
  },
  {
    title: "Mental Clarity",
    description:
      "Natural approaches to enhance cognitive function and emotional wellbeing.",
  },
  {
    title: "Enhanced Vitality",
    description:
      "Boost energy levels and overall vitality through natural healing methods.",
  },
] as const;

const journeySteps = [
  {
    title: "Health History Assessment",
    duration: "15–20 mins",
    description:
      "Complete comprehensive questions about your health history, current concerns and wellness goals.",
  },
  {
    title: "Initial Consultation",
    duration: "20–30 mins",
    description:
      "Online telehealth consultation with a qualified clinician or prescriber to discuss your care in detail.",
  },
  {
    title: "Personalised Treatment Plan",
    duration: "Ongoing",
    description:
      "Receive a customised treatment plan with herbal medicines, lifestyle recommendations and dietary guidance.",
  },
  {
    title: "Treatment Implementation",
    duration: "Ongoing",
    description:
      "Begin your natural health journey with prescribed herbs, supplements and lifestyle modifications.",
  },
  {
    title: "Follow-up Care",
    duration: "As needed",
    description:
      "Regular check-ins to monitor progress, adjust treatment and ensure you feel supported.",
  },
  {
    title: "Long-Term Wellness",
    duration: "Long-term",
    description:
      "Maintain your health gains with ongoing support and preventative care strategies.",
  },
] as const;

function JourneyIcon({ index }: { index: number }) {
  const i = index % 6;

  if (i === 0) {
    // clipboard / history
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <rect x="8" y="4" width="8" height="3" rx="1.5" fill="currentColor" opacity="0.9" />
        <rect
          x="6"
          y="6.5"
          width="12"
          height="13.5"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M9 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (i === 1) {
    // video camera
    return (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden>
        <rect
          x="4.25"
          y="7.25"
          width="10.5"
          height="9.5"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M14.75 10.5 18.5 8.5a.9.9 0 0 1 1.35.78v6.44a.9.9 0 0 1-1.35.78l-3.75-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="9.75" r="0.7" fill="currentColor" />
      </svg>
    );
  }

  if (i === 2) {
    // heart
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          d="M12 18s-3.8-2.4-5.9-4.6C4 11.2 4 8.7 5.6 7.1 6.8 5.9 8.8 5.9 10 7.1L12 9l2-1.9c1.2-1.2 3.2-1.2 4.4 0 1.6 1.6 1.6 4.1-.5 6.3C15.8 15.6 12 18 12 18Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (i === 3) {
    // leaf / herbal
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path
          d="M18.5 5.5S13 5 9.5 8.5 5 18.5 5 18.5 11 19 14.5 15.5 18.5 5.5 18.5 5.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 15.5 13 11.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (i === 4) {
    // calendar
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <rect
          x="4.25"
          y="6.25"
          width="15.5"
          height="13.5"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M4 10h16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 4v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 4v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="9" y="12" width="2.5" height="2.5" rx="0.6" fill="currentColor" />
      </svg>
    );
  }

  // progress / chart
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden>
      <path
        d="M5 18h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 15.5 10 11l3 2 4-5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="15.5" r="0.7" fill="currentColor" />
      <circle cx="10" cy="11" r="0.7" fill="currentColor" />
      <circle cx="13" cy="13" r="0.7" fill="currentColor" />
      <circle cx="17" cy="7.5" r="0.7" fill="currentColor" />
    </svg>
  );
}

function BenefitIcon({ index }: { index: number }) {
  // Use Material Symbols only for specific benefits by absolute index
  if (index === 1) {
    // Personalised Care: stethoscope (Material Symbols Outlined)
    return (
      <span className="material-symbols-outlined text-[28px] leading-none" aria-hidden>
        stethoscope
      </span>
    );
  }

  if (index === 2) {
    // Minimal Side Effects: pill (Material Symbols Outlined)
    return (
      <span className="material-symbols-outlined text-[28px] leading-none" aria-hidden>
        pill
      </span>
    );
  }

  if (index === 3) {
    // Holistic Approach: skeleton (Material Symbols Outlined)
    return (
      <span className="material-symbols-outlined text-[28px] leading-none" aria-hidden>
        skeleton
      </span>
    );
  }

  if (index === 5) {
    // Evidence-Based: heart_check (Material Symbols Outlined)
    return (
      <span className="material-symbols-outlined text-[28px] leading-none" aria-hidden>
        heart_check
      </span>
    );
  }

  if (index === 6) {
    // Mental Clarity: neurology (Material Symbols Outlined)
    return (
      <span className="material-symbols-outlined text-[28px] leading-none" aria-hidden>
        neurology
      </span>
    );
  }

  if (index === 7) {
    // Enhanced Vitality: cardiology (Material Symbols Outlined)
    return (
      <span className="material-symbols-outlined text-[28px] leading-none" aria-hidden>
        cardiology
      </span>
    );
  }

  const i = index % 6;

  if (i === 0) {
    // target / focus icon
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
        <circle
          cx="12"
          cy="12"
          r="7.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="12"
          r="4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    );
  }

  if (i === 1) {
    // stethoscope (original SVG)
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
        <path
          d="M7 4v4.5a3 3 0 0 0 6 0V4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 4h2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M11 4h2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="17" cy="11" r="1.6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M17 12.6V15a4 4 0 0 1-4 4h-1.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (i === 2) {
    // capsule / pill (original SVG)
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
        <rect
          x="6"
          y="7"
          width="12"
          height="10"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 9.5 15 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (i === 3) {
    // brain / cognition
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
        <path
          d="M9.5 6.5a2 2 0 0 0-3.9.6A3.2 3.2 0 0 0 5 8.7 3 3 0 0 0 4 11a3 3 0 0 0 1.3 2.5A2.7 2.7 0 0 0 6 16.3 2.5 2.5 0 0 0 8.5 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 6.5a2 2 0 0 1 3.9.6 3.2 3.2 0 0 1 .6 1.6A3 3 0 0 1 20 11a3 3 0 0 1-1.3 2.5 2.7 2.7 0 0 1-.7 2.8A2.5 2.5 0 0 1 15.5 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 5v14"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (i === 4) {
    // shield / protection
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
        <path
          d="M12 4.5 7.5 6 6 6.5v5.3c0 3.1 2.2 5.9 6 7.7 3.8-1.8 6-4.6 6-7.7V6.5L16.5 6 12 4.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 11.5 11 13l3.5-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // herbal / leaf
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path
        d="M18.5 5.5S13 5 9.5 8.5 5 18.5 5 18.5 11 19 14.5 15.5 18.5 5.5 18.5 5.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15.5 13 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const services = [
  {
    name: "Herbal Medicine",
    description:
      "Natural plant-based remedies that support the bodys healing systems and address root causes of health concerns.",
    points: ["Evidence-based herbs", "Personalised formulas", "Safety protocols"],
    accent: "teal",
  },
  {
    name: "Sleep Disorders",
    description:
      "Holistic approaches to improving sleep quality and addressing sleep disorders using natural interventions.",
    points: ["Sleep hygiene", "Adaptogenic herbs", "Relaxation techniques"],
    accent: "orange",
  },
  {
    name: "Chronic Illness",
    description:
      "Comprehensive natural treatments to help manage chronic conditions and improve quality of life.",
    points: ["Pain management", "Inflammation support", "Energy restoration"],
    accent: "rose",
  },
  {
    name: "Stress & Anxiety",
    description:
      "Natural approaches to managing stress, anxiety and mood disorders through holistic therapies.",
    points: ["Mindfulness techniques", "Herbal anxiolytics", "Lifestyle counselling"],
    accent: "amber",
  },
  {
    name: "Digestive Health",
    description:
      "Gentle, evidence-based natural remedies for digestive health, intolerances and sensitivities.",
    points: ["Gut microbiome support", "Elimination diets", "Herbal therapeutics"],
    accent: "teal",
  },
  {
    name: "Nutritional Therapy",
    description:
      "Personalised nutrition plans using whole foods and targeted supplements for optimal health.",
    points: ["Nutrient testing", "Meal planning", "Supplement protocols"],
    accent: "orange",
  },
] as const;

export default function Services() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="services-hero bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-12 lg:pt-16 lg:pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-4 py-1.5 shadow-sm ring-1 ring-black/5">
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: "#e9762b" }}
                >
                  Telehealth Services
                </span>
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "#19b4bc" }}
                />
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-600">
                  LENA Leaf
                </span>
              </div>

              <div className="space-y-4">
                <h1
                  className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-tight"
                  style={{ color: "#19b4bc" }}
                >
                  Natural services designed
                  <span className="block" style={{ color: "#e9762b" }}>
                    to support whole-person care
                  </span>
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
                  LENA Leaf brings together natural therapies, nutritional support and holistic
                  telehealth care. Explore our key service areas below and see how they may support
                  your health goals.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://lenamedical.com.au/appointments/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex cursor-pointer items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform duration-150 hover:scale-[1.02]"
                  style={{ backgroundColor: "#19b4bc" }}
                >
                  Book a LENA Leaf consult
                </a>
                <a
                  href="/about"
                  className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold shadow-sm border-2 transition-colors duration-150 hover:bg-orange-50"
                  style={{ borderColor: "#e9762b", color: "#e9762b" }}
                >
                  Learn more about LENA Leaf
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div
                className="absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-60 blur-3xl"
                style={{ backgroundColor: "#19b4bc55" }}
              />
              <div
                className="absolute -bottom-12 -left-16 h-52 w-52 rounded-full opacity-60 blur-3xl"
                style={{ backgroundColor: "#e9762b55" }}
              />

              <div className="relative w-full max-w-md overflow-hidden rounded-[32px] bg-white shadow-xl ring-1 ring-black/5 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#19b4bc]/30 group">
                <div className="bg-gradient-to-br from-[rgba(25,180,188,0.08)] via-white to-[rgba(233,118,43,0.12)] p-6">
                  <p className="text-xs leading-relaxed bg-gradient-to-r from-[#e9762b] via-[#19b4bc] to-[#e9762b] bg-clip-text text-transparent sm:text-sm">
                    Each service area is delivered via secure online consultations, with a focus on
                    personalised care plans that respect your preferences and existing medical
                    treatments.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-600">
                    <div className="rounded-2xl bg-gradient-to-br from-[#e9762b]/10 to-[#e9762b]/5 p-3 shadow-sm ring-1 ring-[#e9762b]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:ring-[#e9762b]/40 hover:bg-gradient-to-br hover:from-[#e9762b]/15 hover:to-[#e9762b]/8 cursor-pointer">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300" style={{ color: "#e9762b" }}>
                        Focused support
                      </p>
                      <p className="mt-1 text-xs transition-colors duration-300" style={{ color: "#e9762b" }}>
                        Tailored to sleep, stress, digestion, chronic illness and more.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-[#19b4bc]/10 to-[#19b4bc]/5 p-3 shadow-sm ring-1 ring-[#19b4bc]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:ring-[#19b4bc]/40 hover:bg-gradient-to-br hover:from-[#19b4bc]/15 hover:to-[#19b4bc]/8 cursor-pointer">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300" style={{ color: "#19b4bc" }}>
                        Natural approach
                      </p>
                      <p className="mt-1 text-xs transition-colors duration-300" style={{ color: "#19b4bc" }}>
                        Integrating herbal medicine, nutrition and lifestyle care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-grid mx-auto mt-10 max-w-7xl px-6 pb-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              LENA Leaf
              <span className="ml-1" style={{ color: "#e9762b" }}>
                Services
              </span>
            </p>
            <h2
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
              style={{ color: "#19b4bc" }}
            >
              Explore our natural service areas
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              These service categories help organise the types of support available through LENA
              Leaf. Your clinician will always recommend options that are safe and appropriate for
              you.
            </p>
          </div>
          <p className="mt-2 max-w-sm text-[11px] leading-relaxed text-slate-500">
            Information here is general in nature and does not replace medical advice. Always speak
            with your healthcare provider about what is right for you.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const borderColor =
              service.accent === "teal"
                ? "#19b4bc"
                : service.accent === "orange"
                ? "#e9762b"
                : service.accent === "rose"
                ? "#f97373"
                : "#f59e0b";

            return (
              <article
                key={service.name}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/95 p-6 shadow-sm ring-1 ring-slate-100 transition-transform duration-150 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-[13px] font-semibold text-[rgb(12,122,136)]"
                      style={{ borderTopColor: borderColor, borderWidth: 1 }}
                    >
                      <span className="mt-[1px]">{service.name.charAt(0)}</span>
                    </div>
                    <h3
                      className="text-sm font-semibold sm:text-[15px]"
                      style={{ color: "#19b4bc" }}
                    >
                      {service.name}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-1.5 text-xs text-slate-700 sm:text-[13px]">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span
                        className="mt-[3px] h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: borderColor }}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center justify-between gap-3 text-[11px] text-slate-500">
                  <span>Available via secure telehealth consults.</span>
                  <a
                    href="https://lenamedical.com.au/appointments/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-[11px] font-semibold text-white shadow-sm transition-transform duration-150 hover:scale-[1.02]"
                    style={{ backgroundColor: "#19b4bc" }}
                  >
                    Book now
                  </a>
                </div>

                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r"
                  style={{
                    backgroundImage:
                      service.accent === "teal"
                        ? "linear-gradient(90deg, #19b4bc, #e9762b)"
                        : service.accent === "orange"
                        ? "linear-gradient(90deg, #e9762b, #19b4bc)"
                        : "linear-gradient(90deg, #19b4bc, #f97373)",
                  }}
                />
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="benefits-section w-full py-14"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(25,180,188,0.16), transparent 55%), radial-gradient(circle at bottom right, rgba(233,118,43,0.16), transparent 55%), linear-gradient(135deg, #f4fbfc, #fdf7f2)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Benefits of
              <span className="ml-1" style={{ color: "#e9762b" }}>
                Alternative Medicine
              </span>
            </p>
            <h2
              className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
              style={{ color: "#19b4bc" }}
            >
              Experience whole-person advantages
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              Explore the advantages of holistic healthcare approaches that address your health
              from multiple dimensions.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/10 p-[1px] text-left shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-lg transition-all duration-200 hover:-translate-y-2 hover:border-white/70 hover:bg-white/15 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]"
              >
                <div className="flex h-full flex-col rounded-[22px] bg-gradient-to-br from-white/40 via-white/10 to-white/5 p-6">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/70 via-white/30 to-[rgba(25,180,188,0.18)] text-[14px] font-semibold text-[rgb(12,122,136)] shadow-[0_10px_24px_rgba(15,23,42,0.12)] ring-1 ring-white/60">
                      <span className="flex h-8 w-8 items-center justify-center rounded-[14px] bg-white/40 shadow-[0_6px_16px_rgba(15,23,42,0.12)]">
                        <BenefitIcon index={index} />
                      </span>
                    </div>
                  </div>

                  <h3
                    className="mb-2 text-sm font-semibold sm:text-[15px]"
                    style={{ color: "#19b4bc" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-800/90 sm:text-sm">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="journey-section relative mt-12 w-full overflow-hidden pb-16 pt-14"
        style={{ background: "linear-gradient(135deg, #f4fbfc, #fff7f1)" }}
      >
        {/* soft background glows */}
        <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-[rgba(25,180,188,0.12)] blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[rgba(233,118,43,0.12)] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Your Journey to
              <span className="ml-1" style={{ color: "#e9762b" }}>
                Natural Wellness
              </span>
            </p>
            <h2
              className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
              style={{ color: "#19b4bc" }}
            >
              A guided, step-by-step care pathway
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              Our structured approach ensures you receive personalised, safe and effective natural
              medicine care from your first assessment through to long-term support.
            </p>
          </div>

          <div className="relative mx-auto mt-10 max-w-5xl">
            <div className="pointer-events-none absolute inset-x-8 top-6 hidden h-[calc(100%-3rem)] items-stretch justify-center lg:flex">
              <div className="h-full w-[3px] rounded-full bg-gradient-to-b from-[rgba(25,180,188,0.5)] via-[rgba(25,180,188,0.18)] to-[rgba(233,118,43,0.6)]" />
            </div>

            <div className="space-y-4 lg:space-y-6">
              {journeySteps.map((step, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={step.title}
                    className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16"
                  >
                    {/* Number badge in the center on large screens */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white bg-[color:#e9762b] text-[13px] font-semibold text-white shadow-md ring-1 ring-[rgba(0,0,0,0.06)]">
                        <span className="absolute -z-10 h-14 w-14 rounded-full bg-[rgba(233,118,43,0.18)] blur-[1px]" />
                        {index + 1}
                      </div>
                    </div>

                    {/* Left column card */}
                    <div
                      className={
                        isLeft
                          ? "order-1 lg:order-none lg:pr-10"
                          : "order-2 lg:order-1 lg:col-start-1 lg:pr-10"
                      }
                    >
                      {isLeft && (
                        <article className="group relative hidden max-w-3xl rounded-3xl bg-white/95 px-6 py-5 text-left shadow-sm ring-1 ring-slate-100 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl lg:block">
                          {/* connector from line to card */}
                          <div className="pointer-events-none absolute -right-8 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-[rgba(25,180,188,0.35)] to-transparent lg:block" />
                          <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(233,118,43,0.08)]">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:#e9762b] text-white">
                                <JourneyIcon index={index} />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-3">
                                <h3
                                  className="text-sm font-semibold sm:text-[15px]"
                                  style={{ color: "#19b4bc" }}
                                >
                                  {step.title}
                                </h3>
                                <span className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-medium text-[color:#e9762b] shadow-sm">
                                  {step.duration}
                                </span>
                              </div>
                              <p className="mt-2 text-xs leading-relaxed text-slate-700 sm:text-sm">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </article>
                      )}
                    </div>

                    {/* Right column card */}
                    <div
                      className={
                        isLeft
                          ? "order-2 lg:order-2 lg:pl-10"
                          : "order-1 mb-0 lg:order-2 lg:col-start-2 lg:pl-10"
                      }
                    >
                      {!isLeft && (
                        <article className="group relative hidden max-w-3xl rounded-3xl bg-white/95 px-6 py-5 text-left shadow-sm ring-1 ring-slate-100 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl lg:ml-auto lg:block">
                          {/* connector from line to card */}
                          <div className="pointer-events-none absolute -left-8 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-l from-[rgba(25,180,188,0.35)] to-transparent lg:block" />
                          <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(233,118,43,0.08)]">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:#e9762b] text-white">
                                <JourneyIcon index={index} />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-3">
                                <h3
                                  className="text-sm font-semibold sm:text-[15px]"
                                  style={{ color: "#19b4bc" }}
                                >
                                  {step.title}
                                </h3>
                                <span className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-medium text-[color:#e9762b] shadow-sm">
                                  {step.duration}
                                </span>
                              </div>
                              <p className="mt-2 text-xs leading-relaxed text-slate-700 sm:text-sm">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </article>
                      )}
                    </div>

                    {/* Mobile / small screen card (full width) with connector arrow */}
                    <div className="lg:hidden">
                      <div className="flex flex-col items-stretch">
                        <article className="group relative mt-2 rounded-3xl bg-white/95 px-5 py-4 text-left shadow-sm ring-1 ring-slate-100 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg">
                          <div className="flex items-start gap-3">
                            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(233,118,43,0.08)]">
                              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[color:#e9762b] text-white">
                                <JourneyIcon index={index} />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-3">
                                <h3
                                  className="text-[13px] font-semibold sm:text-sm"
                                  style={{ color: "#19b4bc" }}
                                >
                                  {step.title}
                                </h3>
                                <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-medium text-[color:#e9762b] shadow-sm">
                                  {step.duration}
                                </span>
                              </div>
                              <p className="mt-1.5 text-[11px] leading-relaxed text-slate-700">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </article>

                        {index < journeySteps.length - 1 && (
                          <div className="mt-2 flex items-center justify-center">
                            <div className="flex flex-col items-center text-[rgba(233,118,43,0.9)]">
                              {/* line above arrow */}
                              <div className="h-4 w-px bg-gradient-to-b from-[rgba(233,118,43,0.3)] via-[rgba(233,118,43,0.18)] to-[rgba(233,118,43,0.08)]" />

                              {/* arrow button */}
                              <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(233,118,43,0.12)] shadow-sm ring-1 ring-[rgba(233,118,43,0.18)]">
                                <svg
                                  viewBox="0 0 24 24"
                                  className="h-4 w-4"
                                  aria-hidden
                                >
                                  <path
                                    d="M7 10.5 12 15l5-4.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>

                              {/* line below arrow */}
                              <div className="mt-1 h-4 w-px bg-gradient-to-b from-[rgba(233,118,43,0.08)] via-[rgba(233,118,43,0.18)] to-[rgba(233,118,43,0.3)]" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        className="practitioners-section w-full pb-20 pt-4"
        style={{ backgroundColor: "#f3fafb" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Meet Our
              <span className="ml-1" style={{ color: "#e9762b" }}>
                Alternative Medicine Practitioners
              </span>
            </p>
            <h2
              className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
              style={{ color: "#19b4bc" }}
            >
              Experienced, evidence-informed natural health care
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              Our qualified practitioners combine traditional wisdom with modern, evidence-based
              approaches to support your health safely and effectively.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
            <article className="relative flex flex-col justify-between rounded-3xl bg-white/95 p-6 shadow-sm ring-1 ring-slate-100">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <h3
                    className="text-sm font-semibold sm:text-[15px]"
                    style={{ color: "#19b4bc" }}
                  >
                    Medical Team
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                  Experienced alternative medicine practitioners providing personalised care via
                  telehealth.
                </p>

                <div className="mt-5 grid gap-4 text-[11px] text-slate-600 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold text-[rgb(12,122,136)]">15+ years</p>
                    <p className="text-[11px] text-slate-500">Combined experience</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[rgb(12,122,136)]">4.9</p>
                    <p className="text-[11px] text-slate-500">Average rating*</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[rgb(12,122,136)]">2</p>
                    <p className="text-[11px] text-slate-500">Languages</p>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-[11px]">
                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Specialties
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Alternative medicine",
                        "Chronic disease management",
                        "Anxiety & stress",
                        "Sleep support",
                      ].map((label) => (
                        <span
                          key={label}
                          className="rounded-full bg-teal-50 px-3 py-1 text-[11px] font-medium text-[rgb(12,122,136)] ring-1 ring-[rgba(25,180,188,0.15)]"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Languages
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["English", "Arabic"].map((label) => (
                        <span
                          key={label}
                          className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-medium text-[rgb(12,122,136)] ring-1 ring-slate-200"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-[11px] text-slate-500">
                <span>*Indicative rating based on patient feedback.</span>
                <a
                  href="https://lenamedical.com.au/appointments/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2 text-[11px] font-semibold text-white shadow-sm transition-transform duration-150 hover:scale-[1.02]"
                  style={{ backgroundColor: "#e9762b" }}
                >
                  Book a consultation
                </a>
              </div>
            </article>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Medical Education",
                  description:
                    "Our practitioners are graduates of respected medical or health schools with training in both conventional and natural medicine.",
                },
                {
                  title: "Specialisations",
                  description:
                    "Team of clinicians with expertise in chronic disease management, holistic wellness and evidence-informed natural therapies.",
                },
                {
                  title: "Comprehensive Care",
                  description:
                    "Experience across primary care, emergency medicine and integrative approaches for complex conditions.",
                },
                {
                  title: "Multicultural Practice",
                  description:
                    "Multilingual team able to provide culturally sensitive care to our diverse patient community.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="relative flex flex-col rounded-3xl bg-white/95 p-5 text-left shadow-sm ring-1 ring-slate-100"
                >
                  <h3
                    className="mb-2 text-sm font-semibold sm:text-[15px]"
                    style={{ color: "#19b4bc" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                    {item.description}
                  </p>

                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r"
                    style={{ backgroundImage: "linear-gradient(90deg, #19b4bc, #e9762b)" }}
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="trusted-partner mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Trusted Healthcare Partner
          </p>
          <h2
            className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ color: "#19b4bc" }}
          >
            Built on clinical standards and secure telehealth
          </h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "AHPRA registered",
              description:
                "All clinicians are registered with AHPRA and qualified to provide telehealth services in Australia.",
            },
            {
              title: "Secure platform",
              description:
                "Your health information is protected with bank-level security and HIPAA-compliant telehealth technology.",
            },
            {
              title: "Growing network",
              description:
                "An expanding network of healthcare professionals and services to support diverse health needs.",
            },
          ].map((item, idx) => (
            <article
              key={item.title}
              className="group relative flex flex-col items-center rounded-3xl bg-white/95 p-6 text-center shadow-sm ring-1 ring-slate-100 transition-transform duration-150 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-[16px] font-semibold text-[rgb(12,122,136)]">
                {idx === 0 && "✔"}
                {idx === 1 && "🔒"}
                {idx === 2 && "↗"}
              </div>
              <h3
                className="mb-2 text-sm font-semibold sm:text-[15px]"
                style={{ color: "#19b4bc" }}
              >
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                {item.description}
              </p>

              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r"
                style={{ backgroundImage: "linear-gradient(90deg, #19b4bc, #e9762b)" }}
              />
            </article>
          ))}
        </div>
      </section>

      <section
        className="cta-banner w-full py-14"
        style={{ background: "linear-gradient(135deg, #eff9fb, #e1f3f7)" }}
      >
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ color: "#19b4bc" }}
          >
            Ready to experience better healthcare?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
            Join patients who trust Lena Medical for their telehealth care. Book your consultation
            today and experience the convenience of natural, online support.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://lenamedical.com.au/appointments/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-150 hover:scale-[1.02]"
              style={{ backgroundColor: "#19b4bc" }}
            >
              Book appointment
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border px-7 py-3 text-sm font-semibold text-[rgb(12,122,136)] shadow-sm transition-colors duration-150 hover:bg-white"
              style={{ borderColor: "#19b4bc" }}
            >
              Contact us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
