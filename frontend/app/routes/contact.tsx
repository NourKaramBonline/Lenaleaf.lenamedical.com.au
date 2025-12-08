import type { Route } from "./+types/contact";
import { useState } from "react";

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/contact-handler.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          topic: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className="min-h-screen text-slate-900" style={{ background: "radial-gradient(circle at top left, rgba(25,180,188,0.16), transparent 55%), radial-gradient(circle at bottom right, rgba(233,118,43,0.16), transparent 55%), linear-gradient(135deg, #f4fbfc, #fdf7f2)" }}>
      <section className="px-6 pt-10 pb-12 mx-auto max-w-7xl lg:pt-14 lg:pb-16">
        <div className="space-y-12">
          {/* Header and Contact Info Section */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                Contact
                <span className="ml-1" style={{ color: "#e9762b" }}>
                  LENA Leaf
                </span>
              </p>

              <h1
                className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
                style={{ color: "#19b4bc" }}
              >
                We are here to help
              </h1>

              <p className="text-sm leading-relaxed text-slate-700 sm:text-base max-w-2xl mx-auto">
                Have questions about eligibility, appointments or how LENA Leaf alternative medicine
                might support you? Send us a message and our team will be in touch.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto text-sm text-slate-700">
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 via-white/60 to-slate-50/80 p-6 shadow-lg backdrop-blur-sm ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#19b4bc]/5 via-transparent to-[#e9762b]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#19b4bc]/10 to-[#19b4bc]/20">
                      <svg className="h-5 w-5 text-[#19b4bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs font-semibold tracking-[0.16em] uppercase text-slate-500">
                      General enquiries
                    </p>
                  </div>
                  <p className="font-semibold text-[rgb(12,122,136)] text-base mb-2">Lena Medical reception</p>
                  <p className="text-sm text-slate-600 mb-4">
                    For questions about bookings, telehealth or clinic information.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-[#e9762b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                      <a
                        href="mailto:info@lenamedical.com.au"
                        className="text-[rgb(12,122,136)] font-medium hover:text-[#e9762b] transition-colors duration-200"
                      >
                        info@lenamedical.com.au
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-[#e9762b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-medium">0461 562 706</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 via-white/70 to-orange-50/80 p-6 shadow-lg backdrop-blur-sm ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e9762b]/5 via-transparent to-[#19b4bc]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e9762b]/10 to-[#e9762b]/20">
                      <svg className="h-5 w-5 text-[#e9762b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8a2 2 0 100-4 2 2 0 000 4zm0 0v3m-3-3h6m-6 0H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v6a4 4 0 01-4 4h-1" />
                      </svg>
                    </div>
                    <p className="text-xs font-semibold tracking-[0.16em] uppercase text-slate-500">
                      Appointments
                    </p>
                  </div>
                  <p className="font-semibold text-[rgb(12,122,136)] text-base mb-2">Book or manage consults</p>
                  <p className="text-sm text-slate-600 mb-4">
                    For new or existing patients looking to book a LENA Leaf telehealth consult.
                  </p>
                  <a
                    href="https://lenamedical.com.au/appointments/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#e9762b] to-[#e9762b]/90 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:from-[#e9762b]/90 hover:to-[#e9762b]"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8a2 2 0 100-4 2 2 0 000 4zm0 0v3m-3-3h6m-6 0H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v6a4 4 0 01-4 4h-1" />
                    </svg>
                    Book appointment
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-40" style={{ backgroundColor: "#19b4bc55" }} />
            <div className="absolute -bottom-12 -left-16 h-52 w-52 rounded-full blur-3xl opacity-40" style={{ backgroundColor: "#e9762b55" }} />

            <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-white/95 via-white/90 to-slate-50/80 p-8 shadow-2xl backdrop-blur-sm ring-1 ring-white/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#19b4bc]/3 via-transparent to-[#e9762b]/3" />
              <div className="relative">
                <div className="mb-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#19b4bc]/10 to-[#e9762b]/10">
                    <svg className="h-8 w-8 text-[#19b4bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#e9762b] to-[#19b4bc] bg-clip-text text-transparent">Send us a message</h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Share a few details and we will get back to you as soon as we can.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="group relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="peer block w-full rounded-2xl border-2 border-slate-200/60 bg-white/50 px-4 py-4 text-sm text-[#19b4bc] backdrop-blur-sm transition-all duration-200 placeholder:text-transparent focus:border-[#19b4bc] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#19b4bc]/10"
                        placeholder="Your name"
                        required
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-4 top-4 text-sm text-slate-600 transition-all duration-200 peer-placeholder-shown:text-slate-400 peer-focus:-top-2 peer-focus:left-3 peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs peer-focus:font-medium peer-focus:text-[#19b4bc] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:text-[#19b4bc]"
                      >
                        Full name
                      </label>
                    </div>
                    <div className="group relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="peer block w-full rounded-2xl border-2 border-slate-200/60 bg-white/50 px-4 py-4 text-sm text-[#19b4bc] backdrop-blur-sm transition-all duration-200 placeholder:text-transparent focus:border-[#19b4bc] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#19b4bc]/10"
                        placeholder="you@example.com"
                        required
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 top-4 text-sm text-slate-600 transition-all duration-200 peer-placeholder-shown:text-slate-400 peer-focus:-top-2 peer-focus:left-3 peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs peer-focus:font-medium peer-focus:text-[#19b4bc] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:text-[#19b4bc]"
                      >
                        Email address
                      </label>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="group relative">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="peer block w-full rounded-2xl border-2 border-slate-200/60 bg-white/50 px-4 py-4 text-sm text-[#19b4bc] backdrop-blur-sm transition-all duration-200 placeholder:text-transparent focus:border-[#19b4bc] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#19b4bc]/10"
                        placeholder="Best contact number"
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-4 top-4 text-sm text-slate-600 transition-all duration-200 peer-placeholder-shown:text-slate-400 peer-focus:-top-2 peer-focus:left-3 peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs peer-focus:font-medium peer-focus:text-[#19b4bc] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:text-[#19b4bc]"
                      >
                        Phone (optional)
                      </label>
                    </div>
                    <div className="group relative">
                      <select
                        id="topic"
                        name="topic"
                        value={formData.topic}
                        onChange={handleInputChange}
                        className="peer block w-full rounded-2xl border-2 border-slate-200/60 bg-white/50 px-4 py-4 text-sm text-slate-400 backdrop-blur-sm transition-all duration-200 focus:border-[#19b4bc] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#19b4bc]/10"
                        required
                      >
                        <option value="" disabled hidden>What is your enquiry about?</option>
                        <option value="eligibility">Eligibility</option>
                        <option value="appointments">Appointments</option>
                        <option value="treatment">Treatment questions</option>
                        <option value="other">Other</option>
                      </select>
                      <label
                        htmlFor="topic"
                        className="absolute left-4 -top-2 bg-white px-2 text-xs font-medium text-[#19b4bc]"
                      >
                        What is your enquiry about?
                      </label>
                    </div>
                  </div>

                  <div className="group relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="peer block w-full rounded-2xl border-2 border-slate-200/60 bg-white/50 px-4 py-4 text-sm text-[#19b4bc] backdrop-blur-sm transition-all duration-200 placeholder:text-transparent focus:border-[#19b4bc] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#19b4bc]/10 resize-none"
                      placeholder="Share any details you're comfortable with. Please don't include urgent medical concerns – call 000 in an emergency."
                      required
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-4 text-sm text-slate-600 transition-all duration-200 peer-placeholder-shown:text-slate-400 peer-focus:-top-2 peer-focus:left-3 peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs peer-focus:font-medium peer-focus:text-[#19b4bc] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:text-[#19b4bc]"
                    >
                      How can we help?
                    </label>
                  </div>

                  <div className="rounded-2xl bg-amber-50/50 border border-amber-200/50 p-4">
                    <div className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <p className="text-sm text-amber-800">
                        <span className="font-semibold">Emergency Notice:</span> LENA Leaf cannot provide emergency support. If you or someone else is in danger, call 000 or go to your nearest emergency department.
                      </p>
                    </div>
                  </div>

                  {/* Status Message */}
                  {submitStatus !== 'idle' && (
                    <div className={`rounded-2xl p-4 ${
                      submitStatus === 'success' 
                        ? 'bg-green-50/50 border border-green-200/50' 
                        : 'bg-red-50/50 border border-red-200/50'
                    }`}>
                      <div className="flex items-start gap-3">
                        <svg className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                          submitStatus === 'success' ? 'text-green-600' : 'text-red-600'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {submitStatus === 'success' ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          )}
                        </svg>
                        <p className={`text-sm ${
                          submitStatus === 'success' ? 'text-green-800' : 'text-red-800'
                        }`}>
                          {submitMessage}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-center pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#19b4bc] to-[#19b4bc]/90 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-[#19b4bc]/90 hover:to-[#19b4bc] focus:outline-none focus:ring-4 focus:ring-[#19b4bc]/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      {isSubmitting ? (
                        <>
                          <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Send message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 text-xs sm:text-[13px] text-slate-700">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: "#19b4bc" }}>
              Telehealth availability
            </h2>
            <p>
              LENA Leaf telehealth consults are available Australia-wide for eligible patients. You
              will need a stable internet connection and a private space for your appointment.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: "#e9762b" }}>
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
