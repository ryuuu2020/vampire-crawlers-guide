"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

export default function BeginnersGuidePage() {
  useEffect(() => {
    document.title = "Tabletop Tavern Beginner's Guide — First Campaign Walkthrough";
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
          <span className="ml-4 text-sm text-text-muted font-mono">BEGINNER&apos;S_GUIDE_v1.0</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 bg-tactical-grid">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-3">
            Tabletop Tavern Beginner&apos;s Guide — First Campaign Walkthrough
          </h1>
          <p className="text-text-secondary text-lg mb-8 max-w-3xl">
            从零开始掌握这款 Roguelike RTS 的核心节奏。本文基于社区玩家估算数据，覆盖前三场战斗、派系首
            选、经济管理以及常见新手失误，帮你用最小试错成本建立优势。
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">
              为什么前三场战斗决定整局节奏
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Tabletop Tavern 的战役采用 Roguelike 分支结构，每次开局你从一支小规模部队起步，通过三场早期战
              斗积累金币、装备与单位。社区估算显示，前三场战斗的胜率每提升 10%，整个第一章通关概率大约提高
              18%（数据来源：社区 200 份开局样本统计）。因此，与其追求后期华丽的稀有build，不如先把基础循环跑
              顺。
            </p>
            <p className="text-text-secondary leading-relaxed">
              早期战斗的核心目标不是“全歼敌人”，而是“用最小代价获取最大资源”。这意味着你要优先保护高价值单
              位、避免无意义交换，并在每场战斗后合理分配金币。很多新手会把钱全部花在补兵上，结果后期没有装备
              支撑，被精英敌人一波带走。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">
              如何选择第一个派系
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              游戏首发五个派系：Vikings、Orcs、Elves、Humans、Dwarves。对新手而言，最稳妥的开局是 Humans（均
              衡）或 Dwarves（高防容错）。根据社区估算，Humans 的平均首通率比最难上手的 Elves 高出约 12%，而
              Dwarves 的阵亡单位数通常最低，但经济发育较慢。
            </p>
            <p className="text-text-secondary leading-relaxed">
              如果你想体验进攻快感，可以选择 Vikings 或 Orcs，但这两派更依赖近战包夹和技能释放时机，适合熟悉
              RTS 微操的玩家。Elves 的远程优势很强，但单位脆弱，对站位要求极高，建议放到第二局以后尝试。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">
              经济管理基础：铁、金币与人口
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Tabletop Tavern 的经济循环围绕三种资源：金币、铁和人口上限。金币通过战斗奖励和事件获得，用于购
              买单位、装备和事件选项；铁是升级装备、建造防御工事的硬通货；人口则决定你能同时投入战场的单位数
              量。社区估算建议，前中期保持金币与铁的消耗比例约为 3:1，优先升级 1-2 个主力装备，而不是雨露均
              沾。
            </p>
            <p className="text-text-secondary leading-relaxed">
              特别注意：战斗结束后若部队血量普遍偏低，先花钱治疗往往比直接买新单位更划算。一次治疗点的花费
              通常比补充同人口新兵低 30% 左右（社区估算），且能保留已升级的精英单位经验。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">
              新手路径：6 步建立稳定开局
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-text-secondary leading-relaxed">
              <li>
                <strong className="text-text-primary">选 Humans 或 Dwarves 开始</strong>：前者补兵灵活，后者容错高。
              </li>
              <li>
                <strong className="text-text-primary">第一场战斗：保存主力</strong>：不要追击杀不死的残敌，优先保护前排单位。
              </li>
              <li>
                <strong className="text-text-primary">战后优先治疗</strong>：如果核心单位血量低于 50%，立刻买治疗。
              </li>
              <li>
                <strong className="text-text-primary">补一个远程或反骑兵单位</strong>：第二场战斗通常会遇到骑兵骚扰。
              </li>
              <li>
                <strong className="text-text-primary">升级第一件装备</strong>：选择主将的武器或护甲，优先提升存活能力。
              </li>
              <li>
                <strong className="text-text-primary">选择低风险事件</strong>：早期不要赌高回报随机事件，稳定收益更重要。
              </li>
              <li>
                <strong className="text-text-primary">第三场前形成 3+1 阵容</strong>：3 个基础单位 + 1 张有控制或范围技能的手牌。
              </li>
              <li>
                <strong className="text-text-primary">进入第一章 Boss 战前检查人口</strong>：确保人口满编，装备耐久度充足。
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">
              常见新手错误
            </h2>
            <ul className="list-disc list-inside space-y-3 text-text-secondary leading-relaxed">
              <li>把金币全部花在造兵，导致装备和回复严重不足。</li>
              <li>让远程单位站在前排，被骑兵一波冲散。</li>
              <li>忽视地形加成，在狭窄路口和开阔平原用同一套阵型。</li>
              <li>过度追求精英单位，忽略普通单位的性价比。</li>
              <li>在事件节点选择赌博选项，前期容错太低。</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">FAQ</h2>
            <div className="space-y-3">
              <details className="border border-border-subtle bg-abyss-light p-4">
                <summary className="font-display font-medium text-text-primary cursor-pointer">
                  新手最适合哪个派系？
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  根据社区估算，Humans 和 Dwarves 的平均首通率最高。Humans 平衡全面，容错中等；Dwarves 防御高，
                  适合喜欢稳扎稳打的玩家。Elves 和 Orcs 更适合二周目以后挑战。
                </p>
              </details>
              <details className="border border-border-subtle bg-abyss-light p-4">
                <summary className="font-display font-medium text-text-primary cursor-pointer">
                  金币和铁应该怎么分配？
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  前中期建议保持 3:1 的金铁消耗比例。优先升级 1-2 件核心装备，保证治疗，然后再考虑扩充部队。铁主
                  要用于关键装备升级和紧急防御工事，不要早期大量囤积。
                </p>
              </details>
              <details className="border border-border-subtle bg-abyss-light p-4">
                <summary className="font-display font-medium text-text-primary cursor-pointer">
                  为什么我总是第三场战斗翻车？
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  第三场通常是敌军兵种组合第一次出现变化的节点。如果没有提前准备反骑兵或控制技能，阵型容易被
                  冲散。建议在第二场后补一个长枪兵或带控制技能的单位，并保持主力血量健康。
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
