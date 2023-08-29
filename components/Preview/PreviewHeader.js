import { useSelector } from "react-redux";


const PreviewHeader = () => {
	const { nameSurname, title, description } = useSelector((state) => state.form.personal);
	const { colors } = useSelector((state) => state.site);

	return (
		<>
			<div style={{ background: colors.primary }} className="flex flex-col items-center justify-center min-h-[200px]">
				<h1 style={{ color: colors.title }} className="text-6xl text-center font-bold tracking-widest">{nameSurname}</h1>
				<h2 style={{ color: colors.subtitle }} className="mt-2 text-2xl text-center tracking-wider">{title}</h2>
			</div>
			{description && <div className="w-full px-6 mt-6 break-words text-justify">{description}</div>}
		</>
	)
}

export default PreviewHeader;