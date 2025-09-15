import { useState } from 'react';
import Star from '../ui/star-component';

function StarRatingDemo() {
	const [rating, setRating] = useState(0);

	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<Star numberOfStars={5} onChange={setRating} />
			<div className="text-center">
				<p className="text-lg font-semibold">Selected Rating: {rating}</p>
			</div>
		</div>
	);
}

export default StarRatingDemo;
