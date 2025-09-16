import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
	id: string;
	title: string;
	content: string;
}

interface AccordionProps {
	items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
	const [openItem, setOpenItem] = useState<string | null>(null);

	const toggleItem = (itemId: string) => {
		setOpenItem(openItem === itemId ? null : itemId);
	};

	return (
		<div className="mx-auto w-full max-w-2xl space-y-2">
			{items.map((item) => (
				<div key={item.id} className="overflow-hidden rounded-lg border">
					<button
						className="flex w-full items-center justify-between bg-gray-50 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-200"
						onClick={() => toggleItem(item.id)}
					>
						<span className="font-medium text-gray-900">{item.title}</span>
						<ChevronDown
							className={cn(
								'h-5 w-5 text-gray-600 transition-transform',
								openItem === item.id && 'rotate-180'
							)}
						/>
					</button>
					{openItem === item.id && (
						<div className="border-t border-gray-200 bg-white px-4 py-3">
							<div className="text-gray-700">{item.content}</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default Accordion;
