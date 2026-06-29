export const metadata = {
  title: "Vampire Crawlers Class Tier List — Best Classes & Builds Ranked (2026)",
  description: "Complete Vampire Crawlers class tier list ranking all six classes from S to C tier. Includes Blood Knight, Night Stalker, Shadow Weaver, Crimson Mage, Plague Lord, and Death Dancer with build comparisons.",
};

export default function ClassTierListPage() {
  const tierList = [
    { tier: "S", color: "text-yellow-400", class: "Crimson Mage", role: "AoE Caster", strengths: "Insane clearing speed, best farming class, high burst", weaknesses: "Squishy, difficult Blood Pool management, punishable", overallRating: "9.4/10" },
    { tier: "S", color: "text-yellow-400", class: "Blood Knight", role: "Tank / Bruiser", strengths: "Unkillable with lifesteal, best solo class, forgiving", weaknesses: "Lower DPS ceiling, slow boss kills in endgame", overallRating: "9.1/10" },
    { tier: "A", color: "text-green-400", class: "Night Stalker", role: "Assassin", strengths: "Highest single-target burst, PvP dominance, mobility", weaknesses: "Struggles in AoE fights, squishy if caught", overallRating: "8.5/10" },
    { tier: "A", color: "text-green-400", class: "Death Dancer", role: "Hybrid DPS", strengths: "Infinite skill ceiling, unmatched mobility, flashy", weaknesses: "Extremely high execution requirement, punishing mistakes", overallRating: "8.3/10" },
    { tier: "B", color: "text-blue-400", class: "Shadow Weaver", role: "Controller / Support", strengths: "Best CC in game, essential for group play, safe", weaknesses: "Low solo damage, dependent on party for kills", overallRating: "7.2/10" },
    { tier: "C", color: "text-red-400", class: "Plague Lord", role: "DoT Specialist", strengths: "Highest boss DPS over long fights, ignoring mechanics", weaknesses: "Ramp-up time kills clear speed, weak in trash fights", overallRating: "5.8/10" },
  ];

  const buildComparison = [
    { content: "Solo Leveling", topClass: "Crimson Mage", runnerUp: "Blood Knight", worstClass: "Plague Lord", notes: "Crimson Mage clears packs in seconds; Blood Knight never dies" },
    { content: "Group Dungeons", topClass: "Shadow Weaver", runnerUp: "Crimson Mage", worstClass: "Night Stalker", notes: "Shadow Weaver's root enables team combos; Night Stalker lacks AoE" },
    { content: "Boss Fights (Short)", topClass: "Night Stalker", runnerUp: "Death Dancer", worstClass: "Plague Lord", notes: "Burst classes dominate short fights; Plague Lord needs 20s+ ramp" },
    { content: "Boss Fights (Long)", topClass: "Plague Lord", runnerUp: "Blood Knight", worstClass: "Shadow Weaver", notes: "Plague Lord's exponential DoT scaling eventually outpaces burst classes" },
    { content: "PvP / Dueling", topClass: "Night Stalker", runnerUp: "Death Dancer", worstClass: "Shadow Weaver", notes: "Night Stalker's stealth + backstab deletes squishies in 1 combo" },
    { content: "Farming / Gold", topClass: "Crimson Mage", runnerUp: "Death Dancer", worstClass: "Blood Knight", notes: "Crimson Mage farms the most enemies/minute; Blood Knight is slow but steady" },
    { content: "Hardcore Mode", topClass: "Blood Knight", runnerUp: "Shadow Weaver", worstClass: "Crimson Mage", notes: "Blood Knight's lifesteal provides the safest hardcore experience by far" },
    { content: "Solo Self-Found", topClass: "Blood Knight", runnerUp: "Death Dancer", worstClass: "Night Stalker", notes: "Blood Knight needs minimal gear to function; Night Stalker is gear-dependent" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Vampire Crawlers Class Tier List — Best Classes & Builds Ranked</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Choosing your class in Vampire Crawlers is a permanent decision that shapes every aspect of your experience — from combat style and gear priorities to party role and endgame viability. While all six classes are viable for clearing content, they vary dramatically in solo capability, group utility, skill floor, and ceiling. This tier list evaluates each class across all major content types: solo leveling, group dungeons, boss fights (short and long), PvP, farming efficiency, and hardcore mode. Rankings reflect the current patch 1.8 meta.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Overall Class Tier List</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              The tiers are not a ranking of potential — every class can clear all content when mastered. Tiers reflect a class&apos;s overall performance across the most common activities, weighted by accessibility and consistency.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Class</th>
                    <th>Role</th>
                    <th>Key Strengths</th>
                    <th>Key Weaknesses</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {tierList.map((t, i) => (
                    <tr key={i}>
                      <td className={`font-bold ${t.color}`}>{t.tier}</td>
                      <td className="font-semibold">{t.class}</td>
                      <td>{t.role}</td>
                      <td>{t.strengths}</td>
                      <td>{t.weaknesses}</td>
                      <td className="font-semibold">{t.overallRating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">S Tier — Crimson Mage & Blood Knight</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Crimson Mage</strong> claims the top spot for its unmatched clearing speed. Sanguine Nova — a point-blank AoE explosion dealing 200% weapon damage — deletes entire packs in one cast. At high Blood Pool levels (76-100), a single Nova clears screens of trash enemies before they can attack. This makes Crimson Mage the best farming class, the fastest leveler, and the top choice for players who value efficiency. The trade-off is fragility: with the lowest base HP and a narrow 8-frame parry window, the class demands precise positioning and Blood Pool cycling. Mistakes are fatal, but mastery yields the highest DPS in the game.
            </p>
            <p className="text-ink-light leading-relaxed">
              <strong className="text-ink">Blood Knight</strong> is the anchor of the S tier for the opposite reason — consistency and survivability. Built-in 5% lifesteal on all melee attacks and a 12-frame parry window make it the safest class by a wide margin. Blood Knight can facetank content that forces other classes to kite or retreat. Its damage ceiling is lower than Crimson Mage or Night Stalker, and boss fights drag longer, but the class simply does not die. In hardcore mode or solo self-found challenges, Blood Knight is the undisputed best choice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">A Tier — Night Stalker & Death Dancer</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Night Stalker</strong> owns single-target damage. Night Step repositions behind enemies, and the follow-up 150% damage backstab combined with the class&apos;s inherent critical strike multiplier annihilates bosses and elite enemies. In PvP dueling, a well-played Night Stalker can one-combo squishy classes before they react. The weakness is AoE — Night Stalker has no viable screen-clearing ability and struggles in high-density areas. Group dungeon parties may prefer a Crimson Mage over a Night Stalker for clear speed, though the Stalker remains the premier boss-killer.
            </p>
            <p className="text-ink-light leading-relaxed">
              <strong className="text-ink">Death Dancer</strong> has the highest skill ceiling of any class. Death Waltz chains attacks between targets, compounding speed by 15% per hit. A fully ramped Death Dancer blurs across the screen faster than the camera can track, dealing damage that scales multiplicatively with player execution. The problem: one missed dodge or parry during the chain and the momentum collapses. Most players will perform better on Blood Knight or Crimson Mage, but for the mechanical elite, Death Dancer unlocks damage numbers no other class can reach.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">B Tier — Shadow Weaver</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Shadow Weaver</strong> occupies a specialized niche. Shadow Tendrils is the best crowd-control ability in the game — an AoE root that immobilizes 4 targets for 3 seconds on a 6-second cooldown. In group play, this is transformative: rooting a pack while the Crimson Mage charges Sanguine Nova guarantees a full-damage hit. However, the class&apos;s solo damage is the lowest in the game. Shadow Weaver relies entirely on teammates for kills. In solo play, the class is slow, methodical, and arguably the least enjoyable to level. Its tier ranking reflects its group indispensability balanced against its solo weakness.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">C Tier — Plague Lord</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Plague Lord</strong> suffers from the game&apos;s fundamental combat pacing. Plague Touch stacks a damage-over-time effect up to 5 times, with total damage scaling exponentially with stacks. On paper, a fully stacked Plague Touch deals the highest single-target damage per cast in the game. In practice, most fights in Vampire Crawlers end in under 10 seconds — before Plague Lord can reach 5 stacks. Boss fights lasting 30+ seconds (endgame raid content) are where Plague Lord shines, and in that specific scenario, the class outperforms every other. But for 90% of the game&apos;s content — leveling, farming, dungeon clearing — the ramp-up time cripples the class&apos;s efficiency. Plague Lord is a specialist class for a specific niche.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Build Comparison by Content Type</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              No single class dominates every activity. The table below identifies the best class for each content type, showing where specialists outshine generalists.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Content Type</th>
                    <th>Best Class</th>
                    <th>Runner-Up</th>
                    <th>Worst Class</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {buildComparison.map((b, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{b.content}</td>
                      <td className="text-accent">{b.topClass}</td>
                      <td>{b.runnerUp}</td>
                      <td className="text-ink-faded">{b.worstClass}</td>
                      <td className="text-ink-light text-sm">{b.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-ink mb-1">Can I change my class after picking one?</h3>
                <p className="text-ink-light">No, class selection is permanent per character. However, you unlock additional character slots at account levels 30, 60, and 100, allowing you to level multiple classes. The shared stash lets you transfer gear between characters, so leveling alts becomes progressively faster. Many experienced players maintain a Crimson Mage for farming, a Blood Knight for hard content, and a Night Stalker for PvP.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Which class is best for a completely new player?</h3>
                <p className="text-ink-light">Blood Knight, without question. The built-in lifesteal, high base HP, and generous parry window mean you survive mistakes that would kill any other class. Learn the game&apos;s combat fundamentals on Blood Knight first. Once you are comfortable with dodge timing and Blood Pool cycling, create a second character as Crimson Mage or Night Stalker to explore higher-damage playstyles.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Why is Plague Lord ranked C tier if it does the most boss damage?</h3>
                <p className="text-ink-light">Plague Lord&apos;s damage potential is S-tier in a vacuum, but tier lists account for the entire game experience. The class underperforms in 90% of content — leveling from 1-50, farming dungeons, running daily quests, participating in random group content — because those activities end too quickly for DoT stacking to matter. Plague Lord is a dedicated raid boss specialist. If your primary goal is endgame raid progression and you have a group that can carry you through leveling, consider Plague Lord. For everyone else, the tier rating reflects the full gameplay experience.</p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Rankings based on Vampire Crawlers patch 1.8 meta with data from community tier surveys, speedrun leaderboards, and class performance analytics.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/beginner-strategy" className="text-accent hover:underline">Beginner Strategy Guide</a></li>
              <li><a href="/builds" className="text-accent hover:underline">Best Builds for Every Class</a></li>
              <li><a href="/skill-tree" className="text-accent hover:underline">Complete Skill Tree Guide</a></li>
              <li><a href="/gear-guide" className="text-accent hover:underline">Best-in-Slot Gear Guide</a></li>
            </ul>
          </div>

          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Tier Summary</h3>
            <ul className="space-y-2 text-sm text-ink-light list-disc list-inside">
              <li><span className="text-yellow-400 font-semibold">S:</span> Crimson Mage, Blood Knight</li>
              <li><span className="text-green-400 font-semibold">A:</span> Night Stalker, Death Dancer</li>
              <li><span className="text-blue-400 font-semibold">B:</span> Shadow Weaver</li>
              <li><span className="text-red-400 font-semibold">C:</span> Plague Lord</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
