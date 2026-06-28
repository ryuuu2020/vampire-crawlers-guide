/* ============================================
   Vampire Crawlers Guide — Beginner's Guide
   Core mechanics, progression, and first-run tips
   ============================================ */
export const metadata = {
  title: "Vampire Crawlers Beginner's Guide — Complete Guide (2026)",
  description:
    "Everything you need to know to start your Vampire Crawlers journey. Covers the combo system, gems, evolutions, village upgrades, and dungeon progression.",
};


export default function BeginnerGuidePage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-text-primary mb-2">
            Beginner's Guide
          </h1>
          <p className="text-sm text-text-secondary">
            Everything you need to know to start your Vampire Crawlers journey. Covers the combo system, gems, evolutions, village upgrades, and dungeon progression.
          </p>
        </div>

        {/* Core Mechanic: Combo Chain */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-3">
            1. The Combo Chain System
          </h2>
          <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
            <p>
              The combo chain is the heart of Vampire Crawlers. Each turn, you play cards from your hand in <strong className="text-text-primary">ascending mana cost order</strong>. Every card you play multiplies the effect of the next card in the chain.
            </p>
            <p>
              For example: play a 0-cost Bone, then a 1-cost King Bible, then a 2-cost Lightning Ring. The Lightning Ring gets a <strong className="text-tactical-blue">3x multiplier</strong> because it is third in the chain. The longer the chain, the higher the multiplier — players regularly reach 20x, 30x, or more.
            </p>
            <p>
              <strong className="text-warning-orange">Key rule:</strong> The chain resets at the end of your turn. An 8-card chain in one turn is far more powerful than two 4-card chains across two turns. Always extend your chain when possible.
            </p>
          </div>
        </section>

        {/* Turboturn */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-3">
            2. Turboturn System
          </h2>
          <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
            <p>
              Turboturn is poncle's name for the combat input system. It lets you queue cards without waiting for animations to finish. You can plan your entire turn before playing the first card.
            </p>
            <p>
              <strong className="text-text-primary">For beginners:</strong> Do not rush. Use Turboturn to plan your card order carefully. There is no time pressure. Sort your hand by mana cost, identify your chain, then execute.
            </p>
          </div>
        </section>

        {/* Card Types */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-3">
            3. Card Types
          </h2>
          <div className="bg-abyss-light border border-border-subtle overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-grid-line">
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase text-text-muted">TYPE</th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase text-text-muted">FUNCTION</th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase text-text-muted">CHAIN ROLE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Weapon Cards', func: 'Primary damage dealers', role: 'Core damage in every chain slot' },
                  { type: 'Item Cards', func: 'Trigger weapon evolutions', role: 'Required for evolution. Stays in deck after.' },
                  { type: 'Armor Cards', func: 'Block incoming damage', role: 'Fill low-cost slots (0-1 mana)' },
                  { type: 'Utility Cards', func: 'Supportive effects', role: 'Fill gaps in chain order' },
                  { type: 'Wild Cards', func: 'Bridge mana cost gaps', role: 'Chain insurance — keeps multiplier alive' },
                  { type: 'Draw Cards', func: 'Draw extra cards from deck', role: 'Disproportionately strong. Find your next cost tier.' },
                ].map((row, i) => (
                  <tr key={i} className="data-row">
                    <td className="py-2.5 px-4 text-text-primary font-medium">{row.type}</td>
                    <td className="py-2.5 px-4 text-text-secondary text-xs">{row.func}</td>
                    <td className="py-2.5 px-4 text-text-secondary text-xs">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Gem System */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-3">
            4. Gem System
          </h2>
          <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
            <p>
              There are two types of gems in Vampire Crawlers:
            </p>
            <div className="space-y-2">
              <div className="stat-card">
                <p className="text-text-primary font-medium text-sm mb-1">Evolution Gems</p>
                <p className="text-xs text-text-secondary">
                  Found at Evolution Statues, in chests, or as boss rewards. These trigger weapon evolutions when you have the correct base card and item card.
                </p>
              </div>
              <div className="stat-card">
                <p className="text-text-primary font-medium text-sm mb-1">Customization Gems</p>
                <p className="text-xs text-text-secondary">
                  Add extra effects to individual cards. Inserted into empty gem sockets on weapon cards.
                </p>
              </div>
            </div>
            <p className="text-warning-orange text-xs font-mono">
              WARNING: Never insert Customization Gems into cards you plan to evolve. Filled sockets block evolution. Keep evolution target cards socket-free.
            </p>
          </div>
        </section>

        {/* Village Upgrades */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-3">
            5. Village Upgrade Priority
          </h2>
          <div className="bg-abyss-light border border-border-subtle">
            {[
              { rank: '1st', name: 'Greed', effect: '+25% gold per rank. More gold = faster upgrades.', target: 'Rank 2-3 ASAP' },
              { rank: '2nd', name: 'Might', effect: 'Global weapon damage bonus. Best combat upgrade.', target: 'Rank 2 early' },
              { rank: '3rd', name: 'Max Health / Recovery', effect: 'Increase HP and post-battle healing. Reduces death risk.', target: 'Adjust to playstyle' },
              { rank: '4th', name: 'Blacksmith', effect: 'Upgrade cards for more gem sockets. Enables customization.', target: 'Rank 2 early' },
            ].map((row, i) => (
              <div key={i} className={`flex items-center gap-4 px-4 py-3 ${i < 3 ? 'border-b border-grid-line' : ''}`}>
                <span className="font-mono text-xs text-tactical-blue w-8 shrink-0">{row.rank}</span>
                <div className="flex-1">
                  <p className="text-text-primary font-medium text-sm">{row.name}</p>
                  <p className="text-xs text-text-secondary">{row.effect}</p>
                </div>
                <span className="tag shrink-0">{row.target}</span>
              </div>
            ))}
          </div>
        </section>

        {/* First Run Walkthrough */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-3">
            6. First Run Walkthrough
          </h2>
          <div className="space-y-3">
            {[
              { step: '1', title: 'Choose Antonio or Imelda', detail: 'Both are starting characters. Antonio (Whip) is melee-focused. Imelda (Magic Wand) is ranged. Either works for learning.' },
              { step: '2', title: 'Enter Mad Forest', detail: 'The first dungeon. Explore the grid-based map, break objects for gold and items, fight enemies to gain XP.' },
              { step: '3', title: 'Level up and pick cards', detail: 'Each level-up offers 3 card choices. Prioritize 0-cost and 1-cost weapon cards to fill your chain. Add an item card if you see one matching your weapon.' },
              { step: '4', title: 'Find the Evolution Statue', detail: 'If you have a base weapon + matching item card, the Evolution Statue (black statue with red gem) will trigger your first evolution. This is a massive power spike.' },
              { step: '5', title: 'Defeat the boss', detail: 'Bosses appear at floor milestones. Use your strongest chain combo. Save Floor Chickens (hidden behind breakable objects) for boss healing.' },
              { step: '6', title: 'Return to village and upgrade', detail: 'Spend earned gold on Greed first, then Might. Visit the Blacksmith to upgrade cards. Check Town Hall for unlock progress.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 bg-tactical-blue/10 border border-tactical-blue/30 flex items-center justify-center shrink-0">
                  <span className="font-mono text-sm text-tactical-blue font-bold">{item.step}</span>
                </div>
                <div className="flex-1 pb-3">
                  <h3 className="font-display text-sm font-semibold text-text-primary mb-1">{item.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pro Tips */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-3">
            7. Pro Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Always sort your hand by mana cost before playing. Visual sorting makes chain planning easier.',
              'Draw cards are the strongest utility in the game. Draft them aggressively.',
              'Do not fill gem sockets on cards you plan to evolve. This is the most common beginner mistake.',
              'Floor Chickens hidden behind breakable objects heal you. Save them for boss fights.',
              'Check the Town Hall to track all unlock conditions for Crawlers and dungeons.',
              'Greed is always the first village upgrade. More gold accelerates everything else.',
              'Wild cards are not just fillers — they are chain insurance. Keep at least one in hand.',
              'Arcana cards are pre-run modifiers. Unlock Chain Link as soon as possible — it transforms the game.',
            ].map((tip, i) => (
              <div key={i} className="stat-card">
                <p className="text-xs text-text-secondary leading-relaxed">
                  <span className="text-tactical-blue font-mono mr-1">&gt;</span>
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="terminal-block">
          <p className="text-text-muted mb-1">
            <span className="text-warning-orange">$</span> beginner.checklist
          </p>
          <p>[x] Understand combo chain system</p>
          <p>[x] Know card types and their roles</p>
          <p>[x] Gem system: never block evolution sockets</p>
          <p>[x] Village priority: Greed &rarr; Might &rarr; Health</p>
          <p>[x] First dungeon: Mad Forest with Antonio</p>
          <p className="cursor-blink">ready to crawl</p>
        </div>
      </div>
    </div>
  );
}
