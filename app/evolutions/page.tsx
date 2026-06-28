/* ============================================
   Vampire Crawlers Guide — Weapon Evolutions
   Complete evolution recipes and process
   ============================================ */

const STANDARD_EVOLUTIONS = [
  { base: 'Whip', item: 'Hollow Heart', result: 'Bloody Tear', altItem: 'Forever Heart' },
  { base: 'Knife', item: 'Bracer', result: 'Thousand Edge', altItem: '—' },
  { base: 'Magic Wand', item: 'Empty Tome', result: 'Holy Wand', altItem: 'Light Tome, Weighty Tome, Ancient Tome' },
  { base: 'Axe', item: 'Candella', result: 'Death Spiral', altItem: 'Candle, Candelabrador' },
  { base: 'King Bible', item: 'Spellbinder', result: 'Unholy Vespers', altItem: '—' },
  { base: 'Fire Wand', item: 'Spinach', result: 'Hellfire', altItem: 'Sprig o\' Spinach' },
  { base: 'Garlic', item: 'Pummarola', result: 'Soul Eater', altItem: 'Pummadora' },
  { base: 'Runetracer', item: 'Armor', result: 'NO FUTURE', altItem: 'Golden Armor, Rainbow Armor, Hero\'s Armor' },
  { base: 'Santa Water', item: 'Attractor', result: 'La Borra', altItem: '—' },
  { base: 'Lightning Ring', item: 'Duplicator', result: 'Thunder Loop', altItem: '—' },
  { base: 'Cross', item: 'Clover', result: 'Heaven Sword', altItem: '—' },
  { base: 'Song of Mana', item: 'Skull O\'Maniac', result: 'Mannajja', altItem: '—' },
  { base: 'Pentagram', item: 'Crown', result: 'Gorgeous Moon', altItem: '—' },
  { base: 'Gatti Amari', item: 'Stone Mask', result: 'Vicious Hunger', altItem: '—' },
  { base: 'Shadow Pinion', item: 'Wings', result: 'Valkyrie Turner', altItem: '—' },
];

const UNION_EVOLUTIONS = [
  {
    cards: 'Peachone + Ebony Wings',
    result: 'Vandalier',
    note: 'Two weapon cards merge into one. No item card required. Vandalier deals 500 damage per proc.',
  },
  {
    cards: 'Phiera Der Tuphello + Eight the Sparrow + Tirajisu',
    result: 'Phieraggi',
    note: 'Three cards consumed. Phieraggi deals 350 damage per proc. Requires all three cards in deck simultaneously.',
  },
];
export const metadata = {
  title: "Vampire Crawlers Weapon Evolutions — Complete Guide (2026)",
  description:
    "Complete evolution recipe chart. Every weapon evolution requires a base weapon card, a matching item card, an empty gem socket on the base card, and an Evolution Gem from a statue, chest, or boss.",
};


export default function EvolutionsPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-text-primary mb-2">
            Weapon Evolutions
          </h1>
          <p className="text-sm text-text-secondary">
            Complete evolution recipe chart. Every weapon evolution requires a base weapon card, a matching item card, an empty gem socket on the base card, and an Evolution Gem from a statue, chest, or boss.
          </p>
        </div>

        {/* Evolution Process */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-4">
            How Evolution Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            {[
              { step: '1', title: 'Hold base card', detail: 'The weapon card you want to evolve must be in your deck.' },
              { step: '2', title: 'Hold item card', detail: 'The matching item card must also be in your deck.' },
              { step: '3', title: 'Keep socket empty', detail: 'The base card\'s gem socket must NOT have a Customization Gem inserted.' },
              { step: '4', title: 'Get Evolution Gem', detail: 'Find an Evolution Statue, open a chest, or defeat a boss to receive an Evolution Gem.' },
            ].map((item, i) => (
              <div key={i} className="stat-card">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 bg-tactical-blue/10 border border-tactical-blue/30 flex items-center justify-center">
                    <span className="font-mono text-xs text-tactical-blue font-bold">{item.step}</span>
                  </span>
                </div>
                <h3 className="font-display text-sm font-semibold text-text-primary mb-1">{item.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 p-3 border border-warning-orange/30 bg-warning-orange/5">
            <p className="text-xs text-warning-orange font-mono">
              WARNING: Inserting a Customization Gem into a card you plan to evolve will BLOCK the evolution. This is the most common beginner mistake. Always keep evolution target cards socket-free.
            </p>
          </div>
        </section>

        {/* Standard Evolutions Table */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-4">
            Standard Evolutions (15)
          </h2>
          <div className="bg-abyss-light border border-border-subtle overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-grid-line">
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase text-text-muted">BASE CARD</th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase text-text-muted">+ ITEM CARD</th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase text-text-muted">= EVOLUTION</th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase text-text-muted">ALT ITEMS</th>
                </tr>
              </thead>
              <tbody>
                {STANDARD_EVOLUTIONS.map((row, i) => (
                  <tr key={i} className="data-row">
                    <td className="py-2.5 px-4 text-text-primary font-medium">{row.base}</td>
                    <td className="py-2.5 px-4 text-text-secondary">{row.item}</td>
                    <td className="py-2.5 px-4">
                      <span className="tag-info tag">{row.result}</span>
                    </td>
                    <td className="py-2.5 px-4 text-text-muted text-xs">{row.altItem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Union Evolutions */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-4">
            Union Evolutions (2)
          </h2>
          <div className="space-y-3">
            {UNION_EVOLUTIONS.map((union, i) => (
              <div key={i} className="stat-card">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-text-secondary">{union.cards}</span>
                  <span className="text-tactical-blue">&rarr;</span>
                  <span className="tag-info tag">{union.result}</span>
                </div>
                <p className="text-xs text-text-secondary">{union.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Relics */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-4">
            Evolution-Related Relics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="stat-card">
              <h3 className="font-display text-sm font-semibold text-text-primary mb-1">Guiding Light</h3>
              <p className="text-xs text-text-muted mb-1">Found: Mad Forest (level 10+ drop)</p>
              <p className="text-xs text-text-secondary">All breakable light sources appear on the minimap. Makes finding Evolution Gems and items much easier.</p>
            </div>
            <div className="stat-card">
              <h3 className="font-display text-sm font-semibold text-text-primary mb-1">Grim Grimoire</h3>
              <p className="text-xs text-text-muted mb-1">Found: Inlaid Library</p>
              <p className="text-xs text-text-secondary">Pause menu displays a complete evolution and union recipe tracker. Shows which cards you still need.</p>
            </div>
          </div>
        </section>

        <div className="terminal-block">
          <p className="text-text-muted mb-1">
            <span className="text-warning-orange">$</span> evolutions.list
          </p>
          <p>standard: 15 | unions: 2 | total: 17</p>
          <p>rule: base + item + empty_socket + evo_gem = evolution</p>
          <p className="cursor-blink">recipes loaded</p>
        </div>
      </div>
    </div>
  );
}
