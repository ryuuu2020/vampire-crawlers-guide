'use client';

import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '/', active: true },
  { label: 'Tier List', href: '/tier-list' },
  { label: 'Best Builds', href: '/builds' },
  { label: 'Card Database', href: '/cards' },
  { label: 'Evolutions', href: '/evolutions' },
  { label: 'Dungeons', href: '/dungeons' },
  { label: 'Beginner Guide', href: '/beginners-guide' },
  { label: 'Strategy Guides', href: '/guides' },
  { label: 'FAQ', href: '/faq' },
];

const STATS = [
  { label: 'CRAWLERS', value: '21', unit: '' },
  { label: 'PATCH', value: '1.0', unit: '' },
  { label: 'EVOLUTIONS', value: '17', unit: '' },
  { label: 'UPDATED', value: '2026-06-26', unit: '' },
];

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-1">
      {/* ===== Mobile menu overlay ===== */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ===== Sidebar ===== */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-56 bg-[#0a0e13] border-r border-border-subtle
          transform transition-transform duration-200
          lg:translate-x-0 lg:static lg:z-auto
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 px-4 h-14 border-b border-border-subtle hover:bg-white/5 transition-colors">
          <div className="w-7 h-7 bg-tactical-blue flex items-center justify-center">
            <span className="text-[10px] font-mono font-bold text-abyss">VC</span>
          </div>
          <span className="font-display text-sm font-semibold tracking-tight text-text-primary">
            Vampire Crawlers
          </span>
        </a>

        {/* Navigation */}
        <nav className="py-4 flex flex-col gap-0.5 flex-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`sidebar-link ${item.active ? 'active' : ''}`}
            >
              <span className="w-1.5 h-1.5 bg-current opacity-40" />
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="p-4 border-t border-border-subtle">
          <p className="text-[11px] font-mono text-text-muted">
            Vampire Crawlers Guide
          </p>
          <p className="text-[10px] font-mono text-text-muted mt-0.5">
            v1.0.0
          </p>
        </div>
      </aside>

      {/* ===== Main content area ===== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* ===== Top Stats Bar ===== */}
        <header className="h-14 border-b border-border-subtle bg-abyss flex items-center px-4 lg:px-6 gap-4 lg:gap-8">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1 p-1"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-4 h-px bg-text-secondary" />
            <span className="block w-4 h-px bg-text-secondary" />
            <span className="block w-4 h-px bg-text-secondary" />
          </button>

          {/* Stats */}
          {STATS.map((stat) => (
            <div key={stat.label} className="hidden sm:flex items-baseline gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">
                {stat.label}
              </span>
              <span className="font-mono text-sm font-semibold text-text-primary tabular-nums">
                {stat.value}
              </span>
            </div>
          ))}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Support Us */}
          <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-text-muted hover:text-tactical-blue transition-colors mr-3">❤️ Support Us</a>

          {/* Status indicator */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse-subtle" />
            <span className="text-[11px] font-mono text-text-muted">ONLINE</span>
          </div>
        </header>

        {/* ===== Page content ===== */}
        <main className="flex-1 bg-tactical-grid">
          {children}
        </main>

        {/* ===== Footer ===== */}
        <footer className="border-t border-border-subtle bg-abyss">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6">
            {/* More Game Guides */}
            <div className="mb-4 pb-4 border-b border-border-subtle">
              <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">More Strategy Game Guides</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://menace-guide.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-text-secondary hover:text-tactical-blue transition-colors">MENACE Guide</a>
                <a href="https://tabletop-tavern-guide.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-text-secondary hover:text-tactical-blue transition-colors">Tabletop Tavern Guide</a>
                <a href="https://dispatch-guide-sigma.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-text-secondary hover:text-tactical-blue transition-colors">Dispatch Guide</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-[11px] font-mono text-text-muted">
                <span>&copy; {new Date().getFullYear()} Vampire Crawlers Guide</span>
                <a href="/privacy" className="hover:text-text-secondary transition-colors">
                  Privacy
                </a>
                <a href="/terms" className="hover:text-text-secondary transition-colors">
                  Terms
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://afdian.com/a/gameguidehub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-tactical-blue hover:text-tactical-blue-dim transition-colors"
                >
                  SUPPORT ON AFDIAN
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
