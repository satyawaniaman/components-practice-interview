export interface ComponentInfo {
	name: string;
	title: string;
	description: string;
	category: string;
}

export const components: ComponentInfo[] = [
	{
		name: 'card',
		title: 'Card',
		description: 'Displays a card with header, content, and footer.',
		category: 'Layout',
	},
	{
		name: 'star rating',
		title: 'Star Rating',
		description: 'Displays a star rating component.',
		category: 'Display',
	},
	// {
	// 	name: 'notification',
	// 	title: 'Notification',
	// 	description: 'Displays a notification component.',
	// 	category: 'Display',
	// },
	{
		name: 'accordian',
		title: 'Accordian',
		description: 'Displays an accordian component.',
		category: 'Display',
	},
];

export const categories = ['All', 'Form', 'Layout', 'Display'];
