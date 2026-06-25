'use client';

import { useState } from 'react';

/* ============================================
   Template A: Tactical Command Center
   Builds Page — Tabletop Tavern Best Builds
   ============================================ */

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Faction Tier List', href: '/tier-list' },
  { label: 'Best Builds', href: '/builds', active: true },
  { label: 'Strategy Guides', href: '/guides' },
  { label: 'Unit Database', href: '/database' },
  { label: 'Campaign Map', href: '/campaign' },
  { label: 'FAQ', href: '/faq' },
];

const STATS = [
  { label: 'BUILDS', value: '3', unit: '' },
  { label: 'PATCH', value: '1.0.2', unit: '' },
  { label: 'FACTIONS', value: '5', unit: '' },
  { label: 'LAST UPDATE', value: '2026-06-25', unit: '' },
];

/* ============================================
   FAQ Snippets — structured data friendly
   ============================================ */
const FAQ_ITEMS = [
  {
    question: 'What is the best build in Tabletop Tavern for Patch 1.0.2?',
    answer:
      'The Vikings Rush build currently holds the highest community-estimated campaign win rate at approximately 58%. Its early-game Berserker pressure combined with Longship mobility allows players to snowball before opponents can stabilize. That said, the "best" build depends heavily on the campaign map layout and enemy faction composition. Orcs Siege excels against defensive lineups, while Elves Precision dominates open-field engagements. We recommend mastering at least two builds to adapt to different scenarios.',
  },
  {
    question: 'How do I transition from early game to late game with these builds?',
    answer:
      'Each build has a distinct power curve. Vikings Rush peaks in the early-to-mid game (turns 1-12) and should aim to close out the campaign before turn 15. Orcs Siege is weakest early but becomes nearly unstoppable once you assemble the full Catapult + Ironhide frontline by turn 10. Elves Precision maintains a steady power curve throughout — focus on preserving your Elven Archers and stacking critical strike items. The key transition point for all builds is the Shop node at turn 7, where you must decide between upgrading units or purchasing build-defining relics.',
  },
  {
    question: 'Are these builds viable for the new campaign maps added in Patch 1.0.2?',
    answer:
      'Yes. The two new campaign maps introduced in Patch 1.0.2 — Frozen Pass and Burning Steppe — have been tested with all three builds by the community. Vikings Rush performs exceptionally well on Frozen Pass due to the narrow corridors favoring melee rushes. Orcs Siege struggles slightly on Burning Steppe (terrain slows siege unit movement) but compensates with higher durability. Elves Precision is the most map-agnostic of the three, maintaining consistent performance across all six campaign maps. Community testing data is aggregated from Discord reports and in-game replay analysis.',
  },
];

/* ============================================
   Build Data
   ============================================ */
interface Build {
  name: string;
  tagline: string;
  faction: string;
  difficulty: string;
  powerSpike: string;
  description: string;
  coreUnits: { name: string; role: string; tier: number }[];
  keyItems: { name: string; effect: string; priority: string }[];
  strengths: string[];
  weaknesses: string[];
  playstyle: string;
  winRate: string;
  pickRate: string;
}

const BUILDS: Build[] = [
  {
    name: 'Vikings Rush',
    tagline: 'Overwhelm enemies before they can build a defense',
    faction: 'Vikings',
    difficulty: 'Medium',
    powerSpike: 'Early-Mid (Turns 1-12)',
    description:
      'The Vikings Rush build leverages the faction\'s superior early-game aggression to dominate the opening phase of any campaign. Berserkers provide frontline pressure with their Frenzy passive (attack speed increases by 15% per kill, stacking up to 3 times), while Longship mobility allows rapid map traversal and flanking maneuvers. Shieldmaidens anchor the backline with group defense buffs, and Runecasters provide crucial anti-armor magic damage against heavily armored targets like Dwarven Ironbreakers. The build aims to secure a decisive advantage by turn 8-10 and close out the campaign before late-game scaling factions come online.',
    coreUnits: [
      { name: 'Berserker', role: 'Frontline DPS', tier: 3 },
      { name: 'Longship', role: 'Mobility / Transport', tier: 2 },
      { name: 'Shieldmaiden', role: 'Support / Defense Aura', tier: 2 },
      { name: 'Runecaster', role: 'Anti-Armor Magic', tier: 3 },
    ],
    keyItems: [
      {
        name: 'Berserker\'s Mead Horn',
        effect: 'All Berserkers gain +20% attack damage for 10 seconds on activation',
        priority: 'Core',
      },
      {
        name: 'Frost Rune Amulet',
        effect: 'Runecaster spells apply a 30% slow for 3 seconds',
        priority: 'High',
      },
      {
        name: 'Stormforged Greaves',
        effect: '+15% movement speed for all melee units',
        priority: 'Medium',
      },
    ],
    strengths: [
      'Fastest early-game clear speed of all builds',
      'Excellent map mobility via Longship repositioning',
      'Strong against squishy ranged compositions (Elves, Humans)',
      'Frenzy stacking creates snowball potential',
    ],
    weaknesses: [
      'Falls off sharply after turn 15 if not ahead',
      'Vulnerable to heavy crowd control (Dwarven Stun, Orc Knockback)',
      'Low base durability — relies on Shieldmaiden aura',
      'Poor performance on defensive holdout missions',
    ],
    playstyle:
      'Aggressive tempo. Push enemy camps continuously, take Shop nodes only for essential upgrades, and avoid Rest nodes unless critically low on HP. The goal is to win before the enemy reaches their power spike.',
    winRate: '~58%',
    pickRate: '~32%',
  },
  {
    name: 'Orcs Siege',
    tagline: 'Crush enemy fortifications with overwhelming firepower',
    faction: 'Orcs',
    difficulty: 'Hard',
    powerSpike: 'Mid-Late (Turns 10-20)',
    description:
      'Orcs Siege is a slow-burn build that sacrifices early tempo for an unstoppable late-game composition. The core strategy revolves around protecting Catapults — long-range siege units that deal massive area damage to structures and clumped enemies. Ironhide frontliners provide an immovable wall with their Thick Skin passive (reduces all incoming damage by 25%), while Shamans deploy healing totems and damage amplification curses. War Drummer units are the build\'s hidden gem: their Battle Rhythm aura grants +10% attack speed and +5% movement speed to all nearby Orc units, stacking with multiple Drummers.',
    coreUnits: [
      { name: 'Catapult', role: 'Siege / AoE Damage', tier: 4 },
      { name: 'Ironhide', role: 'Frontline Tank', tier: 3 },
      { name: 'Shaman', role: 'Healer / Debuffer', tier: 3 },
      { name: 'War Drummer', role: 'Aura Support', tier: 2 },
    ],
    keyItems: [
      {
        name: 'Siege Commander\'s Banner',
        effect: 'Catapults deal +35% damage to structures and gain +2 range',
        priority: 'Core',
      },
      {
        name: 'Ironhide Pauldrons',
        effect: 'Ironhides reflect 10% of blocked damage back to attackers',
        priority: 'High',
      },
      {
        name: 'War Drum of the Ancients',
        effect: 'War Drummer aura radius increased by 50%',
        priority: 'Medium',
      },
      {
        name: 'Shaman\'s Spirit Staff',
        effect: 'Healing totems also grant +15% damage reduction',
        priority: 'High',
      },
    ],
    strengths: [
      'Unmatched siege and structure damage output',
      'Incredible late-game durability with Ironhide + Shaman synergy',
      'Dominates defensive missions and boss encounters',
      'War Drummer stacking provides exponential army-wide scaling',
    ],
    weaknesses: [
      'Very slow early game — vulnerable to rush builds',
      'Catapults are immobile and easy to flank without proper positioning',
      'Expensive unit costs limit early Shop flexibility',
      'Struggles on maps with lots of chokepoints (Catapults need open sightlines)',
    ],
    playstyle:
      'Methodical siege. Prioritize economy and unit preservation in the early game. Stack Ironhides in a concave formation to protect Catapults. Take Rest nodes liberally to keep units alive — you win by outlasting, not outrushing.',
    winRate: '~55%',
    pickRate: '~28%',
  },
  {
    name: 'Elves Precision',
    tagline: 'Surgical strikes from maximum range with critical hit synergy',
    faction: 'Elves',
    difficulty: 'Easy',
    powerSpike: 'Consistent (All Phases)',
    description:
      'Elves Precision is the most consistent build in Tabletop Tavern, offering strong performance from the opening turn through the final boss. Elven Archers form the backbone with their Deadly Aim passive (critical hits deal 200% damage instead of 150%) and long attack range. Windriders provide scouting and hit-and-run harassment, while Druids offer flexible support through healing, crowd control roots, or damage amplification. The build excels at kiting — using superior range and movement speed to wear down enemies without taking return damage. Sentinel units guard the backline against flankers with their Entrapment ability (roots the first enemy that enters melee range for 2 seconds).',
    coreUnits: [
      { name: 'Elven Archer', role: 'Ranged DPS / Crit Carry', tier: 3 },
      { name: 'Windrider', role: 'Scout / Harassment', tier: 2 },
      { name: 'Druid', role: 'Flex Support', tier: 3 },
      { name: 'Sentinel', role: 'Backline Protection', tier: 2 },
    ],
    keyItems: [
      {
        name: 'Eagle Eye Scope',
        effect: '+25% critical strike chance for all ranged units',
        priority: 'Core',
      },
      {
        name: 'Windrider Cloak',
        effect: 'Windriders gain invisibility for 4 seconds after leaving combat',
        priority: 'High',
      },
      {
        name: 'Druid\'s Grove Seed',
        effect: 'Druid abilities have 30% reduced cooldown',
        priority: 'Medium',
      },
    ],
    strengths: [
      'Most consistent power curve — no weak phase',
      'Superior kiting and range advantage against melee-heavy comps',
      'Flexible itemization with multiple viable build paths',
      'Easiest build to learn for new players',
    ],
    weaknesses: [
      'Lowest raw DPS ceiling compared to Vikings Rush and Orcs Siege',
      'Vulnerable to dive compositions that bypass Sentinels',
      'Relies heavily on critical strike RNG for maximum damage',
      'Individual units are fragile — losing an Archer set is punishing',
    ],
    playstyle:
      'Precision kiting. Maintain maximum range at all times. Use Windriders to scout ahead and bait enemy abilities. Stack critical strike chance items aggressively. Druids should prioritize healing in early game and switch to damage amplification after turn 8.',
    winRate: '~52%',
    pickRate: '~18%',
  },
];

/* ============================================
   Comparison Table Data
   ============================================ */
const COMPARISON_ROWS = [
  { metric: 'Win Rate (est.)', vikings: '~58%', orcs: '~55%', elves: '~52%' },
  { metric: 'Pick Rate (est.)', vikings: '~32%', orcs: '~28%', elves: '~18%' },
  { metric: 'Difficulty', vikings: 'Medium', orcs: 'Hard', elves: 'Easy' },
  { metric: 'Power Spike', vikings: 'Early-Mid', orcs: 'Mid-Late', elves: 'Consistent' },
  { metric: 'Clear Speed', vikings: 'Fast', orcs: 'Slow', elves: 'Medium' },
  { metric: 'Durability', vikings: 'Low', orcs: 'Very High', elves: 'Low-Medium' },
  { metric: 'Siege Damage', vikings: 'Medium', orcs: 'Very High', elves: 'Medium' },
  { metric: 'Mobility', vikings: 'High', orcs: 'Low', elves: 'Very High' },
  { metric: 'Map Flexibility', vikings: 'Medium', orcs: 'Low-Medium', elves: 'High' },
  { metric: 'Boss Performance', vikings: 'Medium', orcs: 'Very High', elves: 'High' },
];

function getDifficultyTag(difficulty: string) {
  switch (difficulty) {
    case 'Easy':
      return 'tag-success';
    case 'Medium':
      return 'tag-info';
    case 'Hard':
      return 'tag-warn';
    default:
      return 'tag';
  }
}

export default function BuildsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* SEO: Page title metadata is set via document.title since we use 'use client'.
          For SSR metadata, a separate metadata export would be used, but 'use client'
          pages cannot export metadata directly. The layout.tsx provides base SEO. */}
      <title>Tabletop Tavern Builds — Best Faction Builds &amp; Strategy Guide (Patch 1.0.2)</title>
      <meta
        name="description"
        content="Best Tabletop Tavern builds for Patch 1.0.2: Vikings Rush (58% WR), Orcs Siege (55% WR), Elves Precision (52% WR). Core units, key items, strengths & weaknesses, and comparison table."
      />

      {/* ===== Mobile menu overlay ===== */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ===== Sidebar ===== */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-56 bg-[#0a0e13] border-r border-border-subtle
          transform transition-transform duration-200
          lg:translate-x-0 lg:static lg:z-auto
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 h-14 border-b border-border-subtle">
          <div className="w-7 h-7 bg-tactical-blue flex items-center justify-center">
            <span className="text-[10px] font-mono font-bold text-abyss">CMD</span>
          </div>
          <span className="font-display text-sm font-semibold tracking-tight text-text-primary">
            TTG
          </span>
        </div>

        {/* Navigation */}
        <nav className="py-4 flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`sidebar-link ${item.active ? 'active' : ''}`}
            >
              <span className="w-1.5 h-1.5 bg-current opacity-40" />
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border-subtle">
          <p className="text-[11px] font-mono text-text-muted">
            Tabletop Tavern Guide
          </p>
          <p className="text-[10px] font-mono text-text-muted mt-0.5">
            v1.0.0
          </p>
        </div>
      </aside>

      {/* ===== Main content ===== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* ===== Top Stats Bar ===== */}
        <header className="h-14 border-b border-border-subtle bg-abyss flex items-center px-4 lg:px-6 gap-4 lg:gap-8">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1 p-1"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-4 h-px bg-text-secondary" />
            <span className="block w-4 h-px bg-text-secondary" />
            <span className="block w-4 h-px bg-text-secondary" />
          </button>

          {/* Back link */}
          <a
            href="/"
            className="text-xs font-mono text-text-muted hover:text-text-secondary transition-colors flex items-center gap-1"
          >
            <span>&larr;</span> HOME
          </a>

          {/* Stats */}
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">
                {stat.label}
              </span>
              <span className="font-mono text-sm font-semibold text-text-primary tabular-nums">
                {stat.value}
              </span>
            </div>
          ))}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Status indicator */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse-subtle" />
            <span className="text-[11px] font-mono text-text-muted">ONLINE</span>
          </div>
        </header>

        {/* ===== Content area with grid bg ===== */}
        <main className="flex-1 bg-tactical-grid p-4 lg:p-6">
          <div className="max-w-6xl mx-auto space-y-6">

            {/* ===== Page Header ===== */}
            <section>
              <h1 className="font-display text-2xl font-bold tracking-tight text-text-primary">
                Best Builds
              </h1>
              <p className="text-sm text-text-secondary mt-1 max-w-2xl">
                Community-tested faction builds for Tabletop Tavern Patch 1.0.2. Each build
                includes core unit composition, key item priorities, and matchup analysis.
                Win rates are community estimated based on Discord reports and replay data.
              </p>
            </section>

            {/* ===== FAQ Snippets (Top of page for SEO) ===== */}
            <section>
              <div className="bg-abyss-light border border-border-subtle p-4 lg:p-5">
                <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-0">
                  {FAQ_ITEMS.map((faq, i) => (
                    <details
                      key={i}
                      className={`group ${
                        i < FAQ_ITEMS.length - 1 ? 'border-b border-grid-line' : ''
                      }`}
                    >
                      <summary className="py-3 cursor-pointer select-none flex items-center justify-between text-sm text-text-primary hover:text-tactical-blue transition-colors font-medium">
                        <span>{faq.question}</span>
                        <span className="text-xs font-mono text-text-muted group-open:hidden ml-2 shrink-0">
                          [+]
                        </span>
                        <span className="text-xs font-mono text-tactical-blue hidden group-open:inline ml-2 shrink-0">
                          [-]
                        </span>
                      </summary>
                      <p className="pb-3 text-sm text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            {/* ===== Build Cards ===== */}
            {BUILDS.map((build, idx) => (
              <section key={idx}>
                <div className="bg-abyss-light border border-border-subtle">
                  {/* Build Header */}
                  <div className="p-4 lg:p-5 border-b border-grid-line">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h2 className="font-display text-xl font-semibold tracking-tight text-text-primary">
                            {build.name}
                          </h2>
                          <span className={`tag ${getDifficultyTag(build.difficulty)}`}>
                            {build.difficulty}
                          </span>
                          <span className="tag">{build.faction}</span>
                          <span className="text-xs font-mono text-text-muted">
                            {build.powerSpike}
                          </span>
                        </div>
                        <p className="text-sm text-tactical-blue mt-1.5 font-mono">
                          {build.tagline}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <div className="text-right">
                          <p className="text-[10px] font-mono uppercase text-text-muted">Win Rate</p>
                          <p className="font-mono text-sm font-semibold text-terminal-green tabular-nums">
                            {build.winRate}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-mono uppercase text-text-muted">Pick Rate</p>
                          <p className="font-mono text-sm font-semibold text-text-secondary tabular-nums">
                            {build.pickRate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Build Body */}
                  <div className="p-4 lg:p-5 space-y-4">
                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {build.description}
                    </p>

                    {/* Three-column grid: Units / Items / Strengths-Weaknesses */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      {/* Core Units */}
                      <div>
                        <h3 className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">
                          Core Units
                        </h3>
                        <div className="space-y-2">
                          {build.coreUnits.map((unit, ui) => (
                            <div
                              key={ui}
                              className="flex items-center justify-between py-1.5 px-2 border border-grid-line bg-abyss"
                            >
                              <div>
                                <span className="text-sm text-text-primary">{unit.name}</span>
                                <span className="text-xs text-text-muted ml-2">{unit.role}</span>
                              </div>
                              <span className="text-xs font-mono text-tactical-blue">
                                T{unit.tier}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Items */}
                      <div>
                        <h3 className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">
                          Key Items
                        </h3>
                        <div className="space-y-2">
                          {build.keyItems.map((item, ii) => (
                            <div
                              key={ii}
                              className="py-1.5 px-2 border border-grid-line bg-abyss"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-text-primary">{item.name}</span>
                                <span
                                  className={`text-[10px] font-mono px-1.5 py-0.5 border ${
                                    item.priority === 'Core'
                                      ? 'text-warning-orange border-warning-orange/30 bg-warning-orange/10'
                                      : item.priority === 'High'
                                      ? 'text-tactical-blue border-tactical-blue/30 bg-tactical-blue/10'
                                      : 'text-text-secondary border-border-subtle'
                                  }`}
                                >
                                  {item.priority}
                                </span>
                              </div>
                              <p className="text-xs text-text-muted mt-0.5">{item.effect}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Strengths & Weaknesses */}
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-[10px] font-mono uppercase tracking-wider text-terminal-green mb-2">
                            Strengths
                          </h3>
                          <ul className="space-y-1">
                            {build.strengths.map((s, si) => (
                              <li
                                key={si}
                                className="text-xs text-text-secondary flex items-start gap-1.5"
                              >
                                <span className="text-terminal-green mt-0.5 shrink-0">+</span>
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-[10px] font-mono uppercase tracking-wider text-terminal-red mb-2">
                            Weaknesses
                          </h3>
                          <ul className="space-y-1">
                            {build.weaknesses.map((w, wi) => (
                              <li
                                key={wi}
                                className="text-xs text-text-secondary flex items-start gap-1.5"
                              >
                                <span className="text-terminal-red mt-0.5 shrink-0">-</span>
                                {w}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Playstyle note */}
                    <div className="border-t border-grid-line pt-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-tactical-blue mr-2">
                        Playstyle
                      </span>
                      <span className="text-sm text-text-secondary">{build.playstyle}</span>
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* ===== Section Divider ===== */}
            <div className="section-divider" />

            {/* ===== Comparison Table ===== */}
            <section>
              <div className="mb-4">
                <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary">
                  Build Comparison
                </h2>
                <p className="text-xs font-mono text-text-muted mt-1">
                  Side-by-side comparison across key performance metrics
                </p>
              </div>
              <div className="bg-abyss-light border border-border-subtle overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-grid-line">
                      <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">
                        Metric
                      </th>
                      <th className="text-center py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-tactical-blue">
                        Vikings Rush
                      </th>
                      <th className="text-center py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-warning-orange">
                        Orcs Siege
                      </th>
                      <th className="text-center py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-terminal-green">
                        Elves Precision
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((row, i) => (
                      <tr key={i} className="data-row">
                        <td className="py-2.5 px-4 text-xs font-mono text-text-secondary">
                          {row.metric}
                        </td>
                        <td className="py-2.5 px-4 text-center font-mono tabular-nums text-text-primary">
                          {row.vikings}
                        </td>
                        <td className="py-2.5 px-4 text-center font-mono tabular-nums text-text-primary">
                          {row.orcs}
                        </td>
                        <td className="py-2.5 px-4 text-center font-mono tabular-nums text-text-primary">
                          {row.elves}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ===== How to Choose Section ===== */}
            <section>
              <div className="bg-abyss-light border border-border-subtle p-4 lg:p-5">
                <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary mb-3">
                  How to Choose Your Build
                </h2>
                <div className="text-sm text-text-secondary leading-relaxed space-y-3">
                  <p>
                    Selecting the right build depends on three factors: your preferred playstyle,
                    the campaign map you are running, and the enemy faction you expect to face.
                    Below is a decision framework to help you choose.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                    <div className="border border-border-subtle p-3 bg-abyss">
                      <h3 className="text-sm font-semibold text-tactical-blue mb-1">
                        Pick Vikings Rush if...
                      </h3>
                      <ul className="text-xs text-text-secondary space-y-1">
                        <li>- You enjoy aggressive, fast-paced gameplay</li>
                        <li>- The map has narrow corridors (e.g., Frozen Pass)</li>
                        <li>- You are facing Elves or Humans</li>
                        <li>- You want to finish campaigns quickly</li>
                      </ul>
                    </div>
                    <div className="border border-border-subtle p-3 bg-abyss">
                      <h3 className="text-sm font-semibold text-warning-orange mb-1">
                        Pick Orcs Siege if...
                      </h3>
                      <ul className="text-xs text-text-secondary space-y-1">
                        <li>- You prefer methodical, defensive play</li>
                        <li>- The map has open sightlines (avoid Burning Steppe)</li>
                        <li>- You are facing Dwarves or other tanky comps</li>
                        <li>- You enjoy late-game power fantasy</li>
                      </ul>
                    </div>
                    <div className="border border-border-subtle p-3 bg-abyss">
                      <h3 className="text-sm font-semibold text-terminal-green mb-1">
                        Pick Elves Precision if...
                      </h3>
                      <ul className="text-xs text-text-secondary space-y-1">
                        <li>- You are new to Tabletop Tavern</li>
                        <li>- You want consistent performance on any map</li>
                        <li>- You enjoy kiting and micro-management</li>
                        <li>- You prefer flexibility over specialization</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3">
                    For competitive play, mastering at least two builds is recommended.
                    Vikings Rush covers aggressive matchups while Orcs Siege handles defensive
                    scenarios. Elves Precision serves as a safe blind-pick option when you are
                    unsure what the enemy is bringing.
                  </p>
                </div>
              </div>
            </section>

            {/* ===== Data Source Note ===== */}
            <div className="terminal-block">
              <p className="text-text-muted mb-1">
                <span className="text-warning-orange">$</span> data.source
              </p>
              <p>method: community_estimated</p>
              <p>patch: 1.0.2</p>
              <p>sample_size: Discord reports + replay analysis</p>
              <p>confidence: moderate</p>
              <p className="text-text-muted mt-1">
                Note: Win rates and pick rates are community estimates based on aggregated
                player reports and replay data. Actual values may vary. Official API data is
                not available as of this writing.
              </p>
              <p className="cursor-blink">last_updated: 2026-06-25</p>
            </div>

          </div>
        </main>

        {/* ===== Footer ===== */}
        <footer className="border-t border-border-subtle bg-abyss">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-[11px] font-mono text-text-muted">
                <span>&copy; {new Date().getFullYear()} Tabletop Tavern Guide</span>
                <a href="/privacy" className="hover:text-text-secondary transition-colors">
                  Privacy
                </a>
                <a href="/terms" className="hover:text-text-secondary transition-colors">
                  Terms
                </a>
                <a href="/" className="hover:text-text-secondary transition-colors">
                  Home
                </a>
                <a href="/builds" className="text-tactical-blue hover:text-tactical-blue-dim transition-colors">
                  Builds
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://afdian.com/a/gameguidehub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-tactical-blue hover:text-tactical-blue-dim transition-colors"
                >
                  SUPPORT ON AFDIAN
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
