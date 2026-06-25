'use client';

import { useState, useEffect } from 'react';

/* ============================================
   FAQ Page — Tactical Command Center Theme
   Tabletop Tavern Roguelike RTS Guide
   ============================================ */

// SEO metadata injection handled inside component via useEffect

const FAQ_CATEGORIES = [
  { id: 'all', label: 'ALL' },
  { id: 'basics', label: 'BASICS' },
  { id: 'mechanics', label: 'MECHANICS' },
  { id: 'technical', label: 'TECHNICAL' },
  { id: 'strategy', label: 'STRATEGY' },
];

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    category: 'basics',
    question: 'Tabletop Tavern 是什么类型的游戏？',
    answer:
      'Tabletop Tavern 是一款融合了 Roguelike 随机性与即时战略（RTS）操控的混合型游戏。玩家在奇幻酒馆世界的地图上探索，每局随机生成地形、敌人与事件节点。你需要实时指挥单位移动、攻击和技能释放，同时做出路径选择和资源分配的决策。游戏于 2026 年 6 月 11 日在 Steam 正式发售，首发即包含 5 个完整派系和 28 种基础单位。',
  },
  {
    category: 'basics',
    question: 'Tabletop Tavern 在哪里可以购买和下载？',
    answer:
      '游戏目前仅在 Steam 平台发售，搜索 "Tabletop Tavern" 即可找到商店页面。首发版本支持 Windows 和 macOS，暂未上架 Epic Games Store 或 GOG。购买后直接通过 Steam 客户端下载安装，初始安装包约 2.4 GB，后续补丁会额外占用空间。建议开启 Steam 自动更新以确保始终运行最新版本。',
  },
  {
    category: 'basics',
    question: 'Tabletop Tavern 的价格是多少？有没有折扣？',
    answer:
      '首发定价为 29.99 美元 / 98 元人民币（以 Steam 区域定价为准）。发售首周提供 10% 抢先优惠，折后价约 26.99 美元。后续 Steam 季节性促销（夏促、冬促等）通常会有 15%-25% 的折扣。游戏暂无 DLC 或微交易，所有派系和单位均在基础版中完整解锁。官方承诺未来新增派系将作为免费更新推送。',
  },
  {
    category: 'mechanics',
    question: 'Roguelike 元素具体体现在哪些方面？',
    answer:
      'Roguelike 机制贯穿整个战役流程。每局开始时地图节点随机生成——商店位置、休息点、Boss 芘围和事件分布均不同。遭遇敌人的阵容和技能组合也是随机抽取。单位死亡后在当前局中永久消失（Permadeath），但局间可以保留部分解锁的遗产升级。每次通关或失败都会重置地图和单位池，确保每局体验独特。这种设计鼓励玩家适应而非记忆固定路线。',
  },
  {
    category: 'mechanics',
    question: '如何选择派系？每个派系的特点是什么？',
    answer:
      '游戏包含 5 个派系：Vikings（精锐步兵，高近战伤害和冲锋能力）、Orcs（重装肉盾，生命值极高）、Elves（敏捷远程，射程和机动性突出）、Humans（平衡万用，经济效率好）、Dwarves（防御阵线，筑墙和工事专家）。新手推荐 Humans，其平衡属性和较低的操作门槛有助于理解核心机制。追求高胜率的竞技玩家倾向于 Vikings，其当前版本胜率 58% 位于 S 级。选择派系后在本局中不可更换，但下一局可以重新选择。',
  },
  {
    category: 'mechanics',
    question: '单位招募系统是怎么运作的？',
    answer:
      '每局开始时你获得一个基础单位池（数量因派系而异，Humans 4 个，Vikings 3 个）。在地图上的酒馆节点可以花费金币招募额外单位，招募池随局数推进逐渐解锁高级单位。同一单位最多同时拥有 3 个副本。招募价格随单位等级递增——1 级单位 50 金，2 级 120 金，3 级 200 金。合理规划招募节奏是核心策略之一：过早投入可能导致后期资金不足，延迟招募则可能中期战斗力薄弱。',
  },
  {
    category: 'mechanics',
    question: '战役地图上的节点类型有哪些？',
    answer:
      '地图节点分为 7 种类型：战斗节点（遭遇敌人，胜利获得金币和经验）、精英战斗（更强敌人，更高奖励）、Boss 芘围（关卡终点，击败后通关）、商店节点（购买装备和消耗品）、休息节点（恢复单位生命值）、事件节点（触发随机故事事件，可能获得奖励或惩罚）、酒馆节点（招募新单位）。每次移动只能选择相邻节点，路径规划决定了资源获取节奏和战斗难度曲线。',
  },
  {
    category: 'technical',
    question: 'Tabletop Tavern 的最低和推荐系统配置是什么？',
    answer:
      '最低配置：Windows 10 / macOS 12+，Intel i5-8400 或等效处理器，8 GB RAM，NVIDIA GTX 1060 / AMD RX 580 或等效显卡，3 GB 可用存储空间。推荐配置：Windows 11 / macOS 14+，Intel i7-10700 或等效处理器，16 GB RAM，NVIDIA RTX 3060 / AMD RX 6600 XT 或等效显卡，5 GB 可用存储空间。游戏支持 1080p 至 4K 分辨率，4K 下建议使用推荐配置以维持 60 FPS。',
  },
  {
    category: 'technical',
    question: 'Tabletop Tavern 支持多人联机吗？',
    answer:
      '首发版本仅提供单人战役模式，不支持多人联机对战或合作。官方路线图中计划在 2026 年 Q3 推出 2 人合作战役模式（Shared Map Co-op），Q4 推出 1v1 PvP 对战。联机功能将基于 Steam 远程同乐和好友系统实现。目前你可以通过分享截图和录像与朋友交流策略心得，社区 Discord 中也有每周挑战活动供间接竞争。',
  },
  {
    category: 'technical',
    question: 'Steam Deck 上能玩 Tabletop Tavern 吗？',
    answer:
      'Steam Deck 兼容性状态为 "Playable"（可玩但未达到 Verified 完全兼容）。主要问题：部分 UI 文字在小屏幕上偏小，需要调整缩放设置；触控板操作可以替代鼠标，但 RTS 实时操控的精准度不如键鼠；性能方面在中等画质下可维持 40-45 FPS。建议在 Steam Deck 上使用暂停功能辅助操作，或在设置中开启 "Simplified Controls" 模式降低操作复杂度。',
  },
  {
    category: 'strategy',
    question: '新手玩家最常见的错误有哪些？',
    answer:
      '三大典型错误：第一，贪图战斗节点奖励而忽视休息节点——单位死亡不可复活，过度消耗生命值会导致后期无法应对 Boss。建议每 3-4 个战斗后至少访问 1 个休息点。第二，招募过于分散——同时招募多种 1 级单位看似阵容丰富，但低等级单位在精英战斗中几乎无法存活。集中招募 2-3 个核心高级单位更有效率。第三，忽略装备搭配——商店中购买的装备有派系亲和加成，同一派系单位装备 3 件同系列物品可触发套装效果。',
  },
  {
    category: 'strategy',
    question: '如何提高通关胜率？有哪些进阶技巧？',
    answer:
      '提高胜率的核心原则：路径规划优先于战斗操作。优先选择含商店和休息节点多的路线，保证资源供给。进阶技巧：一是"经济滚雪球"策略——前 3 个节点全部选择战斗快速积累金币，然后在酒馆节点一次性招募 2 级单位形成战斗力跃升。二是"单位角色分工"——前排肉盾（Orcs/Dwarves）吸引火力，后排输出（Elves/Vikings 骑兵）专注击杀，避免所有单位无序冲锋。三是"Boss 预读"——每个关卡的 Boss 类型在进入芘围节点前会在地图上标注，据此提前调整阵容和装备。四是善用暂停——游戏允许随时暂停下达指令，不要在实时操作中手忙脚乱。',
  },
  {
    category: 'strategy',
    question: '遗产升级系统怎么利用？局间保留什么？',
    answer:
      '每局结束（无论通关或失败）都会根据表现获得遗产点数。遗产点数可以在局间解锁永久增益：如基础单位池 +1（每局多一个初始单位）、商店折扣（招募和购买降价 10%-15%）、初始金币加成（从 100 提升至 150）等。优先解锁"基础单位池 +1"和"初始金币加成"，这两个升级直接提升了每局的起步优势。高阶遗产解锁需要大量点数，建议在完成 5-10 局基础积累后再考虑。',
  },
];

function getCategoryColor(category: string): string {
  switch (category) {
    case 'basics':
      return 'text-tactical-blue border-tactical-blue/30 bg-tactical-blue/5';
    case 'mechanics':
      return 'text-terminal-green border-terminal-green/30 bg-terminal-green/5';
    case 'technical':
      return 'text-warning-orange border-warning-orange/30 bg-warning-orange/5';
    case 'strategy':
      return 'text-[#f0883e] border-[#f0883e]/30 bg-[#f0883e]/5';
    default:
      return 'text-text-secondary border-border-subtle';
  }
}

function getCategoryLabel(category: string): string {
  switch (category) {
    case 'basics': return 'BASICS';
    case 'mechanics': return 'MECHANICS';
    case 'technical': return 'TECH';
    case 'strategy': return 'STRATEGY';
    default: return category.toUpperCase();
  }
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // SEO metadata injection (use client pages cannot export Metadata)
  useEffect(() => {
    document.title = 'Tabletop Tavern FAQ — Common Questions, System Requirements & Strategy Tips';
    const existingDesc = document.querySelector('meta[name="description"]');
    const descContent = 'Tabletop Tavern FAQ: game basics, roguelike mechanics, faction selection, unit recruitment, system requirements, Steam Deck compatibility, and strategy tips for beginners and advanced players.';
    if (existingDesc) {
      existingDesc.setAttribute('content', descContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descContent;
      document.head.appendChild(meta);
    }
  }, []);

  const filteredFAQs =
    activeCategory === 'all'
      ? FAQ_DATA
      : FAQ_DATA.filter((faq) => faq.category === activeCategory);

  return (
    <div className="flex min-h-screen flex-col">
      {/* ===== Header ===== */}
      <header className="h-14 border-b border-border-subtle bg-abyss flex items-center px-4 lg:px-6 gap-4">
        <a
          href="/"
          className="flex items-center gap-2 text-xs font-mono text-text-muted hover:text-tactical-blue transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M8 1L3 7L8 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
          <span className="hidden sm:inline">BACK TO HQ</span>
          <span className="sm:hidden">BACK</span>
        </a>

        <div className="w-px h-6 bg-border-subtle" />

        <h1 className="font-display text-sm font-semibold tracking-tight text-text-primary">
          TABLETOP TAVERN FAQ
        </h1>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse-subtle" />
          <span className="text-[11px] font-mono text-text-muted">13 ENTRIES</span>
        </div>
      </header>

      {/* ===== Main Content ===== */}
      <main className="flex-1 bg-tactical-grid p-4 lg:p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* ===== SEO Title Block ===== */}
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-text-secondary mt-2">
              Tabletop Tavern FAQ — 常见问题解答，涵盖游戏基础、玩法机制、技术配置与策略进阶。所有内容基于 2026 年 6 月发售版本及 Patch 1.0.2 数据整理。
            </p>
          </section>

          {/* ===== Category Filter ===== */}
          <section>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenIndex(null);
                  }}
                  className={`text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 border transition-colors duration-150 ${
                    activeCategory === cat.id
                      ? 'text-tactical-blue border-tactical-blue bg-tactical-blue/10'
                      : 'text-text-muted border-border-subtle hover:text-text-secondary hover:border-text-muted'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </section>

          {/* ===== FAQ List ===== */}
          <section className="space-y-2">
            {filteredFAQs.map((faq, index) => {
              const globalIndex = FAQ_DATA.indexOf(faq);
              const isOpen = openIndex === globalIndex;

              return (
                <details
                  key={globalIndex}
                  open={isOpen}
                  onToggle={(e) => {
                    const target = e.target as HTMLDetailsElement;
                    setOpenIndex(target.open ? globalIndex : null);
                  }}
                  className="group bg-abyss-light border border-border-subtle"
                >
                  <summary
                    className="flex items-center gap-3 px-4 py-3 cursor-pointer select-none list-none transition-colors duration-150 hover:bg-[#1c2129]"
                  >
                    {/* Category tag */}
                    <span
                      className={`text-[10px] font-mono uppercase px-1.5 py-0.5 border shrink-0 ${getCategoryColor(faq.category)}`}
                    >
                      {getCategoryLabel(faq.category)}
                    </span>

                    {/* Question */}
                    <span className="text-sm text-text-primary font-medium flex-1">
                      {faq.question}
                    </span>

                    {/* Toggle indicator */}
                    <span
                      className={`text-[10px] font-mono text-text-muted transition-transform duration-200 ${
                        isOpen ? 'rotate-90' : ''
                      }`}
                    >
                      ▸
                    </span>
                  </summary>

                  {/* Answer */}
                  <div className="px-4 py-3 border-t border-grid-line">
                    <div className="flex items-start gap-3">
                      <div className="w-0.5 bg-tactical-blue/30 self-stretch shrink-0" />
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </details>
              );
            })}
          </section>

          {/* ===== Quick Reference Summary ===== */}
          <section className="bg-abyss-light border border-border-subtle p-4">
            <h3 className="font-display text-sm font-semibold tracking-tight text-text-primary mb-3">
              Quick Reference
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="stat-card">
                <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-1">
                  PRICE
                </p>
                <p className="font-mono text-stat text-text-primary tabular-nums">$29.99</p>
                <p className="text-xs font-mono text-terminal-green mt-1">首周 -10%</p>
              </div>
              <div className="stat-card">
                <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-1">
                  PLATFORM
                </p>
                <p className="font-mono text-stat text-text-primary tabular-nums">Steam</p>
                <p className="text-xs font-mono text-text-muted mt-1">Win / macOS</p>
              </div>
              <div className="stat-card">
                <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-1">
                  FACTIONS
                </p>
                <p className="font-mono text-stat text-text-primary tabular-nums">5</p>
                <p className="text-xs font-mono text-text-muted mt-1">全部免费解锁</p>
              </div>
              <div className="stat-card">
                <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-1">
                  STEAM DECK
                </p>
                <p className="font-mono text-lg font-semibold text-warning-orange tabular-nums">Playable</p>
                <p className="text-xs font-mono text-text-muted mt-1">非 Verified</p>
              </div>
            </div>
          </section>

          {/* ===== Terminal note ===== */}
          <div className="terminal-block">
            <p className="text-text-muted mb-1">
              <span className="text-warning-orange">$</span> faq.status
            </p>
            <p>last_updated: 2026-06-25</p>
            <p>patch_coverage: 1.0.2</p>
            <p>entries: 13 / categories: 4</p>
            <p className="cursor-blink">ready</p>
          </div>
        </div>
      </main>

      {/* ===== Footer ===== */}
      <footer className="border-t border-border-subtle bg-abyss">
        <div className="max-w-3xl mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-[11px] font-mono text-text-muted">
              <span>&copy; {new Date().getFullYear()} Tabletop Tavern Guide</span>
              <a href="/privacy" className="hover:text-text-secondary transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-text-secondary transition-colors">
                Terms
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/"
                className="text-[11px] font-mono text-tactical-blue hover:text-tactical-blue-dim transition-colors"
              >
                BACK TO HQ &rarr;
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
