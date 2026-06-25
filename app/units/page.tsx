"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

export default function UnitsGuidePage() {
  useEffect(() => {
    document.title = "Tabletop Tavern Units Guide — All Unit Types & Roles Explained";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-abyss text-text-primary font-body">
      {/* Header */}
      <header className="border-b border-border-subtle bg-abyss-light">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-tactical-blue transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
          <span className="ml-4 text-sm text-text-muted font-mono">UNITS_GUIDE_v1.0</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 bg-tactical-grid">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-3">
            Tabletop Tavern Units Guide — All Unit Types & Roles Explained
          </h1>
          <p className="text-text-secondary text-lg mb-8 max-w-3xl">
            单位是 Tabletop Tavern 战术体系的基础积木。本文系统讲解 Pikemen、Archers、Cavalry、Heavy Infantry、
            Rare Units 和 Conscripted Units 六大类型的定位、最佳场景和升级路径，所有数据均来自社区估算。
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">Pikemen — 反冲锋核心</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Pikemen 是游戏中最稳定的前排反骑兵单位。他们拥有“Brace”技能，在原地持枪时可以抵消大部分骑兵冲锋
              伤害。社区估算显示，Pikemen 对 Cavalry 的输出倍率约为 1.5，而承受冲锋伤害降低 40% 至 55%。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">最佳场景：</strong>狭窄通道、防守高地、保护后排。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">升级路径：</strong>基础 Spearman → Halberdier → Winged Hussar / Phalanx Guard。
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">注意事项：</strong>侧面和背后极脆，不要让他们单独暴露在开阔地。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">Archers — 后排输出</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Archers 提供持续远程输出，对 Heavy Infantry 和静止目标伤害出色。社区估算中，Archers 对 Heavy Infantry
              的输出倍率约为 1.4，但面对 Cavalry 贴脸时只有 0.5 左右的反击能力。站位是弓箭手生存的关键。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">最佳场景：</strong>高地、森林边缘、被前排保护的阵型后方。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">升级路径：</strong>Archer → Crossbowman → Longbowman / Elven Ranger。
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">注意事项：</strong>不要站桩输出，遇到敌方骑兵绕后要及时撤退或呼叫支援。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">Cavalry — 机动与侧翼</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Cavalry 是战场上最高机动性的单位，擅长绕后、追杀远程和打击士气。一次成功的侧翼冲锋可以触发敌方
              溃逃，社区估算其士气打击效果可达 20% 至 30%。但骑兵正面冲击长枪墙会非常吃亏，需要避免。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">最佳场景：</strong>开阔平原、侧翼包夹、追击残敌。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">升级路径：</strong>Rider → Horseman → Knight / Winged Lancer。
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">注意事项：</strong>树林、沼泽和狭窄地形会严重削弱骑兵效率。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">Heavy Infantry — 钢铁前排</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Heavy Infantry 拥有高血量和护甲，是盾墙和推进阵型的核心。他们对 Pikemen 有一定优势，可以承受大
              量伤害为后排争取输出时间。社区估算中，Heavy Infantry 的平均承伤能力比 Pikemen 高约 25% 至 35%，但
              移动速度较慢。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">最佳场景：</strong>正面战线、攻城战、保护核心单位。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">升级路径：</strong>Footman → Man-at-Arms → Ironbreaker / Paladin。
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">注意事项：</strong>容易被弓箭手和法师集火，需要装备护甲支持。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">Rare Units — 战场王牌</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Rare Units 包括英雄、巨兽、攻城器械和特殊召唤单位。这些单位通常拥有独特技能或极高的属性，但获
              取成本高、维护费用昂贵。社区估算中，一支 Rare Unit 的投入通常相当于 2 至 3 支普通单位的资源。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">最佳场景：</strong>Boss 战、精英节点、需要翻盘的关键局。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">升级路径：</strong>不同类型差异较大，通常通过事件、商店或成就解锁。
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">注意事项：</strong>不要把所有资源压在一张王牌上，配合普通单位才能发挥最大价值。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">Conscripted Units — 经济型炮灰</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Conscripted Units 是价格低廉、训练速度快的临时单位，常见于 Orcs 和部分事件奖励。它们单兵质量低，
              但胜在数量多、补充快。社区估算显示，Conscripted Units 的造价约为同人口标准单位的 50% 至 70%，但
              阵亡率和士气崩溃速度也更快。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">最佳场景：</strong>吸引火力、拖延时间、快速补员。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">升级路径：</strong>通常无高级分支，或仅能转职为基础单位。
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">注意事项：</strong>不要依赖他们承担核心任务，适合作为辅助或消耗品。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">FAQ</h2>
            <div className="space-y-3">
              <details className="border border-border-subtle bg-abyss-light p-4">
                <summary className="font-display font-medium text-text-primary cursor-pointer">
                  一支标准队伍应该包含哪些单位？
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  社区推荐的基础阵容是：1 个 Heavy Infantry 或 Pikemen 前排 + 1 个 Archers 远程 + 1 个 Cavalry 机动
                  + 1 个支援/控制单位。根据敌人和地形调整即可。
                </p>
              </details>
              <details className="border border-border-subtle bg-abyss-light p-4">
                <summary className="font-display font-medium text-text-primary cursor-pointer">
                  Rare Unit 什么时候出最合适？
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  建议在经济稳定、普通部队已经有一定装备支撑后再购买 Rare Unit。太早投入会导致资源紧张，太晚则
                  无法发挥其翻盘价值。Boss 战前通常是最佳时机。
                </p>
              </details>
              <details className="border border-border-subtle bg-abyss-light p-4">
                <summary className="font-display font-medium text-text-primary cursor-pointer">
                  Conscripted Units 值得升级吗？
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  通常不建议在 Conscripted Units 上投入太多装备。它们更适合作为消耗品或应急补充。如果资源允许，
                  优先把装备和升级给核心常规单位。
                </p>
              </details>
            </div>
          </section>

          <p className="text-xs text-text-muted font-mono mt-8">
            数据标注：文中数值为社区玩家估算，实际以游戏内为准。Tabletop Tavern 于 2026 年 6 月 11 日发售。
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-subtle bg-abyss-light py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <span>© 2026 Tabletop Tavern Guide. 独立粉丝站，非官方。</span>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-tactical-blue transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-tactical-blue transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
