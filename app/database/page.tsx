import type { Metadata } from 'next';
import Link from 'next/link';

/* ============================================
   Tabletop Tavern - Unit Database
   Server Component (exports metadata for SEO)
   ============================================ */

export const metadata: Metadata = {
  title: 'Tabletop Tavern Unit Database - Complete Stats, Factions & Abilities',
  description:
    'Browse the full Tabletop Tavern unit database: Pikemen, Archers, Cavalry, Heavy Infantry and Rare Units across all factions. Compare HP, Damage, Speed, Cost and Special Abilities for Patch 1.0.2.',
  metadataBase: new URL('https://tabletop-tavern-guide.vercel.app'),
  openGraph: {
    title: 'Tabletop Tavern Unit Database',
    description:
      'Compare every unit in Tabletop Tavern: stats, costs, faction variants and special abilities.',
    type: 'article',
    url: 'https://tabletop-tavern-guide.vercel.app/database',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tabletop Tavern Unit Database',
    description:
      'Compare every unit in Tabletop Tavern: stats, costs, faction variants and special abilities.',
  },
  alternates: {
    canonical: 'https://tabletop-tavern-guide.vercel.app/database',
  },
};

const UNITS = [
  {
    name: 'Iron Pikeman',
    faction: 'Iron Legion',
    type: 'Pikemen',
    hp: 120,
    damage: 18,
    speed: 2.8,
    cost: 85,
    ability: 'Brace: +40% damage vs charging Cavalry for 3s.',
  },
  {
    name: 'Shielded Pikeman',
    faction: 'Iron Legion',
    type: 'Heavy Infantry',
    hp: 155,
    damage: 15,
    speed: 2.4,
    cost: 95,
    ability: 'Phalanx: +20 armor when adjacent to another Pikeman.',
  },
  {
    name: 'Longbowman',
    faction: 'Iron Legion',
    type: 'Archers',
    hp: 75,
    damage: 22,
    speed: 2.6,
    cost: 90,
    ability: 'Volley: fires 3 arrows in a cone, 8s cooldown.',
  },
  {
    name: 'Royal Knight',
    faction: 'Iron Legion',
    type: 'Cavalry',
    hp: 180,
    damage: 28,
    speed: 5.2,
    cost: 160,
    ability: 'Charge: first attack stuns target for 1.5s.',
  },
  {
    name: 'Templar Paladin',
    faction: 'Iron Legion',
    type: 'Rare Units',
    hp: 260,
    damage: 30,
    speed: 3.0,
    cost: 240,
    ability: 'Divine Aegis: nearby allies take 15% reduced damage.',
  },
  {
    name: 'Berserker Spear',
    faction: 'Frostborn',
    type: 'Pikemen',
    hp: 110,
    damage: 24,
    speed: 3.2,
    cost: 90,
    ability: 'Impale: critical hit chance doubles vs Cavalry.',
  },
  {
    name: 'Frost Archer',
    faction: 'Frostborn',
    type: 'Archers',
    hp: 70,
    damage: 20,
    speed: 2.7,
    cost: 95,
    ability: 'Chill Shot: slows enemy movement by 30% for 2s.',
  },
  {
    name: 'Ice Wolf Rider',
    faction: 'Frostborn',
    type: 'Cavalry',
    hp: 165,
    damage: 26,
    speed: 5.8,
    cost: 170,
    ability: 'Frozen Path: ignores terrain slow for 4s.',
  },
  {
    name: 'Huskarl',
    faction: 'Frostborn',
    type: 'Heavy Infantry',
    hp: 200,
    damage: 25,
    speed: 2.5,
    cost: 130,
    ability: 'Unflinching: immune to stun while above 50% HP.',
  },
  {
    name: 'Jarl of Winter',
    faction: 'Frostborn',
    type: 'Rare Units',
    hp: 240,
    damage: 32,
    speed: 2.9,
    cost: 260,
    ability: 'Blizzard Call: slows all enemies in a radius for 4s.',
  },
  {
    name: 'Elven Spearwarden',
    faction: 'Sylvan Elves',
    type: 'Pikemen',
    hp: 95,
    damage: 19,
    speed: 3.5,
    cost: 80,
    ability: 'Forest Ambush: +50% damage when attacking from trees.',
  },
  {
    name: 'Moon Archer',
    faction: 'Sylvan Elves',
    type: 'Archers',
    hp: 65,
    damage: 26,
    speed: 3.0,
    cost: 100,
    ability: 'Night Mark: +10% crit chance per allied Archer.',
  },
  {
    name: 'Stag Cavalry',
    faction: 'Sylvan Elves',
    type: 'Cavalry',
    hp: 150,
    damage: 24,
    speed: 6.0,
    cost: 165,
    ability: 'Leap: can cross obstacles and gap terrain.',
  },
  {
    name: 'Elder Warden',
    faction: 'Sylvan Elves',
    type: 'Heavy Infantry',
    hp: 190,
    damage: 21,
    speed: 2.8,
    cost: 125,
    ability: 'Barkskin: regenerates 8 HP every 3s.',
  },
  {
    name: 'Dryad Enchantress',
    faction: 'Sylvan Elves',
    type: 'Rare Units',
    hp: 130,
    damage: 18,
    speed: 3.2,
    cost: 220,
    ability: 'Entangle: roots an enemy for 2.5s.',
  },
  {
    name: 'Shadow Hunter',
    faction: 'Sylvan Elves',
    type: 'Rare Units',
    hp: 115,
    damage: 34,
    speed: 3.8,
    cost: 230,
    ability: 'Vanish: becomes stealthed for 3s after a kill.',
  },
  {
    name: 'Orc Skewer',
    faction: 'Blackrock Orcs',
    type: 'Pikemen',
    hp: 135,
    damage: 21,
    speed: 2.6,
    cost: 80,
    ability: 'Savage Pierce: ignores 25% enemy armor.',
  },
  {
    name: 'Bone Archer',
    faction: 'Blackrock Orcs',
    type: 'Archers',
    hp: 85,
    damage: 24,
    speed: 2.5,
    cost: 85,
    ability: 'Poison Tip: applies stacking poison damage.',
  },
  {
    name: 'Boar Rider',
    faction: 'Blackrock Orcs',
    type: 'Cavalry',
    hp: 210,
    damage: 30,
    speed: 4.8,
    cost: 155,
    ability: 'Gore: charge deals bonus damage to grouped targets.',
  },
  {
    name: 'Ironjaw Brute',
    faction: 'Blackrock Orcs',
    type: 'Heavy Infantry',
    hp: 280,
    damage: 27,
    speed: 2.0,
    cost: 150,
    ability: 'Rampage: gains +20% attack speed after taking damage.',
  },
  {
    name: 'Warlock Shaman',
    faction: 'Blackrock Orcs',
    type: 'Rare Units',
    hp: 145,
    damage: 28,
    speed: 2.7,
    cost: 250,
    ability: 'Blood Frenzy: buffs nearby allies with +15% damage.',
  },
  {
    name: 'Deephold Sentinel',
    faction: 'Deepholm Dwarves',
    type: 'Pikemen',
    hp: 145,
    damage: 17,
    speed: 2.2,
    cost: 95,
    ability: 'Hold the Line: +35 armor when not moving.',
  },
  {
    name: 'Thunderhand Gunner',
    faction: 'Deepholm Dwarves',
    type: 'Archers',
    hp: 90,
    damage: 30,
    speed: 2.3,
    cost: 120,
    ability: 'Armor-Piercing Round: ignores 40% armor, 10s cooldown.',
  },
  {
    name: 'Ram Cavalry',
    faction: 'Deepholm Dwarves',
    type: 'Cavalry',
    hp: 230,
    damage: 25,
    speed: 4.2,
    cost: 175,
    ability: 'Battering Charge: destroys enemy barricades instantly.',
  },
  {
    name: 'Stoneheart Guard',
    faction: 'Deepholm Dwarves',
    type: 'Heavy Infantry',
    hp: 310,
    damage: 22,
    speed: 1.8,
    cost: 165,
    ability: 'Fortify: +50% knockback resistance for 5s.',
  },
  {
    name: 'Runesmith',
    faction: 'Deepholm Dwarves',
    type: 'Rare Units',
    hp: 160,
    damage: 20,
    speed: 2.4,
    cost: 245,
    ability: 'Rune Ward: grants a 120 HP shield to one ally.',
  },
  {
    name: 'Steam Golem',
    faction: 'Deepholm Dwarves',
    type: 'Rare Units',
    hp: 420,
    damage: 35,
    speed: 1.6,
    cost: 320,
    ability: 'Overdrive: attacks splash for 50% damage in an area.',
  },
];

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Tier List', href: '/tier-list' },
  { label: 'Builds', href: '/builds' },
  { label: 'Guides', href: '/guides' },
  { label: 'Database', href: '/database', active: true },
  { label: 'FAQ', href: '/faq' },
];

function getFactionColor(faction: string): string {
  switch (faction) {
    case 'Iron Legion':
      return 'text-tactical-blue border-tactical-blue/30 bg-tactical-blue/10';
    case 'Frostborn':
      return 'text-[#79c0ff] border-[#79c0ff]/30 bg-[#79c0ff]/10';
    case 'Sylvan Elves':
      return 'text-terminal-green border-terminal-green/30 bg-terminal-green/10';
    case 'Blackrock Orcs':
      return 'text-warning-orange border-warning-orange/30 bg-warning-orange/10';
    case 'Deepholm Dwarves':
      return 'text-[#a371f7] border-[#a371f7]/30 bg-[#a371f7]/10';
    default:
      return 'text-text-secondary border-border-subtle bg-abyss-light';
  }
}

function getTypeColor(type: string): string {
  switch (type) {
    case 'Pikemen':
      return 'text-terminal-green';
    case 'Archers':
      return 'text-tactical-blue';
    case 'Cavalry':
      return 'text-warning-orange';
    case 'Heavy Infantry':
      return 'text-text-primary';
    case 'Rare Units':
      return 'text-[#f0883e]';
    default:
      return 'text-text-secondary';
  }
}

export default function DatabasePage() {
  return (
    <div className="min-h-screen flex flex-col bg-abyss text-text-primary font-body">
      {/* Header */}
      <header className="border-b border-grid-line bg-abyss/95 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="font-display font-bold text-lg tracking-tight text-text-primary hover:text-tactical-blue transition-colors"
            >
              TABLETOP TAVERN GUIDE
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors border-b-2 ${
                    item.active
                      ? 'text-tactical-blue border-tactical-blue'
                      : 'text-text-secondary border-transparent hover:text-text-primary hover:border-border-subtle'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/"
              className="text-sm text-text-secondary hover:text-tactical-blue transition-colors border border-border-subtle px-3 py-1.5"
            >
              ← Return to Command
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 bg-tactical-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Hero section */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="tag-info">UNIT DATABASE</span>
              <span className="tag">PATCH 1.0.2</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Tactical Unit Database
            </h1>
            <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
              Tabletop Tavern is a roguelike RTS released on June 11, 2026. Success on the
              battlefield depends on knowing exactly what each unit brings to the encounter. This
              database catalogs every unit currently available across the five playable factions:
              the disciplined Iron Legion, the ferocious Frostborn, the elusive Sylvan Elves, the
              brutal Blackrock Orcs, and the indomitable Deepholm Dwarves. Each entry lists core
              combat statistics and the special ability that defines its tactical role.
            </p>
          </section>

          <hr className="section-divider" />

          {/* Stats summary */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'TOTAL UNITS', value: '27' },
              { label: 'FACTIONS', value: '5' },
              { label: 'UNIT TYPES', value: '5' },
              { label: 'RARE UNITS', value: '8' },
            ].map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="text-text-muted text-xs font-mono mb-1">{stat.label}</div>
                <div className="text-stat text-text-primary">{stat.value}</div>
              </div>
            ))}
          </section>

          {/* Database table */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-2xl font-bold text-text-primary">Unit Data Table</h2>
              <span className="tag-info">SCROLLABLE ON MOBILE</span>
            </div>
            <div className="overflow-x-auto border border-border-subtle">
              <table className="w-full text-sm text-left border-collapse min-w-[900px]">
                <thead className="bg-abyss-light text-text-secondary font-mono uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border-b border-grid-line">Unit Name</th>
                    <th className="px-4 py-3 border-b border-grid-line">Faction</th>
                    <th className="px-4 py-3 border-b border-grid-line">Type</th>
                    <th className="px-4 py-3 border-b border-grid-line">HP</th>
                    <th className="px-4 py-3 border-b border-grid-line">Damage</th>
                    <th className="px-4 py-3 border-b border-grid-line">Speed</th>
                    <th className="px-4 py-3 border-b border-grid-line">Cost</th>
                    <th className="px-4 py-3 border-b border-grid-line">Special Ability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-grid-line">
                  {UNITS.map((unit) => (
                    <tr key={unit.name} className="data-row">
                      <td className="px-4 py-3 font-medium text-text-primary">{unit.name}</td>
                      <td className="px-4 py-3">
                        <span className={`tag ${getFactionColor(unit.faction)}`}>
                          {unit.faction}
                        </span>
                      </td>
                      <td className={`px-4 py-3 font-mono font-medium ${getTypeColor(unit.type)}`}>
                        {unit.type}
                      </td>
                      <td className="px-4 py-3 font-mono text-text-primary">{unit.hp}</td>
                      <td className="px-4 py-3 font-mono text-text-primary">{unit.damage}</td>
                      <td className="px-4 py-3 font-mono text-text-primary">{unit.speed}</td>
                      <td className="px-4 py-3 font-mono text-terminal-green">{unit.cost}</td>
                      <td className="px-4 py-3 text-text-secondary max-w-md">{unit.ability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <hr className="section-divider" />

          {/* Usage guide */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
              How to Read the Database
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="stat-card">
                <h3 className="font-display font-bold text-tactical-blue mb-2">
                  Type Roles & Counters
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Pikemen are the primary answer to Cavalry; their bonus damage against mounted
                  units makes them essential for protecting your backline. Archers provide
                  consistent ranged damage but fold quickly if flanked. Cavalry excels at map
                  rotation and sniping isolated targets. Heavy Infantry anchors the frontline and
                  buys time for your damage dealers. Rare Units introduce unique mechanics that can
                  swing entire encounters when paired with the right build.
                </p>
              </div>
              <div className="stat-card">
                <h3 className="font-display font-bold text-tactical-blue mb-2">
                  Cost & Value
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Cost reflects the unit's gold investment in a typical skirmish. Cheaper
                  Pikemen and Archers allow for early map control, while Rare Units and high-end
                  Cavalry require economic setup. When drafting a run, balance your army curve so
                  you can field units every turn rather than saving for a single expensive
                  piece that may be surrounded before it attacks.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ snippets */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
              Unit Database FAQ
            </h2>
            <div className="space-y-3">
              <details className="group border border-border-subtle bg-abyss-light">
                <summary className="flex items-center justify-between px-4 py-3 cursor-pointer font-medium text-text-primary hover:text-tactical-blue transition-colors">
                  Which unit type counters Cavalry in Tabletop Tavern?
                  <span className="text-text-muted group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-text-secondary leading-relaxed">
                  Pikemen are the dedicated anti-Cavalry unit in every faction. Their special
                  abilities often trigger bonus damage, armor penetration, or stuns against
                  charging mounted units. Positioning Pikemen two tiles deep in front of your
                  Archers will blunt most Cavalry rushes and let your ranged line clean up the
                  fight.
                </div>
              </details>
              <details className="group border border-border-subtle bg-abyss-light">
                <summary className="flex items-center justify-between px-4 py-3 cursor-pointer font-medium text-text-primary hover:text-tactical-blue transition-colors">
                  Are Rare Units worth the high cost in campaign runs?
                  <span className="text-text-muted group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-text-secondary leading-relaxed">
                  Rare Units are expensive but can define an entire run when supported by the
                  right relics and upgrades. For example, the Steam Golem becomes devastating
                  with splash-damage relics, and the Shadow Hunter's stealth resets create
                  pick-focused strategies. We recommend adding one Rare Unit only after your
                  core frontline and damage dealers are already in place.
                </div>
              </details>
              <details className="group border border-border-subtle bg-abyss-light">
                <summary className="flex items-center justify-between px-4 py-3 cursor-pointer font-medium text-text-primary hover:text-tactical-blue transition-colors">
                  How do faction variants change the same unit type?
                  <span className="text-text-muted group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-text-secondary leading-relaxed">
                  Each faction reinterprets the five base roles through its own theme. Iron
                  Legion Pikemen are balanced and defensive, Frostborn Pikemen trade durability
                  for aggression, Sylvan Elves gain speed and ambush bonuses, Blackrock Orcs
                  ignore armor, and Deepholm Dwarves become immovable walls. Choosing a faction
                  is not just about aesthetics; it changes how you solve each encounter.
                </div>
              </details>
            </div>
          </section>

          <hr className="section-divider" />

          {/* Final tips */}
          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
              Drafting Tips for New Commanders
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              When you first load into a Tabletop Tavern run, the tavern draft presents you with
              random unit offers from your chosen faction and neutral mercenaries. A balanced
              composition usually includes one Heavy Infantry anchor, one or two Pikemen to hold
              the center, two Archers for damage, and a Cavalry or Rare Unit for flexibility. Avoid
              over-committing to a single type; the campaign scales enemy compositions based on
              your own army, and a lopsided roster will quickly be punished by hard counters.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Remember that stats are only half the story. Special abilities often dictate the
              outcome of close fights. The Jarl of Winter's area slow, the Warlock Shaman's damage
              aura, and the Templar Paladin's damage reduction all scale dramatically with proper
              positioning. Use this database to compare base values, then test each unit in the
              practice skirmish mode to learn its timing and range before risking your campaign
              progress.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-grid-line bg-abyss-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm">
              © 2026 Tabletop Tavern Guide. Unofficial fan site.
            </p>
            <nav className="flex items-center gap-6 text-sm text-text-secondary">
              <Link href="/privacy" className="hover:text-tactical-blue transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-tactical-blue transition-colors">
                Terms
              </Link>
              <Link href="/faq" className="hover:text-tactical-blue transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
