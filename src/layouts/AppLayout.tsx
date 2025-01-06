import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/layouts/sidebar/AppSidebar"
import { Header } from "@/layouts/header/Header"

interface AppLayoutProps {
	children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<div className="grid grid-rows-[auto_1fr]">
					<Header />
					<main className="p-6">{children}</main>
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
