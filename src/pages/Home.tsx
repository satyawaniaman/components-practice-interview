import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/theme-toggle';
import { components } from '@/data/components';

export default function Home() {
	return (
		<div className="bg-background mx-auto min-h-screen px-4 lg:w-5xl">
			{/* Header */}
			<header className="border-b">
				<div className="container mx-auto flex items-center justify-between px-4 py-4">
					<div>
						<h1 className="text-2xl font-bold">Component Showcase</h1>
						<p className="text-muted-foreground">Interview prep component library</p>
					</div>
					<ThemeToggle />
				</div>
			</header>

			{/* Main Content */}
			<main className="container mx-auto px-4 py-8">
				<div className="mb-8">
					<h2 className="mb-4 text-xl font-semibold">Available Components</h2>
					<p className="text-muted-foreground mb-6">
						Click on any component to see it in action.
					</p>
				</div>

				{/* Component Grid */}
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{components.map((component) => (
						<Link
							key={component.name}
							to={`/component/${component.name}`}
							className="block transition-transform hover:scale-105"
						>
							<Card className="h-full transition-shadow hover:shadow-lg">
								<CardHeader>
									<div className="flex items-center justify-between">
										<CardTitle className="text-lg">{component.title}</CardTitle>
										<Badge variant="secondary" className="text-xs">
											{component.category}
										</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-sm">
										{component.description}
									</CardDescription>
								</CardContent>
							</Card>
						</Link>
					))}
				</div>
			</main>
		</div>
	);
}
