"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Use — Tabletop Tavern Guide";
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
          <span className="ml-4 text-sm text-text-muted font-mono">TERMS_OF_USE</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 bg-tactical-grid">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
            Terms of Use — Tabletop Tavern Guide
          </h1>

          <div className="space-y-5 text-text-secondary leading-relaxed max-w-3xl">
            <p>
              访问 Tabletop Tavern Guide 即表示你同意以下使用条款。本网站为独立粉丝站点，所有内容仅供玩家参
              考，不构成任何法律、医疗、投资或官方游戏指导建议。攻略中的数值、build 和评级均为社区玩家估算，
              可能随游戏版本更新而变化。
            </p>

            <p>
              Tabletop Tavern 及其相关商标、角色、美术、音乐和玩法版权归原开发商或发行商所有。本站不主张对上
              述内容的任何所有权。本站原创文章遵循知识共享署名-非商业性使用-相同方式共享（CC BY-NC-SA 4.0）原
              则，转载时请注明出处。
            </p>

            <p>
              本站可能包含 Amazon affiliate 链接或其他联盟营销链接。如果你通过这些链接购买商品，我们可能会获得
              少量佣金，但不会向你收取额外费用。所有推荐均基于编辑判断，联盟关系不影响内容独立性。
            </p>

            <p>
              我们尽力保证信息准确，但不对任何因使用本站内容而产生的直接或间接损失负责。请自行判断并承担使
              用风险。如果你不同意以上条款，请停止使用本站服务。
            </p>
          </div>

          <div className="mt-10 space-y-3">
            <details className="border border-border-subtle bg-abyss-light p-4">
              <summary className="font-display font-medium text-text-primary cursor-pointer">
                攻略内容是否保证准确？
              </summary>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                不保证。所有数据均为社区估算，可能随游戏版本、平衡补丁和实际机制变化而调整。建议结合自己的游
                戏体验参考。
              </p>
            </details>
            <details className="border border-border-subtle bg-abyss-light p-4">
              <summary className="font-display font-medium text-text-primary cursor-pointer">
                可以转载本站内容吗？
              </summary>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                本站原创攻略采用 CC BY-NC-SA 4.0 协议，允许非商业性转载，但必须注明出处并采用相同授权方式。
              </p>
            </details>
            <details className="border border-border-subtle bg-abyss-light p-4">
              <summary className="font-display font-medium text-text-primary cursor-pointer">
                什么是 Amazon affiliate disclosure？
              </summary>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                部分页面可能包含 Amazon 联盟链接。当用户通过链接购买商品时，本站可能获得佣金。这不会影响商品价
                格，也不会影响我们的推荐独立性。
              </p>
            </details>
          </div>
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
            <Link href="/terms" className="text-tactical-blue">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
