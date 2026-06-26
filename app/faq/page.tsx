/* ============================================
   Vampire Crawlers Guide — FAQ
   Common player questions answered
   ============================================ */

const FAQS = [
  {
    q: 'How does the combo chain system work?',
    a: 'Each turn, play cards in ascending mana cost order (0 to 1 to 2 to 3+). Every card multiplies the next card in the chain. The longer the chain, the higher the multiplier. An 8-card chain in one turn deals far more damage than two 4-card chains across two turns. The multiplier resets at the end of your turn unless you have the Chain Link Arcana.',
  },
  {
    q: 'What is the Turboturn system?',
    a: 'Turboturn is poncle\'s name for the combat input system. It lets you queue cards without waiting for animations to finish. You can plan your entire turn before playing the first card. There is no time pressure — take your time to sort your hand and plan the optimal chain order.',
  },
  {
    q: 'How do weapon evolutions work?',
    a: 'To evolve a weapon, you need four things: (1) the base weapon card in your deck, (2) the matching item card in your deck, (3) an empty gem socket on the base card, and (4) an Evolution Gem from a statue, chest, or boss. When all conditions are met, the base card evolves into a more powerful version. The item card stays in your deck.',
  },
  {
    q: 'Why can\'t I evolve my weapon?',
    a: 'The most common reason is that you inserted a Customization Gem into the base card\'s socket. Filled sockets block evolution. Other reasons: you may not have the correct item card, or you may not have found an Evolution Gem yet. Check the Grim Grimoire relic (found in Inlaid Library) to track your evolution progress.',
  },
  {
    q: 'Which Crawler should I start with?',
    a: 'Antonio Belpaese (Whip) and Imelda Belpaese (Magic Wand) are both available from the start. Antonio is melee-focused with a straightforward playstyle. For a more forgiving experience, unlock Suor Clerici (recover 1,000 HP total) — her blue card healing provides built-in sustain.',
  },
  {
    q: 'What should I upgrade first in the village?',
    a: 'Always upgrade Greed first (Rank 2-3). More gold means faster upgrades for everything else. After Greed, prioritize Might for damage, then Max Health or Recovery for survivability, and Blacksmith for gem socket expansion.',
  },
  {
    q: 'What are Wild cards and why are they important?',
    a: 'Wild cards are universal chain bridges. They can substitute for any mana cost, keeping your combo chain alive when you lack a specific cost tier. For example, if you have a 0-cost and a 2-cost but no 1-cost card, play a Wild between them to maintain the multiplier. Always keep at least one Wild in hand as chain insurance.',
  },
  {
    q: 'How do I unlock all 21 Crawlers?',
    a: 'Crawlers are unlocked through various conditions: defeating specific bosses, finding hidden coffins in dungeons, reaching level milestones, playing specific cards a set number of times, and collecting gold. Visit the Town Hall in the village to track all unlock conditions. See our Tier List page for the complete unlock guide.',
  },
  {
    q: 'What are Arcana cards and how do I unlock them?',
    a: 'Arcana cards are pre-run modifiers that fundamentally change gameplay. They are unlocked by completing specific in-game challenges. The most powerful Arcana is Chain Link, which prevents your combo multiplier from resetting at turn end. Unlock it by achieving a 12-chain in a single turn.',
  },
  {
    q: 'What are the best cards to draft?',
    a: 'Draw cards are disproportionately strong because they help you find the next cost tier for your chain. Always draft them. Other top picks: Bone (0-cost weapon), King Bible (1-cost), Wild cards, and item cards that match your current weapons. Avoid Gatti Amari and Runetracer — their base forms are underwhelming.',
  },
  {
    q: 'How do I find Floor Chickens?',
    a: 'Floor Chickens are hidden behind breakable objects like vases, candles, and crates. They heal HP when consumed. The Guiding Light relic (found in Mad Forest at level 10+) makes all breakable light sources visible on the minimap. Save Floor Chickens for boss fights.',
  },
  {
    q: 'Is Vampire Crawlers related to Vampire Survivors?',
    a: 'Yes. Vampire Crawlers is developed by poncle (creators of Vampire Survivors) in collaboration with Nosebleed Interactive. It transforms the snowballing auto-battler formula into a turn-based roguelite deckbuilder. Many weapons, characters, and items are inspired by Vampire Survivors, but the gameplay is entirely different.',
  },
];

export default function FAQPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-text-primary mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-text-secondary">
            Common questions from Vampire Crawlers players, answered with accurate game data.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="stat-card">
              <h3 className="font-display text-sm font-semibold text-text-primary mb-2">
                <span className="text-tactical-blue font-mono mr-2">Q{String(i + 1).padStart(2, '0')}.</span>
                {faq.q}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="terminal-block">
          <p className="text-text-muted mb-1">
            <span className="text-warning-orange">$</span> faq.loaded
          </p>
          <p>questions: {FAQS.length} | status: answered</p>
          <p className="cursor-blink">faq ready</p>
        </div>
      </div>
    </div>
  );
}
