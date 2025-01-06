import { SidebarProvider } from "@/components/sidebar/sidebar"
import { Sidebar } from "@/components/sidebar/Sidebar"
import { Header } from "@/components/header/Header"

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="grid min-h-screen grid-cols-[auto_1fr]">
        <Sidebar />
        <div className="grid grid-rows-[auto_1fr]">
          <Header />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}