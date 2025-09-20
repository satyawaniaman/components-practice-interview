import { frame, motion, useMotionValue } from 'motion/react';
import { useCallback, useRef, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const staggerContainer = {
	start: {},
	end: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const fadeInUp = {
	start: {
		y: 30,
		opacity: 0,
	},
	end: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.7,
		},
	},
};

type FeatureCardProps = {
	classes?: string;
	icon: React.ReactNode;
	iconBoxColor: string;
	title: string;
	desc: string;
	animation?: boolean;
	shimmerColor?: string;
};

function FeatureCard({
	classes,
	icon,
	iconBoxColor,
	title,
	desc,
	animation = true,
	shimmerColor = 'rgba(59, 130, 246, 0.5)',
}: FeatureCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);
	const [showGlow, setShowGlow] = useState(false);
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const handleMouseMove = useCallback(
		(event: React.MouseEvent<HTMLDivElement>) => {
			const rect = cardRef.current?.getBoundingClientRect();
			frame.read(() => {
				// Adjusted to center the glow on the cursor
				x.set(event.clientX - Number(rect?.left));
				y.set(event.clientY - Number(rect?.top));
			});
		},
		[x, y]
	);

	return (
		<motion.div
			variants={animation ? staggerContainer : undefined}
			initial={animation ? 'start' : undefined}
			whileInView={animation ? 'end' : undefined}
			viewport={animation ? { once: true } : undefined}
			ref={cardRef}
			className={`relative overflow-hidden rounded-[14px] p-[1px] ring ring-zinc-800/50 ring-inset ${classes}`}
			onMouseOver={() => setShowGlow(true)}
			onMouseOut={() => setShowGlow(false)}
			onMouseMove={handleMouseMove}
		>
			{/* Border Shimmer Effect Container */}
			<motion.div
				className="pointer-events-none absolute inset-0"
				initial={{ opacity: 0 }}
				animate={{ opacity: showGlow ? 1 : 0 }}
				transition={{ duration: 0.2 }}
			>
				{/* Primary intense glow that follows cursor */}
				<motion.div
					className="absolute h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2"
					style={{
						x,
						y,
						background: `radial-gradient(circle, ${shimmerColor} 0%, ${shimmerColor.replace(/[\d.]+\)$/, '0.8)')} 20%, ${shimmerColor.replace(/[\d.]+\)$/, '0.3)')} 40%, transparent 70%)`,
						filter: 'blur(20px)',
					}}
				/>

				{/* Secondary larger glow for ambient effect */}
				<motion.div
					className="absolute h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2"
					style={{
						x,
						y,
						background: `radial-gradient(circle, ${shimmerColor.replace(/[\d.]+\)$/, '0.4)')} 0%, ${shimmerColor.replace(/[\d.]+\)$/, '0.2)')} 30%, transparent 60%)`,
						filter: 'blur(40px)',
					}}
				/>

				{/* Tertiary subtle outer glow */}
				<motion.div
					className="absolute h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2"
					style={{
						x,
						y,
						background: `radial-gradient(circle, ${shimmerColor.replace(/[\d.]+\)$/, '0.2)')} 0%, ${shimmerColor.replace(/[\d.]+\)$/, '0.1)')} 25%, transparent 50%)`,
						filter: 'blur(60px)',
					}}
				/>

				{/* Edge highlight effect - creates a subtle border glow */}
				<motion.div
					className="absolute inset-0 rounded-[14px]"
					style={
						{
							background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), ${shimmerColor.replace(/[\d.]+\)$/, '0.15)')}, transparent 40%)`,
							'--mouse-x': `${x.get()}px`,
							'--mouse-y': `${y.get()}px`,
						} as React.CSSProperties
					}
				/>
			</motion.div>

			<div className="bg-card relative z-10 overflow-hidden rounded-xl backdrop-blur-md">
				<div className="p-8">
					<motion.div
						variants={fadeInUp}
						className={`${iconBoxColor} grid h-16 w-16 flex-shrink-0 place-items-center rounded-full`}
					>
						{icon}
					</motion.div>
					<motion.h3
						variants={fadeInUp}
						className="text-foreground mt-4 mb-3 text-xl font-medium"
					>
						{title}
					</motion.h3>
					<motion.p variants={fadeInUp} className="text-muted-foreground line-clamp-2">
						{desc}
					</motion.p>
					<motion.div variants={fadeInUp} className="">
						<Button variant="link" className="mt-3 h-auto p-0">
							Learn More <ArrowRight />
						</Button>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}

export default FeatureCard;
