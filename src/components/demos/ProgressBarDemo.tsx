import { ProgressBar } from '../progress-bar';
export const ProgressBarDemo = () => {
	return (
		<div className="space-y-4">
			<ProgressBar value={60} color="blue" label="Blue Progress" showPercentage />
			<ProgressBar value={75} color="green" label="Success" showPercentage />
			<ProgressBar value={50} size="lg" label="Large" showPercentage />
			<ProgressBar value={150} max={200} label="Score: 150/200" showPercentage />
			<ProgressBar
				value={25}
				label="Downloading..."
				showPercentage
				animated
				color="blue"
				size="lg"
			/>
		</div>
	);
};
