import { useDispatch, useSelector } from "react-redux";
import { useWords } from "@/hooks"

const PreviewPersonal = () => {
	const { photo, address, gsm, letter } = useSelector((state) => state.form.personal);
	const words = useWords();

	return (
		<div className="flex flex-col w-full">
			{photo && (
				<div className="mb-4">
					<img className="rounded-full" src={photo} alt="" />
				</div>
			)}
			
		</div>
	)
}

export default PreviewPersonal
