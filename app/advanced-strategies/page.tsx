/* ============================================
   Vampire Crawlers — Advanced Strategies Guide
   Late-game optimization, endless mode, and expert tactics
   ============================================ */

const ADVANCED_TECHNIQUES = [
  {
    technique: 'Chain Stacking',
    difficulty: 'Expert',
    description: 'Instead of playing your strongest cards as soon as you draw them, hold cards across multiple draw cycles until you can play 6+ cards in a single chain. The multiplier effect compounds exponentially — a 6-card chain deals roughly 3x the damage of two 3-card chains. This requires patience and good defense, as you are deliberately delaying your damage output.',
    bestWith: 'Suor Clerici (Ascending Chain build), Arca (Wild Bridge build)',
    risk: 'Holding cards instead of playing them means you take more damage in the short term. Only attempt chain stacking when your defenses can handle 2-3 extra waves of enemies.',
  },
  {
    technique: 'Weapon Evolution Timing',
    difficulty: 'Intermediate',
    description: 'Weapon evolutions are permanent upgrades, but the timing matters. Evolving a weapon too early — before you have the supporting items and arcana — results in an underpowered evolution that you cannot undo. The optimal evolution window is when you have: the base weapon at level 5+, its matching item at level 3+, and the evolution-triggering arcana equipped. Only then should you seek the Evolution Statue.',
    bestWith: 'Any build that relies on evolved weapons (Antonio Belpaese, Imelda)',
    risk: 'Delaying evolution too long means you face mid-game waves with base weapons that are falling behind the scaling curve. Strike the balance around wave 10-12 for most builds.',
  },
  {
    technique: 'Corpse Management',
    difficulty: 'Advanced',
    description: 'Dead enemies leave corpses that block movement and projectile paths. In tight arenas, corpse piles create walls that funnel surviving enemies into predictable paths — use this to your advantage. Position yourself so that corpses form a natural chokepoint, then aim all your damage through that single narrow lane. This technique is especially powerful in the Bone Zone and Dairy Plant stages.',
    bestWith: 'Any build in confined arena stages. Particularly effective with Dommario (Armor Tank) who can hold the chokepoint.',
    risk: 'Corpses can also block your escape routes. Always leave at least one clear path to retreat if the chokepoint is breached.',
  },
  {
    technique: 'Arcana Synergy Fishing',
    difficulty: 'Expert',
    description: 'Certain Arcana combinations create effects far beyond their individual descriptions. For example: "Empty Tome" (reduces weapon cooldown) + "Spellbinder" (increases duration) makes evolved King Bible cover nearly the entire screen. "Candelabrador" (increases area) + "Axe" evolution creates spinning death that reaches edge-to-edge. The technique is intentionally fishing for these synergies during Arcana selection rather than picking the highest-rated individual Arcana.',
    bestWith: 'Builds that rely on AoE weapons (King Bible, Santa Water, Axe, Lightning Ring)',
    risk: 'Fishing for specific combinations is gambling. If the right Arcana does not appear, you have wasted picks on suboptimal standalone Arcana. Have a fallback strategy — never rely on getting a specific combo.',
  },
  {
    technique: 'Gold Economy Optimization',
    difficulty: 'Intermediate',
    description: 'Gold management separates good runs from great runs. The critical insight: gold pickups scale with the Greed and Magnet stats. By wave 10, you should have at least level 3 Magnet to auto-collect gems from off-screen kills. By wave 15, level 5 Magnet + level 3 Greed ensures you never miss a gem and get bonus gold per pickup. Invest in economy stats early — every gold coin you miss in waves 1-10 is a coin that could have compounded through upgrades.',
    bestWith: 'All builds. Economy is universal.',
    risk: 'Over-investing in economy means under-investing in damage or defense. If you die before your economy pays off, it was a wasted investment. The sweet spot: one economy upgrade per three combat upgrades.',
  },
];

const ENDLESS_MODE_TIPS = [
  { waveRange: 'Waves 1-30', strategy: 'Standard play. Build your core weapon set and get key evolutions. Focus on one AoE weapon (King Bible / Santa Water) and one single-target weapon (Whip / Knife). Do not spread upgrades across more than 4 weapons.' },
  { waveRange: 'Waves 30-60', strategy: 'Enemy health scaling accelerates. If your damage output is not keeping up, you will notice here. Prioritize weapon limit break upgrades (beyond max level). Start collecting passive items that boost your primary damage type.' },
  { waveRange: 'Waves 60-90', strategy: 'Only evolved weapons remain viable. Base weapons tickle enemies. You should have 4-6 evolved weapons by now. Enemy density is extreme — AoE damage is mandatory, single-target builds will be overwhelmed. Consider picking up Laurel (invincibility shield) for survival margins.' },
  { waveRange: 'Waves 90+', strategy: 'The true endless challenge. Enemy health pools exceed millions. Only limit-broken evolved weapons with full Arcana synergy can keep up. The top builds at this stage: evolved King Bible + evolved Santa Water for screen-wide AoE, with evolved Whip for sustain. Garlic evolution becomes mandatory for knockback to prevent being swarmed.' },
];

export default function AdvancedStrategiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Vampire Crawlers Advanced Strategies</h1>
      <p className="text-text-muted mb-8">Last updated: July 2026</p>

      <p className="text-lg text-text-secondary mb-8 leading-relaxed">
        You have mastered the basics. You can clear the standard stages. Now it is time to elevate your game with techniques that separate casual players from the leaderboard climbers. These advanced strategies come from hundreds of hours of community testing and speedrun analysis.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Advanced Combat Techniques</h2>
      <div className="space-y-5 mb-10">
        {ADVANCED_TECHNIQUES.map((t, i) => (
          <div key={i} className="border border-border p-5 bg-bg-card">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-accent">{t.technique}</h3>
              <span className={`text-xs px-2 py-0.5 rounded ${t.difficulty === 'Expert' ? 'bg-red-900 text-red-300' : t.difficulty === 'Advanced' ? 'bg-amber-900 text-amber-300' : 'bg-blue-900 text-blue-300'}`}>{t.difficulty}</span>
            </div>
            <p className="text-text-secondary leading-relaxed mb-2">{t.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mt-3 pt-3 border-t border-border">
              <div><span className="text-accent">Best With:</span> <span className="text-text-muted">{t.bestWith}</span></div>
              <div><span className="text-red-400">Risk:</span> <span className="text-text-muted">{t.risk}</span></div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Endless Mode Survival Guide</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left border border-border text-sm">
          <thead className="bg-bg-card">
            <tr>
              <th className="p-3 border border-border text-text-primary">Wave Range</th>
              <th className="p-3 border border-border text-text-primary">Strategy</th>
            </tr>
          </thead>
          <tbody>
            {ENDLESS_MODE_TIPS.map((t, i) => (
              <tr key={i} className="hover:bg-bg-card">
                <td className="p-3 border border-border font-semibold text-accent">{t.waveRange}</td>
                <td className="p-3 border border-border text-text-secondary">{t.strategy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">FAQ</h2>
      <div className="space-y-4">
        <div className="border border-border p-4 bg-bg-card">
          <h3 className="font-semibold text-accent">What is the highest wave achievable in endless mode?</h3>
          <p className="text-text-secondary mt-2">The current community record is wave 200-plus using a highly optimized evolved King Bible + evolved Santa Water build with full Arcana synergy. However, for practical purposes, wave 100 is the benchmark for an excellent build. Past wave 150, enemy health scaling becomes so extreme that only perfect Arcana combinations with multiple limit breaks can keep up. Most competitive players aim for wave 100 as their success threshold.</p>
        </div>
        <div className="border border-border p-4 bg-bg-card">
          <h3 className="font-semibold text-accent">Is there a way to guarantee specific Arcana drops?</h3>
          <p className="text-text-muted mt-2">Not fully, but you can influence the pool. The game uses a weighted random system where Arcana you already have makes synergistic Arcana more likely to appear. Picking Candelabrador early increases the chance of seeing other area-boosting Arcana. Picking Empty Tome increases the chance of seeing cooldown-related Arcana. If you want a specific combo, start by picking the common enabler Arcana early and the rare payoff Arcana will have an increased appearance rate.</p>
        </div>
        <div className="border border-border p-4 bg-bg-card">
          <h3 className="font-semibold text-accent">How do I beat the Reaper at 30 minutes?</h3>
          <p className="text-text-muted mt-2">The Reaper appears at the 30-minute mark and kills you in one hit — this is by design, it is the intended end of a run. However, it is technically survivable with specific setups: evolved Laurel for invincibility frames, evolved Clock Lancet for freeze-locking, and extremely high movement speed to kite. The community calls this "killing Death" and it requires a perfectly optimized build. For normal play, reaching 30 minutes and dying to the Reaper is considered a completed run. Surviving past the Reaper is a bonus challenge, not a requirement.</p>
        </div>
      </div>

      <p className="text-text-muted mt-10 text-sm border-t border-border pt-4">
        Last updated: July 1, 2026. Advanced strategies verified against current Vampire Crawlers release.
      </p>
    </div>
  );
}
