/* ============================================
   Vampire Crawlers Guide — Dungeons
   Unlock order, bosses, and strategies
   ============================================ */

const DUNGEONS = [
  {
    name: 'Mad Forest',
    order: 1,
    unlock: 'Available from start',
    boss: 'Mantichana',
    features: 'First dungeon. Ideal for gold farming and learning mechanics. Breakable objects hide Floor Chickens and items.',
    tips: 'Focus on learning the combo chain system. Draft 0-cost and 1-cost cards. Find Guiding Light relic at level 10+.',
    unlocks: 'Gennaro Belpaese (defeat Mantichana), Mortaccio (defeat 444 skeletons)',
  },
  {
    name: 'Inlaid Library',
    order: 2,
    unlock: 'Reach level 10 in Mad Forest',
    boss: 'Various',
    features: 'Larger map with more rooms. Contains the Grim Grimoire relic for evolution tracking. Unlocks Pasqualina at level 20.',
    tips: 'Look for the Grim Grimoire early — it tracks your evolution progress. Draft item cards that match your weapons.',
    unlocks: 'Pasqualina Belpaese (reach level 20 with Imelda)',
  },
  {
    name: 'Teeny Bridge',
    order: 3,
    unlock: 'Reach level 15 in Inlaid Library',
    boss: 'Various',
    features: 'Features a mine cart destruction challenge. Completing it unlocks Carreello as a playable Crawler.',
    tips: 'The mine cart challenge requires breaking specific objects. Use area-effect weapons for efficient destruction.',
    unlocks: 'Carreello (complete mine cart challenge)',
  },
  {
    name: 'Dairy Plant',
    order: 4,
    unlock: 'Complete Teeny Bridge',
    boss: 'Milk Elemental',
    features: 'Industrial-themed dungeon. Defeating the Milk Elemental unlocks Bianca Ramba.',
    tips: 'Milk Elemental has high HP. Bring evolved weapons and a well-built combo chain. Save Floor Chickens for the boss.',
    unlocks: 'Bianca Ramba (defeat Milk Elemental)',
  },
  {
    name: 'Furious Forest',
    order: 5,
    unlock: 'Complete Mad Forest',
    boss: 'Enhanced Mantichana',
    features: 'Harder version of Mad Forest with tougher enemies and better rewards. Designed for players with village upgrades.',
    tips: 'Requires Might rank 2+ and decent armor. Do not attempt with starting gear. Bring evolution weapons.',
    unlocks: 'Path to Berserk Wood',
  },
  {
    name: 'Berserk Wood',
    order: 6,
    unlock: 'Complete Furious Forest',
    boss: 'Various',
    features: 'Contains a hidden coffin that unlocks Pugnala Provola, one of the S-tier Crawlers.',
    tips: 'Explore thoroughly to find the hidden coffin. Enemies hit hard — prioritize armor cards and defensive Arcana.',
    unlocks: 'Pugnala Provola (find hidden coffin)',
  },
  {
    name: 'Gallo Tower',
    order: 7,
    unlock: 'Progress through dungeon chain',
    boss: 'Gallo',
    features: 'Vertical tower dungeon. Contains Dragon Shrimps (50 kills unlock O\'sole) and a coffin for Concetta.',
    tips: 'Gallo boss fight requires sustained damage. Use Chain Link Arcana for multi-turn combos. Bring healing items.',
    unlocks: "O'Sole (defeat 50 Dragon Shrimps), Concetta (find coffin), Gallo (defeat boss)",
  },
];
export const metadata = {
  title: "Vampire Crawlers Dungeon Guide — Complete Guide (2026)",
  description:
    "Complete dungeon unlock order, boss strategies, and unlockable character locations. Dungeons are first-person grid-based, similar to classic Might and Magic.",
};


export default function DungeonsPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-text-primary mb-2">
            Dungeon Guide
          </h1>
          <p className="text-sm text-text-secondary">
            Complete dungeon unlock order, boss strategies, and unlockable character locations. Dungeons are first-person grid-based, similar to classic Might and Magic.
          </p>
        </div>

        {/* Dungeon Progression */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-4">
            Dungeon Progression Order
          </h2>
          <div className="space-y-3">
            {DUNGEONS.map((dungeon, i) => (
              <div key={i} className="stat-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-tactical-blue/10 border border-tactical-blue/30 flex items-center justify-center shrink-0">
                    <span className="font-mono text-sm text-tactical-blue font-bold">{dungeon.order}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-display text-base font-semibold text-text-primary">
                        {dungeon.name}
                      </h3>
                      <span className="tag text-xs">Boss: {dungeon.boss}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                      <div>
                        <p className="text-[10px] font-mono uppercase text-text-muted mb-1">Unlock</p>
                        <p className="text-xs text-text-secondary">{dungeon.unlock}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase text-text-muted mb-1">Unlocks</p>
                        <p className="text-xs text-text-secondary">{dungeon.unlocks}</p>
                      </div>
                    </div>
                    <p className="text-xs text-text-secondary mb-2">{dungeon.features}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-mono uppercase text-warning-orange shrink-0">TIP</span>
                      <p className="text-xs text-text-secondary">{dungeon.tips}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dungeon Mechanics */}
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-4">
            Dungeon Mechanics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: 'Grid Movement', desc: 'Dungeons use first-person 90-degree turn-based movement, similar to Might and Magic. Navigate tile by tile.' },
              { title: 'Breakable Objects', desc: 'Vases, candles, and crates contain gold, items, and Floor Chickens. Break them all. Guiding Light relic reveals light sources on minimap.' },
              { title: 'Floor Chickens', desc: 'Hidden behind breakable objects. Heal HP when consumed. Save them for boss fights — they are the difference between life and death.' },
              { title: 'Level-Up Drafts', desc: 'Each XP level-up offers 3 card choices. Pick strategically based on your chain needs. Prioritize 0-cost and 1-cost weapons early.' },
              { title: 'Evolution Statues', desc: 'Black statues holding red Evolution Gems. If you have the right base + item card, interacting triggers evolution. The biggest power spike in the game.' },
              { title: 'Town Hall Tracking', desc: 'Visit the Town Hall in the village to track all unlock conditions. See which Crawlers and dungeons you have left to unlock.' },
            ].map((item, i) => (
              <div key={i} className="stat-card">
                <h3 className="font-display text-sm font-semibold text-text-primary mb-1">{item.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="terminal-block">
          <p className="text-text-muted mb-1">
            <span className="text-warning-orange">$</span> dungeons.map
          </p>
          <p>dungeon_count: 7+ | progression: linear_unlock</p>
          <p>recommended_path: Mad Forest &rarr; Inlaid Library &rarr; Teeny Bridge &rarr; Dairy Plant</p>
          <p className="cursor-blink">map loaded</p>
        </div>
      </div>
    </div>
  );
}
