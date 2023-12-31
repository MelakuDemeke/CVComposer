const Card = ({ title, children }) => {
	return (
		<div className="rounded-lg w-full mb-5 flex flex-col bg-gray-500 px-2 py-4 shadow-lg shadow-black hover:shadow-xl">
			<h4>{title}</h4>
			{children}
		</div>
	)
}

export default Card;
