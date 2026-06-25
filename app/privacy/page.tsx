"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy — Tabletop Tavern Guide";
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
          <span className="ml-4 text-sm text-text-muted font-mono">PRIVACY_POLICY</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 bg-tactical-grid">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
            Privacy Policy — Tabletop Tavern Guide
          </h1>

          <div className="space-y-5 text-text-secondary leading-relaxed max-w-3xl">
            <p>
              Tabletop Tavern Guide 是一个由玩家社区维护的独立粉丝站点，与 Tabletop Tavern
              的开发商或发行商没有官方关联。我们创建本站的目的是为玩家提供攻略、数据和战术参考。
            </p>

            <p>
              我们使用 Google Analytics 来了解网站流量和页面访问情况，从而改进内容质量。Google Analytics 可能
              会通过 Cookie 或类似技术收集匿名信息，例如访问页面、停留时间和大致地理位置。这些信息无法直接识
              别个人身份。
            </p>

            <p>
              除上述分析工具外，我们不会主动收集、存储或分享任何可识别个人身份的信息，例如姓名、邮箱、地址
              或支付信息。本站不需要注册或登录即可阅读内容。
            </p>

            <p>
              我们可能会使用 Google AdSense 或 Amazon 联盟链接展示广告或推荐商品。这些第三方服务可能会收集匿名
              数据用于广告投放或佣金追踪。具体数据处理规则请参见对应服务的隐私政策。
            </p>

            <p>
              访问和使用本站即表示你同意本隐私政策的条款。如我们未来更新政策，会在此页面同步修订。
            </p>
          </div>

          <div className="mt-10 space-y-3">
            <details className="border border-border-subtle bg-abyss-light p-4">
              <summary className="font-display font-medium text-text-primary cursor-pointer">
                本站是否官方运营？
              </summary>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                不是。Tabletop Tavern Guide 是独立粉丝站，所有攻略内容由社区玩家整理，与游戏官方无关。
              </p>
            </details>
            <details className="border border-border-subtle bg-abyss-light p-4">
              <summary className="font-display font-medium text-text-primary cursor-pointer">
                Google Analytics 会收集哪些信息？
              </summary>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                Google Analytics 主要收集匿名访问数据，例如页面浏览量、访问时长和来源渠道，不会收集姓名、邮箱
                等个人隐私信息。
              </p>
            </details>
            <details className="border border-border-subtle bg-abyss-light p-4">
              <summary className="font-display font-medium text-text-primary cursor-pointer">
                如何联系网站管理员？
              </summary>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                目前我们没有提供直接联系表单。如有问题，可通过网站关联的社区渠道反馈。
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
            <Link href="/privacy" className="text-tactical-blue">
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
