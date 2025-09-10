import { Button } from '@/components/ui/button';

export function ButtonDemo() {
	return (
		<div className="space-y-4">
			<div className="flex flex-wrap gap-4">
				<Button>Default</Button>
				<Button variant="destructive">Destructive</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="ghost">Ghost</Button>
				<Button variant="link">Link</Button>
			</div>
		</div>
	);
}
