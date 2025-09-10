import { useParams, Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';
import { ComponentDemo } from '@/components/component-demo';

export default function ComponentPage() {
	const { componentName } = useParams<{ componentName: string }>();

	if (!componentName) {
		return (
			<div className="bg-background flex min-h-screen items-center justify-center">
				<Card>
					<CardHeader>
						<CardTitle>Component Not Found</CardTitle>
						<CardDescription>
							The requested component could not be found.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Link to="/">
							<Button>
								<ArrowLeft className="mr-2 h-4 w-4" />
								Back to Home
							</Button>
						</Link>
					</CardContent>
				</Card>
			</div>
		);
	}

	return (
		<div className="bg-background min-h-screen">
			{/* Header */}
			<header className="border-b">
				<div className="container mx-auto flex items-center justify-between px-4 py-4">
					<div className="flex items-center gap-4">
						<Link to="/">
							<Button variant="outline" size="sm">
								<ArrowLeft className="mr-2 h-4 w-4" />
								Back
							</Button>
						</Link>
						<div>
							<h1 className="text-2xl font-bold capitalize">
								{componentName.replace('-', ' ')}
							</h1>
							<p className="text-muted-foreground">Component demonstration</p>
						</div>
					</div>
					<ThemeToggle />
				</div>
			</header>

			{/* Main Content */}
			<main className="container mx-auto px-4 py-8">
				<div className="flex min-h-[60vh] items-center justify-center">
					<div className="w-full max-w-4xl">
						<ComponentDemo componentName={componentName} />
					</div>
				</div>
			</main>
		</div>
	);
}
