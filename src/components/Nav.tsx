export default function Nav() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="simple-glass px-8 py-3 rounded-full flex items-center gap-8">
        <a
          href="#"
          className="text-sm font-medium hover:opacity-70 transition-opacity"
        >
          Home
        </a>
        <a
          href="#work"
          className="text-sm font-medium hover:opacity-70 transition-opacity"
        >
          Work
        </a>
        <a
          href="#contact"
          className="text-sm font-medium hover:opacity-70 transition-opacity"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
