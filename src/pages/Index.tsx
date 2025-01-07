import { Card } from "@/components/ui/card"

export default function Index() {
	return (
		<div className="grid gap-6">
			<div className="grid gap-4 md:grid-cols-3">
				<Card className="aspect-video" />
				<Card className="aspect-video" />
				<Card className="aspect-video" />
			</div>
			<Card className="min-h-[400px]" />
		</div>
	)
}
