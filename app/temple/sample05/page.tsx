import type { Metadata } from "next";

import { SidebarInset, SidebarProvider, } from '@/components/ui/sidebar'
import { Sample05AppSidebar } from '@/components/Temple/sample05/appSidebar'
import { SiteHeader } from '@/components/Temple/sample05/siteHeader'
import { SectionCards } from '@/components/Temple/sample05/sectionCart'
// メタデータ設定
export const metadata: Metadata = {
  title: "NDC|サンプル05",
  description: "デザインカタログ|ダッシュボードデザイン",
};
export default function Sample05() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <Sample05AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div>Sample05</div>
              <SectionCards />
              <SectionCards />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}