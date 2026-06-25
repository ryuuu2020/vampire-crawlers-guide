"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

export default function ItemsGuidePage() {
  useEffect(() => {
    document.title = "Tabletop Tavern Items Guide — Best Gear, Economy Items & Synergies";
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
          <span className="ml-4 text-sm text-text-muted font-mono">ITEMS_GUIDE_v1.0</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 bg-tactical-grid">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-3">
            Tabletop Tavern Items Guide — Best Gear, Economy Items & Synergies
          </h1>
          <p className="text-text-secondary text-lg mb-8 max-w-3xl">
            物品系统是 Tabletop Tavern 中后期强度的放大器。本文讲解稀有装备、经济物品（如 Iron Bank、Common Builder）
            以及它们之间的协同效应，并附推荐优先级表，所有数据均为社区估算。
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">稀有装备</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              稀有装备分为武器、护甲、饰品和特殊消耗品。高品质武器可以显著提升单位输出，而护甲则直接提高前排
              存活率。社区估算显示，一件紫色品质武器大约可以提升携带单位 20% 至 30% 的有效输出，而同级护甲可
              以减少 15% 至 25% 的受到伤害。
            </p>
            <p className="text-text-secondary leading-relaxed">
              选择装备时要结合单位定位。给 Pikemen 配备加护甲或反冲锋的装备比纯攻击装更实用；给 Archers 选择
              射程和暴击加成的饰品收益最高；Cavalry 则需要移速和冲锋伤害加成。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">经济物品</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              经济物品不直接参与战斗，但能显著改善资源循环。Iron Bank 是一件典型的经济型道具，每场战斗后提供
              额外铁资源，适合长期发育。Common Builder 则能降低建造防御工事的成本，对 Dwarves 和人类防守型
              build 特别有价值。社区估算中，Iron Bank 在 10 场战斗后累计收益通常超过其购买成本 1.5 至 2 倍。
            </p>
            <p className="text-text-secondary leading-relaxed">
              经济物品适合前期购买，因为越早投入复利效应越明显。但要注意，前期战斗力不足时，把所有资源投入经
              济可能导致中期崩盘。建议在保证基础战力的前提下，每局至少购买 1 件经济物品。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">协同效应</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              物品的真正价值往往来自组合。例如，Iron Bank 与“每 100 铁提供全队护甲加成”的符文搭配，可以让你的
              经济直接转化为战斗力；Common Builder 配合 Dwarves 的 Ironbreaker 能形成极难攻破的防线。另一经典
              组合是暴击饰品 + 连击武器，可让 Cavalry 在侧翼冲锋时打出爆发。
            </p>
            <p className="text-text-secondary leading-relaxed">
              选择物品时，不要只看单件属性，要看它是否能放大你的派系优势和阵容核心。build 围绕 2 至 3 件核心
              装备展开，比零散堆叠属性更有效。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">推荐物品优先级表</h2>
            <div className="overflow-x-auto border border-border-subtle mb-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-abyss-light text-text-primary font-mono">
                  <tr>
                    <th className="p-3 border-b border-border-subtle">优先级</th>
                    <th className="p-3 border-b border-border-subtle">物品名称</th>
                    <th className="p-3 border-b border-border-subtle">类型</th>
                    <th className="p-3 border-b border-border-subtle">适用场景</th>
                    <th className="p-3 border-b border-border-subtle">社区估算</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="data-row">
                    <td className="p-3 font-medium text-terminal-green">S</td>
                    <td className="p-3 font-medium text-text-primary">Iron Bank</td>
                    <td className="p-3">经济</td>
                    <td className="p-3">长期发育、铁需求高</td>
                    <td className="p-3">10 战后收益约 1.5-2 倍成本</td>
                  </tr>
                  <tr className="data-row">
                    <td className="p-3 font-medium text-terminal-green">S</td>
                    <td className="p-3 font-medium text-text-primary">Vanguard Plate</td>
                    <td className="p-3">护甲</td>
                    <td className="p-3">前排主将、Boss 战</td>
                    <td className="p-3">减伤约 15-25%</td>
                  </tr>
                  <tr className="data-row">
                    <td className="p-3 font-medium text-tactical-blue">A</td>
                    <td className="p-3 font-medium text-text-primary">Common Builder</td>
                    <td className="p-3">经济</td>
                    <td className="p-3">防守 build、Dwarves</td>
                    <td className="p-3">工事成本降低约 30%</td>
                  </tr>
                  <tr className="data-row">
                    <td className="p-3 font-medium text-tactical-blue">A</td>
                    <td className="p-3 font-medium text-text-primary">Longshot Quiver</td>
                    <td className="p-3">饰品</td>
                    <td className="p-3">Archers、远程核心</td>
                    <td className="p-3">射程 +15-20%</td>
                  </tr>
                  <tr className="data-row">
                    <td className="p-3 font-medium text-tactical-blue">A</td>
                    <td className="p-3 font-medium text-text-primary">Berserker Axe</td>
                    <td className="p-3">武器</td>
                    <td className="p-3">Vikings、近战爆发</td>
                    <td className="p-3">狂暴时输出提升约 25%</td>
                  </tr>
                  <tr className="data-row">
                    <td className="p-3 font-medium text-warning-orange">B</td>
                    <td className="p-3 font-medium text-text-primary">Warhorse Barding</td>
                    <td className="p-3">护甲</td>
                    <td className="p-3">Cavalry、开阔地图</td>
                    <td className="p-3">骑兵冲锋减伤约 10-15%</td>
                  </tr>
                  <tr className="data-row">
                    <td className="p-3 font-medium text-warning-orange">B</td>
                    <td className="p-3 font-medium text-text-primary">Healer&apos;s Satchel</td>
                    <td className="p-3">饰品</td>
                    <td className="p-3">持久战、辅助单位</td>
                    <td className="p-3">治疗效果提升约 20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              优先级基于社区估算，综合考虑了泛用性、收益曲线和派系适配。实际选择应根据当前 build、资源和敌军
              类型动态调整。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">FAQ</h2>
            <div className="space-y-3">
              <details className="border border-border-subtle bg-abyss-light p-4">
                <summary className="font-display font-medium text-text-primary cursor-pointer">
                  经济物品前期买还是后期买？
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  越早买越好。经济物品的收益通常具有复利效应，前期投入可以在整个战役中累积放大。但前提是保证
                  基础战斗力，否则中期可能崩盘。
                </p>
              </details>
              <details className="border border-border-subtle bg-abyss-light p-4">
                <summary className="font-display font-medium text-text-primary cursor-pointer">
                  装备应该优先给前排还是输出？
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  前中期优先给前排提升生存，因为前排站不住后排就没有输出空间。当阵容稳定后，再考虑给核心输出
                  单位配备攻击装备。
                </p>
              </details>
              <details className="border border-border-subtle bg-abyss-light p-4">
                <summary className="font-display font-medium text-text-primary cursor-pointer">
                  有推荐的通用毕业套装吗？
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  一套通用毕业组合是：前排 Vanguard Plate + 反冲锋饰品，后排 Longshot Quiver + 暴击武器，辅助
                  Healer&apos;s Satchel。如果走 Dwarves 防守，可以加入 Common Builder 和铁资源联动装备。
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
