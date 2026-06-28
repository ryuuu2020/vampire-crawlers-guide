/* ============================================
   Vampire Crawlers Guide — Tactical Command Center
   Home page content only — chrome in layout.tsx
   ============================================ */

const TIER_DATA = [
  { tier: 'S', name: 'Christine', weapon: 'Pentagram', unlock: 'Unlock & use Pentagram' },
  { tier: 'S', name: 'Pugnala Provola', weapon: 'Phiera / Eight', unlock: 'Find coffin in Berserk Wood' },
  { tier: 'S', name: 'Poppea', weapon: 'Song of Mana', unlock: 'Find coffin in Milk Factory' },
  { tier: 'A', name: 'Suor Clerici', weapon: 'Santa Water', unlock: 'Recover 1,000 HP total' },
  { tier: 'A', name: 'Arca', weapon: 'Fire Wand', unlock: 'Play 100 Fire Wand cards' },
];

const RECENT_UPDATES = [
  { date: '2026-06-26', title: 'Combo Chain Guide: How to Build 20x+ Multipliers', tag: 'BUILD' },
  { date: '2026-06-25', title: 'All 21 Crawlers Ranked: S-Tier to C-Tier', tag: 'TIER' },
  { date: '2026-06-24', title: 'Weapon Evolution Recipes: Complete Chart', tag: 'GUIDE' },
  { date: '2026-06-23', title: 'Vampire Crawlers Hits 17,000+ Steam Reviews', tag: 'NEWS' },
];

function getTierColor(tier: string): string {
  switch (tier) {
    case 'S': return 'text-[#f0883e]';
    case 'A': return 'text-[#58a6ff]';
    case 'B': return 'text-[#3fb950]';
    default: return 'text-text-secondary';
  }
}

import Image from 'next/image';
export const metadata = {
  title: "Vampire Crawlers Vampire Crawlers Guide — Complete Guide (2026)",
  description:
    "The definitive deckbuilder resource — cards, builds, evolutions & tier lists",
};


export default function HomePage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* ===== Hero Banner ===== */}
        <section className="relative overflow-hidden border border-border-subtle bg-abyss-light">
          <Image
            src="/hero.jpg"
            alt="Vampire Crawlers"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss-light via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
            <h1 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-text-primary">
              Vampire Crawlers Guide
            </h1>
            <p className="text-sm font-mono text-text-secondary mt-1">
              The definitive deckbuilder resource — cards, builds, evolutions & tier lists
            </p>
          </div>
        </section>

        {/* ===== Section: Character Tier List Preview ===== */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary">
                Crawler Tier List
              </h2>
              <p className="text-xs font-mono text-text-muted mt-1">
                Patch 1.0 — S/A/B/C rankings based on community consensus
              </p>
            </div>
            <a
              href="/tier-list"
              className="text-xs font-mono text-tactical-blue hover:text-tactical-blue-dim transition-colors"
            >
              VIEW ALL &rarr;
            </a>
          </div>

          {/* Data table */}
          <div className="bg-abyss-light border border-border-subtle overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-grid-line">
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted w-12">
                    TIER
                  </th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">
                    CRAWLER
                  </th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">
                    STARTING WEAPON
                  </th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">
                    UNLOCK CONDITION
                  </th>
                </tr>
              </thead>
              <tbody>
                {TIER_DATA.map((row, i) => (
                  <tr key={i} className="data-row">
                    <td className="py-2.5 px-4">
                      <span className={`font-mono font-bold text-sm ${getTierColor(row.tier)}`}>
                        {row.tier}
                      </span>
                    </td>
                    <td className="py-2.5 px-4">
                      <a
                        href="/tier-list"
                        className="text-text-primary hover:text-tactical-blue transition-colors"
                      >
                        {row.name}
                      </a>
                    </td>
                    <td className="py-2.5 px-4">
                      <span className="tag">{row.weapon}</span>
                    </td>
                    <td className="py-2.5 px-4 text-text-secondary text-xs">
                      {row.unlock}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== Section: Quick Stats Grid ===== */}
        <section>
          <div className="mb-4">
            <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary">
              Quick Stats
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: 'Total Crawlers', value: '21', change: 'all unlockable' },
              { label: 'Weapon Evolutions', value: '17', change: '15 standard + 2 unions' },
              { label: 'Steam Achievements', value: '161', change: 'completionist challenge' },
              { label: 'Dungeons', value: '7+', change: 'progressive unlock' },
            ].map((card, i) => (
              <div key={i} className="stat-card">
                <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">
                  {card.label}
                </p>
                <p className="font-mono text-stat text-text-primary tabular-nums">
                  {card.value}
                </p>
                <p className="text-xs font-mono mt-1 tabular-nums text-text-muted">
                  {card.change}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Section: Core Navigation Cards ===== */}
        <section>
          <div className="mb-4">
            <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary">
              Explore Guides
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: 'Tier List', desc: 'All 21 Crawlers, weapons, power ups, and Arcana ranked S through C', href: '/tier-list', tag: 'META' },
              { title: 'Best Builds', desc: 'Deck archetypes, combo routes, and optimal card chains for every Crawler', href: '/builds', tag: 'BUILDS' },
              { title: 'Card Database', desc: 'Complete card list: weapon, item, armor, utility, wild, and draw cards', href: '/cards', tag: 'DATA' },
              { title: 'Evolutions', desc: 'Every weapon evolution recipe with base card + item card combinations', href: '/evolutions', tag: 'GUIDE' },
              { title: 'Dungeons', desc: 'Dungeon unlock order, boss strategies, and hidden secrets', href: '/dungeons', tag: 'GUIDE' },
              { title: 'Beginner Guide', desc: 'Combo system, gems, blacksmith, village upgrades — start here', href: '/beginners-guide', tag: 'START' },
            ].map((card, i) => (
              <a
                key={i}
                href={card.href}
                className="stat-card hover:border-tactical-blue/40 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-tactical-blue">
                    {card.tag}
                  </span>
                  <span className="text-text-muted group-hover:text-tactical-blue transition-colors text-sm">
                    &rarr;
                  </span>
                </div>
                <h3 className="font-display text-sm font-semibold text-text-primary mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {card.desc}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* ===== Section: Recent Updates ===== */}
        <section>
          <div className="mb-4">
            <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary">
              Recent Updates
            </h2>
          </div>
          <div className="bg-abyss-light border border-border-subtle">
            {RECENT_UPDATES.map((update, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 px-4 py-3 ${
                  i < RECENT_UPDATES.length - 1 ? 'border-b border-grid-line' : ''
                }`}
              >
                <span className="text-xs font-mono text-text-muted w-20 tabular-nums shrink-0">
                  {update.date}
                </span>
                <span
                  className={`text-[10px] font-mono uppercase px-1.5 py-0.5 border shrink-0 ${
                    update.tag === 'BUILD'
                      ? 'text-tactical-blue border-tactical-blue/30 bg-tactical-blue/5'
                      : update.tag === 'GUIDE'
                      ? 'text-terminal-green border-terminal-green/30 bg-terminal-green/5'
                      : update.tag === 'NEWS'
                      ? 'text-warning-orange border-warning-orange/30 bg-warning-orange/5'
                      : 'text-text-secondary border-border-subtle'
                  }`}
                >
                  {update.tag}
                </span>
                <a
                  href="/news"
                  className="text-sm text-text-primary hover:text-tactical-blue transition-colors truncate"
                >
                  {update.title}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Terminal block ===== */}
        <div className="terminal-block">
          <p className="text-text-muted mb-1">
            <span className="text-warning-orange">$</span> system.status
          </p>
          <p>build: v1.0.0 / patch: 1.0</p>
          <p>data.update_interval: Daily</p>
          <p className="cursor-blink">ready</p>
        </div>

      </div>
    </div>
  );
}
