export default function NewsPage() {
  const news = [
    {
      date: '2026-06-11',
      title: 'Tabletop Tavern Released on Steam',
      summary: 'Tabletop Tavern launched on Steam by developer TJ (Frostbloom / Gamirror Games). The game is a roguelike RTS where you build an army from scratch and command them across a brutal campaign. Features 5 factions, 25 Steam achievements, and procedurally generated campaigns.',
    },
    {
      date: '2026-06-26',
      title: 'Patch 1.6.24: Melee Rebalance + Control Improvements',
      summary: "TJ and Gamirror Games released patch 1.6.24 for Tabletop Tavern, focusing on melee combat rebalancing and control improvements. Melee units across all 5 factions received adjusted damage scaling — heavy infantry hits harder but attacks slower, while light skirmishers gained faster attack speed at reduced per-hit damage. The patch introduces customizable hotkey rebinding (a top community request) and improved unit pathfinding around terrain obstacles. Campaign AI is now more aggressive on Hard and Nightmare difficulties. Previous patch 1.6.23 laid the engine groundwork for these changes. Existing campaign saves remain fully compatible, though balance changes take effect immediately upon loading.",
    },
    {
      date: '2026-06-25',
      title: 'Community Guide Now Available',
      summary: 'This Tabletop Tavern Guide site is now live, covering faction tier lists, build strategies, campaign map navigation, unit counters, and item synergies. Data sourced from community gameplay and Steam store information.',
    },
  ];

  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-text-primary mb-6">
          News & Updates
        </h1>
        <p className="text-sm text-text-secondary mb-8">
          Latest news and updates about Tabletop Tavern. For official announcements, visit the Steam store page.
        </p>
        <div className="space-y-4">
          {news.map((item, i) => (
            <div key={i} className="bg-abyss-light border border-border-subtle p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-text-muted">{item.date}</span>
              </div>
              <h2 className="font-display text-base font-semibold text-text-primary mb-2">{item.title}</h2>
              <p className="text-sm text-text-secondary leading-relaxed">{item.summary}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted font-mono text-center mt-8">
          This is an unofficial fan site. Updated June 25, 2026.
        </p>
      </div>
    </div>
  );
}
