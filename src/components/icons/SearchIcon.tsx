"use client";

import { cn } from "@/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface SearchHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface SearchProps extends HTMLMotionProps<"div"> {
	size?: number;
}

const SearchIcon = forwardRef<SearchHandle, SearchProps>(
	({ className, size = 28, ...props }, ref) => {
		const controls = useAnimation();
		const isControlled = useRef(false);

		useImperativeHandle(ref, () => {
			isControlled.current = true;
			return {
				startAnimation: () => controls.start("animate"),
				stopAnimation: () => controls.start("normal"),
			};
		});

		const handleEnter = useCallback(() => {
			if (!isControlled.current) controls.start("animate");
		}, [controls]);

		const handleLeave = useCallback(() => {
			if (!isControlled.current) controls.start("normal");
		}, [controls]);

		const circleVariants: Variants = {
			normal: { strokeDashoffset: 0, opacity: 1, scale: 1 },
			animate: {
				strokeDashoffset: [50, 0],
				opacity: [0.3, 1],
				scale: [1, 1.1, 1],
				transition: { duration: 0.8, ease: "easeInOut" as const },
			},
		};

		const handleVariants: Variants = {
			normal: { strokeDashoffset: 0, opacity: 1 },
			animate: {
				strokeDashoffset: [20, 0],
				opacity: [0, 1],
				transition: { duration: 0.6, delay: 0.3, ease: "easeInOut" as const },
			},
		};

		const groupVariants: Variants = {
			normal: { rotate: 0, scale: 1 },
			animate: {
				rotate: [0, 5, -5, 0],
				scale: [1, 1.05, 1],
				transition: { duration: 1, ease: "easeInOut" as const },
			},
		};

		return (
			<motion.div
				className={cn("inline-flex items-center justify-center", className)}
				onMouseEnter={handleEnter}
				onMouseLeave={handleLeave}
				{...props}
			>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-search-icon lucide-search"
				>
					<motion.g
						variants={groupVariants}
						initial="normal"
						animate={controls}
					>
						<motion.circle
							cx="11"
							cy="11"
							r="8"
							strokeDasharray="50"
							strokeDashoffset="50"
							variants={circleVariants}
							initial="normal"
							animate={controls}
						/>
						<motion.path
							d="m21 21-4.34-4.34"
							strokeDasharray="20"
							strokeDashoffset="20"
							variants={handleVariants}
							initial="normal"
							animate={controls}
						/>
					</motion.g>
				</motion.svg>
			</motion.div>
		);
	},
);

SearchIcon.displayName = "SearchIcon";
export { SearchIcon };
