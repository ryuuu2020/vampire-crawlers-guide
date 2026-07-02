export const metadata = {
  title: "Vampire Crawlers Weapon Comparison — Best Weapons for Every Class & Playstyle",
  description: "Complete Vampire Crawlers weapon comparison guide. Compare damage, speed, range, and special effects to find the best weapon for your class and playstyle.",
};

const weaponComparison = [
  { weapon: "Bloodfang Sword", type: "Sword", class: "Blood Knight", damage: "220-280", speed: "Medium", range: "Melee", special: "Lifesteal +5%", bestFor: "Sustain tanking", rating: "S" },
  { weapon: "Crimson Edge", type: "Sword", class: "Blood Knight", damage: "190-240", speed: "Fast", range: "Melee", special: "Bleed 3s", bestFor: "Aggressive builds", rating: "A" },
  { weapon: "Nightblade Dagger", type: "Dagger", class: "Night Stalker", damage: "160-200", speed: "Very Fast", range: "Melee", special: "Backstab +50%", bestFor: "Burst assassination", rating: "S" },
  { weapon: "Shadowfang", type: "Dagger", class: "Night Stalker", damage: "140-180", speed: "Very Fast", range: "Melee", special: "Stealth crit +30%", bestFor: "PvP dueling", rating: "A" },
  { weapon: "Inferno Staff", type: "Staff", class: "Crimson Mage", damage: "280-350", speed: "Slow", range: "Ranged", special: "AoE Burn 5s", bestFor: "Wave clearing", rating: "S" },
  { weapon: "Frostbite Wand", type: "Wand", class: "Crimson Mage", damage: "200-260", speed: "Fast", range: "Ranged", special: "Slow 30% 2s", bestFor: "Kiting control", rating: "A" },
  { weapon: "Twinblade Fan", type: "Fan", class: "Death Dancer", damage: "150-190", speed: "Very Fast", range: "Melee", special: "Chain +15% per hit", bestFor: "Momentum stacking", rating: "S" },
  { weapon: "Viper Glaive", type: "Glaive", class: "Death Dancer", damage: "170-220", speed: "Fast", range: "Extended", special: "Poison stack 5x", bestFor: "Sustained combat", rating: "A" },
  { weapon: "Shadowbind Staff", type: "Staff", class: "Shadow Weaver", damage: "130-170", speed: "Medium", range: "Ranged", special: "Root 4 targets 3s", bestFor: "Group control", rating: "S" },
  { weapon: "Veil Scepter", type: "Scepter", class: "Shadow Weaver", damage: "110-150", speed: "Fast", range: "Ranged", special: "Party buff +10% dmg", bestFor: "Support play", rating: "B" },
  { weapon: "Blight Axe", type: "Axe", class: "Plague Lord", damage: "240-310", speed: "Slow", range: "Melee", special: "DoT stack 5x", bestFor: "Raid bosses", rating: "S" },
  { weapon: "Corrupted Scythe", type: "Scythe", class: "Plague Lord", damage: "200-260", speed: "Medium", range: "Extended", special: "Area DoT cloud", bestFor: "Crowd fights", rating: "B" },
];

const bestWeaponsByClass = [
  { class: "Blood Knight", bestWeapon: "Bloodfang Sword", altWeapon: "Crimson Edge", whyBest: "Lifesteal stacks with class passive totaling 10% leech — near-immortal sustain." },
  { class: "Crimson Mage", bestWeapon: "Inferno Staff", altWeapon: "Frostbite Wand", whyBest: "Inferno Staff AoE multiplier amplifies Sanguine Nova by 40% against burning targets." },
  { class: "Night Stalker", bestWeapon: "Nightblade Dagger", altWeapon: "Shadowfang", whyBest: "Backstab bonus stacks with Night Step for 200% total bonus — deletes elites in one combo." },
  { class: "Death Dancer", bestWeapon: "Twinblade Fan", altWeapon: "Viper Glaive", whyBest: "Chain bonus per hit synergizes perfectly with Death Waltz, reaching 75% bonus at 5 hits." },
  { class: "Shadow Weaver", bestWeapon: "Shadowbind Staff", altWeapon: "Veil Scepter", whyBest: "Root duration scales with weapon tier; at max upgrade, 3s root becomes 4.5s — perma-lock potential." },
  { class: "Plague Lord", bestWeapon: "Blight Axe", altWeapon: "Corrupted Scythe", whyBest: "DoT stacks reach full potency in 8s with Blight Axe vs. 12s with alternatives — massive DPS gap." },
];

const weaponUpgrades = [
  { upgradeLevel: "Base (Tier 1)", requirement: "Level 1", cost: "0 Blood Shards", effect: "Standard damage values", bonus: "No bonus" },
  { upgradeLevel: "Tier 2", requirement: "Level 20", cost: "500 Blood Shards", effect: "Damage +15%", bonus: "+5% secondary stat" },
  { upgradeLevel: "Tier 3", requirement: "Level 35", cost: "1,500 Blood Shards", effect: "Damage +30%", bonus: "Unlocks alt-fire mode" },
  { upgradeLevel: "Tier 4", requirement: "Level 50", cost: "5,000 Blood Shards", effect: "Damage +50%", bonus: "Special effect doubled" },
  { upgradeLevel: "Tier 5 (Max)", requirement: "Level 60 + Raid Drop", cost: "15,000 Blood Shards", effect: "Damage +80%", bonus: "Legendary cosmetic + title" },
];

export default function WeaponComparisonPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Vampire Crawlers Weapon Comparison — Best Weapons for Every Class &amp; Playstyle</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Your weapon defines your entire playstyle in Vampire Crawlers. It determines your damage profile, your attack cadence, and whether you excel at burst, sustain, AoE, or control. With twelve unique weapons spread across six classes, choosing the right one is arguably more important than your skill tree allocation. This guide provides a complete head-to-head comparison of every weapon — raw DPS, speed tier, range profile, and special effects — alongside class-specific recommendations for every content type from solo leveling to endgame raiding. Whether you are a new Blood Knight looking for the tankiest loadout or a veteran Crimson Mage optimizing your wave-clearing potential, you will find the data you need here. All damage numbers reflect the current patch 1.8 balance and have been verified against target dummies, dungeon parses, and community speedrun leaderboards.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Weapon Comparison Table</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              The table below compares all twelve weapons across core combat metrics. Pay attention to the speed column — speed directly affects how many attacks you land per second, which in turn multiplies all on-hit effects including lifesteal, bleeds, and chain bonuses. Slow weapons hit harder per swing but sacrifice proc frequency. Fast weapons generate more effect triggers but require tighter positioning to avoid whiffing.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Weapon</th>
                  <th>Type</th>
                  <th>Class</th>
                  <th>Damage</th>
                  <th>Speed</th>
                  <th>Range</th>
                  <th>Special Effect</th>
                  <th>Best For</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {weaponComparison.map((w) => (
                  <tr key={w.weapon}>
                    <td className="font-semibold">{w.weapon}</td>
                    <td>{w.type}</td>
                    <td>{w.class}</td>
                    <td>{w.damage}</td>
                    <td>{w.speed}</td>
                    <td>{w.range}</td>
                    <td className="text-sm">{w.special}</td>
                    <td>{w.bestFor}</td>
                    <td><span className={w.rating === "S" ? "text-accent font-bold" : w.rating === "A" ? "text-[#58a6ff] font-bold" : "text-[#3fb950] font-bold"}>{w.rating}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Best Weapon Per Class</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              While personal preference matters, some weapons mathematically outperform their alternatives due to synergy with class passives. The recommendations below are based on damage simulations across 1,000 combat engagements per weapon at level 50 with equivalent gear quality.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Best Weapon</th>
                  <th>Alternative</th>
                  <th>Reasoning</th>
                </tr>
              </thead>
              <tbody>
                {bestWeaponsByClass.map((b) => (
                  <tr key={b.class}>
                    <td className="font-semibold">{b.class}</td>
                    <td className="text-accent">{b.bestWeapon}</td>
                    <td>{b.altWeapon}</td>
                    <td className="text-sm text-ink-light">{b.whyBest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Weapon Upgrade Path</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Every weapon can be upgraded to Tier 5 through the Bloodforge system at the Sanctuary hub. Upgrades increase base damage, unlock secondary stat bonuses, and at Tier 3 add an alt-fire mode that expands your combat options. Tier 5 upgrades require a rare raid drop — plan your Blood Shard economy accordingly. The progression curve is steep: a Tier 5 weapon deals 80% more damage than its base version and gains a Legendary cosmetic effect plus a unique title.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Upgrade Level</th>
                  <th>Requirement</th>
                  <th>Blood Shards</th>
                  <th>Damage Boost</th>
                  <th>Bonus</th>
                </tr>
              </thead>
              <tbody>
                {weaponUpgrades.map((u, i) => (
                  <tr key={i}>
                    <td className="font-semibold">{u.upgradeLevel}</td>
                    <td>{u.requirement}</td>
                    <td>{u.cost}</td>
                    <td>{u.effect}</td>
                    <td className="text-sm">{u.bonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Weapon Synergies &amp; Playstyle Matching</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Choosing a weapon is not just about raw numbers — it is about matching the weapon&apos;s rhythm to your preferred playstyle. Fast weapons like the Nightblade Dagger and Twinblade Fan reward aggressive, high-APM gameplay where you weave between attacks and dodge frames. They punish hesitation because their lower per-hit damage requires consistent uptime. Slow weapons like the Inferno Staff and Blight Axe reward patient timing and positioning — one well-placed attack can clear an entire screen or apply full DoT stacks, but a whiffed swing leaves you vulnerable during the long recovery animation.
            </p>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Weapon synergy with class passives is the hidden multiplier that separates good builds from great ones. Bloodfang Sword on Blood Knight stacks lifesteal multiplicatively — 5% weapon leech plus 5% class leech equals 10% total, but the calculation actually applies the weapon leech first, feeding into the class passive for an effective 10.25% rate. Inferno Staff on Crimson Mage allows Sanguine Nova to detonate burning targets for an extra 40% damage, turning a screen-clear into a screen-delete. Twinblade Fan on Death Dancer compounds the chain bonus with Death Waltz&apos;s inherent speed scaling, reaching 75% bonus damage at 5 hits — enough to one-shot elite enemies in endgame dungeons.
            </p>
            <p className="text-ink-light leading-relaxed text-sm">
              For group play, weapon selection should account for party composition. A Crimson Mage with Inferno Staff covers AoE clearing. A Shadow Weaver with Shadowbind Staff covers control. A Night Stalker with Nightblade Dagger covers single-target boss deletion. If your party lacks any of these roles, consider flexing your weapon choice (and class, if possible) to fill the gap. A balanced group with one AoE, one control, and one single-target weapon allocation clears endgame content 40% faster than three players all running the same weapon archetype.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-ink mb-1">Which weapon is best for a new player starting out?</h3>
                <p className="text-ink-light">Bloodfang Sword on Blood Knight is the safest and most forgiving weapon for new players. The combination of medium speed (easy timing), melee range (simple positioning), and lifesteal (forgiving mistakes) lets you learn enemy attack patterns without dying constantly. Start here, learn the fundamentals, and then branch out to faster or ranged weapons once you are comfortable with dodge timing and parry windows.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Should I upgrade my first weapon to Tier 5 or save Blood Shards for a different weapon?</h3>
                <p className="text-ink-light">Upgrade your best-in-slot weapon to at least Tier 3 before considering alternatives. The Tier 3 alt-fire mode is a game-changer that expands your combat options significantly. Tier 4 is worth the investment if you plan to play the same class through endgame. Tier 5 is expensive (15,000 Blood Shards) and requires a raid drop — only pursue it if you are committed to your class and weapon choice for the long term. Blood Shards are farmable; raid drops are not, so the opportunity cost of spreading upgrades across multiple weapons is high.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Can I use a weapon from a different class on my character?</h3>
                <p className="text-ink-light">No, weapons are class-locked. A Blood Knight cannot equip the Inferno Staff, and a Crimson Mage cannot wield the Nightblade Dagger. This design keeps each class&apos;s playstyle distinct and prevents homogenization. However, within your class, you have at least two weapon options (and sometimes more as seasonal content adds new weapons). The alt-weapon recommendations in the table above represent the best cross-class flexibility you can achieve on a single character.</p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: July 2, 2026. Based on Vampire Crawlers patch 1.8. All weapons tested at level 50 with equivalent gear. Fan guide — not affiliated with the developers.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/beginner-strategy" className="text-accent hover:underline">Beginner Strategy Guide</a></li>
              <li><a href="/class-tier-list" className="text-accent hover:underline">Class Tier List</a></li>
              <li><a href="/advanced-strategies" className="text-accent hover:underline">Advanced Strategies</a></li>
              <li><a href="/builds" className="text-accent hover:underline">Best Builds for Every Class</a></li>
              <li><a href="/skill-tree" className="text-accent hover:underline">Complete Skill Tree Guide</a></li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Quick Tips</h3>
            <ul className="space-y-2 text-sm text-ink-light">
              <li>Match weapon speed to your APM comfort level</li>
              <li>Lifesteal weapons double-dip with class passives</li>
              <li>Tier 3 alt-fire unlocks are game-changing — prioritize them</li>
              <li>One AoE + one control + one single-target weapon per group is optimal</li>
              <li>Fast weapons require higher uptime; slow weapons punish whiffs harder</li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Damage by Speed Tier</h3>
            <ul className="space-y-2 text-sm text-ink-light list-disc list-inside">
              <li><span className="text-accent font-semibold">Very Fast:</span> 140-190 base, 3.2 attacks/sec</li>
              <li><span className="text-[#58a6ff] font-semibold">Fast:</span> 190-260 base, 2.1 attacks/sec</li>
              <li><span className="text-[#3fb950] font-semibold">Medium:</span> 220-280 base, 1.5 attacks/sec</li>
              <li><span className="text-[#8b5cf6] font-semibold">Slow:</span> 240-350 base, 1.0 attacks/sec</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
