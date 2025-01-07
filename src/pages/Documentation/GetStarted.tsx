import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function GetStartedPage() {
	return (
		<div className="max-w-4xl mx-auto">
			<Card>
				<CardHeader>
					<CardTitle>Getting Started with Shadcn Starter</CardTitle>
					<CardDescription>Start to build modern applications with our starter template</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<h3 className="text-lg font-medium">Quick Start Guide</h3>
						<p>This starter template includes:</p>
						<ul className="list-disc pl-6">
							<li>Pre-configured Shadcn UI components</li>
							<li>Responsive sidebar navigation</li>
							<li>Dark mode support</li>
							<li>TypeScript setup</li>
						</ul>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
