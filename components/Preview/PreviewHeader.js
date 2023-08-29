import { useSelector } from "react-redux";


const PreviewHeader = () => {
	const {nameSurname, title, description} = useSelector((state) => state.form.personal);
	return (
		<div className="flex flex-col items-center justify-center min-h-[200px]">
			<h1 className="text-6xl text-center font-bold tracking-widest">{nameSurname}</h1>
			<h2 className="mt-2 text-2xl text-center tracking-wider">{title}</h2>
			{description && <div className="mt-2 text-2xl text-center tracking-wider">{description}</div>}
		</div>
	)
}

export default PreviewHeader;