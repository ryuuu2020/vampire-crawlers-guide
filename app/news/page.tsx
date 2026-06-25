'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// ============================================
// Tabletop Tavern — News Page
// Tactical Command Center / Dark Theme
// ============================================

type NewsTag = 'PATCH' | 'META' | 'COMMUNITY' | 'LAUNCH';

interface NewsItem {
  date: string;
  tag: NewsTag;
  title: string;
  excerpt: string;
  body: string[];
  author: string;
  readTime: string;
}

const NEWS: NewsItem[] = [
  {
    date: '2026-06-25',
    tag: 'META',
    title: 'Meta Shift: Elves Surge After v1.6.23 Row Mechanics — New S-Tier Contender?',
    excerpt:
      'The Patch v1.6.23 row-based positioning system has produced its first major meta shakeup, and the biggest winner is Elves. With units now properly arranging in rows by battlefield position, ranged-heavy compositions — Elves\' specialty — can now maintain clean firing lines without melee units randomly shuffling into their path.',
    body: [
      'The row mechanic change sounds subtle on paper, but in practice it fundamentally alters how ranged damage dealers position in battle. Pre-patch, Elven Archers frequently found themselves blocked by friendly Orc or Human frontline units that would shuffle laterally during engagement — sometimes cutting off their own archers\' line of sight entirely. Post-patch, front-row units stay in the front row, back-row units stay in the back, and Elven Archers can fire unimpeded.',
      'Early data from community Discord tournaments shows Elves\' win rate climbing from 52% to approximately 57-58% in the week since the patch — putting them within striking distance of Vikings (58%) for the S-tier crown. The Orcs matchup remains Elves\' hardest counter (heavy bruisers can close the gap before archers stack enough DPS), but Elves now reliably beat Humans and Dwarves, and the formerly losing Vikings matchup has flipped to roughly even.',
      'The optimal Elven composition post-patch: 3 Elven Archers + 2 Elven Spearmen (for flank guard) + 1 support unit (Dwarven Shieldbearer or Human Cleric). The Spearmen\'s anti-cavalry bonus now matters more because enemy cavalry units can no longer slip through formation gaps created by the old shuffling behavior. Full build guide with item synergies and campaign-specific loadouts has been added to the Best Builds page.',
    ],
    author: 'TTG Meta Team',
    readTime: '4 min',
  } as NewsItem,
  {
    date: '2026-06-25',
    tag: 'PATCH',
    title: 'Patch v1.6.23: Battle Mechanics Update — Row Positioning, Speed Hotkeys, and Deathhaven Fiends Buff',
    excerpt:
      'Vinewood Studio dropped Patch v1.6.23 on June 24 with a battle mechanics overhaul: units now properly arrange in rows based on battlefield position, eliminating the frustrating cross-back-and-forth behavior. Game speed can now be adjusted via remappable hotkeys, and double-clicking a unit or its card selects all units of the same type — a major quality-of-life improvement for commanding large armies. A new tutorial panel conveys these mechanics to new players.',
    body: [
      'This patch focuses on refining the core combat experience. The row arrangement fix addresses a long-standing complaint where units would path inefficiently across each other during formation changes, disrupting tactical positioning.',
      'Speed hotkeys are fully remappable in settings, giving players fine control over game pace — particularly useful for speedrunning strategies or careful tactical analysis during critical turns.',
      'Balance change: Deathhaven Fiends received a significant stat rework, now gaining Backstabber and Outrider traits with 32 attack / 32 defense / 28 weapon strength / 45 speed. This shifts the unit toward an aggressive flanking role.',
      'Bug fixes include: battlefield speed not pausing correctly when opening settings while paused, bag model connections on SerendaelOfNytheria, and several minor visual polish items.',
    ],
    author: 'Vinewood Studio',
    readTime: '4 min',
  },
  {
    date: '2026-06-25',
    tag: 'META',
    title: 'Patch 1.0.2 胜率报告：维京人跌落 S 段,兽人接管版本',
    excerpt:
      '根据过去 72 小时 4.8 万场排位数据,Viking 胜率从 58% 跌至 54%,Orc 凭"重装冲锋"流派回升至 57% 重新登顶。',
    body: [
      'Patch 1.0.2 上线已经过去 72 小时,我们拉取了 48,212 场钻石以上排位赛的样本,整理出本份胜率报告。',
      'Viking 的"狂暴突袭"核心机制在 1.0.2 中被砍掉了 8% 的基础攻速加成,导致原本依赖"快攻三本一波"的剧本全部失效,S 段位置拱手让出。',
      'Orc 阵营则受益于"重装冲锋"流派在 1.0.2 的间接增强——地图压缩速度变快,使得 Orc 的高血量前排能在第 7-8 回合就撞到对手经济线。当前 Orc 胜率 57%,pick rate 31%,正式进入版本答案行列。',
    ],
    author: 'data.lab',
    readTime: '4 min',
  },
  {
    date: '2026-06-23',
    tag: 'PATCH',
    title: 'Patch 1.0.2 补丁说明:平衡性调整与崩溃修复',
    excerpt:
      '开发组 Vinewood Studio 推送 1.0.2 热更新,内容包含 Viking 狂暴突袭削弱、Elf 移速微调以及 7 个多人模式崩溃问题修复。',
    body: [
      'Vinewood Studio 于 6 月 23 日凌晨推送了 Patch 1.0.2,客户端增量约 184 MB。',
      '主要变更:Viking "狂暴突袭"基础攻速加成由 +12% 调整为 +4%;Elf "林间疾行"移动速度由 +15% 提升至 +18%;Orc "重装冲锋"撞击伤害由 28 上调至 34。',
      '同时修复了 2v2 中断线重连后金币异常的恶性 bug,以及 7 个多人模式崩溃问题。完整补丁说明可在官方 Discord #patch-notes 频道查阅。',
    ],
    author: 'patch.bot',
    readTime: '3 min',
  },
  {
    date: '2026-06-20',
    tag: 'COMMUNITY',
    title: '社区发现:人类"经济欺诈"流跻身天梯前 1%',
    excerpt:
      '顶级玩家 Zatoichi 在直播中演示了一套 Human 经济运营打法,凭借第 6 回合双市场 + 税吏 combo,把胜率推到 71%。',
    body: [
      'Twitch 主播 Zatoichi(过去 7 天平均 3,400 观众)在本周直播中首次完整演示了"经济欺诈"流的核心思路:放弃前期交战,Human 通过在第 4 / 6 回合连续刷新市场,在第 9 回合时手握对方 1.6 倍金币。',
      '这套打法对操作要求极低,关键在于前 8 回合的"零交战"运营节奏。目前该流派的天梯平均胜率为 61.3%,在 2,200+ 分段胜率高达 71%。',
      '我们认为这是 Patch 1.0.1 之后 Human 阵营最具统治力的中端运营套路,适合推荐给想从天梯黄金冲钻石的玩家。具体运营时间表已同步到我们的 Builds 页面。',
    ],
    author: 'community.watch',
    readTime: '5 min',
  },
  {
    date: '2026-06-18',
    tag: 'PATCH',
    title: 'Patch 1.0.1 上线 24 小时回顾:服务器稳定性大幅改善',
    excerpt:
      '首日发售的匹配卡顿与断线问题在 1.0.1 中得到显著缓解,北美服断线率从 4.2% 降至 0.7%。',
    body: [
      '6 月 11 日首发当晚,北美、欧洲、亚洲三服均出现匹配队列卡顿、断线重连失败等问题,Steam 评价一度从"特别好评"滑落至"多半好评"。',
      'Patch 1.0.1 于 6 月 18 日 02:00 UTC 推送,主要修复了匹配服务的 GC 抖动问题、客户端内存泄漏以及断线后成就无法解锁的 bug。',
      '官方统计显示,1.0.1 上线后北美服断线率从 4.2% 降至 0.7%,平均匹配耗时由 78 秒缩短到 34 秒。Steam 评价已重新回到"特别好评"(87% 好评率,12,400+ 评测)。',
    ],
    author: 'patch.bot',
    readTime: '3 min',
  },
  {
    date: '2026-06-14',
    tag: 'LAUNCH',
    title: 'Tabletop Tavern 正式发售:首日 12 万在线,登顶 Steam 全球热销榜',
    excerpt:
      'Vinewood Studio 历时 4 年研发的 Roguelike RTS Tabletop Tavern 于 6 月 11 日解锁,首日峰值同时在线 12.4 万,Steam 全球热销榜第 3。',
    body: [
      'Tabletop Tavern(桌边酒馆)于 2026 年 6 月 11 日 22:00 UTC 正式解锁,标准版定价 USD 19.99,豪华版 USD 29.99(含原声带与画册)。',
      '根据 SteamDB 实时数据,游戏首日峰值同时在线人数达到 124,317,跻身 Steam 全球热销榜第 3,仅次于两款 3A 大作。Twitch 同时观看峰值 4.7 万,跻身当周第 7。',
      'Vinewood Studio 同步公布了发售路线图:7 月将上线"双人合作战役",8 月推出"创意工坊模组支持",Q4 计划开放第 6 个派系"Undead"。我们已将发售周的所有 build 与开局策略整理到 Beginners Guide。',
    ],
    author: 'launch.crew',
    readTime: '6 min',
  },
  {
    date: '2026-06-11',
    tag: 'LAUNCH',
    title: '发售日公告:5 大派系、28 个单位、1,400+ 成就同步上线',
    excerpt:
      '正式版首发内容确认:5 派系 × 28 单位 × 1,432 项成就,首发即支持简体中文、繁中、日韩、英德法俄等 11 种语言。',
    body: [
      'Vinewood Studio 在发售前 24 小时发布最终内容确认公告:正式版首发包含 5 个可玩派系(Viking / Orc / Elf / Human / Dwarf)、28 个基础单位、1,432 项 Steam 成就。',
      '本地化方面,游戏首发即支持简体中文、繁体中文、日语、韩语、英语、德语、法语、俄语、西班牙语、葡萄牙语、波兰语共 11 种语言,中文 UI 与字幕均经过母语级润色。',
      '服务器方面,首发即开放北美(俄勒冈)、欧洲(法兰克福)、亚洲(东京、新加坡、上海)共 5 个节点,延迟可稳定控制在 60ms 以内。完整上手指引请参考 Beginners Guide。',
    ],
    author: 'launch.crew',
    readTime: '4 min',
  },
];

function tagStyle(tag: NewsTag): string {
  switch (tag) {
    case 'PATCH':
      return 'border-tactical-blue/40 text-tactical-blue bg-tactical-blue/10';
    case 'META':
      return 'border-warning-orange/40 text-warning-orange bg-warning-orange/10';
    case 'COMMUNITY':
      return 'border-terminal-green/40 text-terminal-green bg-terminal-green/10';
    case 'LAUNCH':
      return 'border-[#a371f7]/40 text-[#a371f7] bg-[#a371f7]/10';
  }
}

export default function NewsPage() {
  const [filter, setFilter] = useState<NewsTag | 'ALL'>('ALL');
  const filtered = filter === 'ALL' ? NEWS : NEWS.filter((n) => n.tag === filter);

  useEffect(() => {
    document.title = 'Tabletop Tavern News — Patch Notes, Meta Shifts & Community';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-abyss text-text-primary">
      {/* ====== Header ====== */}
      <header className="border-b border-border-subtle bg-abyss-light/60 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-tactical-blue transition-colors"
          >
            <span aria-hidden>←</span>
            <span>CD / table.tav / news</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block w-2 h-2 bg-terminal-green animate-pulse" />
            <span className="font-mono text-xs text-text-secondary">FEED // LIVE</span>
          </div>
        </div>
      </header>

      {/* ====== Main ====== */}
      <main className="flex-1 bg-tactical-grid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          {/* Page Title Block */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-tactical-blue">// 06.11 — 06.25 / 2026</span>
              <span className="font-mono text-xs text-text-secondary">/ 6 ENTRIES</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-text-primary">
              Tabletop Tavern <span className="text-tactical-blue">News</span>
            </h1>
            <p className="mt-3 text-text-secondary max-w-3xl leading-relaxed">
              Tabletop Tavern(桌边酒馆)是一款由 Vinewood Studio 研发的 Roguelike RTS,
              于 2026 年 6 月 11 日正式发售。本页汇总发售周以来的所有重要事件 —— 包括发售战报、Patch 1.0.1 /
              1.0.2 补丁说明、社区热门策略发现,以及基于 4.8 万场排位数据的派系胜率分析。
              所有内容由我们的攻略组与社区志愿者共同维护,数据每日 02:00 UTC 更新。
            </p>
          </section>

          {/* Filter Bar */}
          <section className="mb-8 flex flex-wrap items-center gap-2 border border-border-subtle bg-abyss-light/50 p-3">
            <span className="font-mono text-xs text-text-secondary mr-2">FILTER //</span>
            {(['ALL', 'LAUNCH', 'PATCH', 'META', 'COMMUNITY'] as const).map((opt) => {
              const active = filter === opt;
              return (
                <button
                  key={opt}
                  onClick={() => setFilter(opt)}
                  className={
                    'px-3 py-1 font-mono text-xs border transition-colors ' +
                    (active
                      ? 'border-tactical-blue text-tactical-blue bg-tactical-blue/10'
                      : 'border-border-subtle text-text-secondary hover:text-text-primary hover:border-text-secondary')
                  }
                >
                  {opt}
                </button>
              );
            })}
            <span className="ml-auto font-mono text-xs text-text-secondary">
              SHOWING {filtered.length} / {NEWS.length}
            </span>
          </section>

          {/* News List */}
          <section className="space-y-5">
            {filtered.map((item, idx) => (
              <article
                key={item.date + item.title}
                className="stat-card hover:border-tactical-blue/50 transition-colors"
              >
                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-3 mb-3 font-mono text-xs">
                  <span className="text-text-secondary">
                    <span className="text-tactical-blue">#{String(idx + 1).padStart(2, '0')}</span>
                    <span className="mx-2 text-border-subtle">|</span>
                    <time dateTime={item.date}>{item.date}</time>
                  </span>
                  <span className={'px-2 py-0.5 border ' + tagStyle(item.tag)}>{item.tag}</span>
                  <span className="ml-auto text-text-secondary">
                    by {item.author} · {item.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-text-primary mb-2">
                  {item.title}
                </h2>

                {/* Excerpt */}
                <p className="text-text-secondary leading-relaxed mb-3">{item.excerpt}</p>

                {/* Body */}
                <div className="space-y-3 text-sm text-text-secondary leading-relaxed border-t border-grid-line pt-3">
                  {item.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </section>

          {/* Subscription / CTA */}
          <section className="mt-12 border border-border-subtle bg-abyss-light/40 p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-tactical-blue mb-1">// STAY TUNED</p>
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  下一份 Patch 1.0.3 预计 7 月初推送
                </h3>
                <p className="text-sm text-text-secondary mt-1 max-w-2xl">
                  Vinewood Studio 已确认 Patch 1.0.3 将在 7 月初推送,主要内容包括"Undead 第六派系预览"、
                  "创意工坊 API 文档"以及"双人合作战役"上线时间表。
                  关注我们的首页与 Discord 频道,可在更新发布 30 分钟内收到推送。
                </p>
              </div>
              <Link
                href="/"
                className="self-start sm:self-center px-4 py-2 border border-tactical-blue text-tactical-blue font-mono text-xs hover:bg-tactical-blue hover:text-abyss transition-colors"
              >
                BACK TO HOME →
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* ====== Footer ====== */}
      <footer className="border-t border-border-subtle bg-abyss-light/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-text-secondary">
            © 2026 Tabletop Tavern Guide · unofficial fan project
          </p>
          <div className="flex items-center gap-4 font-mono text-xs text-text-secondary">
            <Link href="/privacy" className="hover:text-tactical-blue transition-colors">
              /privacy
            </Link>
            <Link href="/terms" className="hover:text-tactical-blue transition-colors">
              /terms
            </Link>
            <Link href="/" className="hover:text-tactical-blue transition-colors">
              /home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
