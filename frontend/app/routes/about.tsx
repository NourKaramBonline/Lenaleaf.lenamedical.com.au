import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About LENA Leaf | Lena Medical" },
    {
      name: "description",
      content:
        "Learn about LENA Leaf alternative medicine – natural, complementary care that supports sleep, chronic illness and overall wellbeing.",
    },
  ];
}

export default function About() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="px-6 pt-10 pb-16 mx-auto max-w-7xl lg:pt-14 lg:pb-20">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
            About
            <span className="ml-1" style={{ color: "#e9762b" }}>
              LENA Leaf
            </span>
          </p>

          <h1
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ color: "#19b4bc" }}
          >
            LENA Leaf alternative medicine
          </h1>

          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            LENA Leaf is Lena Medical&apos;s dedicated alternative medicine arm, focused on
            natural, complementary approaches that work alongside conventional care.
            It brings together traditional wisdom and modern research to support your
            overall health and wellbeing.
          </p>
        </div>
      </section>

      <section className="px-6 pb-10 mx-auto max-w-7xl">
        <div className="max-w-3xl space-y-4">
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ color: "#19b4bc" }}
          >
            Our Vision
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            We envision a future where safe, evidence-informed natural care is easy to
            access from home. LENA Leaf aims to remove common barriers – distance,
            time and mobility – so more people can explore complementary options that
            support their overall health.
          </p>
        </div>
      </section>

      <section className="px-6 pb-10 mx-auto max-w-7xl">
        <div className="max-w-3xl space-y-4">
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ color: "#19b4bc" }}
          >
            Our Mission
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            Our mission is to make holistic, patient-centred care more accessible by
            combining telehealth with natural and complementary approaches. Through
            LENA Leaf, we connect patients with practitioners who can offer
            thoughtful guidance alongside their existing medical care.
          </p>
        </div>
      </section>

      <section className="px-6 pb-10 mx-auto max-w-7xl">
        <div className="max-w-3xl space-y-4">
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ color: "#19b4bc" }}
          >
            Our Story
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            LENA Leaf grew out of Lena Medical&apos;s experience supporting patients
            through telehealth. Many people were looking for natural options that
            could sit alongside conventional treatment. LENA Leaf was created to
            provide a clearer pathway for those conversations, within a structured,
            clinically-aware telehealth service.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 mx-auto max-w-7xl">
        <div className="max-w-3xl space-y-4">
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ color: "#19b4bc" }}
          >
            Our Values
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold" style={{ color: "#e9762b" }}>
                Accessibility
              </span>{" "}
              – making natural and complementary care easier to reach through secure
              telehealth.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "#e9762b" }}>
                Safety &amp; collaboration
              </span>{" "}
              – encouraging patients to consider LENA Leaf as part of a broader care
              plan with their usual clinicians.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "#e9762b" }}>
                Compassion
              </span>{" "}
              – taking time to listen to each person&apos;s story, goals and concerns.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "#e9762b" }}>
                Quality
              </span>{" "}
              – aiming for high standards in patient experience and information,
              aligned with Lena Medical&apos;s broader telehealth services.
            </li>
          </ul>
        </div>
      </section>

      <section className="px-6 pb-16 mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <article className="group relative overflow-hidden rounded-3xl bg-white/95 p-6 shadow-sm ring-1 ring-slate-100">
            <h2 className="mb-2 text-sm font-semibold" style={{ color: "#19b4bc" }}>
              Herbal medicine
            </h2>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              Natural plant-based options that aim to support the body&apos;s own healing
              systems and address the underlying causes of health concerns, rather than
              just symptoms.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-3xl bg-white/95 p-6 shadow-sm ring-1 ring-slate-100">
            <h2 className="mb-2 text-sm font-semibold" style={{ color: "#19b4bc" }}>
              Sleep and rest support
            </h2>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              Holistic approaches aimed at improving sleep quality and supporting
              healthier sleep patterns through natural interventions and lifestyle
              guidance.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-3xl bg-white/95 p-6 shadow-sm ring-1 ring-slate-100">
            <h2 className="mb-2 text-sm font-semibold" style={{ color: "#19b4bc" }}>
              Support for chronic conditions
            </h2>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              Complementary care that aims to help manage ongoing symptoms of chronic
              illness and improve overall quality of life, alongside guidance from your
              usual healthcare providers.
            </p>
          </article>
        </div>
      </section>

      <section
        className="px-6 pb-20 mx-auto max-w-7xl"
      >
        <div className="max-w-3xl space-y-4">
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ color: "#19b4bc" }}
          >
            How LENA Leaf fits within Lena Medical
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            LENA Leaf is part of Lena Medical&apos;s broader telehealth services, offering
            a focused space for patients interested in natural and complementary
            options. It is designed to work alongside your existing care, not replace
            medical advice from your regular clinicians.
          </p>
          <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
            Any treatments or recommendations discussed through LENA Leaf should be
            considered in consultation with your healthcare provider, and may not be
            suitable for every person or condition.
          </p>
        </div>
      </section>
    </main>
  );
}
