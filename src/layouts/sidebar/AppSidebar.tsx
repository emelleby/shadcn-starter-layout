"use client"
import * as React from "react"
import {
	AudioWaveform,
	BookOpen,
	Bot,
	Command,
	Frame,
	GalleryVerticalEnd,
	Map,
	PieChart,
	Settings2,
	SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/layouts/nav/navMain.tsx"
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
