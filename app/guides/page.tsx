import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tabletop Tavern Strategy Guides - Complete Walkthrough & Tactics',
  description:
    'Master Tabletop Tavern with in-depth strategy guides covering beginner basics, combat mechanics, faction analysis, unit counters, item synergies, and campaign walkthroughs for the roguelike RTS.',
};

interface GuideEntry {
  number: string;
  title: string;
  description: string;
  href: string;
  tag: string;
  tagClass: string;
}

const guides: GuideEntry[] = [
  {
    number: '01',
    title: "Beginner's Guide",
    description:
      'New to Tabletop Tavern? This guide covers the absolute fundamentals: how the roguelike map works, what resources to prioritize in the first three turns, how to read the tactical grid, and the core concepts of simultaneous-turn RTS combat. Learn the difference between Command Points and Action Points, why scouting matters more than fighting in the early game, and how to survive your first boss encounter. Includes a step-by-step walkthrough of the opening tavern encounter.',
    href: '/beginners-guide',
    tag: 'STARTER',
    tagClass: 'tag-info',
  },
  {
    number: '02',
    title: 'Combat Mechanics Deep Dive',
    description:
      'A comprehensive breakdown of Tabletop Tavern\'s combat system. Understand how initiative rolls interact with real-time positioning, the armor penetration formula, elemental damage types and their resistances, and the critical importance of terrain elevation. This guide also covers flanking bonuses, overwatch mechanics, suppression fire, and how to chain abilities across units for devastating combos. Master the art of simultaneous-turn planning.',
    href: '/combat',
    tag: 'COMBAT',
    tagClass: 'tag-warn',
  },
  {
    number: '03',
    title: 'Faction Analysis & Tier List',
    description:
      'All six factions in Tabletop Tavern are not created equal. This guide provides a full breakdown of the Ironclad Vanguard, Mystic Circle, Wildwood Pact, Crimson Horde, Azure Syndicate, and the Forsaken Exiles. We analyze each faction\'s playstyle, tech tree priorities, unique units, and win conditions. Includes matchup charts showing which factions counter which, and recommendations for different skill levels.',
    href: '/factions',
    tag: 'FACTIONS',
    tagClass: 'tag-info',
  },
  {
    number: '04',
    title: 'Unit Encyclopedia & Counters',
    description:
      'Every unit in Tabletop Tavern has strengths, weaknesses, and hard counters. This encyclopedic guide lists all 48 units across factions with full stat lines, upgrade paths, and ability descriptions. Most importantly, it includes a comprehensive counter-chart: what beats what, and why. Whether you are facing a swarm of Crimson Horde raiders or a Mystic Circle spell-slinger, this guide tells you exactly which units to deploy.',
    href: '/units',
    tag: 'UNITS',
    tagClass: 'tag-warn',
  },
  {
    number: '05',
    title: 'Item Synergies & Build Crafting',
    description:
      'Tabletop Tavern features over 120 items ranging from common consumables to legendary artifacts. This guide categorizes every item by rarity and effect, then dives deep into synergies. Discover how the Resonance Crystal amplifies spell damage when paired with the Arcane Focus, or how the Thornmail Plate reflects melee damage back to attackers. Includes recommended item builds for each faction and playstyle.',
    href: '/items',
    tag: 'ITEMS',
    tagClass: 'tag-info',
  },
  {
    number: '06',
    title: 'Campaign Walkthrough',
    description:
      'The Tabletop Tavern campaign spans 12 chapters with branching paths based on your tavern choices and faction alignment. This walkthrough covers every chapter, every boss, every hidden encounter, and every secret treasure. We provide optimal decision trees for each branch, recommended party compositions for difficult encounters, and strategies for the brutal final chapter. Spoiler-tagged for story-sensitive content.',
    href: '/campaign',
    tag: 'CAMPAIGN',
    tagClass: 'tag-success',
  },
  {
    number: '07',
    title: 'Advanced Tactics: Roguelike Decision-Making',
    description:
      'Tabletop Tavern\'s roguelike layer is what separates casual players from veterans. This advanced guide covers risk assessment on the map screen, when to push for elite encounters versus when to play safe, how to read the seed-influenced event pool, and the mathematics behind reroll strategies. Learn how top players maintain 80%+ win rates on Ascension difficulty by treating every decision as an expected-value calculation.',
    href: '/beginners-guide',
    tag: 'ADVANCED',
    tagClass: 'tag-warn',
  },
  {
    number: '08',
    title: 'Multiplayer Meta & Ranked Play',
    description:
      'Tabletop Tavern\'s ranked multiplayer scene is evolving rapidly since launch. This guide tracks the current meta, the most effective faction compositions at each rank tier, and the psychological warfare of simultaneous-turn play. Includes replays analysis from top-ranked players, common opening gambits, and how to adapt your strategy when the meta shifts. Updated weekly based on ladder data.',
    href: '/combat',
    tag: 'PVP',
    tagClass: 'tag-info',
  },
];

const faqs = [
  {
    question: 'Is Tabletop Tavern a single-player or multiplayer game?',
    answer:
      'Tabletop Tavern supports both. The roguelike campaign is a fully single-player experience with 12 chapters and branching paths. Multiplayer includes ranked 1v1 simultaneous-turn matches and cooperative campaigns for up to 4 players. The strategy guides on this site cover both modes, with specific sections dedicated to each.',
  },
  {
    question: 'How long does it take to learn Tabletop Tavern?',
    answer:
      'The basic mechanics can be grasped in 2-3 hours of play. Understanding faction synergies, unit counters, and item builds typically takes 15-20 hours. Mastering the roguelike decision-making and reaching high-rank multiplayer play can take 100+ hours. Our Recommended Path section below provides a structured learning order to accelerate your progress.',
  },
  {
    question: 'What is the best faction for beginners?',
    answer:
      'The Ironclad Vanguard is widely recommended for new players due to its straightforward unit roster and forgiving economy. The Wildwood Pact is also beginner-friendly with strong defensive options. Avoid the Forsaken Exiles and Crimson Horde until you have a solid understanding of the game\'s mechanics, as they require precise positioning and aggressive play respectively.',
  },
];

const recommendedPath = [
  { step: '1', title: "Beginner's Guide", href: '/beginners-guide', note: 'Start here. Learn the core rules, UI, and basic strategy.' },
  { step: '2', title: 'Faction Analysis', href: '/factions', note: 'Choose your first faction based on your preferred playstyle.' },
  { step: '3', title: 'Unit Encyclopedia', href: '/units', note: 'Understand what each unit does and how to counter enemy units.' },
  { step: '4', title: 'Combat Mechanics', href: '/combat', note: 'Deep dive into the combat system once you have the basics down.' },
  { step: '5', title: 'Item Synergies', href: '/items', note: 'Learn how to build effective item loadouts for your faction.' },
  { step: '6', title: 'Campaign Walkthrough', href: '/campaign', note: 'Tackle the full campaign with informed decision-making.' },
];

export default function GuidesPage() {
  return (
    <>
      {/* Header */}
      <header className="border-b border-border-subtle bg-abyss-light/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-mono text-text-secondary hover:text-tactical-blue transition-colors"
          >
            <span className="text-tactical-blue">←</span> BACK_TO_BASE
          </Link>
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-lg text-text-primary tracking-tight">
              TABLETOP TAVERN
            </span>
            <span className="tag tag-info">STRATEGY_GUIDES</span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 bg-tactical-grid">
        <div className="max-w-5xl mx-auto px-6 py-12">
          {/* Title Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-tactical-blue tracking-widest">
                // GUIDES_INDEX
              </span>
              <span className="h-px flex-1 bg-border-subtle" />
              <span className="font-mono text-xs text-text-muted">v1.0_2026-06</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
              Strategy Guides<span className="text-tactical-blue cursor-blink" />
            </h1>
            <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
              Tabletop Tavern combines roguelike progression with real-time-strategy combat in a way
              no other game does. Released on June 11, 2026, it demands tactical thinking across
              every layer — from the tavern decisions that shape your run, to the simultaneous-turn
              combat encounters that decide each battle. These guides are built by players who have
              logged hundreds of hours across every faction and difficulty tier. Whether you are
              taking your first steps into the tavern or pushing for the top of the ranked ladder,
              you will find what you need here.
            </p>
          </section>

          {/* Intro Text */}
          <section className="mb-12 space-y-4 text-text-secondary leading-relaxed max-w-3xl">
            <p>
              The core of Tabletop Tavern is its unique blend of genres. The roguelike layer means
              every run is different — map layouts, event sequences, item drops, and even enemy
              compositions are procedurally generated from a seed. You make permanent decisions at
              the tavern between encounters: which units to recruit, which upgrades to purchase,
              which paths to take on the overworld map. These decisions compound over the course of
              a run, and a single poor choice in chapter 3 can spell doom in chapter 8.
            </p>
            <p>
              The RTS combat layer is where those decisions are put to the test. Combat unfolds in
              simultaneous turns: you and your opponent issue commands to all units at once, then
              watch the resolution play out in real time. This means you cannot simply react to what
              your opponent does — you must anticipate. Positioning, timing, and ability sequencing
              are everything. A well-placed overwatch trap can decimate an enemy push. A mistimed
              flank can leave your best unit exposed. The skill ceiling is extraordinarily high, and
              that is what makes the game so rewarding to master.
            </p>
            <p>
              Our guides are organized to take you from absolute beginner to advanced strategist.
              Each guide is self-contained but also references the others where relevant. We
              recommend following the learning path below if you are new to the game, but
              experienced players can jump directly to any topic. All guides are kept up to date
              with the latest patches and balance changes.
            </p>
          </section>

          {/* Guides Grid */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-tactical-blue tracking-widest">
                // ALL_GUIDES
              </span>
              <span className="h-px flex-1 bg-border-subtle" />
              <span className="font-mono text-xs text-text-muted">{guides.length} ENTRIES</span>
            </div>
            <div className="grid gap-px bg-border-subtle border border-border-subtle">
              {guides.map((guide) => (
                <Link
                  key={guide.number}
                  href={guide.href}
                  className="group bg-abyss hover:bg-abyss-light transition-colors duration-150 p-6 flex gap-6 items-start"
                >
                  <span className="font-mono text-2xl text-text-muted group-hover:text-tactical-blue transition-colors shrink-0">
                    {guide.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="font-display text-xl font-bold text-text-primary group-hover:text-tactical-blue transition-colors">
                        {guide.title}
                      </h2>
                      <span className={guide.tagClass}>{guide.tag}</span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {guide.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 font-mono text-xs text-tactical-blue opacity-0 group-hover:opacity-100 transition-opacity">
                      READ_GUIDE →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Recommended Path */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-tactical-blue tracking-widest">
                // RECOMMENDED_PATH
              </span>
              <span className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="bg-abyss-light border border-border-subtle p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-2">
                New Player Learning Path
              </h2>
              <p className="text-text-secondary text-sm mb-6">
                If you are new to Tabletop Tavern, we recommend reading the guides in this order.
                Each guide builds on the knowledge from the previous one.
              </p>
              <ol className="space-y-3">
                {recommendedPath.map((item) => (
                  <li key={item.step}>
                    <Link
                      href={item.href}
                      className="group flex items-start gap-4 p-4 border border-border-subtle hover:border-tactical-blue/50 bg-abyss transition-colors"
                    >
                      <span className="font-mono text-lg text-tactical-blue font-bold shrink-0 w-8 text-center">
                        {item.step}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-display font-bold text-text-primary group-hover:text-tactical-blue transition-colors">
                            {item.title}
                          </span>
                          <span className="font-mono text-xs text-text-muted group-hover:text-tactical-blue transition-colors">
                            →
                          </span>
                        </div>
                        <p className="text-text-secondary text-sm mt-1">{item.note}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-tactical-blue tracking-widest">
                // FAQ
              </span>
              <span className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="border border-border-subtle divide-y divide-border-subtle">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-abyss-light">
                  <summary className="cursor-pointer p-5 flex items-center justify-between font-display font-semibold text-text-primary hover:text-tactical-blue transition-colors list-none">
                    <span>{faq.question}</span>
                    <span className="font-mono text-tactical-blue text-xl shrink-0 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-text-secondary text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Closing Text */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-tactical-blue tracking-widest">
                // ADDITIONAL_NOTES
              </span>
              <span className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="space-y-4 text-text-secondary leading-relaxed max-w-3xl">
              <p>
                Tabletop Tavern is a game that rewards deep knowledge. Unlike many strategy games
                where raw mechanical skill can carry you through, Tabletop Tavern demands that you
                understand the interaction between its systems. A faction choice is meaningless
                without the right unit composition. A unit composition is useless without the right
                items. Items are wasted without the right combat tactics. And all of it falls apart
                if you make poor decisions on the roguelike map. Every guide on this page exists to
                help you connect those dots.
              </p>
              <p>
                We also maintain a living tier list and build database that is updated with every
                patch. If a balance change shifts the meta, you will find it reflected here within
                days. The game launched on June 11, 2026 and the meta is still settling — check
                back regularly for updates, especially the multiplayer guide which evolves weekly
                based on ladder data from top players.
              </p>
              <p>
                If you have questions that are not covered in these guides, the FAQ above addresses
                the most common ones. For more specific inquiries, each guide page includes its own
                FAQ section for topic-specific questions. Good luck in the tavern, commander.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-subtle bg-abyss-light">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-text-primary tracking-tight">
              TABLETOP TAVERN GUIDE
            </span>
            <span className="tag">v1.0</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <Link href="/beginners-guide" className="hover:text-tactical-blue transition-colors">
              Beginner's Guide
            </Link>
            <Link href="/factions" className="hover:text-tactical-blue transition-colors">
              Factions
            </Link>
            <Link href="/campaign" className="hover:text-tactical-blue transition-colors">
              Campaign
            </Link>
            <Link href="/faq" className="hover:text-tactical-blue transition-colors">
              FAQ
            </Link>
          </div>
          <div className="font-mono text-xs text-text-muted">
            © 2026 · UNOFFICIAL FAN SITE
          </div>
        </div>
      </footer>
    </>
  );
}
