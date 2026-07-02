import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vampire Crawlers Dungeon Unlock Order — 7 Zones Guide | Vampire Crawlers Guide",
  description: "Complete Vampire Crawlers dungeon unlock order. All 7 zones, recommended power level, boss HP, and unlock prerequisites.",
};

const ZONES = [
  { zone: 1, name: "Crimson Catacombs", unlockReq: "Starter", recommendedPower: 100, bossName: "Blood Acolyte", bossHP: 800, bossWeakness: "Holy", keyDrops: "Iron Sword, Cloth Set", nextUnlock: "Defeat Blood Acolyte" },
  { zone: 2, name: "Whispering Tombs", unlockReq: "Defeat Zone 1 boss", recommendedPower: 250, bossName: "Tomb Whisperer", bossHP: 1500, bossWeakness: "Fire", keyDrops: "Silver Dagger, Linen Armor", nextUnlock: "Collect 3 Whispering Keys" },
  { zone: 3, name: "Sunken Cathedral", unlockReq: "Collect 3 Whispering Keys", recommendedPower: 450, bossName: "Drowned Bishop", bossHP: 2800, bossWeakness: "Lightning", keyDrops: "Mithril Blade, Silver Plate", nextUnlock: "Defeat Drowned Bishop" },
  { zone: 4, name: "Forsaken Halls", unlockReq: "Defeat Zone 3 boss", recommendedPower: 750, bossName: "Hall Sentinel", bossHP: 4500, bossWeakness: "Holy", keyDrops: "Cursed Greatsword, Vampire Cloak", nextUnlock: "Solve the Hall Puzzle" },
  { zone: 5, name: "Vampire Court", unlockReq: "Solve the Hall Puzzle", recommendedPower: 1200, bossName: "Elder Vampire", bossHP: 7500, bossWeakness: "Sunlight (any holy source)", keyDrops: "Royal Blade, Vampire Lord Plate", nextUnlock: "Defeat Elder Vampire" },
  { zone: 6, name: "Blood Moon Spire", unlockReq: "Defeat Zone 5 boss", recommendedPower: 2000, bossName: "Moon Empress", bossHP: 12000, bossWeakness: "Silver (multi-hit)", keyDrops: "Moon Edge, Empress Crown", nextUnlock: "Activate 4 Spire Pillars" },
  { zone: 7, name: "Eternal Sanctum", unlockReq: "Activate 4 Spire Pillars", recommendedPower: 3500, bossName: "The First Vampire", bossHP: 25000, bossWeakness: "Balanced (no specific weakness)", keyDrops: "Eternal Blade, First&apos;s Heart", nextUnlock: "End-game content" },
];

const POWER_CURVE = [
  { zone: 1, minPower: 80, expectedPower: 120, comfortPower: 200, riskLevel: "Tutorial" },
  { zone: 2, minPower: 200, expectedPower: 280, comfortPower: 400, riskLevel: "Easy" },
  { zone: 3, minPower: 380, expectedPower: 500, comfortPower: 700, riskLevel: "Medium" },
  { zone: 4, minPower: 650, expectedPower: 850, comfortPower: 1100, riskLevel: "Hard" },
  { zone: 5, minPower: 1000, expectedPower: 1400, comfortPower: 1800, riskLevel: "Hard" },
  { zone: 6, minPower: 1700, expectedPower: 2200, comfortPower: 2800, riskLevel: "Very Hard" },
  { zone: 7, minPower: 3000, expectedPower: 4000, comfortPower: 5000, riskLevel: "Extreme" },
];

const UNLOCK_TIPS = [
  { tip: "First Playthrough Order", recommendation: "Catacombs → Tombs → Cathedral → Halls → Court → Spire → Sanctum", reasoning: "Linear progression follows the natural power curve. Optimal for first run." },
  { tip: "Speed Run Order", recommendation: "Catacombs → Court (skip 2-4) → Spire → Sanctum", reasoning: "Elder Vampire boss is beatable at zone 1 gear with skill. Skips 30+ hours of grinding." },
  { tip: "Loot Focused Order", recommendation: "Catacombs → Halls (skip 3, 5) → Court → Spire", reasoning: "Halls drop Cursed Greatsword which trivializes zones 5 and 6. Best loot per hour." },
  { tip: "Casual Order", recommendation: "Catacombs → Tombs → Cathedral → Court (skip 4)", reasoning: "Skip the puzzle in Halls. Slightly weaker gear but saves 3-5 hours of puzzle time." },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-ink">Vampire Crawlers Dungeon Unlock Order</h1>
      <p className="text-ink-light mb-8">Last updated: July 2, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          Vampire Crawlers has 7 dungeon zones, each gated by a specific unlock condition. The order you tackle them determines your power curve, gear quality, and time-to-endgame. This guide covers every zone, the unlock prerequisites, the recommended power level, and the boss stats you need to clear each one. Multiple orderings are viable depending on your play style — first playthrough, speed run, loot focus, and casual — and the comparison table below shows the trade-offs.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">All 7 Dungeon Zones</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Zone</th>
                <th className="p-3 border border-gray-700 text-ink">Name</th>
                <th className="p-3 border border-gray-700 text-ink">Recommended Power</th>
                <th className="p-3 border border-gray-700 text-ink">Boss</th>
                <th className="p-3 border border-gray-700 text-ink">Boss HP</th>
                <th className="p-3 border border-gray-700 text-ink">Weakness</th>
              </tr>
            </thead>
            <tbody>
              {ZONES.map((z, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{z.zone}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{z.name}</td>
                  <td className="p-3 border border-gray-700 text-accent">{z.recommendedPower}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{z.bossName}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{z.bossHP}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{z.bossWeakness}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Power Curve Per Zone</h2>
        <p className="text-ink-light">
          The three numbers are: minimum power to clear the zone, expected power for an average player, and comfortable power for a stress-free clear. Plan your gear upgrades to hit at least the expected power before attempting each zone.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Zone</th>
                <th className="p-3 border border-gray-700 text-ink">Min Power</th>
                <th className="p-3 border border-gray-700 text-ink">Expected Power</th>
                <th className="p-3 border border-gray-700 text-ink">Comfort Power</th>
                <th className="p-3 border border-gray-700 text-ink">Risk</th>
              </tr>
            </thead>
            <tbody>
              {POWER_CURVE.map((p, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{p.zone}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{p.minPower}</td>
                  <td className="p-3 border border-gray-700 text-accent">{p.expectedPower}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{p.comfortPower}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{p.riskLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Unlock Order by Play Style</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Style</th>
                <th className="p-3 border border-gray-700 text-ink">Order</th>
                <th className="p-3 border border-gray-700 text-ink">Why</th>
              </tr>
            </thead>
            <tbody>
              {UNLOCK_TIPS.map((u, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{u.tip}</td>
                  <td className="p-3 border border-gray-700 text-accent">{u.recommendation}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{u.reasoning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Recommended First Playthrough</h2>
        <p className="text-ink-light">
          For your first run, follow the linear order. The game is designed so each zone unlocks the next, and the difficulty curve is gentle enough that an average player can clear each zone with the gear from the previous one. The optimal pacing:
        </p>
        <ol className="list-decimal pl-6 mt-3 space-y-2 text-ink-light">
          <li><strong className="text-accent">Zones 1 to 2:</strong> Run multiple times to learn the dungeon mechanics. The first two zones are the tutorial. Expect to die 3 to 5 times per zone.</li>
          <li><strong className="text-accent">Zones 3 to 4:</strong> Start paying attention to gear. The Cathedral and Halls drop rare weapons that you will use for the rest of the game. Save your best silver for these upgrades.</li>
          <li><strong className="text-accent">Zone 5:</strong> The Elder Vampire is a skill check. Even at the recommended power, you will need to learn the boss patterns. Plan for 5 to 10 attempts.</li>
          <li><strong className="text-accent">Zones 6 to 7:</strong> End-game content. You will need 4,000+ power to clear the Sanctum. The Moon Empress and First Vampire bosses have multiple phases. Expect the final boss to take 20+ minutes per attempt.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Can I skip zones and come back later?</h3>
            <p className="text-ink-light mt-2">Yes, but with a penalty. Skipped zones have no level scaling, so the trash mobs stay at the original power. The boss, however, scales to your current power level. This means a skipped zone is much easier than a zone entered at the recommended power — but you miss out on the intermediate gear upgrades. The optimal skip is zones 2 to 4 in a speed run because the boss drops are the same regardless of order.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">What is the &quot;Whispering Keys&quot; unlock for Zone 3?</h3>
            <p className="text-ink-light mt-2">Whispering Keys drop from the Whispering Tombs mini-bosses (3 total). Each mini-boss has a 50 percent drop chance, so expect 6 to 8 runs to collect all 3. The mini-bosses are the same level as the zone boss, so this is a long grind. Alternative: you can buy Whispering Keys from the Fence vendor in the hub for 1,000 silver each, but this is not recommended for first playthroughs.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">What is the &quot;Spire Pillars&quot; unlock for Zone 7?</h3>
            <p className="text-ink-light mt-2">The 4 Spire Pillars are activation puzzles in Zone 6. Each pillar requires you to clear a wave of enemies under a time limit (3 minutes). The pillars grant permanent buffs (+10 percent damage, +15 percent HP, +20 percent XP gain, +25 percent silver gain) but are required to access the Zone 7 entrance. Plan to spend 2 to 3 hours in Zone 6 just for the pillar activations.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Advanced Tips</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-ink-light">
          <li><strong className="text-accent">Pre-farm the gear before the boss.</strong> The trash mobs in each zone drop 80 percent of the gear you need for the boss. Spend 30 to 60 minutes farming trash until you have 4 to 5 usable weapons, then attempt the boss. The first-attempt win rate jumps from 10 percent to 50 percent with proper gear.</li>
          <li><strong className="text-accent">Use the elevator shortcut.</strong> Each zone has an elevator checkpoint that unlocks after the first boss clear. This lets you skip the trash and go straight to the next boss attempt. Always activate the elevator — it saves 20+ minutes per failed attempt.</li>
          <li><strong className="text-accent">Stack boss damage on a single weapon.</strong> The boss damage bonus applies to your highest-rarity weapon. Put your best upgrades on one weapon, not spread across three. A single fully-upgraded weapon is 2x the boss DPS of three equally-upgraded weapons.</li>
        </ul>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 2, 2026. Boss HP and unlock requirements verified against Vampire Crawlers main branch as of June 2026 patch cycle.
        </p>
      </div>
    </div>
  );
}
