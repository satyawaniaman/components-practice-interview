import React from 'react';

interface ProgressBarProps {
	value: number;
	max?: number;
	label?: string;
	showPercentage?: boolean;
	color?: 'blue' | 'green' | 'red' | 'yellow';
	size?: 'sm' | 'md' | 'lg';
	animated?: boolean;
}

export const ProgressBar = ({
	value,
	max = 100,
	label,
	showPercentage = false,
	color = 'blue',
	size = 'md',
	animated = false,
}: ProgressBarProps) => {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	const percentage = mounted ? Math.min(Math.max((value / max) * 100, 0), 100) : 0;

	const sizeClasses = {
		sm: 'h-1.5',
		md: 'h-2.5',
		lg: 'h-4',
	};

	const colorClasses = {
		blue: 'bg-blue-600',
		green: 'bg-green-600',
		red: 'bg-red-600',
		yellow: 'bg-yellow-600',
	};

	return (
		<div className="w-full">
			{(label || showPercentage) && (
				<div className="mb-2 flex items-center justify-between text-sm text-gray-700">
					{label && <span>{label}</span>}
					{showPercentage && <span>{Math.round(percentage)}%</span>}
				</div>
			)}

			<div
				className={`w-full rounded-full bg-gray-200 ${sizeClasses[size]} relative overflow-hidden`}
			>
				<div
					className={`${sizeClasses[size]} rounded-full ${colorClasses[color]} relative overflow-hidden transition-all duration-700 ease-out`}
					style={{ width: `${percentage}%` }}
					aria-valuenow={value}
					aria-valuemin={0}
					aria-valuemax={max}
					role="progressbar"
				>
					{animated && (
						<div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
					)}
				</div>
			</div>
		</div>
	);
};
