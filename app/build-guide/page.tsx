export const metadata = {
  title: "Vampire Crawlers Best Builds — Overpowered Builds (2026)",
  description: "Best builds for Vampire Crawlers. Overpowered build combinations, skill synergies, and optimal loadouts for every playstyle.",
};

export default function BuildGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-red-300 mb-2">Vampire Crawlers Best Builds Guide</h1>
      <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-red-300 mb-3">Bleed Build</h2>
            <p className="text-gray-300 leading-relaxed">The Bleed build stacks bleeding status effects on enemies, dealing constant damage-over-time while you reposition for safety. Core skills: Blood Rend (applies bleed on hit), Hemorrhage (amplifies all bleed damage by 40%), and Crimson Mist (creates a bleeding AoE). This build excels against high-HP enemies and bosses but is weaker against swarms of weak enemies that die before bleed stacks fully.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-red-300 mb-3">Burst Build</h2>
            <p className="text-gray-300 leading-relaxed">Burst build focuses on maximum single-hit damage for one-shotting elite enemies and breaking boss shield phases. Core skills: Crimson Strike (200% base damage, 8-second cooldown), Frenzy Charge (charge up for 2 seconds, release for 400% damage), and Bloodlust (kills restore 10% max HP and reset Crimson Strike cooldown). Exceptional for speedrunning but requires precise timing.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-red-300 mb-3">Tank Build</h2>
            <p className="text-gray-300 leading-relaxed">Tank build prioritizes survivability to absorb damage on behalf of allies or simply outlast everything. Core skills: Undying (revive once per floor with 40% HP), Blood Barrier (absorbs damage equal to 30% of your max HP every 10 seconds), and Life Drain (drain HP from all nearby enemies over 5 seconds). Pair with a source of constant damage like Aura of Corruption.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-red-300 mb-3">Hybrid Build Tips</h2>
            <p className="text-gray-300 leading-relaxed">The strongest late-game builds mix 2 builds together. Bleed + Burst creates massive single-target damage: bleed stacks amplify burst hit damage by 40%+. Tank + Bleed enables aggressive play with a safety net: drain enemies' life while Undying keeps you alive for a second attempt. Don't spread skills too thin across 3 build paths — synergy comes from depth, not breadth.</p>
          </section>
        <section>
          <h2 className="text-xl font-bold text-red-300 mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about bleed build in Vampire Crawlers?</h3>
                <p className="text-gray-300 leading-relaxed">The Bleed build stacks bleeding status effects on enemies, dealing constant damage-over-time while you reposition for safety. Core skills: Blood Rend (applies bleed on hit), Hemorrhage (amplifies all ...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about burst build in Vampire Crawlers?</h3>
                <p className="text-gray-300 leading-relaxed">Burst build focuses on maximum single-hit damage for one-shotting elite enemies and breaking boss shield phases. Core skills: Crimson Strike (200% base damage, 8-second cooldown), Frenzy Charge (charg...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about tank build in Vampire Crawlers?</h3>
                <p className="text-gray-300 leading-relaxed">Tank build prioritizes survivability to absorb damage on behalf of allies or simply outlast everything. Core skills: Undying (revive once per floor with 40% HP), Blood Barrier (absorbs damage equal to...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
