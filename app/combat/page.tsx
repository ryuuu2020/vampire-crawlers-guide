"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

export default function CombatGuidePage() {
  useEffect(() => {
    document.title = "Tabletop Tavern Combat Guide — Positioning, Counters & Formations";
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
          <span className="ml-4 text-sm text-text-muted font-mono">COMBAT_GUIDE_v1.0</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 bg-tactical-grid">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-3">
            Tabletop Tavern Combat Guide — Positioning, Counters & Formations
          </h1>
          <p className="text-text-secondary text-lg mb-8 max-w-3xl">
            战斗是 Tabletop Tavern 的核心体验。本文从阵型、兵种克制、地形和时机四个维度拆解实战技巧，所有数据
            均为社区估算，适用于普通战役和无尽模式。
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">阵型基础</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              游戏内常用阵型包括 Spear Wall（长枪墙）、Shield Line（盾墙）、Skirmish（散兵）和 Box（箱型阵）。
              Spear Wall 以长枪兵为核心，前排紧密排列，对骑兵冲锋有天然优势。社区估算显示，完整长枪墙可让骑
              兵冲锋伤害降低 40% 至 55%，但侧面和背后极为脆弱。
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Shield Line 适合 Humans 和 Dwarves，用重装步兵吸收正面伤害，后排弓箭手和法师输出。该阵型推进稳
              定，但怕包夹，一旦被侧翼突破，后排会迅速崩溃。
            </p>
            <p className="text-text-secondary leading-relaxed">
              Skirmish 强调分散站位，减少范围技能和箭雨带来的集中损失。对阵敌方远程部队时效果较好，但对骑兵
              和冲锋单位非常吃亏。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">兵种克制循环</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Tabletop Tavern 的基础兵种遵循循环克制关系：Pikemen 克制 Cavalry，Cavalry 克制 Archers，Archers 克
              制 Heavy Infantry，Heavy Infantry 又反制 Pikemen。掌握这个循环是排兵布阵的前提。以下为社区估算
              的克制系数表，数值越大代表优势越明显。
            </p>
            <div className="overflow-x-auto border border-border-subtle mb-6">
              <table className="w-full text-sm text-left">
                <thead className="bg-abyss-light text-text-primary font-mono">
                  <tr>
                    <th className="p-3 border-b border-border-subtle">攻击方 vs 防御方</th>
                    <th className="p-3 border-b border-border-subtle">Pikemen</th>
                    <th className="p-3 border-b border-border-subtle">Cavalry</th>
                    <th className="p-3 border-b border-border-subtle">Archers</th>
                    <th className="p-3 border-b border-border-subtle">Heavy Infantry</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="data-row">
                    <td className="p-3 font-medium text-text-primary">Pikemen</td>
                    <td className="p-3">1.0</td>
                    <td className="p-3 text-terminal-green">1.5</td>
                    <td className="p-3 text-terminal-red">0.7</td>
                    <td className="p-3 text-terminal-red">0.8</td>
                  </tr>
                  <tr className="data-row">
                    <td className="p-3 font-medium text-text-primary">Cavalry</td>
                    <td className="p-3 text-terminal-red">0.6</td>
                    <td className="p-3">1.0</td>
                    <td className="p-3 text-terminal-green">1.6</td>
                    <td className="p-3">1.0</td>
                  </tr>
                  <tr className="data-row">
                    <td className="p-3 font-medium text-text-primary">Archers</td>
                    <td className="p-3">1.0</td>
                    <td className="p-3 text-terminal-red">0.5</td>
                    <td className="p-3">1.0</td>
                    <td className="p-3 text-terminal-green">1.4</td>
                  </tr>
                  <tr className="data-row">
                    <td className="p-3 font-medium text-text-primary">Heavy Infantry</td>
                    <td className="p-3 text-terminal-green">1.3</td>
                    <td className="p-3">1.0</td>
                    <td className="p-3">1.0</td>
                    <td className="p-3">1.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              克制系数表示同等级单位交战时的期望输出倍率。例如，长枪兵对骑兵输出倍率为 1.5，而骑兵对长枪兵仅
              为 0.6。实际对局还会受等级、装备和技能影响，本表仅作基础参考。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">地形利用</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              地形在 Tabletop Tavern 中远不止背景装饰。高地提供远程射程加成，森林降低骑兵冲锋效率并增加远程
               miss 率，狭窄 choke point 可让少量部队拖延大量敌军。社区估算中，高地弓箭手对平地支队的有效射程
              提升约 15% 至 20%，而森林中的骑兵伤害降低约 25%。
            </p>
            <p className="text-text-secondary leading-relaxed">
               rivers 和沼泽会显著拖慢骑兵与重装步兵，但轻步兵和飞行单位受影响较小。善用这些地形分割敌军，可
              以把一场劣势战打成多打少的局部胜利。如果你需要防守，把长枪兵放在狭窄通道入口，后排弓箭手站在高
              地后方，是最稳定的布阵之一。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">时机把握：技能与侧翼</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              技能释放时机往往决定一场战斗的胜负。不要把控制技能浪费在单个残血单位上，尽量留给敌方集结冲锋或
              高威胁精英。同时，侧翼包夹是打破僵局的关键。社区玩家估算，一次成功的侧翼冲锋可让敌方整体士气下
              降 20% 至 30%，并触发溃逃判定。
            </p>
            <p className="text-text-secondary leading-relaxed">
              保持至少一支机动部队（骑兵或快速步兵）作为预备队，用于补刀、救援后排或包夹。不要把所有单位一次性
              投入前线，否则没有回旋余地。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-display font-semibold text-tactical-blue mb-4">FAQ</h2>
            <div className="space-y-3">
              <details className="border border-border-subtle bg-abyss-light p-4">
                <summary className="font-display font-medium text-text-primary cursor-pointer">
                  长枪墙被侧翼冲了怎么办？
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  立刻让长枪兵转向或后撤，用预备队骑兵或快速步兵拦截侧翼敌人。如果无法及时回防，优先保护后排
                  远程单位，避免被一锅端。建议把长枪墙放在狭窄地形或背靠地图边界的位置。
                </p>
              </details>
              <details className="border border-border-subtle bg-abyss-light p-4">
                <summary className="font-display font-medium text-text-primary cursor-pointer">
                  骑兵应该怎么用？
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  骑兵的核心价值是绕后、追杀远程和制造士气崩溃。避免让骑兵正面冲击长枪墙，也不要让骑兵被分散
                  在树林里。最佳使用方式是先等待敌方前排被吸引，再让骑兵从侧翼或背后切入。
                </p>
              </details>
              <details className="border border-border-subtle bg-abyss-light p-4">
                <summary className="font-display font-medium text-text-primary cursor-pointer">
                  弓箭手站位有什么讲究？
                </summary>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  弓箭手应处于前排后方，并能被高地或地形保护。优先攻击敌方 Heavy Infantry 和静止目标，避免被
                  骑兵直接贴脸。保持至少一个反骑兵单位守护侧翼，防止被绕后收割。
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
