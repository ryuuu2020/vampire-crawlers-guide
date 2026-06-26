/* ============================================
   Vampire Crawlers Guide — Strategy Guides Hub
   ============================================ */

const GUIDE_SECTIONS = [
  {
    title: 'Getting Started',
    guides: [
      { name: 'Beginner\'s Guide', desc: 'Core mechanics, combo system, gems, village upgrades, and first-run walkthrough.', href: '/beginners-guide' },
      { name: 'FAQ', desc: '12 common questions answered with accurate game data.', href: '/faq' },
    ],
  },
  {
    title: 'Meta & Rankings',
    guides: [
      { name: 'Tier List', desc: 'All 21 Crawlers, weapon cards, power ups, and Arcana ranked S through C.', href: '/tier-list' },
      { name: 'Best Builds', desc: '5 build archetypes with card orders, Arcana synergies, and combo examples.', href: '/builds' },
    ],
  },
  {
    title: 'Reference Data',
    guides: [
      { name: 'Card Database', desc: 'All card types: weapon, item, armor, utility, wild, and draw. Draft priority guide.', href: '/cards' },
      { name: 'Weapon Evolutions', desc: 'Complete chart of all 17 evolution recipes (15 standard + 2 unions).', href: '/evolutions' },
      { name: 'Dungeon Guide', desc: 'All 7+ dungeons with unlock conditions, boss strategies, and unlockable characters.', href: '/dungeons' },
    ],
  },
];

export default function GuidesPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-text-primary mb-2">
            Strategy Guides
          </h1>
          <p className="text-sm text-text-secondary">
            Browse all Vampire Crawlers guides by category. Whether you are a beginner learning the combo system or an experienced player optimizing your build, you will find what you need here.
          </p>
        </div>

        {GUIDE_SECTIONS.map((section, i) => (
          <section key={i}>
            <h2 className="font-display text-lg font-semibold text-text-primary mb-3">
              {section.title}
            </h2>
            <div className="space-y-3">
              {section.guides.map((guide, j) => (
                <a
                  key={j}
                  href={guide.href}
                  className="stat-card block hover:border-tactical-blue/40 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-display text-sm font-semibold text-text-primary mb-1">
                        {guide.name}
                      </h3>
                      <p className="text-xs text-text-secondary">{guide.desc}</p>
                    </div>
                    <span className="text-text-muted group-hover:text-tactical-blue transition-colors ml-3">
                      &rarr;
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}

        <div className="terminal-block">
          <p className="text-text-muted mb-1">
            <span className="text-warning-orange">$</span> guides.index
          </p>
          <p>total_guides: 8 | categories: 3</p>
          <p className="cursor-blink">index loaded</p>
        </div>
      </div>
    </div>
  );
}
