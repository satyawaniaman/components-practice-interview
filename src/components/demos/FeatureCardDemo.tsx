import FeatureCard from '../FeatureCard';
import { Cloud, Code, Database, Shield, Users } from 'lucide-react';

const features: {
	icon: React.ReactNode;
	iconBoxColor: string;
	title: string;
	desc: string;
	shimmerColor: string;
}[] = [
	{
		icon: <Code size={32} />,
		iconBoxColor: 'bg-emerald-600',
		title: 'Smart Development',
		desc: 'Leverage intelligent coding tools and frameworks to build robust applications with enhanced productivity and fewer bugs',
		shimmerColor: 'rgba(16, 185, 129, 0.5)',
	},
	{
		icon: <Cloud size={32} />,
		iconBoxColor: 'bg-indigo-500',
		title: 'Cloud Solutions',
		desc: 'Deploy and scale your applications seamlessly with our cloud infrastructure, ensuring high availability and performance',
		shimmerColor: 'rgba(99, 102, 241, 0.5)',
	},
	{
		icon: <Shield size={32} />,
		iconBoxColor: 'bg-orange-500',
		title: 'Security Features',
		desc: 'Protect your data and applications with enterprise-grade security measures and real-time threat detection',
		shimmerColor: 'rgba(249, 115, 22, 0.5)',
	},
	{
		icon: <Database size={32} />,
		iconBoxColor: 'bg-teal-500',
		title: 'Data Management',
		desc: 'Organize and optimize your data infrastructure with powerful management tools and automated backups',
		shimmerColor: 'rgba(20, 184, 166, 0.5)',
	},
	{
		icon: <Users size={32} />,
		iconBoxColor: 'bg-pink-500',
		title: 'Team Collaboration',
		desc: 'Enable seamless team coordination with integrated collaboration tools and real-time communication features',
		shimmerColor: 'rgba(236, 72, 153, 0.5)',
	},
];

function FeatureCardDemo() {
	return (
		<div className="mx-auto px-4 2xl:max-w-screen-xl">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
				{features.map(({ icon, iconBoxColor, title, desc, shimmerColor }, index) => (
					<FeatureCard
						key={index}
						icon={icon}
						iconBoxColor={iconBoxColor}
						title={title}
						desc={desc}
						shimmerColor={shimmerColor}
						classes={
							index < 2
								? 'md:col-span-2 lg:col-span-1 xl:col-span-3'
								: 'xl:col-span-2'
						}
					/>

				))}
			</div>
		</div>
	);
}

export default FeatureCardDemo;
