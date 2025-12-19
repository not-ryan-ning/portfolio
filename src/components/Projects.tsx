const projects = [
  {
    id: 1,
    year: "Summer 2026",
    title: "Uber",
    description: "🏁 Incoming",
    role: "Software Engineering Intern",
    companyInitial: "Uber",
    link: "#",
  },
  {
    id: 2,
    year: "Summer — Fall 2025",
    title: "Shopify",
    description:
      "🛍️ Made commerce better for everyone on the Subscriptions team.",
    role: "Software Engineering Intern",
    companyInitial: "Shop",
    link: "#",
  },
  {
    id: 3,
    year: "Winter 2025",
    title: "AI research",
    description:
      "👾 Developed AI agents using adversarial search and heuristic optimization to play Gomoku.",
    role: "Undergraduate Researcher",
    companyInitial: "UofT",
    link: "#",
  },
  {
    id: 4,
    year: "Summer 2024",
    title: "Startup",
    description:
      "🚀 Co-founded and built a startup in DMZ Basecamp's Summer 2024 incubator cohort.",
    role: "Technical Co-Founder",
    companyInitial: "DMZ",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="work" className="grid-section">
      <div className="p-6 md:p-12">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-[1.75rem] md:text-[2rem] font-semibold tracking-tight">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[2rem] md:left-[2.5rem] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16">
            {projects.map((project, index) => (
              <article key={project.id} className="group relative">
                <a href={project.link} className="block">
                  <div className="flex items-start gap-6 mb-4">
                    {/* Company Logo Badge */}
                    <div className="relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg border border-border flex items-center justify-center bg-white group-hover:border-gray-300 transition-colors z-10">
                      <span className="text-xl md:text-2xl font-semibold text-gray-700">
                        {project.companyInitial}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <p className="label-text text-gray-400">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <h3 className="text-[1.5rem] md:text-[1.75rem] font-semibold tracking-tight group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-base leading-relaxed text-gray-600 max-w-3xl mb-6">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                        <div>
                          <p className="label-text mb-1 text-bold">YEAR</p>
                          <p className="text-gray-700">{project.year}</p>
                        </div>
                        <div>
                          <p className="label-text mb-1 text-gray-400">ROLE</p>
                          <p className="text-gray-700">{project.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
