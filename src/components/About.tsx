export default function About() {
  return (
    <section className="grid-section">
      <div className="px-6 md:px-12 pt-12 md:pt-16 pb-20 md:pb-24">
        <h2 className="text-[1.75rem] md:text-[2rem] font-semibold tracking-tight mb-6">
          About
        </h2>
        <div className="space-y-3 text-base leading-relaxed text-gray-600 mb-10">
          <p>
            Software engineer with a focus on backend systems and
            infrastructure. I build scalable services, optimize performance
            bottlenecks, and architect solutions that handle millions of
            requests.
          </p>
          <p>
            Currently working on distributed systems, API design, and
            developer tooling. I care about clean code, efficient algorithms,
            and building systems that just work.
          </p>
        </div>

        <div>
          <p className="label-text mb-3 text-gray-400">CURRENTLY</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-3">
              <span className="text-gray-400">—</span>
              <span>Building microservices with Go and Kubernetes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">—</span>
              <span>Optimizing database queries and caching strategies</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">—</span>
              <span>Contributing to open-source infrastructure tools</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">—</span>
              <span>Learning about distributed consensus algorithms</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
