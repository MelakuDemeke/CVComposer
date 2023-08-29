import { useSelector } from "react-redux";


const PreviewHeader = () => {
	const {nameSurname, title, description} = useSelector((state) => state.form.personal);
	return (
		<div className="flex flex-col items-center justify-center min-h-[200px]">
			<h1 className="text-6xl text-center font-bold tracking-widest">{nameSurname}</h1>
		</div>
	)
}

export default PreviewHeader;