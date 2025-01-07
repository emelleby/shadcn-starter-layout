import { Fragment } from "react"
import { useLocation } from "react-router-dom"
import { sidebarData } from "../sidebar/sidebarData"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function PageBreadcrumb() {
	const location = useLocation()
	const pathSegments = location.pathname.split("/").filter(Boolean)

	const findTitle = (path: string) => {
		for (const item of sidebarData.navMain) {
			if (item.url === `/${path}`) return item.title
			const subItem = item.items?.find((sub) => sub.url === `/${path}`)
			if (subItem) return subItem.title
		}
		return path
	}

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{pathSegments.map((_, index) => {
					const isLast = index === pathSegments.length - 1
					const path = pathSegments.slice(0, index + 1).join("/")
					const title = findTitle(path)

					return (
						<Fragment key={path}>
							<BreadcrumbItem>
								{isLast ? (
									<BreadcrumbPage>{title}</BreadcrumbPage>
								) : (
									<BreadcrumbLink href={`/${path}`}>{title}</BreadcrumbLink>
								)}
							</BreadcrumbItem>
							{!isLast && <BreadcrumbSeparator />}
						</Fragment>
					)
				})}
			</BreadcrumbList>
		</Breadcrumb>
	)
}
