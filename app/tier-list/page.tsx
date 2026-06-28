/* ============================================
   Vampire Crawlers Guide — Tier List
   All Crawlers, Weapons, Power Ups & Arcana
   ============================================ */

const CRAWLER_TIERS = [
  { tier: 'S', name: 'Christine', weapon: 'Pentagram', unlock: 'Unlock, find, and use Pentagram' },
  { tier: 'S', name: 'Pugnala Provola', weapon: 'Phiera / Eight', unlock: 'Find hidden coffin in Berserk Wood' },
  { tier: 'S', name: 'Poppea', weapon: 'Song of Mana', unlock: 'Find coffin in Milk Factory' },
  { tier: 'S', name: 'Lama', weapon: 'Axe', unlock: 'Complete a dungeon with 10%+ Curse' },
  { tier: 'A', name: 'Arca', weapon: 'Fire Wand', unlock: 'Play 100 Fire Wand cards' },
  { tier: 'A', name: 'Suor Clerici', weapon: 'Santa Water', unlock: 'Recover 1,000 HP total' },
  { tier: 'A', name: 'Porta', weapon: 'Lightning Ring', unlock: 'Play 100 Lightning Ring cards' },
  { tier: 'A', name: 'Bianca Ramba', weapon: 'Carrello', unlock: 'Defeat Milk Elemental in Dairy Plant' },
  { tier: 'A', name: 'Mortaccio', weapon: 'Bone', unlock: 'Defeat 444 skeletons in Mad Forest' },
  { tier: 'A', name: "O'Sole", weapon: 'Celestial Dusting', unlock: 'Defeat 50 Dragon Shrimps in Gallo Tower' },
  { tier: 'B', name: 'Poe', weapon: 'Garlic', unlock: 'Play 25 Garlic cards' },
  { tier: 'B', name: 'Antonio Belpaese', weapon: 'Whip', unlock: 'Starting character' },
  { tier: 'B', name: 'Imelda Belpaese', weapon: 'Magic Wand', unlock: 'Starting character' },
  { tier: 'B', name: 'Gennaro Belpaese', weapon: 'Knife', unlock: 'Defeat Mantichana in Mad Forest' },
  { tier: 'B', name: 'Dommario', weapon: 'King Bible', unlock: 'Collect 5,000 gold' },
  { tier: 'B', name: 'Concetta', weapon: 'Shadow Pinion', unlock: 'Find coffin in Gallo Tower' },
  { tier: 'B', name: 'Krochi', weapon: 'Cross', unlock: 'Defeat 6,666 enemies total' },
  { tier: 'C', name: 'Pasqualina Belpaese', weapon: 'Runetracer', unlock: 'Reach level 20 in Inlaid Library with Imelda' },
  { tier: 'C', name: 'Yatta Cavallo', weapon: 'Cherry Bomb', unlock: 'Defeat 250 Lion Heads in Inlaid Library' },
  { tier: 'C', name: 'Giovanna Grana', weapon: 'Gatti Amari', unlock: 'Find coffin in Library Sanctum' },
  { tier: 'C', name: 'Gallo', weapon: 'Clock Lancet', unlock: 'Defeat Gallo in Gallo Tower' },
];

const WEAPON_TIERS = [
  { tier: 'S', name: 'Bone', cost: '0', note: 'Best 0-cost weapon. Mortaccio starter.' },
  { tier: 'S', name: 'Unholy Vespers', cost: '2', note: 'Evolution: King Bible + Spellbinder' },
  { tier: 'S', name: 'Bloody Tear', cost: '2', note: 'Evolution: Whip + Hollow Heart' },
  { tier: 'S', name: 'Hellfire', cost: '3', note: 'Evolution: Fire Wand + Spinach' },
  { tier: 'S', name: 'Thunder Loop', cost: '4+', note: 'Evolution: Lightning Ring + Duplicator. Extra turn-end hit.' },
  { tier: 'S', name: 'Phieraggi', cost: '4+', note: 'Union evolution. 350 damage per proc.' },
  { tier: 'S', name: 'Gorgeous Moon', cost: '—', note: 'Evolution: Pentagram + Crown' },
  { tier: 'A', name: 'King Bible', cost: '1', note: 'Evolves into Unholy Vespers. Top 1-cost.' },
  { tier: 'A', name: 'Whip', cost: '0', note: 'Evolves into Bloody Tear. Antonio starter.' },
  { tier: 'A', name: 'Lightning Ring', cost: '2', note: 'Best non-evolution 2-cost weapon.' },
  { tier: 'A', name: 'Peachone', cost: '3', note: 'Vandalier union material.' },
  { tier: 'A', name: 'Vandalier', cost: '4+', note: 'Union: Peachone + Ebony Wings. 500 damage.' },
  { tier: 'A', name: 'Thousand Edge', cost: '—', note: 'Evolution: Knife + Bracer' },
  { tier: 'A', name: 'Soul Eater', cost: '—', note: 'Evolution: Garlic + Pummarola' },
  { tier: 'B', name: 'Knife', cost: '0', note: 'Evolves into Thousand Edge. Solid 0-cost.' },
  { tier: 'B', name: 'Fire Wand', cost: '1', note: 'Evolves into Hellfire.' },
  { tier: 'B', name: 'Cross', cost: '—', note: 'Evolves into Heaven Sword.' },
  { tier: 'B', name: 'Magic Wand', cost: '—', note: 'Evolves into Holy Wand.' },
  { tier: 'B', name: 'Axe', cost: '—', note: 'Evolves into Death Spiral.' },
  { tier: 'B', name: 'Santa Water', cost: '—', note: 'Evolves into La Borra.' },
  { tier: 'C', name: 'Runetracer', cost: '—', note: 'Evolves into NO FUTURE. Underwhelming base.' },
  { tier: 'C', name: 'Garlic', cost: '—', note: 'Evolves into Soul Eater. Weak early game.' },
  { tier: 'C', name: 'Gatti Amari', cost: '—', note: 'Evolves into Vicious Hunger. Unreliable.' },
];

const POWERUP_TIERS = [
  { tier: 'S', name: 'Crawler Slot', effect: 'Each rank adds an additional Crawler slot' },
  { tier: 'S', name: 'Greed', effect: '+25% gold per rank. First upgrade to prioritize.' },
  { tier: 'S', name: 'Might', effect: 'Global weapon damage bonus. Best combat upgrade.' },
  { tier: 'S', name: 'Cooldown', effect: '+1 mana per rank. Fuels longer combo chains.' },
  { tier: 'A', name: 'Recovery', effect: '+1 HP recovered after each battle' },
  { tier: 'A', name: 'Amount', effect: '+1 projectile per rank' },
  { tier: 'A', name: 'Armor', effect: '+2 armor per rank' },
  { tier: 'A', name: 'Growth', effect: 'Increased XP gain rate' },
  { tier: 'A', name: 'Revival', effect: 'Revive on lethal hit' },
  { tier: 'B', name: 'Luck', effect: 'Improved gem drops and rare card rates' },
  { tier: 'B', name: 'Reroll', effect: 'Extra rerolls in dungeon' },
  { tier: 'B', name: 'Area', effect: '+10% splash damage per rank' },
  { tier: 'B', name: 'Max Health', effect: 'Increased max HP' },
  { tier: 'C', name: 'Duration', effect: 'Extended Crawler activation duration' },
  { tier: 'C', name: 'Skip', effect: 'Skip upgrade for XP refund' },
  { tier: 'C', name: 'Curse', effect: 'Harder enemies for better rewards' },
];

const ARCANA_TIERS = [
  { tier: 'S', name: 'Chain Link', effect: 'Combo chain does NOT reset at turn end', unlock: 'Achieve 12-chain in a single turn' },
  { tier: 'S', name: 'Your Shield My Liege', effect: 'Remaining armor persists between turns', unlock: 'Accumulate 2,000 total armor' },
  { tier: 'S', name: 'Sharp Mind', effect: 'Keep up to 5 mana between turns', unlock: 'Play 100 purple cards' },
  { tier: 'A', name: 'Shield Bash', effect: 'Deal armor value as damage after using armor card', unlock: 'Initially unlocked' },
  { tier: 'A', name: 'Mana Syphon', effect: 'Permanently +1 mana every 100 cards played', unlock: 'Gain 15 mana in one turn' },
  { tier: 'A', name: 'Over The Top', effect: 'Crawler returns to deck top after activation', unlock: 'Play 100 Crawler cards' },
  { tier: 'B', name: 'Experimental Medicine', effect: 'All healing effects doubled', unlock: 'Initially unlocked' },
  { tier: 'B', name: 'Make a Scene', effect: 'Free Crawler trigger at turn start', unlock: 'Trigger Crawler ability 1,500 times' },
  { tier: 'B', name: 'Wild Buff', effect: 'Cards from light sources gain combo multiplier', unlock: 'Play 200 light source cards' },
  { tier: 'C', name: "Jester's Hat", effect: 'Add a Wild card to deck each floor', unlock: 'Play 150 Wild cards' },
  { tier: 'C', name: 'And Another', effect: 'Repeated cards become free', unlock: 'Play 500 free cards' },
  { tier: 'C', name: 'Swollen Fist', effect: 'Damage based on deck size at turn end', unlock: 'Reach 40-card deck' },
];

function getTierColor(tier: string): string {
  switch (tier) {
    case 'S': return 'text-[#f0883e]';
    case 'A': return 'text-[#58a6ff]';
    case 'B': return 'text-[#3fb950]';
    case 'C': return 'text-text-secondary';
    default: return 'text-text-secondary';
  }
}

function TierTable({ title, data, columns }: { title: string; data: any[]; columns: string[] }) {
  return (
    <div className="mb-8">
      <h3 className="font-display text-base font-semibold text-text-primary mb-3">{title}</h3>
      <div className="bg-abyss-light border border-border-subtle overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-grid-line">
              {columns.map((col, i) => (
                <th key={i} className={`text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted ${i === 0 ? 'w-12' : ''}`}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="data-row">
                <td className="py-2.5 px-4">
                  <span className={`font-mono font-bold text-sm ${getTierColor(row.tier)}`}>
                    {row.tier}
                  </span>
                </td>
                <td className="py-2.5 px-4 text-text-primary font-medium">{row.name}</td>
                {Object.keys(row).filter(k => k !== 'tier' && k !== 'name').map((key, j) => (
                  <td key={j} className="py-2.5 px-4 text-text-secondary text-xs">{row[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export const metadata = {
  title: "Vampire Crawlers Tier List — Complete Guide (2026)",
  description:
    "Complete rankings for all Crawlers, weapon cards, power ups, and Arcana. Based on community consensus and high-level play data for Patch 1.0.",
};


export default function TierListPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-text-primary mb-2">
            Tier List
          </h1>
          <p className="text-sm text-text-secondary">
            Complete rankings for all Crawlers, weapon cards, power ups, and Arcana. Based on community consensus and high-level play data for Patch 1.0.
          </p>
        </div>

        <TierTable title="Crawler Characters (21 total)" data={CRAWLER_TIERS} columns={['TIER', 'CRAWLER', 'STARTING WEAPON', 'UNLOCK CONDITION']} />
        <TierTable title="Weapon Cards" data={WEAPON_TIERS} columns={['TIER', 'WEAPON', 'COST', 'NOTES']} />
        <TierTable title="Power Ups (Village Upgrades)" data={POWERUP_TIERS} columns={['TIER', 'POWER UP', 'EFFECT']} />
        <TierTable title="Arcana (Pre-Run Modifiers)" data={ARCANA_TIERS} columns={['TIER', 'ARCANA', 'EFFECT', 'UNLOCK']} />

        <div className="terminal-block">
          <p className="text-text-muted mb-1">
            <span className="text-warning-orange">$</span> tierlist.meta
          </p>
          <p>S-Tier Crawlers: Christine &gt; Pugnala &gt; Poppea &gt; Lama</p>
          <p>Best beginner pick: Suor Clerici (built-in sustain)</p>
          <p>First upgrade: Greed &rarr; Might &rarr; Crawler Slot</p>
          <p className="cursor-blink">meta updated</p>
        </div>
      </div>
    </div>
  );
}
