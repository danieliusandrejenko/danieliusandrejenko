export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Danielius Andrejenko. Built for internship recruiters.</p>
        <div className="flex gap-4">
          <a href="#home" className="transition hover:text-white">
            Back to top
          </a>
          <a href="https://doraseda.lt" target="_blank" rel="noreferrer" className="transition hover:text-white">
            Doraseda Butikas
          </a>
        </div>
      </div>
    </footer>
  );
}
