const links = [
  {
    label: "Email",
    href: "mailto:hello@example.com",
    display: "hello@example.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    display: "LinkedIn",
  },
  {
    label: "GitHub",
    href: "https://github.com/yourprofile",
    display: "GitHub",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/yourhandle",
    display: "Twitter",
  },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="grid-section">
        <div className="px-6 md:px-12 pt-12 md:pt-16 pb-20 md:pb-24">
          <h2 className="text-[1.75rem] md:text-[2rem] font-semibold tracking-tight mb-6">
            Get in touch
          </h2>
          <p className="text-base leading-relaxed text-gray-600 mb-8 max-w-2xl">
            Open to new opportunities and interesting projects. Feel free to
            reach out.
          </p>

          <div className="space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-3 border-b border-border hover:border-gray-300 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="label-text text-gray-400">
                    {link.label}
                  </span>
                  <span className="text-sm text-gray-700">
                    {link.display}
                  </span>
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <path
                    d="M3 13L13 3M13 3H5M13 3V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="grid-section">
        <div className="px-6 md:px-12 py-8">
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </>
  );
}
