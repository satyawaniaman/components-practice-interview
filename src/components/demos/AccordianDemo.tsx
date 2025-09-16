import { Accordion } from '../accordian';

export default function AccordianDemo() {
	const items = [
		{
			id: '1',
			title: 'What is React?',
			content:
				'React is a JavaScript library for building user interfaces with components and virtual DOM.',
		},
		{
			id: '2',
			title: 'What are React Hooks?',
			content:
				'Hooks are functions that let you use state and lifecycle features in functional components.',
		},
		{
			id: '3',
			title: 'What is JSX?',
			content:
				'JSX is a syntax extension that allows you to write HTML-like code in JavaScript.',
		},
	];

	return (
		<div className="p-8">
			<div className="mb-6 text-center">
				<h3 className="mb-2 text-lg font-semibold">Accordion Component</h3>
				<p className="text-gray-600">Click to expand sections</p>
			</div>
			<Accordion items={items} />
		</div>
	);
}
