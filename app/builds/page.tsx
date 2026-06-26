/* ============================================
   Vampire Crawlers Guide — Builds & Combos
   Deck archetypes, combo routes, and strategies
   ============================================ */

const BUILD_ARCHETYPES = [
  {
    name: 'Ascending Chain',
    difficulty: 'Beginner',
    crawler: 'Suor Clerici',
    description: 'Play cards in strict ascending mana cost (0 to 1 to 2 to 3+). Each card multiplies the next. Aim for 8+ card chains.',
    keyCards: ['Bone (0)', 'King Bible (1)', 'Lightning Ring (2)', 'Hellfire (3)'],
    arcana: 'Chain Link',
    strength: 'Consistent multiplier scaling. Easy to execute.',
  },
  {
    name: 'Wild Bridge',
    difficulty: 'Intermediate',
    crawler: 'Arca',
    description: 'Use Wild cards to bridge mana gaps in your chain. Play 0-cost, then Wild to skip 1-cost, then hit 2-cost and beyond.',
    keyCards: ['Whip (0)', 'Wild Card', 'Lightning Ring (2)', 'Thunder Loop (4+)'],
    arcana: 'Sharp Mind',
    strength: 'Reaches higher multipliers by skipping weak cost tiers.',
  },
  {
    name: 'Evolution Rush',
    difficulty: 'Intermediate',
    crawler: 'Antonio Belpaese',
    description: 'Focus on evolving weapons as fast as possible. Prioritize base card + item card, then hit the Evolution Statue.',
    keyCards: ['Whip + Hollow Heart', 'King Bible + Spellbinder'],
    arcana: 'Over The Top',
    strength: 'Evolution cards are inherently S-tier. Snowball advantage.',
  },
  {
    name: 'Armor Tank',
    difficulty: 'Advanced',
    crawler: 'Dommario',
    description: 'Stack armor cards to survive big hits, then use Shield Bash Arcana to convert armor into damage output.',
    keyCards: ['Armor Cards', 'King Bible (1)', 'Unholy Vespers (2)'],
    arcana: 'Shield Bash + Your Shield My Liege',
    strength: 'Extremely defensive. Armor persists and deals damage.',
  },
  {
    name: 'Draw Engine',
    difficulty: 'Advanced',
    crawler: 'Christine',
    description: 'Maximize draw cards to cycle through your deck every turn. Draw cards are disproportionately strong in long chains.',
    keyCards: ['Draw Cards', 'Bone (0)', 'Pentagram', 'Gorgeous Moon'],
    arcana: 'Mana Syphon',
    strength: 'Never run out of options. Consistent high-damage turns.',
  },
];

const COMBO_PRINCIPLES = [
  {
    rule: 'Ascending Order',
    detail: 'Always play cards from lowest mana cost to highest. Each card in the chain multiplies the next card effect. A 0 to 1 to 2 to 3 chain gives exponentially more damage than playing them in any other order.',
  },
  {
    rule: 'Chain Length > Card Power',
    detail: 'An 8-card ascending chain in one turn deals more total damage than two 4-card chains across two turns. Always extend your chain when possible.',
  },
  {
    rule: 'Wild Cards Bridge Gaps',
    detail: 'If you lack a 1-cost card, play a Wild card between your 0-cost and 2-cost to keep the chain alive. The multiplier continues uninterrupted.',
  },
  {
    rule: 'Draw Cards Are Overpowered',
    detail: 'Drawing extra cards mid-chain lets you find the next cost tier. Prioritize draw cards in your deck to ensure chain consistency.',
  },
  {
    rule: 'Armor Cards Fill Low Slots',
    detail: 'Armor cards typically cost 0-1 mana. Use them as chain starters alongside weapon cards. With Shield Bash Arcana, they also deal damage.',
  },
  {
    rule: 'Turboturn Lets You Plan',
    detail: 'You can queue your entire hand without waiting for animations. Take your time to plan the optimal order before playing the first card.',
  },
];

export default function BuildsPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-text-primary mb-2">
            Best Builds & Combo Guide
          </h1>
          <p className="text-sm text-text-secondary">
            Master the combo chain system with build archetypes, card order strategies, and Arcana synergies for every playstyle.
          </p>
        </div>

        {/* Combo Principles */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-4">
            Combo Chain Principles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {COMBO_PRINCIPLES.map((principle, i) => (
              <div key={i} className="stat-card">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs text-tactical-blue">RULE {String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display text-sm font-semibold text-text-primary mb-1">
                  {principle.rule}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {principle.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Build Archetypes */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-4">
            Build Archetypes
          </h2>
          <div className="space-y-3">
            {BUILD_ARCHETYPES.map((build, i) => (
              <div key={i} className="stat-card">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-base font-semibold text-text-primary">
                      {build.name}
                    </h3>
                    <p className="text-xs text-text-muted mt-0.5">
                      Crawler: {build.crawler} · Difficulty: {build.difficulty}
                    </p>
                  </div>
                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 border ${
                    build.difficulty === 'Beginner' ? 'text-terminal-green border-terminal-green/30 bg-terminal-green/10' :
                    build.difficulty === 'Intermediate' ? 'text-tactical-blue border-tactical-blue/30 bg-tactical-blue/10' :
                    'text-warning-orange border-warning-orange/30 bg-warning-orange/10'
                  }`}>
                    {build.difficulty}
                  </span>
                </div>
                <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                  {build.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <p className="text-[10px] font-mono uppercase text-text-muted mb-1">Key Cards</p>
                    <div className="flex flex-wrap gap-1">
                      {build.keyCards.map((card, j) => (
                        <span key={j} className="tag">{card}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-text-muted mb-1">Arcana</p>
                    <p className="text-text-secondary">{build.arcana}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-text-muted mb-1">Strength</p>
                    <p className="text-text-secondary">{build.strength}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Example Combo Chain */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-4">
            Example: 8-Card Ascending Chain
          </h2>
          <div className="bg-abyss-light border border-border-subtle p-4">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {[
                { name: 'Bone', cost: '0', mult: '1x' },
                { name: 'Whip', cost: '0', mult: '2x' },
                { name: 'Armor', cost: '1', mult: '3x' },
                { name: 'King Bible', cost: '1', mult: '4x' },
                { name: 'Wild', cost: '*', mult: '5x' },
                { name: 'Lightning Ring', cost: '2', mult: '6x' },
                { name: 'Hellfire', cost: '3', mult: '8x' },
                { name: 'Thunder Loop', cost: '4', mult: '12x' },
              ].map((card, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="bg-abyss border border-border-subtle px-3 py-2 text-center min-w-[100px]">
                    <p className="text-xs font-mono text-text-primary font-medium">{card.name}</p>
                    <p className="text-[10px] font-mono text-text-muted">cost: {card.cost}</p>
                    <p className="text-[10px] font-mono text-tactical-blue">{card.mult}</p>
                  </div>
                  {i < 7 && <span className="text-text-muted text-sm">&rarr;</span>}
                </div>
              ))}
            </div>
            <p className="text-xs text-text-secondary">
              Total multiplier: <span className="text-tactical-blue font-mono font-bold">12x</span> on the final card.
              With Chain Link Arcana, the multiplier carries into the next turn for sustained damage.
            </p>
          </div>
        </section>

        <div className="terminal-block">
          <p className="text-text-muted mb-1">
            <span className="text-warning-orange">$</span> builds.optimize
          </p>
          <p>Chain length &gt; individual card power</p>
          <p>Always fill 0-cost and 1-cost slots first</p>
          <p>Wild cards are chain insurance — use wisely</p>
          <p className="cursor-blink">builds loaded</p>
        </div>
      </div>
    </div>
  );
}
