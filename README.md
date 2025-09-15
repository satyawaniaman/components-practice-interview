# Components Showcase Practice

A React component showcase built with React 19, Vite, Tailwind CSS v4, ShadCN UI, and React Router v7.

## Getting Started

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Start development server:**

    ```bash
    npm run dev
    ```

3. **Build for production:**
    ```bash
    npm run build
    ```

## Adding New Components

Follow these steps to add a new component to the showcase:

### 1. Create Your Component

First, create your actual component in `src/components/ui/` (or appropriate location):

```tsx
// src/components/ui/your-component.tsx
import { cn } from '@/lib/utils';

interface YourComponentProps {
	// Define your component props here
	className?: string;
	// ... other props
}

export function YourComponent({ className, ...props }: YourComponentProps) {
	return (
		<div className={cn('your-component-styles', className)} {...props}>
			{/* Your component implementation */}
		</div>
	);
}
```

### 2. Create Component Demo

Create a demo file in `src/components/demos/` to showcase your component:

```tsx
// src/components/demos/YourComponentDemo.tsx
import { YourComponent } from '@/components/ui/your-component';

export default function YourComponentDemo() {
	return (
		<div className="flex flex-col items-center justify-center gap-8 p-8">
			<div className="text-center">
				<h3 className="text-lg font-semibold mb-2">Your Component</h3>
				<p className="text-muted-foreground mb-4">
					Demonstration of your component with different variants
				</p>
			</div>
			
			{/* Show different variants/examples */}
			<div className="flex flex-wrap gap-4 justify-center">
				<YourComponent>Default</YourComponent>
				<YourComponent variant="secondary">Secondary</YourComponent>
				{/* Add more examples as needed */}
			</div>
		</div>
	);
}
```

### 3. Register Component in Demo Router

Add your component to the demo router in `src/components/component-demo.tsx`:

```tsx
// Add import at the top
import YourComponentDemo from './demos/YourComponentDemo';

// Add case in the switch statement
case 'your-component':
	return <YourComponentDemo />;
```

### 4. Register Component in Data

Add your component to `src/data/components.ts`:

```tsx
export const components: ComponentInfo[] = [
	// ... existing components
	{
		name: 'your-component', // URL-friendly name (kebab-case)
		title: 'Your Component', // Display name
		description: 'Brief description of what your component does.',
		category: 'Form', // Choose from existing categories or create new one
	},
];
```

### 5. Add Category (if needed)

If using a new category, add it to the categories array:

```tsx
export const categories = ['All', 'Form', 'Layout', 'Display', 'YourCategory'];
```

### 6. Test Your Component

1. Start the development server: `npm run dev`
2. Navigate to your component: `http://localhost:5173/component/your-component`
3. Verify it appears on the home page and works correctly

### Tips for Better Component Demos

- **Show multiple variants**: Display different states, sizes, or styles
- **Include interactive examples**: Let users interact with your component
- **Add descriptions**: Explain what each variant demonstrates
- **Use proper spacing**: Make your demo visually appealing
- **Follow existing patterns**: Look at existing demos for consistency

### Available UI Components

Currently available base components:
- `Button` - Interactive button component
- `Card` - Container component with header, content, and footer
- `Badge` - Small status or label component
- `Star` - Star rating component

That's it! Your component will automatically appear in the showcase with routing handled by the component name.
