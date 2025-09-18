import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const logoVariants = cva('font-bold text-foreground', {
	variants: {
		variant: {
			default: 'text-xl',
			favicon: 'text-lg flex items-center gap-2',
			large: 'text-2xl',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

export interface LogoProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof logoVariants> {
	href?: string;
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
	({ className, variant, href = '/', ...props }, ref) => {
		const content = (
			<div className={cn(logoVariants({ variant }), className)} ref={ref} {...props}>
				{variant === 'favicon' && (
					<>
						<div className="bg-primary h-6 w-6 rounded" />
						<span>Logo</span>
					</>
				)}
				{variant !== 'favicon' && 'Logo'}
			</div>
		);

		if (href) {
			return (
				<a href={href} className="no-underline">
					{content}
				</a>
			);
		}

		return content;
	}
);
Logo.displayName = 'Logo';

export { Logo, logoVariants };
