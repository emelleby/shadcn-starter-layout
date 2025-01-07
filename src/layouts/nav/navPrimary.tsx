"use client"
import { type LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

export function NavPrimary({
	items,
}: {
	items: {
		title: string
		url: string
		icon: LucideIcon
		isActive?: boolean
	}[]
}) {
	return (
		<SidebarMenu className="px-2">
			{items.map((item) => (
				<SidebarMenuItem key={item.title}>
					<SidebarMenuButton asChild isActive={item.isActive}>
						<Link to={item.url}>
							<item.icon />
							<span>{item.title}</span>
						</Link>
					</SidebarMenuButton>
				</SidebarMenuItem>
			))}
		</SidebarMenu>
	)
}
