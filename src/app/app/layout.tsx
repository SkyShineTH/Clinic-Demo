import type { Metadata } from "next";
import { AppSidebar } from "@/components/app/AppSidebar";
import { DashboardFiltersProvider } from "@/components/app/dashboard-filters-context";
import { MobileStaffNav } from "@/components/app/MobileStaffNav";

export const metadata: Metadata = {
  title: "พนักงาน",
  robots: { index: false, follow: false },
};

export default function StaffAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardFiltersProvider>
      <div className="staff-saas flex min-h-screen bg-staff-canvas text-staff-ink antialiased">
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-14 items-center border-b border-staff-line bg-staff-surface px-4 lg:hidden">
            <span className="text-sm font-semibold tracking-tight text-staff-ink">พนักงาน (สาธิต)</span>
          </header>
          <MobileStaffNav />
          <main className="flex-1 p-5 sm:p-8 lg:p-10">{children}</main>
        </div>
      </div>
    </DashboardFiltersProvider>
  );
}
