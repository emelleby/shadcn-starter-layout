"use client"

import { NavPrimary } from "@/layouts/nav/navPrimary"
import { NavMain } from "@/layouts/nav/navMain"
import { NavProjects } from "@/layouts/nav/navProjects"
import { NavUser } from "@/layouts/nav/navUser"
import { TeamSwitcher } from "./TeamSwitcher"
import {
	Sidebar as SidebarRoot,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar"

import { sidebarData } from "./sidebarData"

export function AppSidebar() {
	return (
		<SidebarRoot collapsible="icon">
			<SidebarHeader>
				<TeamSwitcher teams={sidebarData.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavPrimary items={sidebarData.navPrimary} />
				<NavMain items={sidebarData.navMain} />
				<NavProjects projects={sidebarData.projects} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={sidebarData.user} />
			</SidebarFooter>
			<SidebarRail />
		</SidebarRoot>
	)
}
