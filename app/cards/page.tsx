/* ============================================
   Vampire Crawlers Guide — Card Database
   All card types, costs, and mechanics
   ============================================ */

const CARD_TYPES = [
  {
    type: 'Weapon Cards',
    color: 'text-tactical-blue',
    desc: 'Primary damage dealers. Each weapon has a mana cost and triggers on play. Weapons can be evolved by pairing with specific item cards at an Evolution Statue.',
    examples: ['Bone (0)', 'Whip (0)', 'Knife (0)', 'King Bible (1)', 'Fire Wand (1)', 'Lightning Ring (2)', 'Axe (—)', 'Magic Wand (—)', 'Cross (—)', 'Santa Water (—)', 'Shadow Pinion (—)', 'Runetracer (—)', 'Song of Mana (—)', 'Pentagram (—)', 'Gatti Amari (—)', 'Garlic (—)', 'Clock Lancet (—)', 'Peachone (3)', 'Ebony Wings (—)', 'Phiera Der Tuphello (—)', 'Eight the Sparrow (2)', 'Cherry Bomb (—)', 'Carrello (—)', 'Celestial Dusting (—)'],
  },
  {
    type: 'Item Cards',
    color: 'text-terminal-green',
    desc: 'Required to trigger weapon evolutions. When you hold a base weapon card and its matching item card, an Evolution Gem will fuse them. The item card remains in your deck after evolution.',
    examples: ['Hollow Heart', 'Forever Heart', 'Bracer', 'Empty Tome', 'Light Tome', 'Weighty Tome', 'Ancient Tome', 'Candella', 'Candle', 'Candelabrador', 'Spellbinder', 'Spinach', 'Sprig o\' Spinach', 'Pummarola', 'Pummadora', 'Armor', 'Golden Armor', 'Rainbow Armor', 'Hero\'s Armor', 'Attractor', 'Duplicator', 'Clover', 'Skull O\'Maniac', 'Crown', 'Stone Mask', 'Wings', 'Tirajisu'],
  },
  {
    type: 'Armor Cards',
    color: 'text-warning-orange',
    desc: 'Defensive cards that block incoming damage. Typically cost 0-1 mana, making them ideal chain starters. With the Shield Bash Arcana, armor value is dealt as damage to front-row enemies.',
    examples: ['Basic Armor (0-1)', 'Reinforced Armor (1)', 'Heavy Plate (2)'],
  },
  {
    type: 'Utility Cards',
    color: 'text-text-secondary',
    desc: 'Supportive effects that fill gaps in your chain order. Includes buffs, debuffs, and situational effects. Use them to maintain chain continuity between weapon cards.',
    examples: ['Various utility effects at multiple mana costs'],
  },
  {
    type: 'Wild Cards',
    color: 'text-[#d2a8ff]',
    desc: 'Universal chain bridges. A Wild card can substitute for any mana cost, keeping your combo chain alive when you lack a specific cost tier. Always keep one in hand as chain insurance.',
    examples: ['Wild Card (bridges any cost gap)'],
  },
  {
    type: 'Draw Cards',
    color: 'text-terminal-green',
    desc: 'Draw additional cards from your deck mid-turn. Disproportionately powerful because they help you find the next cost tier for your chain. Draft aggressively when offered.',
    examples: ['Draw effects at various mana costs'],
  },
];

const CARD_COLORS = [
  { color: 'Red Cards', crawler: 'Antonio Belpaese', effect: 'Antonio deals +10% damage when playing red cards' },
  { color: 'Blue Cards', crawler: 'Suor Clerici', effect: 'Suor Clerici recovers 1 HP for each blue card played' },
];

export default function CardsPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-text-primary mb-2">
            Card Database
          </h1>
          <p className="text-sm text-text-secondary">
            Complete reference for all card types in Vampire Crawlers. Learn how each card type functions in the combo chain system and which cards to prioritize.
          </p>
        </div>

        {/* Card Type Overview */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-4">
            Card Types
          </h2>
          <div className="space-y-4">
            {CARD_TYPES.map((cardType, i) => (
              <div key={i} className="stat-card">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`font-mono text-sm font-semibold ${cardType.color}`}>
                    {cardType.type}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">
                  {cardType.desc}
                </p>
                <div className="flex flex-wrap gap-1">
                  {cardType.examples.map((ex, j) => (
                    <span key={j} className="tag text-xs">{ex}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Card Color System */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-4">
            Card Color System
          </h2>
          <div className="bg-abyss-light border border-border-subtle overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-grid-line">
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase text-text-muted">COLOR</th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase text-text-muted">CRAWLER</th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase text-text-muted">EFFECT</th>
                </tr>
              </thead>
              <tbody>
                {CARD_COLORS.map((row, i) => (
                  <tr key={i} className="data-row">
                    <td className="py-2.5 px-4">
                      <span className={`font-mono font-bold ${row.color.includes('Red') ? 'text-[#f85149]' : 'text-[#58a6ff]'}`}>
                        {row.color}
                      </span>
                    </td>
                    <td className="py-2.5 px-4 text-text-primary">{row.crawler}</td>
                    <td className="py-2.5 px-4 text-text-secondary text-xs">{row.effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mt-2 font-mono">
            Card colors only activate their bonus effect when played by the matching Crawler. Other Crawlers treat colored cards as normal.
          </p>
        </section>

        {/* Draft Priority */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-4">
            Draft Priority Guide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { priority: 'Always Pick', items: ['Draw cards', 'Wild cards', 'Bone (0-cost weapon)', 'Item cards matching your weapons'] },
              { priority: 'Strong Pick', items: ['King Bible (1-cost)', 'Lightning Ring (2-cost)', 'Armor cards (0-1 cost)', 'Evolution item cards for future weapons'] },
              { priority: 'Situational', items: ['Utility cards matching your chain gaps', 'High-cost weapons without evolution path', 'Duplicate weapons (diminishing returns)'] },
              { priority: 'Avoid', items: ['Gatti Amari (unreliable)', 'Runetracer (underwhelming base)', 'Cards outside your chain cost range'] },
            ].map((tier, i) => (
              <div key={i} className="stat-card">
                <p className="text-[10px] font-mono uppercase tracking-wider text-tactical-blue mb-2">
                  {tier.priority}
                </p>
                <ul className="space-y-1">
                  {tier.items.map((item, j) => (
                    <li key={j} className="text-xs text-text-secondary">
                      <span className="text-text-muted mr-1">&middot;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="terminal-block">
          <p className="text-text-muted mb-1">
            <span className="text-warning-orange">$</span> cards.database
          </p>
          <p>weapon_cards: 24+ | item_cards: 27+ | armor: 3+ | utility: varies</p>
          <p>wild_cards: chain_bridge | draw_cards: highest_priority</p>
          <p className="cursor-blink">database loaded</p>
        </div>
      </div>
    </div>
  );
}
