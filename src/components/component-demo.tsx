import { CardDemo } from '@/components/demos/CardDemo';
import StarRatingDemo from './demos/StarRatingDemo';
// import NotificationDemo from './demos/NotificationDemo';
import AccordianDemo from './demos/AccordianDemo';
interface ComponentDemoProps {
	componentName: string;
}

export function ComponentDemo({ componentName }: ComponentDemoProps) {
	const renderDemo = () => {
		switch (componentName.toLowerCase()) {
			case 'card':
				return <CardDemo />;
			case 'star rating':
				return <StarRatingDemo />;
			// case 'notification':
			// 	return <NotificationDemo />;
			case 'accordian':
				return <AccordianDemo />;
			default:
				return (
					<div className="p-8 text-center">
						<h3 className="mb-2 text-lg font-semibold">Component Not Found</h3>
						<p className="text-muted-foreground">
							The demo for "{componentName}" component is not yet implemented.
						</p>
					</div>
				);
		}
	};

	return <div className="mx-auto w-full max-w-4xl p-6">{renderDemo()}</div>;
}
