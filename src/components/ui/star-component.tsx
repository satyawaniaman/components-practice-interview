import { StarIcon } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';
interface StarProps {
	numberOfStars?: number;
	onChange?: (rating: number) => void;
}
function Star({ numberOfStars = 5, onChange }: StarProps) {
	const [currentRating, setCurrentRating] = useState(0);
	const [hoverRating, setHoverRating] = useState(0);
	const starsArray = useMemo(
		() => Array.from({ length: numberOfStars }, (_, idx) => idx + 1),
		[numberOfStars]
	);
	const handleStarClick = useCallback(
		(ratingValue: number) => {
			const newRating = currentRating === ratingValue ? 0 : ratingValue;
			setCurrentRating(newRating);
			onChange?.(newRating);
		},
		[currentRating, onChange]
	);
	const handleMouseLeave = useCallback(() => {
		setHoverRating(0);
	}, []);
	const handleMouseEnter = useCallback((ratingValue: number) => {
		setHoverRating(ratingValue);
	}, []);
	return (
		<div className="flex flex-col items-center gap-4">
			<div className="flex flex-row gap-2">
				{starsArray.map((ratingValue) => {
					const isHighlighted = ratingValue <= (hoverRating || currentRating);
					return (
						<p
							className={`cursor-pointer transition-colors duration-300 ${
								isHighlighted
									? 'text-yellow-500'
									: 'text-gray-400 hover:text-yellow-300'
							}`}
							key={ratingValue}
							onClick={() => handleStarClick(ratingValue)}
							onMouseEnter={() => handleMouseEnter(ratingValue)}
							onMouseLeave={() => handleMouseLeave()}
						>
							{<StarIcon />}
						</p>
					);
				})}
			</div>
		</div>
	);
}

export default Star;
