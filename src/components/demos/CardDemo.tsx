import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function CardDemo() {
	return (
		<div className="flex flex-col items-center justify-center">
			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<CardTitle>Product Card</CardTitle>
						<Badge variant="secondary">New</Badge>
					</div>
					<CardDescription>
						A more complex card with badges and multiple actions.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-2">
						<p className="text-2xl font-bold">$99.99</p>
						<p className="text-muted-foreground text-sm">
							Premium quality product with excellent features.
						</p>
					</div>
				</CardContent>
				<CardFooter className="flex gap-2">
					<Button className="flex-1">Buy Now</Button>
					<Button variant="outline" className="flex-1">
						Add to Cart
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
