export const metadata = {
  title: "Vampire Crawlers Beginner Strategy — Combat Basics & First Builds (2026)",
  description: "Master Vampire Crawlers with our beginner strategy guide. Learn combat fundamentals, dodge and parry timing, blood pool management, optimal first 5 level choices, and recommended starter class.",
};

export default function BeginnerStrategyPage() {
  const classOverview = [
    { class: "Blood Knight", playstyle: "Melee tank, lifesteal sustain", difficulty: "Easy", recommendedFor: "Beginners, solo players, learning combat timing" },
    { class: "Night Stalker", playstyle: "Stealth assassin, burst damage", difficulty: "Medium", recommendedFor: "Experienced ARPG players, PvP focus" },
    { class: "Shadow Weaver", playstyle: "Ranged caster, crowd control", difficulty: "Medium", recommendedFor: "Group play, control-oriented players" },
    { class: "Crimson Mage", playstyle: "Ranged caster, AoE blood magic", difficulty: "Hard", recommendedFor: "High-risk high-reward players, AoE farming" },
    { class: "Plague Lord", playstyle: "DoT specialist, debuff stacking", difficulty: "Hard", recommendedFor: "Boss killers, patient tactical players" },
    { class: "Death Dancer", playstyle: "Hybrid melee/ranged, mobility focus", difficulty: "Expert", recommendedFor: "Advanced players, high-skill ceiling main" },
  ];

  const skillPriority = [
    { rank: 1, skill: "Crimson Strike (Blood Knight)", levelUnlock: 1, function: "Basic melee attack with 5% lifesteal", priority: "Max first — your primary sustain tool" },
    { rank: 2, skill: "Blood Pool (All classes)", levelUnlock: 2, function: "Toggle: consume Blood Pool to boost damage 30%", priority: "Unlock at level 2; learn to manage the toggle" },
    { rank: 3, skill: "Night Step (Night Stalker)", levelUnlock: 1, function: "Dash behind target, next attack deals 150% damage", priority: "Max first for Night Stalker; repositioning tool" },
    { rank: 4, skill: "Shadow Tendrils (Shadow Weaver)", levelUnlock: 1, function: "AoE root, 4 targets, 3s duration", priority: "One point early; max after main damage skill" },
    { rank: 5, skill: "Sanguine Nova (Crimson Mage)", levelUnlock: 3, function: "Point-blank AoE blood explosion, 200% weapon damage", priority: "Core farming skill; max by level 15" },
    { rank: 6, skill: "Plague Touch (Plague Lord)", levelUnlock: 1, function: "Single-target DoT, stacks up to 5x, 8s duration", priority: "Max first — damage scales exponentially with stacks" },
    { rank: 7, skill: "Death Waltz (Death Dancer)", levelUnlock: 1, function: "Chain attack: hit 3 targets, each hit increases speed 15%", priority: "Max first; enables the class's momentum mechanic" },
    { rank: 8, skill: "Blood Armor (All classes)", levelUnlock: 5, function: "Consume blood to create a shield equal to 20% max HP", priority: "One point at level 5; invest more after offensive skills cap" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Vampire Crawlers Beginner Strategy — Combat Basics & First Builds</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Vampire Crawlers blends fast-paced action RPG combat with a unique blood resource system that rewards aggression and punishes passivity. Unlike traditional ARPGs where you manage mana or cooldowns, Vampire Crawlers uses a Blood Pool mechanic — every attack you land fills the pool, and every special ability drains it. Understanding this rhythm is the difference between dominating encounters and dying in the first minute. This guide covers everything new players need to survive the early levels and build a solid foundation.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Combat Fundamentals — Dodge, Parry, and Movement</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              Combat in Vampire Crawlers is built around three defensive layers: dodging, parrying, and movement. There is no block button. Your only defensive options are active avoidance or a well-timed parry.
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Dodge (Spacebar / Left Stick Click):</strong> A directional dash with 8 invincibility frames (i-frames) at the start of the animation. The i-frame window is generous compared to games like Dark Souls — roughly 0.13 seconds at 60 FPS — but the recovery animation leaves you vulnerable for 6 frames. Dodge through attacks, not away from them. Dodging forward through a boss swing positions you behind the enemy for a critical backstab window (2x damage multiplier).
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Parry (Right-click at precise timing):</strong> Available on all classes but with different parry windows. Blood Knight and Night Stalker have a 12-frame parry window; Crimson Mage and Shadow Weaver have an 8-frame window. A successful parry staggers the enemy for 1.5 seconds, refunds 10% Blood Pool, and guarantees your next attack is a critical hit. Miss the parry and you take 150% damage for 2 seconds — the game punishes parry spam heavily.
            </p>
            <p className="text-ink-light leading-relaxed">
              <strong className="text-ink">Movement is your best defense:</strong> Enemy attacks in Vampire Crawlers are telegraphed with distinct audio cues and visual wind-ups. Red flash = unblockable, must dodge. White flash = parryable. Yellow flash = AoE, must reposition. Learn these indicators before worrying about DPS optimization — staying alive is more important than dealing damage.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Blood Pool Management — The Core System</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              The Blood Pool is a gauge that fills when you deal damage and drains when you use abilities or take hits. It has a maximum capacity of 100 points, and your damage output scales linearly with how full the pool is:
            </p>
            <ul className="list-disc list-inside text-ink-light space-y-2 mb-4">
              <li>0-25 Blood Pool: 80% damage dealt (penalty)</li>
              <li>26-50 Blood Pool: 100% damage dealt (baseline)</li>
              <li>51-75 Blood Pool: 120% damage dealt (bonus)</li>
              <li>76-100 Blood Pool: 150% damage dealt (maximum bonus)</li>
            </ul>
            <p className="text-ink-light leading-relaxed mb-3">
              New players tend to dump their Blood Pool into abilities as soon as it fills, dropping to the low-damage penalty zone. Instead, maintain your pool above 50 at all times. Use basic attacks to fill the pool, spend one ability, then basic attack back to full before spending again. This rhythm — two basics, one special, repeat — maximizes sustained DPS.
            </p>
            <p className="text-ink-light leading-relaxed">
              Blood Pool also decays at 2 points per second when out of combat. Aggressive play is rewarded — you should always be moving toward the next enemy pack to maintain pool momentum. Some builds (Crimson Mage, Plague Lord) have talents that slow or even reverse passive decay, allowing them to enter every fight at full Blood Pool.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Recommended Starter Class — Blood Knight</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Blood Knight is the recommended starting class for new players. Its built-in lifesteal mechanic (all melee attacks heal for 5% of damage dealt) provides forgiveness for positioning mistakes. The class has the widest parry window at 12 frames and the highest base HP pool of any class. Blood Knight teaches the fundamentals — dodge timing, parry rhythm, Blood Pool cycling — without the punishment that squishier classes face.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Playstyle</th>
                    <th>Difficulty</th>
                    <th>Recommended For</th>
                  </tr>
                </thead>
                <tbody>
                  {classOverview.map((c, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{c.class}</td>
                      <td>{c.playstyle}</td>
                      <td>{c.difficulty}</td>
                      <td>{c.recommendedFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">First 5 Level Choices — Skill Path Optimization</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Levels 1 through 5 determine your skill foundation. Each level grants one skill point and unlocks new passive nodes. The following table shows the optimal skill priority order across all classes for the early game. Max one core damage skill before spreading points.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Skill (Class)</th>
                    <th>Unlock</th>
                    <th>Function</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {skillPriority.map((s, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{s.rank}</td>
                      <td className="font-semibold">{s.skill}</td>
                      <td>{s.levelUnlock}</td>
                      <td>{s.function}</td>
                      <td className="text-ink-light text-sm">{s.priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Early Game Gear and Progression</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              Gear drops in Vampire Crawlers scale with enemy level and your Blood Pool average during the fight. Maintaining a high Blood Pool average during combat increases the rarity of dropped items. Hunt elite enemies (gold-bordered nameplates) for guaranteed rare drops — they respawn every 15 minutes.
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              Weapon type matters from level 1. Swords (balanced speed/damage), daggers (fast, low damage, high crit), staves (slow, high spell power), and scythes (slow, AoE melee) each favor different classes. Do not equip a weapon your class doesn&apos;t synergize with — a Shadow Weaver with a scythe loses 40% of its spell damage scaling.
            </p>
            <p className="text-ink-light leading-relaxed">
              The first major gear milestone is completing the Crypt of Whispers dungeon at level 12. It drops the &ldquo;Veilwalker Set&rdquo; — a 4-piece armor set that reduces Blood Pool decay out of combat by 50%. This set carries you comfortably to level 25 and is farmable. Run the dungeon 3-4 times to assemble the full set before pushing further content.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-ink mb-1">How do I know when to dodge vs parry?</h3>
                <p className="text-ink-light">Watch the enemy&apos;s flash color. Red flash = unblockable attack, must dodge. White flash = parryable. Yellow flash = AoE ground effect, reposition immediately. If you are playing Blood Knight or Night Stalker, default to parry on white flashes — the 12-frame window is generous. Squishier classes (Crimson Mage, Shadow Weaver) should default to dodge even on white flashes until you master the tighter 8-frame parry timing.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">What should I spend my first Blood Shards (currency) on?</h3>
                <p className="text-ink-light">Blood Shards are rare early on. Prioritize expanding your Blood Pool capacity from 100 to 120 (costs 50 shards, available at the Blood Altar in the hub). The extra 20 capacity means you can chain one additional ability before dropping into the damage penalty zone. After that, purchase the Passive Decay Reduction upgrade (slows out-of-combat drain by 25%) for 30 shards.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Is group play or solo better for leveling?</h3>
                <p className="text-ink-light">Solo leveling is faster for raw XP gain — enemies scale down slightly (85% HP) when fighting solo. Group play splits XP among party members but increases enemy density and drop rates. For classes that rely on AoE farming (Crimson Mage, Death Dancer), solo is more efficient. For support-oriented or control classes (Shadow Weaver, Plague Lord), group play in a party of 3 provides the best progression speed and gear acquisition rate.</p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Combat mechanics data verified against Vampire Crawlers patch 1.8. Level scaling values confirmed via community testing.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/class-tier-list" className="text-accent hover:underline">Class Tier List & Rankings</a></li>
              <li><a href="/builds" className="text-accent hover:underline">Best Builds for Every Class</a></li>
              <li><a href="/gear-farming" className="text-accent hover:underline">Gear Farming Routes</a></li>
              <li><a href="/dungeon-guide" className="text-accent hover:underline">Dungeon Walkthroughs</a></li>
            </ul>
          </div>

          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Quick Tips for New Players</h3>
            <ul className="space-y-2 text-sm text-ink-light list-disc list-inside">
              <li>Start as Blood Knight — easiest survivability</li>
              <li>Maintain Blood Pool above 50 at all times</li>
              <li>Dodge through attacks, not away from them</li>
              <li>Upgrade Blood Pool capacity to 120 ASAP</li>
              <li>Farm Crypt of Whispers for Veilwalker Set at level 12</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
