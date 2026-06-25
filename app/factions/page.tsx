"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

export default function FactionsGuidePage() {
  useEffect(() => {
    document.title = "Tabletop Tavern Factions Guide — Vikings, Orcs, Elves, Humans, Dwarves";
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
          <span className="ml-4 text-sm text-text-muted font-mono">FACTIONS_GUIDE_v1.0</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 bg-tactical-grid">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-3">
            Tabletop Tavern Factions Guide — Vikings, Orcs, Elves, Humans, Dwarves
          </h1>
          <p className="text-text-secondary text-lg mb-8 max-w-3xl">
            五大派系各具特色，从狂暴的近战冲锋到精准的远程打击。本文逐一拆解每个派系的核心玩法、优势单位、
            弱点与推荐 build 方向，并附社区估算的对比表，助你找到最适合自己的指挥风格。
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">Vikings — 狂战士冲锋</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Vikings 的核心机制是“Berserk”状态：单位在击杀或受伤后进入狂暴，攻击速度和移速提升，但防御下降。
              这个机制让 Vikings 在前中期拥有极强的滚雪球能力。社区估算显示，Vikings 在第三章之前的胜率比其他
              派系高出约 8%，但进入后期精英战后排位和装备配合不足时，阵亡率明显上升。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">优势单位：</strong>Berserker、Longship Raider
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">弱点：</strong>缺乏稳定远程和重甲，怕风筝和集火。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">推荐 build：</strong>双 Berserker + 1 Raider + 1 治疗/支援。
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">适合玩家：</strong>喜欢高爆发、快节奏进攻的玩家。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">Orcs — 数量碾压</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Orcs 以低廉的 Conscripted Units 和人口恢复速度著称。你可以在同等金币下拥有比对手多 30% 至 40% 的
              单位数量，但个体质量偏低。社区估算中，Orcs 的 swarming 战术在开阔地形表现出色，但在狭窄地形和精
              英怪面前容易被逐个消耗。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">优势单位：</strong>Goblin Skirmisher、Orc Brute
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">弱点：</strong>单位士气低，被范围控制和 AOE 快速清场。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">推荐 build：</strong>大量 Skirmisher + 2 个 Brute 作为前排吸收伤害。
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">适合玩家：</strong>喜欢人海战术和快速爆兵的玩家。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">Elves — 精准远程与机动</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Elves 拥有游戏中最优秀的弓箭手和魔法单位，射程和命中率均高于其他派系。森林地形对 Elves 有额外
              加成，社区估算其森林战斗输出可提升约 15% 至 20%。然而，Elves 单位血量低、前排弱，一旦被骑兵或近
              战贴脸就会迅速崩溃。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">优势单位：</strong>Elven Ranger、Moonblade Sentinel
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">弱点：</strong>前排脆弱，经济压力大，容错低。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">推荐 build：</strong>2 Ranger + 1 Sentinel + 1 控制/召唤单位。
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">适合玩家：</strong>擅长站位、风筝与地图控制的玩家。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">Humans — 均衡全能</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Humans 没有明显的短板，也没有极端的强项。他们可以快速切换前排与后排，适应任何战场地形。社区估
              算中，Humans 的首通率和稳定度均排名前列，尤其适合新手。人类的劣势在于上限不如专精派系高，若想过
              高难度挑战，需要更精细的装备和技能搭配。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">优势单位：</strong>Men-at-Arms、Crossbowman、Knight
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">弱点：</strong>没有极端爆发，需要均衡发展资源。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">推荐 build：</strong>1 重装 + 1 远程 + 1 骑兵 + 1 支援。
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">适合玩家：</strong>喜欢灵活调整、稳扎稳打的玩家。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">Dwarves — 钢铁防线</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Dwarves 以重装步兵和防御工事闻名。他们的单位血量与护甲极高，配合符文装备可以站成一道移动城墙。
              社区估算显示，Dwarves 的单位平均阵亡率比全派系低约 15%，但经济发育速度较慢，前期容易因为输出不
              足而陷入消耗战。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">优势单位：</strong>Ironbreaker、Runesmith
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">弱点：</strong>移动慢，缺乏机动，前期推进慢。
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              <strong className="text-text-primary">推荐 build：</strong>2 Ironbreaker + 1 Runesmith + 1 远程破甲。
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">适合玩家：</strong>喜欢防守反击、长线经营的玩家。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">派系对比表</h2>
            <div className="overflow-x-auto border border-border-subtle mb-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-abyss-light text-text-primary font-mono">
                  <tr>
                    <th className="p-3 border-b border-border-subtle">派系</th>
                    <th className="p-3 border-b border-border-subtle">上手难度</th>
                    <th className="p-3 border-b border-border-subtle">前期强度</th>
                    <th className="p-3 border-b border-border-subtle">后期强度</th>
                    <th className="p-3 border-b border-border-subtle">核心定位</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="data-row">
                    <td className="p-3 font-medium text-text-primary">Vikings</td>
                    <td className="p-3">中等</td>
                    <td className="p-3 text-terminal-green">S</td>
                    <td className="p-3">B</td>
                    <td className="p-3">近战冲锋/滚雪球</td>
                  </tr>
                  <tr className="data-row">
                    <td className="p-3 font-medium text-text-primary">Orcs</td>
                    <td className="p-3">低</td>
                    <td className="p-3">A</td>
                    <td className="p-3">C</td>
                    <td className="p-3">数量碾压/爆兵</td>
                  </tr>
                  <tr className="data-row">
                    <td className="p-3 font-medium text-text-primary">Elves</td>
                    <td className="p-3">高</td>
                    <td className="p-3">C</td>
                    <td className="p-3 text-terminal-green">S</td>
                    <td className="p-3">远程/机动控制</td>
                  </tr>
                  <tr className="data-row">
                    <td className="p-3 font-medium text-text-primary">Humans</td>
                    <td className="p-3">低</td>
                    <td className="p-3">A</td>
                    <td className="p-3">A</td>
                    <td className="p-3">均衡全能</td>
                  </tr>
                  <tr className="data-row">
                    <td className="p-3 font-medium text-text-primary">Dwarves</td>
                    <td className="p-3">中等</td>
                    <td className="p-3">B</td>
                    <td className="p-3 text-terminal-green">S</td>
                    <td className="p-3">防御/高护甲</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              强度评级基于社区玩家估算，综合了普通战役与无尽模式的表现。实际强度受个人操作、装备和事件选择影
              响较大。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">FAQ</h2>
            <div className="space-y-3">
              <details className="border border-border-subtle bg-abyss-light p-4">
                <summary className="font-display font-medium text-text-primary cursor-pointer">
                  哪个派系最适合新手通关？
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  根据社区估算，Humans 和 Dwarves 的首通率最高。Humans 均衡灵活，Dwarves 容错高。如果更看重前
                  期体验，也可以尝试 Orcs 的快速爆兵。
                </p>
              </details>
              <details className="border border-border-subtle bg-abyss-light p-4">
                <summary className="font-display font-medium text-text-primary cursor-pointer">
                  Elves 后期为什么强？
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  Elves 的远程和魔法单位在后期装备支撑下拥有高射程、高爆发和控制能力。只要前排足够保护，他们
                  可以在敌人接近之前造成大量伤害。但前期脆皮和费用高是主要门槛。
                </p>
              </details>
              <details className="border border-border-subtle bg-abyss-light p-4">
                <summary className="font-display font-medium text-text-primary cursor-pointer">
                  可以跨派系混编吗？
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  战役模式中以选定派系为主，但事件、雇佣兵和特殊节点可能提供跨派系单位。混编可以弥补短板，但
                  需要注意资源分配和阵营协同。
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
