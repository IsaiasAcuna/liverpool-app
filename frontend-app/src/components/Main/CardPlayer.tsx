
interface CardPlayerProps {
	firstName: string,
	lastName: string,
	age: number,
	nationality: string,
	position: string,
	number: number,
	image: string,
}


const CardPlayer: React.FC<CardPlayerProps> = ({ firstName, lastName, age, nationality, number, position, image, }) => {
	return (
		<article className="shrink-0 w-80 h-100 border-2 border-solid border-gray-300 rounded-xl p-2 text-white font-sans flex flex-col justify-around">
			{/* Header */}
			<div className="flex justify-around items-center">
				<span className="text-1xl font-bold uppercase text-gray-500">{position}</span>
				<span className="text-5xl font-bold text-red-600">{number}</span>
			</div>

			{/* Player Image */}
			<div className="flex justify-center">
				<img
					src={image}
					alt={firstName + lastName}
					className="w-40 h-40 rounded-full border-2 border-emerald-600"
				/>
			</div>

			{/* Player Name */}
			<h5 className="text-center text-3xl font-semibold text-black">{firstName + ' ' + lastName}</h5>
			<h6 className="text-center text-1xl font-medium uppercase text-gray-500">{age + '    ·    ' + nationality}</h6>

		</article>

	)
}

export default CardPlayer
