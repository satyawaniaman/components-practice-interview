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
];

export const categories = ['All', 'Form', 'Layout', 'Display'];
