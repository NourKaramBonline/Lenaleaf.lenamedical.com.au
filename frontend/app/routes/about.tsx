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
      <section className="lena-Leaf-alternative-medicine px-6 pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
            About
            <span className="ml-1" style={{ color: "#e9762b" }}>
              LENA Leaf
            </span>
          </p>
        <div className="flex flex-col items-center gap-4 mb-8">
          <div 
            className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#19b4bc] to-[#15a2aa] shadow-lg transform hover:scale-105 transition-transform duration-300"
            style={{ boxShadow: "0 4px 20px rgba(25, 180, 188, 0.25)" }}
          >
            <span 
              className="material-symbols-outlined text-3xl text-white"
            >
              cannabis
            </span>
          </div>
          <h1
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ color: "#19b4bc" }}
          >
            LENA Leaf alternative medicine
          </h1>
        </div>

          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            LENA Leaf is Lena Medical&apos;s dedicated alternative medicine arm, focused on
            natural, complementary approaches that work alongside conventional care.
            It brings together traditional wisdom and modern research to support your
            overall health and wellbeing.
          </p>
        </div>
      </section>

      <section className="our-vision px-6 pb-10 mx-auto max-w-7xl">
        <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#e9762b] to-[#d86a25] shadow-lg transform hover:scale-110 rotate-3 hover:rotate-0 transition-all duration-300"
            style={{ boxShadow: "0 4px 20px rgba(233, 118, 43, 0.25)" }}
          >
            <span 
              className="material-symbols-outlined text-2xl text-white animate-pulse"
            >
              lightbulb_2
            </span>
          </div>
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl bg-gradient-to-r from-[#19b4bc] to-[#15a2aa] bg-clip-text text-transparent"
            style={{ color: "#19b4bc" }}
          >
            Our Vision
          </h2>
        </div>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            We envision a future where safe, evidence-informed natural care is easy to
            access from home. LENA Leaf aims to remove common barriers – distance,
            time and mobility – so more people can explore complementary options that
            support their overall health.
          </p>
        </div>
      </section>

      <section
        className="our-mission px-6 pb-10 mx-auto max-w-7xl bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl"
      >
        <div className="max-w-3xl ml-auto space-y-4 text-right">
        <div className="flex items-center gap-4 mb-6 justify-end">
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl bg-gradient-to-r from-[#e9762b] to-[#d86a25] bg-clip-text text-transparent"
            style={{ color: "#19b4bc" }}
          >
            Our Mission
          </h2>
          <div 
            className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#19b4bc] to-[#15a2aa] shadow-lg transform hover:scale-110 -rotate-3 hover:rotate-0 transition-all duration-300 relative overflow-hidden group"
            style={{ boxShadow: "0 4px 20px rgba(25, 180, 188, 0.25)" }}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            />
            <span 
              className="material-symbols-outlined text-2xl text-white animate-bounce relative z-10"
            >
              target
            </span>
          </div>
        </div>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            Our mission is to make holistic, patient-centred care more accessible by
            combining telehealth with natural and complementary approaches. Through
            LENA Leaf, we connect patients with practitioners who can offer
            thoughtful guidance alongside their existing medical care.
          </p>
        </div>
      </section>

      <section className="our-story px-6 pb-10 mx-auto max-w-7xl">
        <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#e9762b] to-[#d86a25] shadow-lg transform hover:scale-110 hover:rotate-6 transition-all duration-300 relative group"
            style={{ boxShadow: "0 4px 20px rgba(233, 118, 43, 0.25)" }}
          >
            <div 
              className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            />
            <span 
              className="material-symbols-outlined text-2xl text-white animate-pulse transform group-hover:scale-110 transition-transform duration-300 relative z-10"
            >
              auto_stories
            </span>
          </div>
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl bg-gradient-to-r from-[#19b4bc] to-[#15a2aa] bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300"
            style={{ color: "#19b4bc" }}
          >
            Our Story
          </h2>
        </div>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            LENA Leaf grew out of Lena Medical&apos;s experience supporting patients through
            telehealth. Many people were looking for natural options that could sit alongside
            conventional treatment. LENA Leaf was created to provide a clearer pathway for
            those conversations, within a structured, clinically-aware telehealth service.
          </p>
        </div>
      </section>

      <section
        className="our-values px-6 pb-20 mx-auto max-w-7xl bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl"
      >
        <div className="max-w-3xl ml-auto space-y-4 text-right">
        <div className="flex items-center gap-4 mb-6 justify-end">
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl bg-gradient-to-r from-[#e9762b] to-[#d86a25] bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300"
            style={{ color: "#19b4bc" }}
          >
            Our Values
          </h2>
          <div 
            className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#19b4bc] to-[#15a2aa] shadow-lg transform hover:scale-110 hover:-rotate-6 transition-all duration-300 relative group"
            style={{ boxShadow: "0 4px 20px rgba(25, 180, 188, 0.25)" }}
          >
            <div 
              className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent to-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            />
            <span 
              className="material-symbols-outlined text-2xl text-white animate-bounce relative z-10"
            >
              shield
            </span>
          </div>
        </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg ring-1 ring-gray-100 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:ring-2 hover:ring-[#19b4bc]/20">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#19b4bc] to-[#15a2aa] shadow-md mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <span className="material-symbols-outlined text-xl text-white">
                travel_explore
              </span>
            </div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-[#19b4bc] to-[#15a2aa] bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300">
              Accessibility
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
              Making natural and complementary care easier to reach through secure telehealth.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg ring-1 ring-gray-100 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:ring-2 hover:ring-[#e9762b]/20">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#e9762b] to-[#d86a25] shadow-md mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <span className="material-symbols-outlined text-xl text-white">
                handshake
              </span>
            </div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-[#e9762b] to-[#d86a25] bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300">
              Safety & collaboration
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
              Encouraging patients to consider LENA Leaf as part of a broader care plan with their usual clinicians.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg ring-1 ring-gray-100 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:ring-2 hover:ring-[#19b4bc]/20">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#19b4bc] to-[#15a2aa] shadow-md mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <span className="material-symbols-outlined text-xl text-white">
                favorite
              </span>
            </div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-[#19b4bc] to-[#15a2aa] bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300">
              Compassion
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
              Taking time to listen to each person&apos;s story, goals and concerns.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg ring-1 ring-gray-100 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:ring-2 hover:ring-[#e9762b]/20">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#e9762b] to-[#d86a25] shadow-md mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <span className="material-symbols-outlined text-xl text-white">
                verified
              </span>
            </div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-[#e9762b] to-[#d86a25] bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300">
              Quality
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
              Aiming for high standards in patient experience and information, aligned with Lena Medical&apos;s broader telehealth services.
            </p>
          </article>
        </div>
        </div>
      </section>

      <section className="natural-therapies px-6 pb-20 mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl bg-gradient-to-r from-[#19b4bc] to-[#15a2aa] bg-clip-text text-transparent"
            style={{ color: "#19b4bc" }}
          >
            Natural Therapies
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base max-w-2xl mx-auto">
            Discover our evidence-informed natural therapies designed to support your body&apos;s innate healing abilities. Each approach is carefully selected to work in harmony with your overall wellness journey.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          <article className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-[#f0fdf4] p-8 shadow-xl ring-1 ring-[#19b4bc]/20 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:ring-2 hover:ring-[#19b4bc]/40">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#19b4bc] to-[#15a2aa] shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <span className="material-symbols-outlined text-2xl text-white">
                cannabis
              </span>
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#19b4bc] to-[#15a2aa] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
              Herbal Medicine
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
              Natural plant-based options that aim to support the body&apos;s own healing systems and address the underlying causes of health concerns, rather than just symptoms.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-[#fef7ed] p-8 shadow-xl ring-1 ring-[#e9762b]/20 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:ring-2 hover:ring-[#e9762b]/40">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e9762b] to-[#d86a25] shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <span className="material-symbols-outlined text-2xl text-white">
                nightlight
              </span>
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#e9762b] to-[#d86a25] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
              Sleep & Rest Support
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
              Holistic approaches aimed at improving sleep quality and supporting healthier sleep patterns through natural interventions and lifestyle guidance.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-[#f0fdf4] p-8 shadow-xl ring-1 ring-[#19b4bc]/20 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:ring-2 hover:ring-[#19b4bc]/40">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#19b4bc] to-[#15a2aa] shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <span className="material-symbols-outlined text-2xl text-white">
                cardiology
              </span>
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#19b4bc] to-[#15a2aa] bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
              Chronic Condition Support
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
              Complementary care that aims to help manage ongoing symptoms of chronic illness and improve overall quality of life, alongside guidance from your usual healthcare providers.
            </p>
          </article>
        </div>
      </section>

      <section
        className="how-lenaleaf-fits-within-lena-medical px-6 pb-20 mx-auto max-w-7xl group"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl bg-gradient-to-r from-[#19b4bc] to-[#15a2aa] bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300"
            style={{ color: "#19b4bc" }}
          >
            How LENA Leaf fits within Lena Medical
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg ring-1 ring-white/50 transform hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#19b4bc]/30 transition-all duration-500 group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-[#19b4bc]/20">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[#19b4bc]/5 to-transparent hover:from-[#19b4bc]/15 transition-all duration-500 hover:scale-102 hover:shadow-lg">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#19b4bc] to-[#15a2aa] shadow-md flex-shrink-0 transform hover:scale-110 hover:rotate-6 transition-all duration-500">
                  <span className="material-symbols-outlined text-lg text-white">
                    medical_services
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold transform hover:scale-105 transition-transform duration-300" style={{ color: "#19b4bc" }}>
                    Integrated Care Approach
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 hover:text-slate-700 transition-colors duration-300">
                    LENA Leaf is part of Lena Medical&apos;s broader telehealth services, offering
                    a focused space for patients interested in natural and complementary
                    options. It is designed to work alongside your existing care, not replace
                    medical advice from your regular clinicians.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[#e9762b]/5 to-transparent hover:from-[#e9762b]/15 transition-all duration-500 hover:scale-102 hover:shadow-lg">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#e9762b] to-[#d86a25] shadow-md flex-shrink-0 transform hover:scale-110 hover:rotate-6 transition-all duration-500">
                  <span className="material-symbols-outlined text-lg text-white">
                    health_and_safety
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold transform hover:scale-105 transition-transform duration-300" style={{ color: "#e9762b" }}>
                    Safety First
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 hover:text-slate-700 transition-colors duration-300">
                    Any treatments or recommendations discussed through LENA Leaf should be
                    considered in consultation with your healthcare provider, and may not be
                    suitable for every person or condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
