import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tabletop Tavern Faction Tier List (2026) — Best Factions Ranked S to B',
  description: 'Complete Tabletop Tavern faction tier list for patch 1.0.2. Vikings, Orcs, Elves, Humans, Dwarves ranked by campaign win rate and pick rate. Find the best faction for your playstyle.',
};

const TIER_DATA = [
  { tier: 'S', name: 'Vikings', role: 'Elite Infantry', win: '58%', pick: '32%', desc: 'Berserker infantry with unmatched frontline pressure. High damage output and sustain through aggressive trading. Best for experienced players who can manage economy while pushing tempo.' },
  { tier: 'S', name: 'Orcs', role: 'Heavy Bruiser', win: '55%', pick: '28%', desc: 'Trolls and giants dominate the battlefield with raw stats. Weak to massed pike formations but crushes balanced armies. Highest HP pool of any faction.' },
  { tier: 'A', name: 'Elves', role: 'Agile Ranged', win: '52%', pick: '18%', desc: 'Fast, fragile, and deadly at range. Requires precise positioning and protection. Highest skill ceiling — devastating in the right hands but unforgiving of mistakes.' },
  { tier: 'A', name: 'Humans', role: 'Balanced Flex', win: '50%', pick: '14%', desc: 'No glaring weaknesses, no overwhelming strengths. Best faction for learning the game. Flexible roster allows adaptation to any campaign situation.' },
  { tier: 'B', name: 'Dwarves', role: 'Defensive Line', win: '47%', pick: '8%', desc: 'Resilient defensive specialists. Excellent at holding chokepoints but struggles in open-field engagements. Low pick rate due to slow playstyle — but solid win rate for patient players.' },
];

function getTierColor(tier: string): string {
  switch (tier) {
    case 'S': return 'text-[#f0883e]';
    case 'A': return 'text-[#58a6ff]';
    case 'B': return 'text-[#3fb950]';
    default: return 'text-text-secondary';
  }
}

function getTierBg(tier: string): string {
  switch (tier) {
    case 'S': return 'bg-[#f0883e]/10 border-[#f0883e]/30';
    case 'A': return 'bg-[#58a6ff]/10 border-[#58a6ff]/30';
    case 'B': return 'bg-[#3fb950]/10 border-[#3fb950]/30';
    default: return 'bg-abyss-light border-border-subtle';
  }
}

export default function TierListPage() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b border-border-subtle bg-abyss flex items-center px-4 lg:px-6">
          <a href="/" className="text-xs font-mono text-tactical-blue hover:text-tactical-blue-dim">&larr; Back to Command Center</a>
          <div className="flex-1" />
          <span className="w-1.5 h-1.5 rounded-full bg-terminal-green" />
          <span className="text-[11px] font-mono text-text-muted ml-2">ONLINE</span>
        </header>
        <main className="flex-1 bg-tactical-grid p-4 lg:p-6">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Hero */}
            <section>
              <h1 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-text-primary">
                Tabletop Tavern Faction Tier List (2026)
              </h1>
              <p className="text-sm text-text-secondary mt-3 max-w-2xl">
                Updated for patch 1.0.2. Rankings based on campaign win rate data, pick rate, and overall consistency across difficulty levels. Factions are evaluated on their ability to clear full campaigns reliably.
              </p>
            </section>

            {/* FAQ Snippets */}
            <div className="bg-abyss-light border border-border-subtle p-4 space-y-2">
              <details className="group">
                <summary className="text-sm font-semibold text-text-primary cursor-pointer hover:text-tactical-blue transition-colors">What is the best faction in Tabletop Tavern?</summary>
                <p className="text-sm text-text-secondary mt-2 pl-4 border-l-2 border-border-subtle">
                  Vikings are currently the strongest faction with a 58% win rate, thanks to elite infantry that dominates early and mid-game. Orcs are a close second at 55%, excelling with brute-force heavy units.
                </p>
              </details>
              <details className="group">
                <summary className="text-sm font-semibold text-text-primary cursor-pointer hover:text-tactical-blue transition-colors">Which faction should beginners pick?</summary>
                <p className="text-sm text-text-secondary mt-2 pl-4 border-l-2 border-border-subtle">
                  Humans are the best starting faction — their balanced roster means you can recover from mistakes and adapt to any campaign situation without being hard-countered.
                </p>
              </details>
              <details className="group">
                <summary className="text-sm font-semibold text-text-primary cursor-pointer hover:text-tactical-blue transition-colors">Are Dwarves actually bad or just underplayed?</summary>
                <p className="text-sm text-text-secondary mt-2 pl-4 border-l-2 border-border-subtle">
                  Dwarves are underrated, not bad. Their 47% win rate reflects a low 8% pick rate. In skilled hands on defensive maps, they can achieve 50%+ win rates. Their slow playstyle is the main barrier to popularity.
                </p>
              </details>
            </div>

            {/* Tier Table */}
            <section>
              <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary mb-4">Faction Rankings</h2>
              <div className="space-y-3">
                {TIER_DATA.map((faction, i) => (
                  <div key={i} className={`border p-4 ${getTierBg(faction.tier)}`}>
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className={`font-mono font-bold text-2xl ${getTierColor(faction.tier)}`}>{faction.tier}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-base font-semibold text-text-primary">{faction.name}</h3>
                        <span className="tag text-[10px] mt-1 inline-block">{faction.role}</span>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-center">
                          <p className="text-[10px] font-mono text-text-muted">WIN%</p>
                          <p className="font-mono text-sm font-semibold text-text-primary tabular-nums">{faction.win}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] font-mono text-text-muted">PICK%</p>
                          <p className="font-mono text-sm font-semibold text-text-primary tabular-nums">{faction.pick}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary mt-3 leading-relaxed">{faction.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Matchup Table */}
            <section>
              <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary mb-4">Faction Matchup Matrix</h2>
              <div className="bg-abyss-light border border-border-subtle overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-grid-line">
                      <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">Faction</th>
                      <th className="text-center py-2.5 px-3 text-[10px] font-mono uppercase tracking-wider text-text-muted">vs Vikings</th>
                      <th className="text-center py-2.5 px-3 text-[10px] font-mono uppercase tracking-wider text-text-muted">vs Orcs</th>
                      <th className="text-center py-2.5 px-3 text-[10px] font-mono uppercase tracking-wider text-text-muted">vs Elves</th>
                      <th className="text-center py-2.5 px-3 text-[10px] font-mono uppercase tracking-wider text-text-muted">vs Humans</th>
                      <th className="text-center py-2.5 px-3 text-[10px] font-mono uppercase tracking-wider text-text-muted">vs Dwarves</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Vikings', '—', 'Even', 'Favored', 'Favored', 'Unfavored'],
                      ['Orcs', 'Even', '—', 'Favored', 'Favored', 'Unfavored'],
                      ['Elves', 'Unfavored', 'Unfavored', '—', 'Even', 'Favored'],
                      ['Humans', 'Unfavored', 'Unfavored', 'Even', '—', 'Favored'],
                      ['Dwarves', 'Favored', 'Favored', 'Unfavored', 'Unfavored', '—'],
                    ].map((row, i) => (
                      <tr key={i} className="data-row">
                        {row.map((cell, j) => (
                          <td key={j} className={`py-2.5 px-3 text-center font-mono text-xs tabular-nums ${
                            j === 0 ? 'text-left font-semibold text-text-primary' :
                            cell === 'Favored' ? 'text-terminal-green' :
                            cell === 'Unfavored' ? 'text-terminal-red' :
                            'text-text-muted'
                          }`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Methodology */}
            <section>
              <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary mb-3">How We Rank</h2>
              <div className="bg-abyss-light border border-border-subtle p-4 space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>Faction rankings are based on aggregated player-reported campaign completion data, cross-referenced with community tournament results and expert consensus.</p>
                <p><span className="font-semibold text-text-primary">Win Rate</span>: Percentage of campaigns successfully completed with each faction across all difficulty levels.</p>
                <p><span className="font-semibold text-text-primary">Pick Rate</span>: How often the faction is chosen, indicating popularity and perceived strength.</p>
                <p><span className="font-semibold text-text-primary">Consistency</span>: How reliably the faction performs — low variance factions are rated higher even with slightly lower peak win rates.</p>
                <p className="text-text-muted text-xs mt-4">Data updated: June 25, 2026. Based on community reports and may not reflect individual skill differences.</p>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border-subtle pt-6 mt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-text-muted">
                <span>&copy; {new Date().getFullYear()} Tabletop Tavern Guide</span>
                <div className="flex items-center gap-4">
                  <a href="/privacy" className="hover:text-text-secondary">Privacy</a>
                  <a href="/terms" className="hover:text-text-secondary">Terms</a>
                  <a href="/faq" className="hover:text-text-secondary">FAQ</a>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
