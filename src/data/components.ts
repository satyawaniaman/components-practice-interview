export interface ComponentInfo {
	name: string;
	title: string;
	description: string;
	category: string;
}

export const components: ComponentInfo[] = [
	{
		name: 'button',
		title: 'Button',
		description: 'Displays a button or a component that looks like a button.',
		category: 'Form',
	},
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
];

export const categories = ['All', 'Form', 'Layout', 'Display'];
