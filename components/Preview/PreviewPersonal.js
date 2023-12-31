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

			{address && (
				<div className="flex flex-col mb-2">
					<strong>{words.address}</strong> {address}
				</div>
			)}

			{gsm && (
				<div className="flex flex-col mb-2">
					<strong>{words.phone_number}</strong>
					<a href={`tel:${gsm.replace(/\s/g, "")}`}>{gsm}</a>
				</div>
			)}

			{letter && (
				<div className="flex flex-col mb-2">
					<strong>{words.email_address}</strong>
					<a href={`mailto:${letter}`}>{letter}</a>
				</div>
			)}

		</div>
	)
}

export default PreviewPersonal
