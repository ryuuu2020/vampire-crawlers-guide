/* ============================================
   Vampire Crawlers Guide — News
   Latest updates and patch information
   ============================================ */

const NEWS_ARTICLES = [
  {
    date: "2026-06-27",
    title: "Vampire Crawlers Version 1.5 — Endless Mode, Card Sorting, and QOL Overhaul",
    tag: "Update",
    excerpt:
      "Vampire Crawlers received a substantial quality-of-life update on June 23 with Version 1.5, and it addresses nearly every common community request since the game's April 21 launch. The headline feature is Endless Mode, which unlocks after completing the main game and discovering the new relic teaser area — giving veteran players a reason to keep their runs going beyond the final boss. Card management gets a major upgrade: you can now sort cards by mana cost or color, and a unified deck view consolidates what was previously a scattered interface. The Jeweller system has been clarified, with chest and gem behavior now properly explained in-game rather than requiring players to consult external wikis. Tooltip settings have been expanded, giving players more control over information density during fast-paced combat. Always-available quit options have been added. Steam Community Items are now live, and the 2026 roadmap has been contextualized: Death Parade is confirmed as the next major update, followed by Bone Deep and Curdled Tunnels, with a 2027 Astral Stair tease.",
  },
  {
    date: '2026-06-26',
    title: 'Combo Chain Mechanics Deep Dive: How to Build 20x+ Multipliers',
    tag: 'GUIDE',
    excerpt: 'The combo chain is the single most important mechanic in Vampire Crawlers. We break down the math behind ascending card order, Wild card bridging, and how Chain Link Arcana transforms your damage output from good to game-breaking.',
    content: `The combo chain system rewards players who plan their card order carefully. Each card played in ascending mana cost order multiplies the next card effect. Starting with a 0-cost Bone, then 1-cost King Bible, then 2-cost Lightning Ring gives a 3x multiplier on the final card.

Extending the chain to 8+ cards can yield 12x-20x multipliers. Wild cards bridge gaps when you lack a specific cost tier. Draw cards are the secret weapon — they let you find the next cost tier mid-turn, extending your chain further.

The Chain Link Arcana (unlocked by achieving a 12-chain in one turn) is the most transformative modifier in the game. It prevents your multiplier from resetting between turns, creating compounding damage that scales into the hundreds.

Key takeaway: always sort your hand by mana cost before playing. Plan your full chain before executing. One well-planned 8-card turn beats four scattered 2-card turns every time.`,
  },
  {
    date: '2026-06-24',
    title: 'All 21 Crawlers Ranked: Complete Tier List for Patch 1.0',
    tag: 'TIER',
    excerpt: 'From Christine\'s Pentagram power to Gallo\'s Clock Lancier utility, we rank every unlockable Crawler in Vampire Crawlers based on community consensus, clear speed, and consistency.',
    content: `The S-tier is dominated by Christine (Pentagram), Pugnala Provola (dual guns), Poppea (Song of Mana), and Lama (Axe). These Crawlers have weapons that scale exceptionally well with the combo system and offer reliable damage output across all dungeons.

For beginners, Suor Clerici is the recommended pick. Her blue card healing (1 HP per blue card played) provides built-in sustain that forgives learning mistakes. She is A-tier but the easiest to succeed with early.

The C-tier Crawlers (Pasqualina, Yatta Cavallo, Giovanna, Gallo) are not necessarily bad — they simply require more specific deck builds to shine. Their weapons have weaker base stats or unreliable proc patterns that make them harder to build consistent chains around.

Remember: tier lists reflect optimal play. Any Crawler can clear any dungeon with the right deck and Arcana setup.`,
  },
  {
    date: '2026-06-22',
    title: 'Weapon Evolution Chart: All 17 Recipes in One Place',
    tag: 'GUIDE',
    excerpt: 'Evolution weapons are the biggest power spike in Vampire Crawlers. Here is the complete chart of all 15 standard evolutions and 2 union evolutions, with base cards, item cards, and alternative items.',
    content: `Weapon evolutions transform your basic cards into devastating evolved forms. The process requires four elements: base weapon card, matching item card, empty gem socket on the base card, and an Evolution Gem from a statue or chest.

Standard evolutions include fan favorites: Whip + Hollow Heart = Bloody Tear, King Bible + Spellbinder = Unholy Vespers, and Fire Wand + Spinach = Hellfire. Each evolution dramatically increases damage and often adds secondary effects.

Union evolutions are special: they merge multiple weapon cards without needing an item card. Vandalier (Peachone + Ebony Wings) and Phieraggi (Phiera Der Tuphello + Eight the Sparrow + Tirajisu) are the two unions currently in the game.

Critical tip: NEVER insert Customization Gems into cards you plan to evolve. Filled sockets block evolution entirely. This is the #1 beginner mistake.`,
  },
  {
    date: '2026-06-20',
    title: 'Vampire Crawlers Reaches 17,000+ Steam Reviews at 95% Positive',
    tag: 'NEWS',
    excerpt: 'Two months after launch, the Vampire Survivors spin-off maintains Overwhelmingly Positive reviews. Players praise the combo system depth and Turboturn accessibility.',
    content: `Vampire Crawlers launched on April 21, 2026, and has quickly established itself as one of the highest-rated roguelite deckbuilders on Steam. With over 17,600 reviews at 95% positive (Overwhelmingly Positive), it has surpassed many established titles in the genre.

The game is developed by poncle (creators of Vampire Survivors, which won a BAFTA) in collaboration with Nosebleed Interactive. It transforms the auto-battler snowball formula into a turn-based card-driven dungeon crawler.

Players particularly praise the combo chain system, which rewards strategic planning over reflexes, and the Turboturn system, which removes time pressure while maintaining excitement. The 161 Steam Achievements provide long-term completionist goals.

The game is currently in Early Access, with regular updates adding new content. The base price is $8.99.`,
  },
  {
    date: '2026-06-18',
    title: 'Beginner\'s Guide: First Run Walkthrough and Village Priority',
    tag: 'GUIDE',
    excerpt: 'New to Vampire Crawlers? Start here. We cover the combo system, card types, gem mechanics, village upgrade order, and a step-by-step first dungeon walkthrough.',
    content: `Your first run in Vampire Crawlers sets the foundation for your entire playthrough. Start with Antonio (Whip) or Imelda (Magic Wand) — both are starting characters with straightforward mechanics.

Enter Mad Forest and focus on learning the combo chain: play cards in ascending mana cost order. Draft 0-cost and 1-cost weapon cards to fill your chain foundation. Look for item cards that match your weapons for future evolutions.

After your first dungeon, return to the village and upgrade Greed first (more gold = faster progression). Then Might for damage, and Blacksmith for gem socket expansion. Check Town Hall to track unlock conditions.

Most importantly: take your time with Turboturn. There is no time pressure. Plan your chain before executing. One well-planned turn beats four rushed ones.`,
  },
];
export const metadata = {
  title: "Vampire Crawlers News & Updates — Complete Guide (2026)",
  description:
    "Latest guides, tier list updates, and Vampire Crawlers news. Updated regularly with patch analysis and strategy deep dives.",
};


export default function NewsPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-text-primary mb-2">
            News & Updates
          </h1>
          <p className="text-sm text-text-secondary">
            Latest guides, tier list updates, and Vampire Crawlers news. Updated regularly with patch analysis and strategy deep dives.
          </p>
        </div>

        <div className="space-y-4">
          {NEWS_ARTICLES.map((article, i) => (
            <article key={i} className="stat-card">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="text-xs font-mono text-text-muted tabular-nums">{article.date}</span>
                <span className={`text-[10px] font-mono uppercase px-1.5 py-0.5 border ${
                  article.tag === 'BUILD' ? 'text-tactical-blue border-tactical-blue/30 bg-tactical-blue/5' :
                  article.tag === 'GUIDE' ? 'text-terminal-green border-terminal-green/30 bg-terminal-green/5' :
                  article.tag === 'TIER' ? 'text-[#d2a8ff] border-[#d2a8ff]/30 bg-[#d2a8ff]/5' :
                  'text-warning-orange border-warning-orange/30 bg-warning-orange/5'
                }`}>
                  {article.tag}
                </span>
              </div>
              <h2 className="font-display text-base font-semibold text-text-primary mb-2">
                {article.title}
              </h2>
              <p className="text-xs text-text-secondary leading-relaxed mb-3">
                {article.excerpt}
              </p>
              <p className="text-xs text-text-secondary leading-relaxed whitespace-pre-line">
                {article.content}
              </p>
            </article>
          ))}
        </div>

        <div className="terminal-block">
          <p className="text-text-muted mb-1">
            <span className="text-warning-orange">$</span> news.feed
          </p>
          <p>articles: {NEWS_ARTICLES.length} | last_update: 2026-06-26</p>
          <p className="cursor-blink">feed loaded</p>
        </div>
      </div>
    </div>
  );
}
