export const metadata = {
  title: "Vampire Crawlers Dungeon Walkthrough — All Floors (2026)",
  description: "Complete Vampire Crawlers dungeon walkthrough. Every floor, elite enemies, boss strategies, and how to unlock secret content.",
};

export default function DungeonWalkthroughPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-red-300 mb-2">Vampire Crawlers Dungeon Walkthrough</h1>
      <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-red-300 mb-3">Dungeon Structure Overview</h2>
            <p className="text-gray-300 leading-relaxed">Vampire Crawlers has a procedurally generated dungeon with 10 floors per run. Each floor has a random layout but follows consistent rules: elite enemies (marked with a skull icon) always appear on odd floors (3, 5, 7, 9). Boss encounters are at Floors 5 and 10. Secret floors appear randomly between Floors 4-8 when specific room combinations generate.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-red-300 mb-3">Floors 1-3 Strategy</h2>
            <p className="text-gray-300 leading-relaxed">Floors 1-3 should be completed quickly to preserve health for the Floor 5 boss. Skip optional challenge rooms unless you're significantly ahead on HP. Focus on collecting skill upgrades that complete your chosen build's core kit. Take the Blood Flask item whenever it appears — it provides critical emergency healing for boss fights.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-red-300 mb-3">Floor 5 Boss Strategy</h2>
            <p className="text-gray-300 leading-relaxed">The Floor 5 boss uses three attacks: Swipe (close range, dodge backwards), Blood Nova (telegraphed 3 seconds before cast, move to side), and Summon (spawns 4 weak crawlers, kill them immediately to prevent overwhelming). Phase 2 at 50% HP adds a ground slam — watch for the jump animation and move away from the impact zone.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-red-300 mb-3">Floor 10 Final Boss</h2>
            <p className="text-gray-300 leading-relaxed">The final boss has 5 phases, each adding a new attack pattern. Key mechanics: Phase 3 adds a mirror image that mimics your attacks — don't target the mirror (it's invincible). Phase 4 forces you into a small arena with rising lava — maintain high movement uptime. Phase 5 is a damage race at 20% HP — use all cooldowns and ignore survival to finish fast.</p>
          </section>
        <section>
          <h2 className="text-xl font-bold text-red-300 mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about dungeon structure overview in Vampire Crawlers?</h3>
                <p className="text-gray-300 leading-relaxed">Vampire Crawlers has a procedurally generated dungeon with 10 floors per run. Each floor has a random layout but follows consistent rules: elite enemies (marked with a skull icon) always appear on odd...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about floors 1-3 strategy in Vampire Crawlers?</h3>
                <p className="text-gray-300 leading-relaxed">Floors 1-3 should be completed quickly to preserve health for the Floor 5 boss. Skip optional challenge rooms unless you're significantly ahead on HP. Focus on collecting skill upgrades that complete ...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about floor 5 boss strategy in Vampire Crawlers?</h3>
                <p className="text-gray-300 leading-relaxed">The Floor 5 boss uses three attacks: Swipe (close range, dodge backwards), Blood Nova (telegraphed 3 seconds before cast, move to side), and Summon (spawns 4 weak crawlers, kill them immediately to pr...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
