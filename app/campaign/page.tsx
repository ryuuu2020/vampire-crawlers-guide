import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tabletop Tavern Campaign Map Guide — Node Choices, Routes & Boss Strategy',
  description:
    'Complete Tabletop Tavern campaign map guide. Learn when to choose Battle, Shop, Rest, and Sack Settlement nodes. Decision framework, risk-reward analysis, and final boss route recommendations.',
  openGraph: {
    title: 'Tabletop Tavern Campaign Map Guide — Node Choices, Routes & Boss Strategy',
    description:
      'Master the campaign map in Tabletop Tavern. Node type analysis, decision framework, and boss route strategy for the roguelike RTS.',
    type: 'article',
  },
};

const NODE_TYPES = [
  {
    id: 'battle',
    name: 'Battle Node',
    icon: '⚔',
    color: 'text-terminal-red',
    borderColor: 'border-terminal-red/30',
    bgColor: 'bg-terminal-red/5',
    description:
      'A standard combat encounter where your army faces an enemy force on a tactical map. Battle Nodes are the most common node type on the campaign map and serve as the primary way to earn gold, experience, and equipment. The difficulty of a Battle Node is influenced by your current campaign depth — enemies scale harder the further you progress, but rewards scale proportionally. Each Battle Node presents a procedurally generated map with terrain features, cover positions, and deployment zones that vary every run, ensuring no two encounters play out identically.',
    whenToChoose:
      'Pick Battle Nodes when your army is at high health and you have a clear combat advantage — either through superior unit composition, upgraded equipment, or a faction matchup that favors you. Battle Nodes are also the correct choice when your gold reserves are running low and you need loot drops to stay economically competitive. If you are running a snowball strategy that relies on early-game momentum to out-scale the campaign, prioritizing Battle Nodes in the first two acts is essential.',
    riskReward:
      'Risk: Direct combat always carries the threat of unit losses. Losing key elite units in a Battle Node can cascade into a weakened army for the rest of the run. Higher-difficulty Battle Nodes may spawn elite or champion-tier enemies that can wipe an unprepared force. Reward: Gold drops, equipment chests, experience for unit upgrades, and occasional rare artifacts. Battle Nodes are the highest-variance node type — a single great battle can set you up for the entire campaign, while a single disastrous one can end your run.',
  },
  {
    id: 'shop',
    name: 'Shop Node',
    icon: '◈',
    color: 'text-tactical-blue',
    borderColor: 'border-tactical-blue/30',
    bgColor: 'bg-tactical-blue/5',
    description:
      'A merchant outpost where you can spend gold to purchase equipment, consumables, unit upgrades, and occasionally faction-specific mercenaries. Shop inventories are partially randomized but always include at least one weapon upgrade, one armor upgrade, and one consumable item. Higher campaign tiers unlock better base item pools, and some Shops in later acts stock unique items that cannot be obtained anywhere else. The Shop also offers a sell function, letting you convert unwanted loot into gold for future purchases.',
    whenToChoose:
      'Visit Shop Nodes when you have accumulated a meaningful gold surplus (typically 200+ gold) and your current equipment is falling behind the campaign difficulty curve. Shops are especially valuable after a string of Battle Nodes where you have acquired loot you cannot use but can sell for profit. If your army is well-equipped but your consumable stash is empty — no healing potions, no scrolls — a Shop Node is the safest investment. Avoid Shops when your gold is below 100, as the inventory will likely be unaffordable and you are better off taking a Battle Node for potential drops.',
    riskReward:
      'Risk: Low direct risk — no combat is involved. The opportunity cost is the node you did not visit instead. Spending gold at a Shop means you have less reserve for future Shops or Sack Settlement bribes. Reward: Guaranteed, targeted upgrades. Unlike Battle Nodes where loot is random, Shops let you choose exactly what your army needs. A well-timed weapon or armor upgrade can be more impactful than winning two battles. The ability to fill specific gaps in your build makes Shop Nodes the most reliable progression node in the campaign.',
  },
  {
    id: 'rest',
    name: 'Rest Site',
    icon: '⌂',
    color: 'text-terminal-green',
    borderColor: 'border-terminal-green/30',
    bgColor: 'bg-terminal-green/5',
    description:
      'A safe haven where your army can recover health, remove negative status effects, and perform limited unit upgrades. Rest Sites offer three options: heal all units to full health, upgrade one unit of your choice (increasing its level by one), or remove one negative modifier from your army. Each Rest Site can only be used once, and the choice is permanent — you cannot return later. Rest Sites appear less frequently than Battle Nodes, typically every 4-6 nodes along the map.',
    whenToChoose:
      'Take Rest Sites when your army has taken significant damage across multiple battles and healing is urgently needed. If more than 40% of your total army HP is depleted, a Rest Site is almost always the correct call. Alternatively, if your army is healthy but you have a key unit that is one level away from unlocking a critical ability, the upgrade option at a Rest Site can be more valuable than healing. The debuff removal option is situationally powerful — if you have acquired a crippling status effect like Cursed or Demoralized from a recent battle, removing it at a Rest Site prevents it from compounding across future encounters.',
    riskReward:
      'Risk: Minimal direct risk, but the opportunity cost is significant. Every Rest Site you take is a Battle Node you skipped — meaning less gold, less experience, and less loot. Over-relying on Rest Sites can leave you under-leveled and under-equipped for the final boss. Reward: Guaranteed sustain. Full heal, a permanent unit upgrade, or debuff removal — all of which are impossible to obtain through other nodes. The value of a Rest Site scales with how much you need it; a well-timed Rest Site mid-campaign can save a run that would otherwise spiral into failure.',
  },
  {
    id: 'sack',
    name: 'Sack Settlement',
    icon: '☢',
    color: 'text-warning-orange',
    borderColor: 'border-warning-orange/30',
    bgColor: 'bg-warning-orange/5',
    description:
      'A neutral settlement that you can either raid for immediate resources or peacefully interact with for a smaller, safer reward. Raiding a Sack Settlement triggers a defensive battle against the settlement militia — a unique fight with fortified enemy positions, civilian units that flee, and destructible buildings that yield bonus gold when destroyed. If you choose the peaceful option, you receive a small gold tribute, a random consumable, and occasionally a unit recruit from the settlement. The peaceful path also grants a temporary reputation buff that slightly improves prices at the next Shop Node.',
    whenToChoose:
      'Raid Sack Settlements when you are confident in your army strength and need a large influx of gold quickly — the raid rewards are significantly higher than peaceful tributes, often yielding 150-300 gold plus building loot. Choose the peaceful option when your army is weakened, when you are planning to visit a Shop Node soon (to benefit from the price discount), or when you are playing a faction with reputation-based mechanics like Humans or Elves. Sack Settlements are high-value nodes that should rarely be skipped entirely; even the peaceful option provides useful resources.',
    riskReward:
      'Risk: Raiding triggers a fortified defensive battle that can be harder than a standard Battle Node, especially if the settlement has upgraded militia or defensive structures. Unit losses in a raid can negate the gold gained. The peaceful option carries reputational consequences — some factions and future events react differently based on how you treat settlements. Reward: Raiding offers the highest gold-per-node ratio in the game, plus unique building loot that cannot be obtained elsewhere. The peaceful path provides a steady trickle of resources, a potential unit recruit, and a Shop discount — a more conservative but reliable payoff.',
  },
];

const DECISION_FRAMEWORK = [
  {
    situation: 'High HP (>70%), low gold (<150)',
    recommended: 'Battle Node',
    reasoning: 'Your army is healthy enough to fight, and you need gold. Battle Nodes provide the highest gold yield through direct drops and loot chests.',
    priority: 'HIGH',
  },
  {
    situation: 'High HP (>70%), high gold (>250)',
    recommended: 'Shop Node',
    reasoning: 'Capitalize on your gold surplus by purchasing targeted upgrades. A well-timed Shop visit solidifies your advantage before the next combat.',
    priority: 'HIGH',
  },
  {
    situation: 'Low HP (<40%), adequate gold',
    recommended: 'Rest Site',
    reasoning: 'Your army is in critical condition. Healing to full HP prevents a snowballing defeat in the next encounter. Do not risk a Battle Node with a weakened force.',
    priority: 'CRITICAL',
  },
  {
    situation: 'Low HP (<40%), low gold (<100)',
    recommended: 'Rest Site',
    reasoning: 'Heal first, then seek gold through subsequent Battle Nodes. Entering combat with low HP risks permanent unit losses that are costlier than missing one battle worth of gold.',
    priority: 'CRITICAL',
  },
  {
    situation: 'Mid HP (40-70%), no debuffs',
    recommended: 'Shop Node or Sack Settlement (peaceful)',
    reasoning: 'You are not in immediate danger but not fully healthy either. Invest in equipment or consumables to prepare for upcoming fights, or take a safe Sack Settlement tribute.',
    priority: 'MEDIUM',
  },
  {
    situation: 'Mid HP (40-70%), has debuffs',
    recommended: 'Rest Site (remove debuff)',
    reasoning: 'Negative modifiers compound across battles. Removing a debuff now is more impactful than healing partial HP, as the debuff will cause more damage over time than the HP deficit.',
    priority: 'HIGH',
  },
  {
    situation: 'Key unit near level-up threshold',
    recommended: 'Rest Site (upgrade unit)',
    reasoning: 'If your army HP is above 60%, spending the Rest Site on a unit upgrade can unlock a game-changing ability. Evaluate whether the level-up grants a meaningful power spike.',
    priority: 'MEDIUM',
  },
  {
    situation: 'Pre-boss (last node before Act end)',
    recommended: 'Shop Node or Rest Site',
    reasoning: 'Before a boss fight, prioritize either full HP (Rest Site heal) or consumables and equipment (Shop). Never enter a boss fight with low HP or empty consumable slots.',
    priority: 'CRITICAL',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is the best node to choose in Tabletop Tavern campaign map?',
    answer:
      'There is no universally best node — the optimal choice depends on your current army state. As a general rule: choose Battle Nodes when healthy and low on gold, Shop Nodes when you have gold to spend, Rest Sites when your army is damaged or debuffed, and Sack Settlements when you need a burst of resources. The Decision Framework table on this page provides specific recommendations based on your HP and gold levels.',
  },
  {
    question: 'How many nodes are there in a Tabletop Tavern campaign run?',
    answer:
      'A full campaign run typically consists of 18-24 nodes across three acts, ending with a final boss encounter. Each act contains 6-8 nodes, and the map branches at certain points, offering you a choice between 2-3 available nodes. Not all nodes are visited in a single run — path selection determines which nodes you encounter and ultimately shapes your army strength going into the boss fight.',
  },
  {
    question: 'Should I raid or spare Sack Settlements in Tabletop Tavern?',
    answer:
      'Raiding yields significantly more gold (150-300 vs. 30-60 for peaceful) and unique building loot, but triggers a fortified defensive battle. Spare settlements when your army is weakened, when you plan to visit a Shop soon (peaceful grants a price discount), or when playing reputation-sensitive factions like Elves. Raid when you are strong and need a gold injection to afford a key Shop purchase.',
  },
];

function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'CRITICAL':
      return 'text-terminal-red border-terminal-red/40 bg-terminal-red/10';
    case 'HIGH':
      return 'text-warning-orange border-warning-orange/40 bg-warning-orange/10';
    case 'MEDIUM':
      return 'text-tactical-blue border-tactical-blue/40 bg-tactical-blue/10';
    default:
      return 'text-text-secondary border-border-subtle bg-abyss-light';
  }
}

export default function CampaignMapPage() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-14 border-b border-border-subtle bg-abyss flex items-center px-4 lg:px-6">
          <a
            href="/"
            className="text-xs font-mono text-tactical-blue hover:text-tactical-blue-dim transition-colors"
          >
            &larr; Back to Command Center
          </a>
          <div className="flex-1" />
          <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse-subtle" />
          <span className="text-[11px] font-mono text-text-muted ml-2">CAMPAIGN_MAP_v1.0.2</span>
        </header>

        {/* Main Content */}
        <main className="flex-1 bg-tactical-grid p-4 lg:p-6">
          <div className="max-w-6xl mx-auto space-y-10">
            {/* Hero Section */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <span className="tag tag-info">STRATEGY</span>
                <span className="tag">CAMPAIGN</span>
                <span className="tag">UPDATED 2026-06-25</span>
              </div>
              <h1 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-text-primary">
                Tabletop Tavern Campaign Map Guide
              </h1>
              <p className="text-sm text-text-secondary mt-3 max-w-3xl leading-relaxed">
                The campaign map in Tabletop Tavern is the strategic backbone of every run.
                Unlike traditional RTS games where battles are scripted and linear, Tabletop
                Tavern borrows from the roguelike playbook: each run generates a branching map of
                interconnected nodes, and the nodes you choose to visit — and the ones you skip —
                determine whether your army arrives at the final boss as a well-oiled war machine
                or a battered remnant. This guide breaks down every node type, provides a
                data-driven decision framework for choosing between them, and outlines optimal
                routing strategies for reaching and defeating the final boss across all three
                acts.
              </p>
            </section>

            {/* Node Types */}
            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-1">
                Node Types Explained
              </h2>
              <p className="text-sm text-text-secondary mb-6">
                The campaign map features four primary node types. Each serves a distinct
                strategic purpose, and understanding when to prioritize each one is the single
                most important campaign skill in Tabletop Tavern.
              </p>

              <div className="space-y-6">
                {NODE_TYPES.map((node) => (
                  <div
                    key={node.id}
                    className={`border ${node.borderColor} ${node.bgColor} p-5 lg:p-6`}
                  >
                    {/* Node Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-2xl font-mono ${node.color}`}>{node.icon}</span>
                      <h3 className="font-display text-lg font-semibold text-text-primary">
                        {node.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <h4 className="text-xs font-mono text-tactical-blue uppercase tracking-wider mb-2">
                        Description
                      </h4>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {node.description}
                      </p>
                    </div>

                    {/* When to Choose */}
                    <div className="mb-4">
                      <h4 className="text-xs font-mono text-tactical-blue uppercase tracking-wider mb-2">
                        When to Choose
                      </h4>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {node.whenToChoose}
                      </p>
                    </div>

                    {/* Risk / Reward */}
                    <div>
                      <h4 className="text-xs font-mono text-tactical-blue uppercase tracking-wider mb-2">
                        Risk / Reward Analysis
                      </h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{node.riskReward}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Decision Framework Table */}
            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-1">
                Decision Framework
              </h2>
              <p className="text-sm text-text-secondary mb-6">
                Use this table to determine the optimal node choice based on your current army
                state. The framework accounts for HP level, gold reserves, debuff status, and
                position on the campaign map. Priority indicates how critical the recommendation
                is — CRITICAL means deviating from the recommendation risks a run-ending
                outcome.
              </p>

              <div className="overflow-x-auto border border-border-subtle">
                <table className="w-full text-sm">
                  <thead className="bg-abyss-light">
                    <tr className="border-b border-border-subtle">
                      <th className="text-left px-4 py-3 font-mono text-xs text-tactical-blue uppercase tracking-wider">
                        Current Situation
                      </th>
                      <th className="text-left px-4 py-3 font-mono text-xs text-tactical-blue uppercase tracking-wider">
                        Recommended Node
                      </th>
                      <th className="text-left px-4 py-3 font-mono text-xs text-tactical-blue uppercase tracking-wider">
                        Reasoning
                      </th>
                      <th className="text-left px-4 py-3 font-mono text-xs text-tactical-blue uppercase tracking-wider">
                        Priority
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {DECISION_FRAMEWORK.map((row, idx) => (
                      <tr key={idx} className="data-row">
                        <td className="px-4 py-3 text-text-primary font-medium align-top whitespace-nowrap">
                          {row.situation}
                        </td>
                        <td className="px-4 py-3 text-tactical-blue font-mono align-top whitespace-nowrap">
                          {row.recommended}
                        </td>
                        <td className="px-4 py-3 text-text-secondary align-top">
                          {row.reasoning}
                        </td>
                        <td className="px-4 py-3 align-top whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 text-xs font-mono border ${getPriorityColor(
                              row.priority
                            )}`}
                          >
                            {row.priority}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Final Boss Route */}
            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-1">
                Final Boss Route Recommendations
              </h2>
              <p className="text-sm text-text-secondary mb-6">
                The final boss of Tabletop Tavern is a multi-phase encounter that tests every
                aspect of your campaign preparation. Below are route recommendations for each
                act, designed to maximize your army strength entering the boss arena.
              </p>

              <div className="space-y-4">
                {/* Act 1 */}
                <div className="border border-border-subtle bg-abyss-light p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-tactical-blue border border-tactical-blue/30 px-2 py-0.5">
                      ACT 1
                    </span>
                    <h3 className="font-display text-base font-semibold text-text-primary">
                      Foundation Building
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    In Act 1, prioritize Battle Nodes aggressively. Your starting army is
                    functional but under-equipped, and the early enemies are the most
                    manageable they will ever be. Aim for 4-5 Battle Nodes in Act 1 to
                    accumulate gold and experience. Take one Shop Node around the midpoint of
                    the act to upgrade your weakest equipment slots. Skip Rest Sites unless your
                    HP drops below 35% — early-game healing is less critical because enemy
                    damage output is still low. If you encounter a Sack Settlement, raid it;
                    the militia in Act 1 is weak and the gold injection accelerates your
                    snowball. Target exiting Act 1 with at least 200 gold, all units above
                    level 3, and no major equipment gaps.
                  </p>
                </div>

                {/* Act 2 */}
                <div className="border border-border-subtle bg-abyss-light p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-tactical-blue border border-tactical-blue/30 px-2 py-0.5">
                      ACT 2
                    </span>
                    <h3 className="font-display text-base font-semibold text-text-primary">
                      Stabilization &amp; Scaling
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Act 2 is where the campaign difficulty spikes. Enemy compositions become
                    more varied, and elite units begin appearing in standard Battle Nodes.
                    Shift your node priority toward balance: alternate between Battle Nodes and
                    Shop or Rest Sites. Visit at least one Shop Node in Act 2 to acquire
                    tier-2 equipment — the power jump from tier-1 to tier-2 gear is the
                    single largest equipment upgrade in the game and is mandatory for
                    surviving Act 3. Take one Rest Site for healing or a key unit upgrade.
                    For Sack Settlements, evaluate your army strength: if you took minimal
                    losses in Act 1, raid for gold; if you are limping into Act 2, take the
                    peaceful option for the consumable and reputation buff. Target exiting
                    Act 2 with at least 300 gold, all units above level 5, and at least two
                    pieces of tier-2 equipment.
                  </p>
                </div>

                {/* Act 3 */}
                <div className="border border-border-subtle bg-abyss-light p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-terminal-red border border-terminal-red/30 px-2 py-0.5">
                      ACT 3
                    </span>
                    <h3 className="font-display text-base font-semibold text-text-primary">
                      Boss Preparation
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Act 3 is short — typically 4-6 nodes before the boss arena. Every node
                    choice here directly impacts your boss readiness. Prioritize a Rest Site
                    as your first Act 3 node to heal any carryover damage from Act 2. Follow
                    with a Shop Node to stock up on consumables: healing potions, resurrection
                    scrolls, and at least one crowd-control item (freeze or stun). Take one
                    or two Battle Nodes only if your army is fully healed and you need
                    additional experience to hit a level threshold. Avoid Sack Settlements
                    entirely in Act 3 — the militia fights are too risky this late in the
                    campaign, and the peaceful tribute is not worth the node slot. The final
                    node before the boss should always be a Rest Site if available, for a
                    final full-heal. Enter the boss arena with full HP, at least 3
                    consumables, and all units above level 7.
                  </p>
                </div>

                {/* Boss Strategy */}
                <div className="border border-terminal-red/30 bg-terminal-red/5 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-terminal-red border border-terminal-red/40 px-2 py-0.5">
                      BOSS
                    </span>
                    <h3 className="font-display text-base font-semibold text-text-primary">
                      Final Boss Encounter Strategy
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">
                    The final boss of Tabletop Tavern is a three-phase encounter. Phase 1 is
                    a standard army-vs-army fight — deploy in a defensive formation and let
                    the boss forces come to you, using terrain to funnel them into chokepoints.
                    Phase 2 summons elite reinforcements and shifts to an aggressive posture;
                    pop your consumables here — healing potions when your frontline drops
                    below 50% HP, and crowd-control items to lock down the elite adds while
                    you focus down the boss unit. Phase 3 is a solo boss phase where the
                    enemy commander gains powerful personal abilities; switch to focused-fire
                    tactics, prioritize your highest-damage units, and use any remaining
                    scrolls to resurrect fallen elites.
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    The most common cause of boss fight losses is entering Phase 3 with a
                    depleted army. If your frontline is gone by Phase 2, you will not survive
                    Phase 3. Conserve your consumables for Phase 2 and 3 — do not waste
                    healing potions in Phase 1 unless a unit is about to die permanently.
                    Resurrection scrolls should be held for Phase 3, where a single revived
                    elite unit can make the difference between victory and a wiped run.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Snippets */}
            <section>
              <h2 className="font-display text-xl font-semibold text-text-primary mb-1">
                Campaign Map FAQ
              </h2>
              <p className="text-sm text-text-secondary mb-6">
                Common questions about the Tabletop Tavern campaign map and node selection
                strategy.
              </p>

              <div className="bg-abyss-light border border-border-subtle p-4 space-y-2">
                {FAQ_ITEMS.map((faq, idx) => (
                  <details key={idx} className="group">
                    <summary className="text-sm font-semibold text-text-primary cursor-pointer hover:text-tactical-blue transition-colors">
                      {faq.question}
                    </summary>
                    <p className="text-sm text-text-secondary mt-2 pl-4 border-l-2 border-border-subtle leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Summary */}
            <section className="border-t border-grid-line pt-8">
              <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
                Summary
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed max-w-3xl">
                The Tabletop Tavern campaign map rewards adaptability over rigid planning. No
                two runs generate the same map layout, and the nodes available to you at each
                branch point will differ every time. The key to consistent campaign clears is
                internalizing the Decision Framework: assess your army state at every node
                choice, prioritize healing when HP is low, prioritize gold when HP is high,
                and never enter the final boss under-prepared. Treat the campaign map as a
                resource management puzzle — your HP, gold, equipment, and consumables are all
                interconnected resources, and the node you choose to visit is the lever that
                adjusts all of them simultaneously. Master this balance, and the final boss
                becomes a manageable encounter rather than a coin flip.
              </p>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border-subtle bg-abyss px-4 lg:px-6 py-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-mono text-text-muted">
                TABLETOP_TAVERN_GUIDE // CAMPAIGN_MAP_STRATEGY
              </p>
              <p className="text-xs text-text-muted mt-1">
                Unofficial fan guide. Tabletop Tavern is a trademark of its respective owner.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-text-muted">
              <a href="/" className="hover:text-tactical-blue transition-colors">
                HOME
              </a>
              <a href="/tier-list" className="hover:text-tactical-blue transition-colors">
                TIER_LIST
              </a>
              <a href="/guides" className="hover:text-tactical-blue transition-colors">
                GUIDES
              </a>
              <a href="/faq" className="hover:text-tactical-blue transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
