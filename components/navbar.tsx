const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/15 bg-slate-950/55 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="#top" className="text-lg font-semibold tracking-wide text-white">
          Juhi Bhandari
        </a>
        <div className="flex items-center gap-4 text-sm font-medium text-slate-200">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 transition hover:bg-white/15 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
