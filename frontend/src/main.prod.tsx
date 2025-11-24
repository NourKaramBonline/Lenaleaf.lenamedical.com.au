import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'

// Import the root component
const Root = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  return React.createElement('div', null, 
    React.createElement('header', { className: "sticky top-0 z-40 border-b border-slate-100 bg-white" },
      React.createElement('nav', { className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3" },
        React.createElement('a', { href: "/", className: "flex items-center gap-3" },
          React.createElement('img', {
            src: "/icon/logo-transparent.png",
            alt: "LENA Leaf logo",
            className: "h-10 w-auto object-contain md:h-12 transform scale-150"
          })
        ),
        React.createElement('div', { className: "flex items-center gap-4" },
          React.createElement('div', { className: "hidden items-center gap-3 text-[15px] font-medium md:flex" },
            navigationLinks.map(link =>
              React.createElement('a', {
                key: link.href,
                href: link.href,
                className: "group relative px-4 py-2 text-[15px] text-[rgb(12,122,136)] transition-colors duration-150 hover:text-[color:#19b4bc]"
              },
                React.createElement('span', { className: "relative z-10 inline-block transition-transform duration-150 group-hover:-translate-y-0.5" }, link.label),
                React.createElement('span', { className: "pointer-events-none absolute inset-x-3 -bottom-0.5 h-[2px] origin-center scale-x-0 rounded-full bg-[color:#19b4bc] transition-transform duration-200 ease-out group-hover:scale-x-100" })
              )
            )
          ),
          React.createElement('a', {
            href: "https://lenamedical.com.au/appointments/",
            target: "_blank",
            rel: "noreferrer",
            className: "hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform duration-150 hover:scale-[1.02]",
            style: { backgroundColor: "#e9762b" }
          }, "Book Appointment")
        )
      )
    ),
    React.createElement('main', null,
      React.createElement('section', { className: "relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[rgb(12,122,136)] to-[rgb(19,180,188)]" },
        React.createElement('div', { className: "text-center text-white px-6" },
          React.createElement('h1', { className: "text-4xl md:text-6xl font-bold mb-6" }, "Welcome to LenaLeaf"),
          React.createElement('p', { className: "text-xl md:text-2xl mb-8 opacity-90" }, "Your trusted telehealth service for natural and holistic health support"),
          React.createElement('a', {
            href: "https://lenamedical.com.au/appointments/",
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-150 hover:scale-[1.05]",
            style: { backgroundColor: "#e9762b" }
          }, "Book Appointment")
        )
      )
    ),
    React.createElement('footer', { className: "border-t border-slate-100 bg-slate-100" },
      React.createElement('div', { className: "mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 md:flex-row md:items-start md:justify-between" },
        React.createElement('div', { className: "space-y-4 max-w-sm" },
          React.createElement('div', { className: "flex items-center gap-3" },
            React.createElement('img', {
              src: "/icon/logo-transparent.png",
              alt: "LENA Leaf logo",
              className: "h-14 w-auto object-contain md:h-16"
            })
          ),
          React.createElement('p', { className: "text-xs leading-relaxed text-slate-500" }, "LENA Leaf is a dedicated telehealth service by Lena Medical, helping eligible patients access natural and holistic health support online.")
        )
      )
    )
  );
};

// Create a simple router for static deployment
const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(Root),
    errorElement: React.createElement('div', { className: "p-8 text-center" }, "Page not found")
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
